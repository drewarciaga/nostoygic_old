<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Image;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class Item extends Model
{
    /*protected $fillable = [
        'name',
        'model',
        'display_name',
        'description',
        'variant',
        'scale_id',
        'grade_id',
        'type_id',
        'brand_id',
        'line_id',
        'series_id',
        'group_id',
        'wave_id',
        'item_category_id',
        'bar_code',
        'profile_url',
        'thumbnail_url',
        'image_links',
        'active',
    ];*/

    /**
     * The rules to validate the model.
     *
     * @var array $rules
     */
    public $rules = [
        'name'               => 'required|max:100',
        'description'        => 'max:500',
    ];

    /**
     * The validation error messages.
     *
     * @var array $messages
     */
    public $messages = [
        'required_without'   => 'The :attribute field is required.',
        'required'           => 'The :attribute field is required.',
        'numeric'            => 'The :attribute field is invalid.',
    ];

    public function setProfile($request){
        \Log::info('setProfile');
        \Log::info($request);
        $file      = $request->file('profile_image');
        $filename  = Str::slug($this->name).'-profile_image-'.md5(time()).'.'.strtolower($file->getClientOriginalExtension());
        $file_path = 'item_images/'. $this->getBrandNameAttribute(true) . '/' . $filename;

       /* if( system_settings('s3_storage') ){
            $local_storage = "s3";
        }else{
            $local_storage = "local";
        }*/

        $local_storage = "local";

        Storage::disk($local_storage)->put($file_path, file_get_contents($file), 'public');
        $url   = Storage::disk($local_storage)->url($file_path);
        $image = Image::make( Storage::disk($local_storage)->get($file_path) )->resize(800, null, function ($constraint) {
                        $constraint->aspectRatio();
                        $constraint->upsize();
                    })->stream();
        Storage::disk($local_storage)->put($file_path, $image, 'public');

        if( $local_storage == "local" ){
            $url = str_replace("/storage", "user_content", $url);
        }

        $this->profile_url = $url;
    }

    public function getBrandNameAttribute($slug = false){
        $output = "";
        if(!empty($this->brand_id)){
            $output = $this->brand->name;
        }else{
            $output ="No Brand";
        }

        if($slug){
            $output = Str::snake($output);
        }
        return $output;
    }
}