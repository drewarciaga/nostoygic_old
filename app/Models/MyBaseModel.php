<?php

namespace App\Models;

use Auth;
use Image;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

class MyBaseModel extends \Illuminate\Database\Eloquent\Model
{
    public function setProfile($request, $type, $folder, $size){
        $url = null;

        try{
            $local_storage = "local";

            $user_id = Auth::user()->id;
            $file      = $request->file($type);
            //$filename  = Str::slug($this->name).'-profile_image-'.md5(time()).'.'.strtolower($file->getClientOriginalExtension());
            $filename  = Str::slug($this->name) . '-' . $type . '-' . $this->id . '.' . strtolower($file->getClientOriginalExtension());
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

    public function createThumbnail($request, $type, $folder, $size){
        $url = null;

        try{
            $local_storage = "local";

            $user_id = Auth::user()->id;
            $file      = $request->file($type);
    
            //$filename  = Str::slug($this->name).'-profile_image-thumb-'.md5(time()).'.'.strtolower($file->getClientOriginalExtension());
            $filename  = Str::slug($this->name) . '-' . $type . '-thumb-' . $this->id . '.' . strtolower($file->getClientOriginalExtension());
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




}
