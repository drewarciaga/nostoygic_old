<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Traits\UtilsTrait;
use App\Models\Item;
use App\Models\ItemLine;
use Illuminate\Support\Facades\Auth;

class ItemLineController extends Controller
{
    use UtilsTrait;

    public function getLineList(){
        $linesList = ItemLine::checkUser()->active()->select('id as value', 'name as label')->orderBy('name')->get();
        
        return response()->json($linesList);
    }

    public function getAll(Request $request){
        $lines = ItemLine::checkUser()->get();
        $total = sizeof($lines);

        return response()->json([
            'status'    => 200,
            'data'      => $lines,
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
    	$line = ItemLine::find($id);

        if(!empty($line->tags)){
            $line->tags = explode(',', $line->tags);
        }
        

    	return response()->json($line);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request){
        $input = $request->all();

        $line = new ItemLine();
        $this->validate($request, $line->rules, $line->messages);

        $line->name                     = $this->clearChars($input['name']);
        $line->description              = !empty($input['description'])?$this->clearChars($input['description']):'';
        $line->color                    = !empty($input['color'])?$input['color']:null;
        $line->tags                     = !empty($input['tags'])?$input['tags']:null;
        $line->active                   = !empty($input['active']) ? 1 : 0;
        $line->user_id                  = Auth::user()->id;

        $line->save();

        if ($line && $request->hasFile('image_url')) {
            $uploadProfileRes = $line->uploadLogo($request);
        }
        /*if ($item && $request->hasFile('profile_image')) {
            $uploadProfileRes = $item->uploadProfile($request);
        }*/
        return response()->json($line);
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

        $line = ItemLine::findOrFail($id);
        $this->validate($request, $line->rules, $line->messages);

        $line->name                     = $this->clearChars($input['name']);
        $line->description              = !empty($input['description'])?$this->clearChars($input['description']):'';
        $line->color                    = !empty($input['color'])?$input['color']:null;
        $line->tags                     = !empty($input['tags'])?$input['tags']:null;
        $line->active                   = !empty($input['active']) ? 1 : 0;
        $line->user_id                  = Auth::user()->id;

        $line->update();
      
        if(!empty($request->delete_line_logo)){
            $line->deleteImage($line->image_url, $line->thumbnail_url);
            $line->image_url = null;
            $line->thumbnail_url = null;
            $line->update();
        }else{
            if ($line && $request->hasFile('image_url')) {
                $uploadProfileRes = $line->uploadLogo($request);
            }
        }

        /*if ($item && $request->hasFile('profile_image')) {
            $uploadProfileRes = $item->uploadProfile($request);
        }*/
        return response()->json($line);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id){
        $data['error'] = "";
        $line = ItemLine::find($id);
        if(empty($line)){
            $data['error'] .= "Cannot find Line";
            return json_encode($data);
        }

        $items_count = Item::where('line_id', $line->id)->count();

        if($items_count > 0){
            $data['error'] .= "Cannot delete, This Line is used in items";
            return json_encode($data);
        }else{
            $line->deleteImage($line->image_url, $line->thumbnail_url);
            $line->forceDelete();
        }

        return response()->json('Delete Item Line Successful!');
    }
}
