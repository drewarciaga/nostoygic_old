<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Traits\UtilsTrait;
use App\Models\Item;
use App\Models\ItemBrand;
use Illuminate\Support\Facades\Auth;

class ItemBrandController extends Controller
{
    use UtilsTrait;

    public function getBrandList(){
        $brandsList = ItemBrand::checkUser()->active()->select('id as value', 'name as label')->orderBy('name')->get();
        
        return response()->json($brandsList);
    }

    public function getAll(Request $request){
        $brands = ItemBrand::checkUser()->get();
        $total = sizeof($brands);

        return response()->json([
            'status'    => 200,
            'data'      => $brands,
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
    	$brand = ItemBrand::find($id);

        if(!empty($brand->tags)){
            $brand->tags = explode(',', $brand->tags);
        }
        

    	return response()->json($brand);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request){
        $input = $request->all();

        $brand = new ItemBrand();
        $this->validate($request, $brand->rules, $brand->messages);

        $brand->name                     = $this->clearChars($input['name']);
        $brand->description              = !empty($input['description'])?$this->clearChars($input['description']):'';
        $brand->color                    = !empty($input['color'])?$input['color']:null;
        $brand->tags                     = !empty($input['tags'])?$input['tags']:null;
        $brand->active                   = !empty($input['active']) ? 1 : 0;
        $brand->user_id                  = Auth::user()->id;

        $brand->save();

        if ($brand && $request->hasFile('image_url')) {
            $uploadProfileRes = $brand->uploadLogo($request);
        }
        /*if ($item && $request->hasFile('profile_image')) {
            $uploadProfileRes = $item->uploadProfile($request);
        }*/
        return response()->json($brand);
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

        $brand = ItemBrand::findOrFail($id);
        $this->validate($request, $brand->rules, $brand->messages);

        $brand->name                     = $this->clearChars($input['name']);
        $brand->description              = !empty($input['description'])?$this->clearChars($input['description']):'';
        $brand->color                    = !empty($input['color'])?$input['color']:null;
        $brand->tags                     = !empty($input['tags'])?$input['tags']:null;
        $brand->active                   = !empty($input['active']) ? 1 : 0;
        $brand->user_id                  = Auth::user()->id;

        $brand->update();

        if ($brand && $request->hasFile('image_url')) {
            $uploadProfileRes = $brand->uploadLogo($request);
        }
        /*if ($item && $request->hasFile('profile_image')) {
            $uploadProfileRes = $item->uploadProfile($request);
        }*/
        return response()->json($brand);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id){
        $data['error'] = "";
        $itemBrand = ItemBrand::find($id);
        if(empty($itemBrand)){
            $data['error'] .= "Cannot find Brand";
            return json_encode($data);
        }

        $items_count = Item::where('brand_id', $itemBrand->id)->count();

        if($items_count > 0){
            $data['error'] .= "Cannot delete, This Brand is used in items";
            return json_encode($data);
        }else{
            $itemBrand->deleteImage(public_path().$itemBrand->image_url, public_path().$itemBrand->thumbnail_url);
            $itemBrand->forceDelete();
        }

        return response()->json('Delete Item Brand Successful!');
    }
}
