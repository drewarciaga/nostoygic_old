<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\ItemBrandController;
use App\Http\Controllers\ItemController;
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
});



require __DIR__.'/auth.php';
