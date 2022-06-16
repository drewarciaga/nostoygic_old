<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use App\Traits\UtilsTrait;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    use UtilsTrait;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(){
        return Inertia::render('Users/Index');
    }

    public function getAll(Request $request){
        $page = 1;
        $itemsPerPage = 5;
        $offset = 0;
        $total = 0;
        $sortBy = 'last_name';
        $sortDesc = 'ASC';
        $search = "";

        if(!empty($request->page)){
            $page = $request->page;
        }
        if(!empty($request->itemsPerPage)){
            $itemsPerPage = $request->itemsPerPage;
        }
        if(!empty($request->page) && !empty($request->itemsPerPage)){
            if($request->itemsPerPage != -1){
                $offset = ($page - 1) * $itemsPerPage;
            }
        }
        if(!empty($request->search)){
            $search = $request->search;
        }
        if(!empty($request->sortBy)){
            $sortBy = $request->sortBy;
        }
        if(!empty($request->sortDesc)){
            $sortDesc = $request->sortDesc;
        }

        $users = User::select('users.*');

        if(!empty($search)){
            $users = $users->where(function($query) use ($search){
                $query->where('users.first_name', 'LIKE', '%'.$search.'%');
                $query->orWhere('users.last_name', 'LIKE', '%' . $search . '%');
                $query->orWhere('users.middle_name', 'LIKE', '%' . $search . '%');
            });
        }

        $total    = $users->count();

        if($itemsPerPage != -1){
            $users = $users->offset($offset)->limit($itemsPerPage);
        }

        $users = $users->orderBy('users.'.$sortBy,$sortDesc)->get();

    	return response()->json([
            'status'    => 200,
            'data'      => $users,
            'total'     => $total,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(){
        return Inertia::render('Users/AddEdit', [
            'action' => 'Add',
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request){
        $input = $request->all();
      
        $user = new User();
        $this->validate($request, $user->rules, $user->messages);

        $user->first_name                   = $this->clearChars($input['first_name']);
        $user->last_name                    = $this->clearChars($input['last_name']);
        $user->middle_name                  = isset($input['middle_name'])?$this->clearChars($input['middle_name']):null;
        $user->email                        = $input['email'];
        $user->mobile_no                    = isset($input['mobile_no'])?$this->clearChars($input['mobile_no']):null;
        $user->username                     = $this->clearChars($input['username']);
        if(!empty($input['password'])){
            $user->password                     = Hash::make($input['password']);
        }else{
            $user->password                     = Hash::make('password');
        }
        $user->active                       = isset($input['active']) && !empty($input['active']) ? 1 : 0;
        $user->locked                       = isset($input['locked']) && !empty($input['locked']) ? 1 : 0;
        $user->remarks                      = isset($input['remarks'])?$this->clearChars($input['remarks']):null;
        
        $user->save();
/*
        if(!empty($request->delete_line_logo)){
            $line->deleteImage($line->image_url, $line->thumbnail_url);
            $line->image_url = null;
            $line->thumbnail_url = null;
            $line->update();
        }else{
            if ($line && $request->hasFile('image_url')) {
                $uploadProfileRes = $line->uploadLogo($request);
            }
        }*/

        if ($user && $request->hasFile('profile_url')) {
            $uploadProfileRes = $user->uploadProfile($request);
        }

        return response()->json($user);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id){
    	$user = User::find($id);

    	return response()->json($user);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id){
    	//$item = Item::find($id);

        /*if(!empty($item->tags)){
            $item->tags = explode(',', $item->tags);
        }*/

        return Inertia::render('Users/AddEdit', [
            'user_id'   => $id,
            'action' => 'Edit',
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update($id, Request $request){
        $input = $request->all();

        $user = User::findOrFail($id);
        $user->rules['username'] = 'required|max:200|unique:users,username,'. $id . ',id,deleted_at,NULL';
        
        $this->validate($request, $user->rules, $user->messages);

        $user->first_name                   = $this->clearChars($input['first_name']);
        $user->last_name                    = $this->clearChars($input['last_name']);
        $user->middle_name                  = isset($input['middle_name'])?$this->clearChars($input['middle_name']):null;
        $user->email                        = $input['email'];
        $user->mobile_no                    = isset($input['mobile_no'])?$this->clearChars($input['mobile_no']):null;
        $user->username                     = $this->clearChars($input['username']);
        if(!empty($input['password'])){
            $user->password                     = Hash::make($input['password']);
        }
        $user->active                       = isset($input['active']) && !empty($input['active']) ? 1 : 0;
        $user->locked                       = isset($input['locked']) && !empty($input['locked']) ? 1 : 0;
        $user->remarks                      = isset($input['remarks'])?$this->clearChars($input['remarks']):null;

        $user->update();

        if ($user && $request->hasFile('profile_url')) {
            $uploadProfileRes = $user->uploadProfile($request);
        }

        return response()->json($user);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id){
        $user = User::find($id);
        $user->delete();

        return response()->json('Delete User Successful!');
    }
}
