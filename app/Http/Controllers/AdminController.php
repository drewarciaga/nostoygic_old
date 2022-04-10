<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Traits\UtilsTrait;

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
        $layouts = [
            'xl' => array(
                array('x' => 0, 'y' => 0, 'w' => 1, 'h' => 5, 'i' => 0, 'title' => 'xlUsers',   'desc' => 'Create and Update Users',                'icon' => 'mdi-account',                'link' => '/admin'),
                array('x' => 1, 'y' => 0, 'w' => 1, 'h' => 5, 'i' => 1, 'title' => 'Settings',  'desc' => 'General app settings',                   'icon' => 'mdi-cogs',                   'link' => '/admin'),
                array('x' => 2, 'y' => 0, 'w' => 1, 'h' => 5, 'i' => 2, 'title' => 'Brands',    'desc' => 'Brand or manufacturer of an item',       'icon' => 'mdi-billboard',              'link' => '/admin'),
                array('x' => 3, 'y' => 0, 'w' => 1, 'h' => 5, 'i' => 3, 'title' => 'Types',     'desc' => 'General Type classification of an item', 'icon' => 'mdi-clipboard-list-outline', 'link' => '/admin'),
                array('x' => 4, 'y' => 0, 'w' => 1, 'h' => 5, 'i' => 4, 'title' => 'Scales',    'desc' => 'Scale of an item',                       'icon' => 'mdi-resize',                 'link' => '/admin'),
                array('x' => 5, 'y' => 0, 'w' => 1, 'h' => 5, 'i' => 5, 'title' => 'Grades',    'desc' => 'Grade classification for Gundams',       'icon' => 'mdi-robot-excited-outline',  'link' => '/admin'),
                array('x' => 0, 'y' => 1, 'w' => 1, 'h' => 5, 'i' => 6, 'title' => 'Line',      'desc' => 'Line classification of an item',         'icon' => 'mdi-alpha-l-circle-outline', 'link' => '/admin'),
                array('x' => 1, 'y' => 1, 'w' => 1, 'h' => 5, 'i' => 7, 'title' => 'Series',    'desc' => 'Series where the item originated',       'icon' => 'mdi-television-classic',     'link' => '/admin'),
                array('x' => 2, 'y' => 1, 'w' => 1, 'h' => 5, 'i' => 8, 'title' => 'Group',     'desc' => 'Groupings within the series',            'icon' => 'mdi-account-group-outline',  'link' => '/admin'),
            ),
            'lg' => array(
                array('x' => 0, 'y' => 0, 'w' => 1, 'h' => 5, 'i' => 0, 'title' => 'lgUsers',   'desc' => 'Create and Update Users',                'icon' => 'mdi-account',                'link' => '/admin'),
                array('x' => 1, 'y' => 0, 'w' => 1, 'h' => 5, 'i' => 1, 'title' => 'Settings',  'desc' => 'General app settings',                   'icon' => 'mdi-cogs',                   'link' => '/admin'),
                array('x' => 2, 'y' => 0, 'w' => 1, 'h' => 5, 'i' => 2, 'title' => 'Brands',    'desc' => 'Brand or manufacturer of an item',       'icon' => 'mdi-billboard',              'link' => '/admin'),
                array('x' => 3, 'y' => 0, 'w' => 1, 'h' => 5, 'i' => 3, 'title' => 'Types',     'desc' => 'General Type classification of an item', 'icon' => 'mdi-clipboard-list-outline', 'link' => '/admin'),
                array('x' => 0, 'y' => 1, 'w' => 1, 'h' => 5, 'i' => 4, 'title' => 'Scales',    'desc' => 'Scale of an item',                       'icon' => 'mdi-resize',                 'link' => '/admin'),
                array('x' => 1, 'y' => 1, 'w' => 1, 'h' => 5, 'i' => 5, 'title' => 'Grades',    'desc' => 'Grade classification for Gundams',       'icon' => 'mdi-robot-excited-outline',  'link' => '/admin'),
                array('x' => 2, 'y' => 1, 'w' => 1, 'h' => 5, 'i' => 6, 'title' => 'Line',      'desc' => 'Line classification of an item',         'icon' => 'mdi-alpha-l-circle-outline', 'link' => '/admin'),
                array('x' => 3, 'y' => 1, 'w' => 1, 'h' => 5, 'i' => 7, 'title' => 'Series',    'desc' => 'Series where the item originated',       'icon' => 'mdi-television-classic',     'link' => '/admin'),
                array('x' => 0, 'y' => 2, 'w' => 1, 'h' => 5, 'i' => 8, 'title' => 'Group',     'desc' => 'Groupings within the series',            'icon' => 'mdi-account-group-outline',  'link' => '/admin'),
            ),
            'md' => array(
                array('x' => 0, 'y' => 0, 'w' => 1, 'h' => 5, 'i' => 0, 'title' => 'mdUsers',     'desc' => 'Create and Update Users',                'icon' => 'mdi-account',                'link' => '/admin'),
                array('x' => 1, 'y' => 0, 'w' => 1, 'h' => 5, 'i' => 1, 'title' => 'Settings',  'desc' => 'General app settings',                   'icon' => 'mdi-cogs',                   'link' => '/admin'),
                array('x' => 2, 'y' => 0, 'w' => 1, 'h' => 5, 'i' => 2, 'title' => 'Brands',    'desc' => 'Brand or manufacturer of an item',       'icon' => 'mdi-billboard',              'link' => '/admin'),
                array('x' => 3, 'y' => 0, 'w' => 1, 'h' => 5, 'i' => 3, 'title' => 'Types',     'desc' => 'General Type classification of an item', 'icon' => 'mdi-clipboard-list-outline', 'link' => '/admin'),
                array('x' => 0, 'y' => 1, 'w' => 1, 'h' => 5, 'i' => 4, 'title' => 'Scales',    'desc' => 'Scale of an item',                       'icon' => 'mdi-resize',                 'link' => '/admin'),
                array('x' => 1, 'y' => 1, 'w' => 1, 'h' => 5, 'i' => 5, 'title' => 'Grades',    'desc' => 'Grade classification for Gundams',       'icon' => 'mdi-robot-excited-outline',  'link' => '/admin'),
                array('x' => 2, 'y' => 1, 'w' => 1, 'h' => 5, 'i' => 6, 'title' => 'Line',      'desc' => 'Line classification of an item',         'icon' => 'mdi-alpha-l-circle-outline', 'link' => '/admin'),
                array('x' => 3, 'y' => 1, 'w' => 1, 'h' => 5, 'i' => 7, 'title' => 'Series',    'desc' => 'Series where the item originated',       'icon' => 'mdi-television-classic',     'link' => '/admin'),
                array('x' => 0, 'y' => 2, 'w' => 1, 'h' => 5, 'i' => 8, 'title' => 'Group',     'desc' => 'Groupings within the series',            'icon' => 'mdi-account-group-outline',  'link' => '/admin'),
            ),
            'sm' => array(
                array('x' => 0, 'y' => 0, 'w' => 1, 'h' => 5, 'i' => 0, 'title' => 'smUsers',     'desc' => 'Create and Update Users',                'icon' => 'mdi-account',                'link' => '/admin'),
                array('x' => 1, 'y' => 0, 'w' => 1, 'h' => 5, 'i' => 1, 'title' => 'Settings',  'desc' => 'General app settings',                   'icon' => 'mdi-cogs',                   'link' => '/admin'),
              
            ),
            'xs' => array(
                array('x' => 0, 'y' => 0, 'w' => 1, 'h' => 5, 'i' => 0, 'title' => 'smUsers',     'desc' => 'Create and Update Users',                'icon' => 'mdi-account',                'link' => '/admin'),
                array('x' => 1, 'y' => 0, 'w' => 1, 'h' => 5, 'i' => 1, 'title' => 'Settings',  'desc' => 'General app settings',                   'icon' => 'mdi-cogs',                   'link' => '/admin'),
              
            ),
            'xxs' => array(
                array('x' => 0, 'y' => 0, 'w' => 1, 'h' => 5, 'i' => 0, 'title' => 'smUsers',     'desc' => 'Create and Update Users',                'icon' => 'mdi-account',                'link' => '/admin'),
                array('x' => 1, 'y' => 0, 'w' => 1, 'h' => 5, 'i' => 1, 'title' => 'Settings',  'desc' => 'General app settings',                   'icon' => 'mdi-cogs',                   'link' => '/admin'),
              
            ),
        ];

        //return response()->json($layouts);
        return response()->json([
            'layouts'    => $layouts,
            'layout'      => $layouts[$request->breakpoint],

        ]);
    }
}
/*

let testLayouts = {
    lg: [
        {"x":0,"y":0,"w":1,"h":5,"i":"0", "title":"Users", "desc":"Create and Update Users", "icon":"mdi-account"},
        {"x":1,"y":0,"w":1,"h":5,"i":"1", "title":"Settings", "desc":"General app settings", "icon":"mdi-cogs"},
        {"x":2,"y":0,"w":1,"h":5,"i":"2", "title":"Brands"},
        {"x":3,"y":0,"w":1,"h":5,"i":"3", "title":"Groups"},
        {"x":0,"y":1,"w":1,"h":5,"i":"4", "title":"Series"},
        {"x":1,"y":1,"w":1,"h":5,"i":"5", "title":"Line"},
    ],
    md: [
        {"x":0,"y":0,"w":1,"h":5,"i":"0", "title":"Users", "desc":"Create and Update Users", "icon":"mdi-account"},
        {"x":1,"y":0,"w":1,"h":5,"i":"1", "title":"Settings", "desc":"General app settings", "icon":"mdi-cogs"},
        {"x":2,"y":0,"w":1,"h":5,"i":"2", "title":"Brands"},
        {"x":3,"y":0,"w":1,"h":5,"i":"3", "title":"Groups"},
        {"x":0,"y":1,"w":1,"h":5,"i":"4", "title":"Series"},
        {"x":1,"y":1,"w":1,"h":5,"i":"5", "title":"Line"},
    ],
};*/