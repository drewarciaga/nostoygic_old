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
                'lg' => array(
                    array('x' => 0, 'y' => 0, 'w' => 1, 'h' => 5, 'i' => 0, 'title' => 'lgUsers',   'desc' => 'Create and Update Users',                'icon' => 'mdi-account',                'link' => ''),
                    array('x' => 1, 'y' => 0, 'w' => 1, 'h' => 5, 'i' => 1, 'title' => 'Settings',  'desc' => 'General app settings',                   'icon' => 'mdi-cogs',                   'link' => ''),
                    array('x' => 2, 'y' => 0, 'w' => 1, 'h' => 5, 'i' => 2, 'title' => 'Item Settings',    'desc' => 'Brand or manufacturer of an item',       'icon' => 'mdi-billboard',              'link' => 'itemSettings'),
                    array('x' => 3, 'y' => 0, 'w' => 1, 'h' => 5, 'i' => 3, 'title' => 'Types',     'desc' => 'General Type classification of an item', 'icon' => 'mdi-clipboard-list-outline', 'link' => ''),
                    array('x' => 4, 'y' => 0, 'w' => 1, 'h' => 5, 'i' => 4, 'title' => 'Scales',    'desc' => 'Scale of an item',                       'icon' => 'mdi-resize',                 'link' => ''),
                    array('x' => 5, 'y' => 0, 'w' => 1, 'h' => 5, 'i' => 5, 'title' => 'Grades',    'desc' => 'Grade classification for Gundams',       'icon' => 'mdi-robot-excited-outline',  'link' => ''),
                    array('x' => 0, 'y' => 1, 'w' => 1, 'h' => 5, 'i' => 6, 'title' => 'Line',      'desc' => 'Line classification of an item',         'icon' => 'mdi-alpha-l-circle-outline', 'link' => ''),
                    array('x' => 1, 'y' => 1, 'w' => 1, 'h' => 5, 'i' => 7, 'title' => 'Series',    'desc' => 'Series where the item originated',       'icon' => 'mdi-television-classic',     'link' => ''),
                    array('x' => 2, 'y' => 1, 'w' => 1, 'h' => 5, 'i' => 8, 'title' => 'Group',     'desc' => 'Groupings within the series',            'icon' => 'mdi-account-group-outline',  'link' => ''),
                ),
                'md' => array(
                    array('x' => 0, 'y' => 0, 'w' => 1, 'h' => 5, 'i' => 0, 'title' => 'mdUsers',     'desc' => 'Create and Update Users',                'icon' => 'mdi-account',                'link' => ''),
                    array('x' => 1, 'y' => 0, 'w' => 1, 'h' => 5, 'i' => 1, 'title' => 'Settings',  'desc' => 'General app settings',                   'icon' => 'mdi-cogs',                   'link' => ''),
                    array('x' => 2, 'y' => 0, 'w' => 1, 'h' => 5, 'i' => 2, 'title' => 'Item Settings',    'desc' => 'Brand or manufacturer of an item',       'icon' => 'mdi-billboard',              'link' => 'itemSettings'),
                    array('x' => 3, 'y' => 0, 'w' => 1, 'h' => 5, 'i' => 3, 'title' => 'Types',     'desc' => 'General Type classification of an item', 'icon' => 'mdi-clipboard-list-outline', 'link' => ''),
                    array('x' => 0, 'y' => 1, 'w' => 1, 'h' => 5, 'i' => 4, 'title' => 'Scales',    'desc' => 'Scale of an item',                       'icon' => 'mdi-resize',                 'link' => ''),
                    array('x' => 1, 'y' => 1, 'w' => 1, 'h' => 5, 'i' => 5, 'title' => 'Grades',    'desc' => 'Grade classification for Gundams',       'icon' => 'mdi-robot-excited-outline',  'link' => ''),
                    array('x' => 2, 'y' => 1, 'w' => 1, 'h' => 5, 'i' => 6, 'title' => 'Line',      'desc' => 'Line classification of an item',         'icon' => 'mdi-alpha-l-circle-outline', 'link' => ''),
                    array('x' => 3, 'y' => 1, 'w' => 1, 'h' => 5, 'i' => 7, 'title' => 'Series',    'desc' => 'Series where the item originated',       'icon' => 'mdi-television-classic',     'link' => ''),
                    array('x' => 0, 'y' => 2, 'w' => 1, 'h' => 5, 'i' => 8, 'title' => 'Group',     'desc' => 'Groupings within the series',            'icon' => 'mdi-account-group-outline',  'link' => ''),
                ),
                'sm' => array(
                    array('x' => 0, 'y' => 0, 'w' => 1, 'h' => 5, 'i' => 0, 'title' => 'smUsers',     'desc' => 'Create and Update Users',                'icon' => 'mdi-account',                'link' => ''),
                    array('x' => 1, 'y' => 0, 'w' => 1, 'h' => 5, 'i' => 1, 'title' => 'Settings',  'desc' => 'General app settings',                   'icon' => 'mdi-cogs',                   'link' => ''),
                  
                ),
                'xs' => array(
                    array('x' => 0, 'y' => 0, 'w' => 1, 'h' => 5, 'i' => 0, 'title' => 'smUsers',     'desc' => 'Create and Update Users',                'icon' => 'mdi-account',                'link' => ''),
                    array('x' => 1, 'y' => 0, 'w' => 1, 'h' => 5, 'i' => 1, 'title' => 'Settings',  'desc' => 'General app settings',                   'icon' => 'mdi-cogs',                   'link' => ''),
                  
                ),
                'xxs' => array(
                    array('x' => 0, 'y' => 0, 'w' => 1, 'h' => 5, 'i' => 0, 'title' => 'smUsers',     'desc' => 'Create and Update Users',                'icon' => 'mdi-account',                'link' => ''),
                    array('x' => 1, 'y' => 0, 'w' => 1, 'h' => 5, 'i' => 1, 'title' => 'Settings',  'desc' => 'General app settings',                   'icon' => 'mdi-cogs',                   'link' => ''),
                  
                ),
            ];
        }else{
            $layouts = json_decode($adminGridMenu['layouts'], true);
        }
\Log::info($layouts);
        //return response()->json($layouts);
        return response()->json([
            'layouts'    => $layouts,
            'layout'     => $layouts[$request->breakpoint],

        ]);
    }

    public function updateAdminMenuGrid(Request $request)
    {\Log::info($request->layouts);
        $adminGridMenu = AdminMenuGrid::where('user_id', Auth::user()->id)->first();

        if(!empty($request->layouts)){
            if(!empty($adminGridMenu)){   
                $adminGridMenu->layouts = json_encode($request->layouts);
                $adminGridMenu->update();
                \Log::info('updateAdminMenuGrid');
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