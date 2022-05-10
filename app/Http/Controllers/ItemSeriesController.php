<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Traits\UtilsTrait;
use App\Models\Item;
use App\Models\ItemSeries;
use Illuminate\Support\Facades\Auth;

class ItemSeriesController extends Controller
{
    use UtilsTrait;

    public function getSeriesList(){
        $seriesList = ItemSeries::checkUser()->active()->select('id as value', 'name as label')->orderBy('name')->get();
        
        return response()->json($seriesList);
    }

    public function getAll(Request $request){
        $series = ItemSeries::checkUser()->get();
        $total = sizeof($series);

        return response()->json([
            'status'    => 200,
            'data'      => $series,
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
    	$series = ItemSeries::find($id);

        if(!empty($series->tags)){
            $series->tags = explode(',', $series->tags);
        }
        

    	return response()->json($series);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request){
        $input = $request->all();

        $series = new ItemSeries();
        $this->validate($request, $series->rules, $series->messages);

        $series->name                     = $this->clearChars($input['name']);
        $series->description              = !empty($input['description'])?$this->clearChars($input['description']):'';
        $series->color                    = !empty($input['color'])?$input['color']:null;
        $series->tags                     = !empty($input['tags'])?$input['tags']:null;
        $series->active                   = !empty($input['active']) ? 1 : 0;
        $series->user_id                  = Auth::user()->id;

        $series->save();

        if ($series && $request->hasFile('image_url')) {
            $uploadProfileRes = $series->uploadLogo($request);
        }
        /*if ($item && $request->hasFile('profile_image')) {
            $uploadProfileRes = $item->uploadProfile($request);
        }*/
        return response()->json($series);
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

        $series = ItemSeries::findOrFail($id);
        $this->validate($request, $series->rules, $series->messages);

        $series->name                     = $this->clearChars($input['name']);
        $series->description              = !empty($input['description'])?$this->clearChars($input['description']):'';
        $series->color                    = !empty($input['color'])?$input['color']:null;
        $series->tags                     = !empty($input['tags'])?$input['tags']:null;
        $series->active                   = !empty($input['active']) ? 1 : 0;
        $series->user_id                  = Auth::user()->id;

        $series->update();
      
        if(!empty($request->delete_series_logo)){
            $series->deleteImage($series->image_url, $series->thumbnail_url);
            $series->image_url = null;
            $series->thumbnail_url = null;
            $series->update();
        }else{
            if ($series && $request->hasFile('image_url')) {
                $uploadProfileRes = $series->uploadLogo($request);
            }
        }

        /*if ($item && $request->hasFile('profile_image')) {
            $uploadProfileRes = $item->uploadProfile($request);
        }*/
        return response()->json($series);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id){
        $data['error'] = "";
        $series = ItemSeries::find($id);
        if(empty($series)){
            $data['error'] .= "Cannot find Series";
            return json_encode($data);
        }

        $items_count = Item::where('series_id', $series->id)->count();

        if($items_count > 0){
            $data['error'] .= "Cannot delete, This Series is used in items";
            return json_encode($data);
        }else{
            $series->deleteImage($series->image_url, $series->thumbnail_url);
            $series->forceDelete();
        }

        return response()->json('Delete Item Series Successful!');
    }
}
