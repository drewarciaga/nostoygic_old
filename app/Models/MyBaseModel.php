<?php

namespace App\Models;

use Auth;
use Image;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

class MyBaseModel extends \Illuminate\Database\Eloquent\Model
{
    public function uploadImage($request, $type, $folder, $size, $name){
        $url = null;

        try{
            $local_storage = "local";

            $user_id = Auth::user()->id;
            $file      = $request->file($type);
            //$filename  = Str::slug($this->name).'-profile_image-'.md5(time()).'.'.strtolower($file->getClientOriginalExtension());
            $filename  = Str::slug($this->name) . '-' . $name . '-' . $this->id . date('jnGi') . '.' . strtolower($file->getClientOriginalExtension());
            $file_path = $user_id . '/' . $folder.'/' . $filename;
    
            if (Storage::disk('local5')->exists($file_path)) {
                Storage::delete($file_path);
            }
    
           /* if( system_settings('s3_storage') ){
                $local_storage = "s3";
            }else{
                $local_storage = "local";
            }*/
            
            Storage::disk($local_storage)->put($file_path, file_get_contents($file), 'public');
            $url   = Storage::disk($local_storage)->url($file_path);
    
            $image = Image::make( Storage::disk($local_storage)->get($file_path) )->resize($size, null, function ($constraint) {
                                $constraint->aspectRatio();
                                $constraint->upsize();
                            })->stream();
            Storage::disk($local_storage)->put($file_path, $image, 'public');
    
            if( $local_storage == "local" ){
                $url = str_replace("/storage", "/user_content", $url);
            }
        }catch(\Exception $e){
            return "error";
        }
        
        return $url;
    }

    public function createThumbnail($request, $type, $folder, $size, $name){
        $url = null;

        try{
            $local_storage = "local";

            $user_id = Auth::user()->id;
            $file      = $request->file($type);
    
            //$filename  = Str::slug($this->name).'-profile_image-thumb-'.md5(time()).'.'.strtolower($file->getClientOriginalExtension());
            $filename  = Str::slug($this->name) . '-' . $name . '-thumb-' . $this->id . date('jnGi') . '.' . strtolower($file->getClientOriginalExtension());
            $file_path = $user_id . '/' . $folder . '/thumbnails/' . $filename;
    
            if (Storage::disk('local5')->exists($file_path)) {
                Storage::delete($file_path);
            }
            /* if( system_settings('s3_storage') ){
                $local_storage = "s3";
            }else{
                $local_storage = "local";
            }*/
    
            Storage::disk($local_storage)->put($file_path, file_get_contents($file), 'public');
            $url   = Storage::disk($local_storage)->url($file_path);
    
            $image = Image::make( Storage::disk($local_storage)->get($file_path) )->resize($size, null, function ($constraint) {
                                $constraint->aspectRatio();
                                $constraint->upsize();
                            })->stream();
            Storage::disk($local_storage)->put($file_path, $image, 'public');
    
            if( $local_storage == "local" ){
                $url = str_replace("/storage", "/user_content", $url);
            }
        }catch(\Exception $e){
            return "error";
        }
        
        return $url;
    }

    public function deleteImage($image_path = null, $thumnail_path = null){
        $local_storage = "local";

        if(!empty($image_path)){
            $image_path = str_replace("\\","/",$image_path);
 
            if(Storage::disk($local_storage)->exists($image_path)){
                Storage::disk($local_storage)->delete($image_path);
            }

            if(Storage::disk('local5')->exists($image_path)){
                Storage::disk('local5')->delete($image_path);
            }
            
        }
        if(!empty($thumnail_path)){
            $thumnail_path = str_replace("\\","/",$thumnail_path);
            if(Storage::disk($local_storage)->exists('/'.$thumnail_path)){
                Storage::disk($local_storage)->delete($thumnail_path);
            }

            if(Storage::disk('local5')->exists('/'.$thumnail_path)){
                Storage::disk('local5')->delete($thumnail_path);
            }
        }
    }


}
