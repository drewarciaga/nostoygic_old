<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Traits\UtilsTrait;
use App\Models\Item;
use App\Models\ItemScale;
use Illuminate\Support\Facades\Auth;

class ItemScaleController extends Controller
{
    use UtilsTrait;

    public function getScaleList(){
        $scalesList = ItemScale::checkUser()->active()->select('id as value', 'name as label')->orderBy('name')->get();
        
        return response()->json($scalesList);
    }

    public function getAll(Request $request){
        $scales = ItemScale::checkUser()->get();
        $total = sizeof($scales);

        return response()->json([
            'status'    => 200,
            'data'      => $scales,
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
    	$scale = ItemScale::find($id);

        if(!empty($scale->tags)){
            $scale->tags = explode(',', $scale->tags);
        }
        

    	return response()->json($scale);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request){
        $input = $request->all();

        $scale = new ItemScale();
        $this->validate($request, $scale->rules, $scale->messages);

        $scale->name                     = $this->clearChars($input['name']);
        $scale->description              = !empty($input['description'])?$this->clearChars($input['description']):'';
        $scale->color                    = !empty($input['color'])?$input['color']:null;
        $scale->tags                     = !empty($input['tags'])?$input['tags']:null;
        $scale->active                   = !empty($input['active']) ? 1 : 0;
        $scale->user_id                  = Auth::user()->id;

        $scale->save();

        if ($scale && $request->hasFile('image_url')) {
            $uploadProfileRes = $scale->uploadLogo($request);
        }
        /*if ($item && $request->hasFile('profile_image')) {
            $uploadProfileRes = $item->uploadProfile($request);
        }*/
        return response()->json($scale);
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

        $scale = ItemScale::findOrFail($id);
        $this->validate($request, $scale->rules, $scale->messages);

        $scale->name                     = $this->clearChars($input['name']);
        $scale->description              = !empty($input['description'])?$this->clearChars($input['description']):'';
        $scale->color                    = !empty($input['color'])?$input['color']:null;
        $scale->tags                     = !empty($input['tags'])?$input['tags']:null;
        $scale->active                   = !empty($input['active']) ? 1 : 0;
        $scale->user_id                  = Auth::user()->id;

        $scale->update();
      
        if(!empty($request->delete_scale_logo)){
            $scale->deleteImage($scale->image_url, $scale->thumbnail_url);
            $scale->image_url = null;
            $scale->thumbnail_url = null;
            $scale->update();
        }else{
            if ($scale && $request->hasFile('image_url')) {
                $uploadProfileRes = $scale->uploadLogo($request);
            }
        }

        /*if ($item && $request->hasFile('profile_image')) {
            $uploadProfileRes = $item->uploadProfile($request);
        }*/
        return response()->json($scale);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id){
        $data['error'] = "";
        $scale = ItemScale::find($id);
        if(empty($scale)){
            $data['error'] .= "Cannot find Scale";
            return json_encode($data);
        }

        $items_count = Item::where('scale_id', $scale->id)->count();

        if($items_count > 0){
            $data['error'] .= "Cannot delete, This Scale is used in items";
            return json_encode($data);
        }else{
            $scale->deleteImage($scale->image_url, $scale->thumbnail_url);
            $scale->forceDelete();
        }

        return response()->json('Delete Item Scale Successful!');
    }
}
