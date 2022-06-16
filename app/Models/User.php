<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Database\Eloquent\SoftDeletes;
use Auth;
use Image;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

class User extends Authenticatable
{
    use SoftDeletes;
    use HasApiTokens, HasFactory, Notifiable;
    
    protected $appends = [
        'full_name'
    ];

    protected $fillable = [
        'username',
        'first_name',
        'last_name',
        'middle_name',
        'email',
        'password',
        'mobile_no',
        'active',
        'locked',
        'profile_url',
        'thumbnail_url',
        'fb_link',
        'ig_link',
        'super_admin',
        'remarks'
    ];

    /**
     * The rules to validate the model.
     *
     * @var array $rules
     */
    
    public $rules = [
        'profile_url'           => 'image|mimes:jpeg,bmp,png,webp|max:2000',
        'remarks'               => 'max:2000',
        'first_name'            => 'required|max:200',
        'last_name'             => 'required|max:200',
        'username'              => 'required|max:200|unique:users,username,NULL,id,deleted_at,NULL',
        'middle_name'           => 'max:200',
        'email'                 => 'required|max:200|email',
        'mobile_no'             => 'max:200',
        'password'              => 'sometimes|max:200|confirmed',
        'password_confirmation' => 'sometimes|max:200',
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
        'profile_url.image'      => 'The :attribute should be an image.',
        'profile_url.uploaded'   => 'The :attribute cannot exceed 2MB.',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function uploadProfile($request){
        $status = "success";
        $folder = 'user_images';

        $url = $this->uploadImage($request, 'profile_url', $folder, 800, 'profile_img');
        if(!empty($url)){
            if($url == 'error'){
                $status = "error";
            }else{
                $this->profile_url = $url;

                if(!empty($this->profile_url)){
                    $thumbUrl = $this->createThumbnail($request, 'profile_url', $folder, 300, 'profile_img');
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

    public function uploadImage($request, $type, $folder, $size, $name){
        $url = null;

        try{
            $local_storage = "local";

            $user_id = Auth::user()->id;
            $file      = $request->file($type);
            //$filename  = Str::slug($this->username).'-profile_image-'.md5(time()).'.'.strtolower($file->getClientOriginalExtension());
            $filename  = Str::slug($this->username) . '-' . $name . '-' . $this->id . date('jnGi') . '.' . strtolower($file->getClientOriginalExtension());
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
    
            //$filename  = Str::slug($this->username).'-profile_image-thumb-'.md5(time()).'.'.strtolower($file->getClientOriginalExtension());
            $filename  = Str::slug($this->username) . '-' . $name . '-thumb-' . $this->id . date('jnGi') . '.' . strtolower($file->getClientOriginalExtension());
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

    public function getFullNameAttribute(){
        $fullName = '';
        if(!empty($this->first_name)){
            $fullName = $this->first_name;
        }
        if(!empty($this->middle_name)){
            $fullName .= ' ' . Str::upper(substr($this->middle_name, 0, 1)) . '.';
        }
        if(!empty($this->last_name)){
            $fullName .= ' ' . $this->last_name;
        }

        return $fullName;
    }
}
