<?php

namespace App\Models;

use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class ItemBrand extends MyBaseModel
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

    public function user(){
        return $this->belongsTo(\App\Models\User::class, 'user_id');
    }

    public function uploadLogo($request){
        $status = "success";
        $folder = 'item_images/' . $this->user_id;

        $url = $this->setProfile($request, 'brand_logo', $folder);
        if(!empty($url)){
            if($url == 'error'){
                $status = "error";
            }else{
                $this->image_url = $url;

                if(!empty($this->image_url)){
                    $thumbUrl = $this->createThumbnail($request, 'brand_logo', $folder);
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
}