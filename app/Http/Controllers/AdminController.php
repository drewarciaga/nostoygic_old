<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Traits\UtilsTrait;
use App\Models\AdminMenuGrid;
use Auth;

class AdminController extends Controller
{
    use UtilsTrait;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Admin');
    }

    public function getAdminMenuItems(Request $request)
    {
        $adminGridMenu = AdminMenuGrid::select('layouts')->where('user_id', Auth::user()->id)->first();

        if(empty($adminGridMenu)){
            $layouts = [
                'lg' => array( //6 columns
                    array('x' => 0, 'y' => 0, 'w' => 1, 'h' => 5, 'i' => 0, 'title' => 'Users',             'desc' => 'Create and Update Users',             'icon' => 'mdi-account',                'link' => 'users.index'),
                    array('x' => 1, 'y' => 0, 'w' => 1, 'h' => 5, 'i' => 1, 'title' => 'Settings',          'desc' => 'General app settings',                'icon' => 'mdi-cogs',                   'link' => ''),
                    array('x' => 2, 'y' => 0, 'w' => 1, 'h' => 5, 'i' => 2, 'title' => 'Item Settings',     'desc' => 'Brand or manufacturer of an item',    'icon' => 'mdi-billboard',              'link' => 'itemSettings'),
                ),
                'md' => array( //4 columns
                    array('x' => 0, 'y' => 0, 'w' => 1, 'h' => 5, 'i' => 0, 'title' => 'Users',             'desc' => 'Create and Update Users',             'icon' => 'mdi-account',                'link' => 'users.index'),
                    array('x' => 1, 'y' => 0, 'w' => 1, 'h' => 5, 'i' => 1, 'title' => 'Settings',          'desc' => 'General app settings',                'icon' => 'mdi-cogs',                   'link' => ''),
                    array('x' => 2, 'y' => 0, 'w' => 1, 'h' => 5, 'i' => 2, 'title' => 'Item Settings',     'desc' => 'Brand or manufacturer of an item',    'icon' => 'mdi-billboard',              'link' => 'itemSettings'),
                ),
                'sm' => array(
                    array('x' => 0, 'y' => 0, 'w' => 1, 'h' => 5, 'i' => 0, 'title' => 'Users',             'desc' => 'Create and Update Users',             'icon' => 'mdi-account',                'link' => 'users.index'),
                    array('x' => 1, 'y' => 0, 'w' => 1, 'h' => 5, 'i' => 1, 'title' => 'Settings',          'desc' => 'General app settings',                'icon' => 'mdi-cogs',                   'link' => ''),
                  
                ),
                'xs' => array(
                    array('x' => 0, 'y' => 0, 'w' => 1, 'h' => 5, 'i' => 0, 'title' => 'Users',             'desc' => 'Create and Update Users',             'icon' => 'mdi-account',                'link' => ''),
                    array('x' => 1, 'y' => 0, 'w' => 1, 'h' => 5, 'i' => 1, 'title' => 'Settings',          'desc' => 'General app settings',                'icon' => 'mdi-cogs',                   'link' => ''),
                  
                ),
                'xxs' => array(
                    array('x' => 0, 'y' => 0, 'w' => 1, 'h' => 5, 'i' => 0, 'title' => 'Users',             'desc' => 'Create and Update Users',             'icon' => 'mdi-account',                'link' => ''),
                    array('x' => 1, 'y' => 0, 'w' => 1, 'h' => 5, 'i' => 1, 'title' => 'Settings',          'desc' => 'General app settings',                'icon' => 'mdi-cogs',                   'link' => ''),
                  
                ),
            ];
        }else{
            $layouts = json_decode($adminGridMenu['layouts'], true);
        }

        //return response()->json($layouts);
        return response()->json([
            'layouts'    => $layouts,
            'layout'     => $layouts[$request->breakpoint],

        ]);
    }

    public function updateAdminMenuGrid(Request $request)
    {
        $adminGridMenu = AdminMenuGrid::where('user_id', Auth::user()->id)->first();

        if(!empty($request->layouts)){
            if(!empty($adminGridMenu)){   
                $adminGridMenu->layouts = json_encode($request->layouts);
                $adminGridMenu->update();
            }else{
                $adminGridMenu = new AdminMenuGrid();
                $adminGridMenu->layouts = json_encode($request->layouts);
                $adminGridMenu->user_id = Auth::user()->id;
                $adminGridMenu->save();
            }
        }

        return response()->json($adminGridMenu);
    }
}