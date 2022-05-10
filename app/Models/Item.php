<?php

namespace App\Models;

use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;

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

        release_date - month year
        item_material_ids: ABS, PVC, Diecast (one to many)
        item_size: Approx. 360mm, *dimensions
        item_weight
        'remarks'
    ];*/

    /**
     * The rules to validate the model.
     *
     * @var array $rules
     */
    public $rules = [
        'name'               => 'required|max:200|unique:items,name',
        'description'        => 'max:2000',
        'profile_image'      => 'image|mimes:jpeg,bmp,png|max:2000',
        'remarks'            => 'max:200',
        'bar_code'           => 'max:200',
    ];

    /**
     * The validation error messages.
     *
     * @var array $messages
     */
    public $messages = [
        'required_without'       => 'The :attribute field is required.',
        'required'               => 'The :attribute field is required.',
        'numeric'                => 'The :attribute field is invalid.',
        'profile_image.image'    => 'The :attribute should be an image.',
        'profile_image.uploaded' => 'The :attribute cannot exceed 2MB.',
    ];

    public function user(){
        return $this->belongsTo(\App\Models\User::class, 'user_id');
    }

    public function getBrandNameAttribute($slug = false){
        $output = "";
        if(!empty($this->brand)){
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
        $folder = 'item_images';

        $url = $this->uploadImage($request, 'profile_image', $folder, 800);
        if(!empty($url)){
            if($url == 'error'){
                $status = "error";
            }else{
                $this->profile_url = $url;

                if(!empty($this->profile_url)){
                    $thumbUrl = $this->createThumbnail($request, 'profile_image', $folder, 300);
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

    public function scopeCheckUser($query)
    {
        $query->whereHas('user', function($q)
        {
            $q->where('users.id', Auth::user()->id);

        });
    }

    public function scopeActive($query)
    {
        $query->where('active', 1);
    }
}