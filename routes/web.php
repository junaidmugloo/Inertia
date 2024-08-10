<?php

use App\Http\Controllers\Posts;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
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

// Route::get('/', function () {
//     return inertia('Home');
// });

Route::get('/about', function () {
    return Inertia::render('About',['name'=>'juniad','age'=>29]);
});

// Route::middleware(['admin'])->group(function () {
// Route::resource('/',Posts::class);
Route::resource('/posts',Posts::class);
// });
