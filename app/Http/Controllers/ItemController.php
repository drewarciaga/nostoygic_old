<?php

namespace App\Http\Controllers;
use App\Models\Item;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Traits\UtilsTrait;
use Illuminate\Support\Facades\Auth;
use App\Rules\UniqueItem;

class ItemController extends Controller
{
    use UtilsTrait;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(){
        return Inertia::render('Items/Index');
    }

    public function itemSettings(){
        return Inertia::render('Items/Settings');
    }

    public function getAll(Request $request){
        $page = 1;
        $itemsPerPage = 5;
        $offset = 0;
        $total = 0;
        $sortBy = 'name';
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

        $items = Item::select('items.*');

        if(!empty($search)){
            $items->where('items.name', 'LIKE', '%'.$search.'%');
        }

        $total    = $items->count();

        if($itemsPerPage != -1){
            $items = $items->offset($offset)->limit($itemsPerPage);
        }

        $items = $items->orderBy('items.'.$sortBy,$sortDesc)->get();

    	return response()->json([
            'status'    => 200,
            'data'      => $items,
            'total'     => $total,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(){
        return Inertia::render('Items/AddEdit', [
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

        $item = new Item();
        $item->rules['name'] = ['required', 'max:200', new UniqueItem(isset($input['type_id'])?$input['type_id']:null ,isset($input['brand_id'])?$input['brand_id']:null)];
        $this->validate($request, $item->rules, $item->messages);

        $item->name                    = $this->clearChars($input['name']);
        $item->model                   = isset($input['model'])?$this->clearChars($input['model']):"";
        $item->type_id                 = isset($input['type_id'])?$input['type_id']:null;
        $item->brand_id                = isset($input['brand_id'])?$input['brand_id']:null;
        $item->line_id                 = isset($input['line_id'])?$input['line_id']:null;
        $item->series_id               = isset($input['series_id'])?$input['series_id']:null;
        $item->scale_id                = isset($input['scale_id'])?$input['scale_id']:null;
        $item->grade_id                = isset($input['grade_id'])?$input['grade_id']:null;
        $item->group_id                = isset($input['group_id'])?$input['group_id']:null;
        $item->wave_id                 = isset($input['wave_id'])?$input['wave_id']:null;
        $item->display_name            = isset($input['display_name'])?$this->clearChars($input['display_name']):"";
        $item->description             = isset($input['description'])?$this->clearChars($input['description']):"";
        $item->bar_code                = isset($input['bar_code'])?$input['bar_code']:"";
        $item->item_size               = isset($input['item_size'])?$input['item_size']:null;
        $item->item_weight             = isset($input['item_weight'])?$input['item_weight']:null;
        $item->item_material_ids       = isset($input['item_material_ids'])?$input['item_material_ids']:null;
        $item->remarks                 = isset($input['remarks'])?$this->clearChars($input['remarks']):"";
        $item->color                   = isset($input['color'])?$input['color']:null;
        $item->active                  = isset($input['active']) ? 1 : 0;
        $item->variant                 = isset($input['variant'])?$input['variant']:null;
        $item->parent_variant_id       = isset($input['parent_variant_id'])?$input['parent_variant_id']:null;
        $item->user_id                 = Auth::user()->id;
        
        $item->save();

        if ($item && $request->hasFile('profile_url')) {
            $uploadProfileRes = $item->uploadProfile($request);
        }

        return response()->json($item);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id){
    	$item = Item::find($id);

        if(!empty($item->tags)){
            $item->tags = explode(',', $item->tags);
        }

        if(!empty($item->item_material_ids)){
            $item->item_material_ids = explode(',', $item->item_material_ids);
        }

    	return response()->json($item);
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

        return Inertia::render('Items/AddEdit', [
            'item_id'   => $id,
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

        $item = Item::find($id);
        $item->rules['name'] = ['required', 'max:200', new UniqueItem(isset($input['type_id'])?$input['type_id']:null ,isset($input['brand_id'])?$input['brand_id']:null, $id)];
        $this->validate($request, $item->rules, $item->messages);

        $item->name                    = $this->clearChars($input['name']);
        $item->model                   = isset($input['model'])?$this->clearChars($input['model']):"";
        $item->type_id                 = isset($input['type_id'])?$input['type_id']:null;
        $item->brand_id                = isset($input['brand_id'])?$input['brand_id']:null;
        $item->line_id                 = isset($input['line_id'])?$input['line_id']:null;
        $item->series_id               = isset($input['series_id'])?$input['series_id']:null;
        $item->scale_id                = isset($input['scale_id'])?$input['scale_id']:null;
        $item->grade_id                = isset($input['grade_id'])?$input['grade_id']:null;
        $item->group_id                = isset($input['group_id'])?$input['group_id']:null;
        $item->wave_id                 = isset($input['wave_id'])?$input['wave_id']:null;
        $item->display_name            = isset($input['display_name'])?$this->clearChars($input['display_name']):"";
        $item->description             = isset($input['description'])?$this->clearChars($input['description']):"";
        $item->bar_code                = isset($input['bar_code'])?$input['bar_code']:"";
        $item->item_size               = isset($input['item_size'])?$input['item_size']:null;
        $item->item_weight             = isset($input['item_weight'])?$input['item_weight']:null;
        $item->item_material_ids       = isset($input['item_material_ids'])?$input['item_material_ids']:null;
        $item->remarks                 = isset($input['remarks'])?$this->clearChars($input['remarks']):"";
        $item->color                   = isset($input['color'])?$input['color']:null;
        $item->active                  = isset($input['active']) ? 1 : 0;
        $item->variant                 = isset($input['variant'])?$input['variant']:null;
        $item->parent_variant_id       = isset($input['parent_variant_id'])?$input['parent_variant_id']:null;
        $item->user_id                 = Auth::user()->id;
        
        $item->update();

        if ($item && $request->hasFile('profile_url')) {
            $uploadProfileRes = $item->uploadProfile($request);
        }

        return response()->json($item);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id){
        $item = Item::find($id);
        $item->delete();

        return response()->json('Delete Item Successful!');
    }
}
