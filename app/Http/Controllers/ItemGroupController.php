<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Traits\UtilsTrait;
use App\Models\Item;
use App\Models\ItemGroup;
use Illuminate\Support\Facades\Auth;

class ItemGroupController extends Controller
{
    use UtilsTrait;

    public function getGroupList(){
        $groupsList = ItemGroup::active()->select('id as value', 'name as label')->orderBy('name')->get();
        
        return response()->json($groupsList);
    }

    public function getAll(Request $request){
        $search = "";
        if(!empty($request->search)){
            $search = $request->search;
        }

        $groups = ItemGroup::when(!empty($search), function ($query) use ($search){
                                return $query->where('name', 'like', '%'.$search.'%');
                            })->get();
        $total = sizeof($groups);

        return response()->json([
            'status'    => 200,
            'data'      => $groups,
            'total'     => $total,
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id){
    	$group = ItemGroup::find($id);

        if(!empty($group->tags)){
            $group->tags = explode(',', $group->tags);
        }
        
    	return response()->json($group);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request){
        $input = $request->all();

        $group = new ItemGroup();
        $this->validate($request, $group->rules, $group->messages);

        $group->name                     = $this->clearChars($input['name']);
        $group->description              = isset($input['description'])?$this->clearChars($input['description']):null;
        $group->color                    = isset($input['color'])?$input['color']:null;
        $group->tags                     = isset($input['tags'])?$input['tags']:null;
        $group->active                   = isset($input['active']) ? 1 : 0;
        $group->user_id                  = Auth::user()->id;

        $group->save();

        if ($group && $request->hasFile('image_url')) {
            $uploadProfileRes = $group->uploadLogo($request);
        }

        return response()->json($group);
        //return response()->json($item);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id){
        $input = $request->all();

        $group = ItemGroup::findOrFail($id);
        $this->validate($request, $group->rules, $group->messages);

        $group->name                     = $this->clearChars($input['name']);
        $group->description              = isset($input['description'])?$this->clearChars($input['description']):null;
        $group->color                    = isset($input['color'])?$input['color']:null;
        $group->tags                     = isset($input['tags'])?$input['tags']:null;
        $group->active                   = isset($input['active']) ? 1 : 0;
        $group->user_id                  = Auth::user()->id;

        $group->update();
      
        if(!empty($request->delete_group_logo)){
            $group->deleteImage($group->image_url, $group->thumbnail_url);
            $group->image_url = null;
            $group->thumbnail_url = null;
            $group->update();
        }else{
            if ($group && $request->hasFile('image_url')) {
                $uploadProfileRes = $group->uploadLogo($request);
            }
        }

        return response()->json($group);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id){
        $data['error'] = "";
        $group = ItemGroup::find($id);
        if(empty($group)){
            $data['error'] .= "Cannot find Group";
            return json_encode($data);
        }

        $items_count = Item::where('group_id', $group->id)->count();

        if($items_count > 0){
            $data['error'] .= "Cannot delete, This Group is used in items";
            return json_encode($data);
        }else{
            $group->deleteImage($group->image_url, $group->thumbnail_url);
            $group->forceDelete();
        }

        return response()->json('Delete Item Group Successful!');
    }
}
