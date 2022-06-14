<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Traits\UtilsTrait;
use App\Models\Item;
use App\Models\ItemWave;
use Illuminate\Support\Facades\Auth;

class ItemWaveController extends Controller
{
    use UtilsTrait;

    public function getWaveList(){
        $wavesList = ItemWave::active()->select('id as value', 'name as label')->orderBy('name')->get();
        
        return response()->json($wavesList);
    }

    public function getAll(Request $request){
        $search = "";
        if(!empty($request->search)){
            $search = $request->search;
        }

        $waves = ItemWave::when(!empty($search), function ($query) use ($search){
                                return $query->where('name', 'like', '%'.$search.'%');
                            })->get();
        $total = sizeof($waves);

        return response()->json([
            'status'    => 200,
            'data'      => $waves,
            'total'     => $total,
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id){
    	$wave = ItemWave::find($id);

        if(!empty($wave->tags)){
            $wave->tags = explode(',', $wave->tags);
        }
        
    	return response()->json($wave);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request){
        $input = $request->all();

        $wave = new ItemWave();
        $this->validate($request, $wave->rules, $wave->messages);

        $wave->name                     = $this->clearChars($input['name']);
        $wave->description              = isset($input['description'])?$this->clearChars($input['description']):null;
        $wave->color                    = isset($input['color'])?$input['color']:null;
        $wave->tags                     = isset($input['tags'])?$input['tags']:null;
        $wave->active                   = isset($input['active']) ? 1 : 0;
        $wave->user_id                  = Auth::user()->id;

        $wave->save();

        if ($wave && $request->hasFile('image_url')) {
            $uploadProfileRes = $wave->uploadLogo($request);
        }

        return response()->json($wave);
        //return response()->json($item);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id){
        $input = $request->all();

        $wave = ItemWave::findOrFail($id);
        $this->validate($request, $wave->rules, $wave->messages);

        $wave->name                     = $this->clearChars($input['name']);
        $wave->description              = isset($input['description'])?$this->clearChars($input['description']):null;
        $wave->color                    = isset($input['color'])?$input['color']:null;
        $wave->tags                     = isset($input['tags'])?$input['tags']:null;
        $wave->active                   = isset($input['active']) ? 1 : 0;
        $wave->user_id                  = Auth::user()->id;

        $wave->update();
      
        if(!empty($request->delete_wave_logo)){
            $wave->deleteImage($wave->image_url, $wave->thumbnail_url);
            $wave->image_url = null;
            $wave->thumbnail_url = null;
            $wave->update();
        }else{
            if ($wave && $request->hasFile('image_url')) {
                $uploadProfileRes = $wave->uploadLogo($request);
            }
        }

        return response()->json($wave);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id){
        $data['error'] = "";
        $wave = ItemWave::find($id);
        if(empty($wave)){
            $data['error'] .= "Cannot find Wave";
            return json_encode($data);
        }

        $items_count = Item::where('wave_id', $wave->id)->count();

        if($items_count > 0){
            $data['error'] .= "Cannot delete, This Wave is used in items";
            return json_encode($data);
        }else{
            $wave->deleteImage($wave->image_url, $wave->thumbnail_url);
            $wave->forceDelete();
        }

        return response()->json('Delete Item Wave Successful!');
    }
}
