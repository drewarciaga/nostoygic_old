<?php

namespace App\Http\Controllers;
use App\Models\Item;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Traits\UtilsTrait;
use Illuminate\Support\Facades\Auth;

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

        $items = Item::checkUser()->select('items.*');

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
        $this->validate($request, $item->rules, $item->messages);

        $item->name                     = $this->clearChars($input['name']);
        $item->brand_id                 = !empty($input['brand_id'])?$input['brand_id']:null;
        $item->display_name             = !empty($input['display_name'])?$this->clearChars($input['display_name']):"";
        $item->user_id                  = Auth::user()->id;
        
        $item->save();

        if ($item && $request->hasFile('profile_image')) {
            $uploadProfileRes = $item->uploadProfile($request);
        }

        return response()->json($item);
        //return response()->json($item);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id){
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id){
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id){
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id){
        //
    }
}
