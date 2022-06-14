<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Traits\UtilsTrait;
use App\Models\Item;
use App\Models\ItemGrade;
use Illuminate\Support\Facades\Auth;

class ItemGradeController extends Controller
{
    use UtilsTrait;

    public function getGradeList(){
        $gradesList = ItemGrade::active()->select('id as value', 'name as label')->orderBy('name')->get();
        
        return response()->json($gradesList);
    }

    public function getAll(Request $request){
        $search = "";
        if(!empty($request->search)){
            $search = $request->search;
        }

        $grades = ItemGrade::when(!empty($search), function ($query) use ($search){
                                return $query->where('name', 'like', '%'.$search.'%');
                            })->get();
        $total = sizeof($grades);

        return response()->json([
            'status'    => 200,
            'data'      => $grades,
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
    	$grade = ItemGrade::find($id);

        if(!empty($grade->tags)){
            $grade->tags = explode(',', $grade->tags);
        }
        
    	return response()->json($grade);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request){
        $input = $request->all();

        $grade = new ItemGrade();
        $this->validate($request, $grade->rules, $grade->messages);

        $grade->name                     = $this->clearChars($input['name']);
        $grade->description              = isset($input['description'])?$this->clearChars($input['description']):null;
        $grade->color                    = isset($input['color'])?$input['color']:null;
        $grade->tags                     = isset($input['tags'])?$input['tags']:null;
        $grade->active                   = isset($input['active']) ? 1 : 0;
        $grade->user_id                  = Auth::user()->id;

        $grade->save();

        if ($grade && $request->hasFile('image_url')) {
            $uploadProfileRes = $grade->uploadLogo($request);
        }

        return response()->json($grade);
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

        $grade = ItemGrade::findOrFail($id);
        $this->validate($request, $grade->rules, $grade->messages);

        $grade->name                     = $this->clearChars($input['name']);
        $grade->description              = isset($input['description'])?$this->clearChars($input['description']):null;
        $grade->color                    = isset($input['color'])?$input['color']:null;
        $grade->tags                     = isset($input['tags'])?$input['tags']:null;
        $grade->active                   = isset($input['active']) ? 1 : 0;
        $grade->user_id                  = Auth::user()->id;

        $grade->update();
      
        if(!empty($request->delete_grade_logo)){
            $grade->deleteImage($grade->image_url, $grade->thumbnail_url);
            $grade->image_url = null;
            $grade->thumbnail_url = null;
            $grade->update();
        }else{
            if ($grade && $request->hasFile('image_url')) {
                $uploadProfileRes = $grade->uploadLogo($request);
            }
        }

        return response()->json($grade);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id){
        $data['error'] = "";
        $grade = ItemGrade::find($id);
        if(empty($grade)){
            $data['error'] .= "Cannot find Grade";
            return json_encode($data);
        }

        $items_count = Item::where('grade_id', $grade->id)->count();

        if($items_count > 0){
            $data['error'] .= "Cannot delete, This Grade is used in items";
            return json_encode($data);
        }else{
            $grade->deleteImage($grade->image_url, $grade->thumbnail_url);
            $grade->forceDelete();
        }

        return response()->json('Delete Item Grade Successful!');
    }
}
