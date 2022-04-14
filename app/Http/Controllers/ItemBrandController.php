<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Traits\UtilsTrait;
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

    public function store(Request $request){
        $input = $request->all();

        $brand = new ItemBrand();
        $this->validate($request, $brand->rules, $brand->messages);

        $brand->name                     = $this->clearChars($input['name']);
        $brand->description              = $this->clearChars($input['description']);
        $brand->user_id                  = Auth::user()->id;

        $brand->save();

        if ($brand && $request->hasFile('brand_logo')) {
            $uploadProfileRes = $brand->uploadLogo($request);
        }
        /*if ($item && $request->hasFile('profile_image')) {
            $uploadProfileRes = $item->uploadProfile($request);
        }*/

        return response()->json($brand);
        //return response()->json($item);
    }
}
