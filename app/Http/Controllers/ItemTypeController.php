<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Traits\UtilsTrait;
use App\Models\Item;
use App\Models\ItemType;
use Illuminate\Support\Facades\Auth;

class ItemTypeController extends Controller
{
    use UtilsTrait;

    public function getTypeList(){
        $typesList = ItemType::checkUser()->active()->select('id as value', 'name as label')->orderBy('name')->get();
        
        return response()->json($typesList);
    }

    public function getAll(Request $request){
        $types = ItemType::checkUser()->get();
        $total = sizeof($types);

        return response()->json([
            'status'    => 200,
            'data'      => $types,
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
    	$type = ItemType::find($id);

        if(!empty($type->tags)){
            $type->tags = explode(',', $type->tags);
        }
        

    	return response()->json($type);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request){
        $input = $request->all();

        $type = new ItemType();
        $this->validate($request, $type->rules, $type->messages);

        $type->name                     = $this->clearChars($input['name']);
        $type->description              = !empty($input['description'])?$this->clearChars($input['description']):'';
        $type->color                    = !empty($input['color'])?$input['color']:null;
        $type->tags                     = !empty($input['tags'])?$input['tags']:null;
        $type->active                   = !empty($input['active']) ? 1 : 0;
        $type->user_id                  = Auth::user()->id;

        $type->save();

        if ($type && $request->hasFile('image_url')) {
            $uploadProfileRes = $type->uploadLogo($request);
        }
        /*if ($item && $request->hasFile('profile_image')) {
            $uploadProfileRes = $item->uploadProfile($request);
        }*/
        return response()->json($type);
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

        $type = ItemType::findOrFail($id);
        $this->validate($request, $type->rules, $type->messages);

        $type->name                     = $this->clearChars($input['name']);
        $type->description              = !empty($input['description'])?$this->clearChars($input['description']):'';
        $type->color                    = !empty($input['color'])?$input['color']:null;
        $type->tags                     = !empty($input['tags'])?$input['tags']:null;
        $type->active                   = !empty($input['active']) ? 1 : 0;
        $type->user_id                  = Auth::user()->id;

        $type->update();
      
        if(!empty($request->delete_type_logo)){
            $type->deleteImage($type->image_url, $type->thumbnail_url);
            $type->image_url = null;
            $type->thumbnail_url = null;
            $type->update();
        }else{
            if ($type && $request->hasFile('image_url')) {
                $uploadProfileRes = $type->uploadLogo($request);
            }
        }

        /*if ($item && $request->hasFile('profile_image')) {
            $uploadProfileRes = $item->uploadProfile($request);
        }*/
        return response()->json($type);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id){
        $data['error'] = "";
        $type = ItemType::find($id);
        if(empty($type)){
            $data['error'] .= "Cannot find Type";
            return json_encode($data);
        }

        $items_count = Item::where('type_id', $type->id)->count();

        if($items_count > 0){
            $data['error'] .= "Cannot delete, This Type is used in items";
            return json_encode($data);
        }else{
            $type->deleteImage($type->image_url, $type->thumbnail_url);
            $type->forceDelete();
        }

        return response()->json('Delete Item Type Successful!');
    }
}
