<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\ItemController;
use App\Http\Controllers\ItemBrandController;
use App\Http\Controllers\ItemGradeController;
use App\Http\Controllers\ItemGroupController;
use App\Http\Controllers\ItemLineController;
use App\Http\Controllers\ItemScaleController;
use App\Http\Controllers\ItemSeriesController;
use App\Http\Controllers\ItemTypeController;
use App\Http\Controllers\ItemWaveController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Support\Facades\Session;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin'       => Route::has('login'),
        'canRegister'    => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion'     => PHP_VERSION,
        'from_logout'    => Session::get('from_logout'),
    ]);
});

//for dropdown lists
Route::get('getBrandList', [ItemBrandController::class, 'getBrandList']);
Route::get('getGradeList', [ItemGradeController::class, 'getGradeList']);
Route::get('getGroupList', [ItemGroupController::class, 'getGroupList']);
Route::get('getLineList', [ItemLineController::class, 'getLineList']);
Route::get('getScaleList', [ItemScaleController::class, 'getScaleList']);
Route::get('getSeriesList', [ItemSeriesController::class, 'getSeriesList']);
Route::get('getTypeList', [ItemTypeController::class, 'getTypeList']);
Route::get('getWaveList', [ItemWaveController::class, 'getWaveList']);

Route::group(['middleware' => ['auth', 'verified']], function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    Route::get('/items/getAll', [ItemController::class, 'getAll'])->name('getAllItems');
    Route::get('/items/itemSettings', [ItemController::class, 'itemSettings'])->name('itemSettings');
    
    Route::resource('items', ItemController::class)->names([
        'index'   => 'items.index',
    ]);

    Route::get('/admin/getAdminMenuItems', [AdminController::class, 'getAdminMenuItems'])->name('getAdminMenuItems');
    Route::post('/admin/updateAdminMenuGrid', [AdminController::class, 'updateAdminMenuGrid'])->name('updateAdminMenuGrid');
    Route::resource('admin', AdminController::class)->names([
        'index'  => 'admin.index',
    ]);

    Route::get('/brands/getAll', [ItemBrandController::class, 'getAll'])->name('getAllBrands');
    Route::resource('brands', ItemBrandController::class)->names([
        'index'   => 'brands.index',
    ]);

    Route::get('/grades/getAll', [ItemGradeController::class, 'getAll'])->name('getAllGrades');
    Route::resource('grades', ItemGradeController::class)->names([
        'index'   => 'grades.index',
    ]);

    Route::get('/groups/getAll', [ItemGroupController::class, 'getAll'])->name('getAllGroups');
    Route::resource('groups', ItemGroupController::class)->names([
        'index'   => 'groups.index',
    ]);

    Route::get('/lines/getAll', [ItemLineController::class, 'getAll'])->name('getAllLines');
    Route::resource('lines', ItemLineController::class)->names([
        'index'   => 'lines.index',
    ]);

    Route::get('/scales/getAll', [ItemScaleController::class, 'getAll'])->name('getAllScales');
    Route::resource('scales', ItemScaleController::class)->names([
        'index'   => 'scales.index',
    ]);

    Route::get('/series/getAll', [ItemSeriesController::class, 'getAll'])->name('getAllSeries');
    Route::resource('series', ItemSeriesController::class)->names([
        'index'   => 'series.index',
    ]);

    Route::get('/types/getAll', [ItemTypeController::class, 'getAll'])->name('getAllTypes');
    Route::resource('types', ItemTypeController::class)->names([
        'index'   => 'types.index',
    ]);

    Route::get('/waves/getAll', [ItemWaveController::class, 'getAll'])->name('getAllWaves');
    Route::resource('waves', ItemWaveController::class)->names([
        'index'   => 'waves.index',
    ]);
});



require __DIR__.'/auth.php';
