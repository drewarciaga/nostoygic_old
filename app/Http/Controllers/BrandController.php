<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class BrandController extends Controller
{
    public function getBrandList(){
        $brandsList = array(
            array( 'value' => 0, 'label' => 'Bandai' ),
            array( 'value' => 1, 'label' => 'Good Smile' ),
            array( 'value' => 2, 'label' => 'Hasbro' ),
        );
        //sleep(2);
        return response()->json($brandsList);
    }
}
