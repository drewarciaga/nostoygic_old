<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Traits\UtilsTrait;
use App\Models\Item;
use App\Models\ItemMaterial;
use Illuminate\Support\Facades\Auth;

class ItemMaterialController extends Controller
{
    use UtilsTrait;

    public function getMaterialList(){
        $materialsList = ItemMaterial::active()->select('id as value', 'name as label')->orderBy('name')->get();
        
        return response()->json($materialsList);
    }

    public function getAll(Request $request){
        $search = "";
        if(!empty($request->search)){
            $search = $request->search;
        }

        $materials = ItemMaterial::when(!empty($search), function ($query) use ($search){
                                        return $query->where('name', 'like', '%'.$search.'%');
                                    })->get();
        $total = sizeof($materials);

        return response()->json([
            'status'    => 200,
            'data'      => $materials,
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
    	$material = ItemMaterial::find($id);

        if(!empty($material->tags)){
            $material->tags = explode(',', $material->tags);
        }
        
    	return response()->json($material);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request){
        $input = $request->all();

        $material = new ItemMaterial();
        $this->validate($request, $material->rules, $material->messages);

        $material->name                     = $this->clearChars($input['name']);
        $material->description              = isset($input['description'])?$this->clearChars($input['description']):null;
        $material->color                    = isset($input['color'])?$input['color']:null;
        $material->tags                     = isset($input['tags'])?$input['tags']:null;
        $material->active                   = isset($input['active']) ? 1 : 0;
        $material->user_id                  = Auth::user()->id;

        $material->save();

        if ($material && $request->hasFile('image_url')) {
            $uploadProfileRes = $material->uploadLogo($request);
        }

        return response()->json($material);
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

        $material = ItemMaterial::findOrFail($id);
        $this->validate($request, $material->rules, $material->messages);

        $material->name                     = $this->clearChars($input['name']);
        $material->description              = isset($input['description'])?$this->clearChars($input['description']):null;
        $material->color                    = isset($input['color'])?$input['color']:null;
        $material->tags                     = isset($input['tags'])?$input['tags']:null;
        $material->active                   = isset($input['active']) ? 1 : 0;
        $material->user_id                  = Auth::user()->id;

        $material->update();
      
        if(!empty($request->delete_material_logo)){
            $material->deleteImage($material->image_url, $material->thumbnail_url);
            $material->image_url = null;
            $material->thumbnail_url = null;
            $material->update();
        }else{
            if ($material && $request->hasFile('image_url')) {
                $uploadProfileRes = $material->uploadLogo($request);
            }
        }

        return response()->json($material);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id){
        $data['error'] = "";
        $material = ItemMaterial::find($id);
        if(empty($material)){
            $data['error'] .= "Cannot find Material";
            return json_encode($data);
        }

        $items_count = Item::where('material_id', $material->id)->count();

        if($items_count > 0){
            $data['error'] .= "Cannot delete, This Material is used in items";
            return json_encode($data);
        }else{
            $material->deleteImage($material->image_url, $material->thumbnail_url);
            $material->forceDelete();
        }

        return response()->json('Delete Item Material Successful!');
    }
}
