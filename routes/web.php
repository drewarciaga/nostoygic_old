<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\BrandController;
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
Route::get('getBrandList', [BrandController::class, 'getBrandList']);

Route::group(['middleware' => ['auth', 'verified']], function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    Route::get('/items/getAll', [ItemController::class, 'getAll'])->name('getAllItems');
    Route::resource('items', ItemController::class)->names([
        'index'  => 'items.index',
        'create' => 'items.create',
        'store'  => 'items.store'
    ]);

    Route::resource('admin', AdminController::class)->names([
        'index'  => 'admin.index',
    ]);
});



require __DIR__.'/auth.php';
