<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class BrandController extends Controller
{
    public function getBrandList(){
        $brandsList = array(
            "0"=>"Bandai",
            "1"=>"Good Smile",
            "2"=>"Hasbro",
        );

        return response()->json($brandsList);
    }
}
