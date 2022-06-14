<?php

namespace App\Traits;

trait UtilsTrait {

    public function clearChars($input) {
	    if(isset($input)){ //[`~!#\$%\^&\*\(\)\+=\{\}\[\]\,\|\\/@_\<\>\?\';:\"]
	        $input = trim(preg_replace('/[`~#\$%\^\*\+=\{\}\[\]\,\<\>\?;]/', '', $input));
	    }

        if($input == 'null'){
            return null;
        }
	    return $input;
    }

    /*public function verifyAndStoreImage( Request $request, $fieldname = 'image', $directory = 'unknown' ) {
 
        if( $request->hasFile( $fieldname ) ) {
 
            if (!$request->file($fieldname)->isValid()) {
 
                flash('Invalid Image!')->error()->important();
 
                return redirect()->back()->withInput();
 
            }
 
            return $request->file($fieldname)->store('image/' . $directory, 'public');
 
        }
 
        return null;
 
    }*/
}