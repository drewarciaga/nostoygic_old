<?php

namespace App\Models;

use Illuminate\Support\Str;

class Item extends MyBaseModel
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

    public function uploadProfile($request){
        $status = "success";
        $folder = 'item_images/' . $this->getBrandNameAttribute(true);

        $url = $this->setProfile($request, 'profile_image', $folder);
        if(!empty($url)){
            if($url == 'error'){
                $status = "error";
            }else{
                $this->profile_url = $url;

                if(!empty($this->profile_url)){
                    $thumbUrl = $this->createThumbnail($request, 'profile_image', $folder);
                    if($thumbUrl == 'error'){
                        $status = "error";
                    }else{
                        $this->thumbnail_url = $thumbUrl;
                    }
                }
            }
            $this->update();
        }

        return $status;
    }
}