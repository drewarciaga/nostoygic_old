<?php

namespace App\Models;

use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;
use Image;
use Illuminate\Support\Facades\Storage;

class ItemMaterial extends MyBaseModel
{
    public $timestamps = false;
    /*protected $fillable = [
        'name',

    ];*/

    /**
     * The rules to validate the model.
     *
     * @var array $rules
     */
    public $rules = [
        'name'               => 'required|max:200',
        'description'        => 'max:2000',
        'image_url'          =>  'image|mimes:jpeg,bmp,png,webp|max:2000'
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
        'image_url.image'    => 'The :attribute should be an image.',
        'image_url.uploaded' => 'The :attribute cannot exceed 2MB.',
    ];

    public function user(){
        return $this->belongsTo(\App\Models\User::class, 'user_id');
    }

    public function uploadLogo($request){
        $status = "success";
        $folder = 'item_images/materials';

        //delete existing image first
        $this->deleteImage($this->image_url, $this->thumbnail_url);

        $url = $this->uploadImage($request, 'image_url', $folder, 800, 'material_img');
        if(!empty($url)){
            if($url == 'error'){
                $status = "error";
            }else{
                $this->image_url = $url;

                if(!empty($this->image_url)){
                    $thumbUrl = $this->createThumbnail($request, 'image_url', $folder, 300, 'material_img');
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