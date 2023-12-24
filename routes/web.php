<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\InertiaTestController;
use App\Http\Controllers\ItemController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\PurchaseController;
use App\Http\Controllers\AnalysisController;
use App\Http\Controllers\SeihokozaController;

Route::get('analysis', [AnalysisController::class, 'index'])->name('analysis');

Route::resource('items', ItemController::class)
->middleware(['auth', 'verified']);

Route::resource('customers', CustomerController::class)
->middleware(['auth', 'verified']);

Route::resource('purchases', PurchaseController::class)
->middleware(['auth', 'verified']);

Route::resource('seihokozas', SeihokozaController::class)
->middleware(['auth', 'verified']);

Route::get('souron', [SeihokozaController::class, 'souron'])->name('souron');

Route::get('vueTest1', [SeihokozaController::class, 'vueTest1'])->name('vueTest1');
Route::get('vueTest2', [SeihokozaController::class, 'vueTest2'])->name('vueTest2');
Route::get('vueTest3', [SeihokozaController::class, 'vueTest3'])->name('vueTest3');
Route::get('vueTest4', [SeihokozaController::class, 'vueTest4'])->name('vueTest4');


Route::get('/inertia-test', function () {
    return Inertia::render('InertiaTest');
    }
);

Route::get('/inertia/index',[InertiaTestController::class, 'index'])->name('inertia.index');
Route::get('/inertia/create',[InertiaTestController::class, 'create'])->name('inertia.create');
Route::post('/inertia',[InertiaTestController::class, 'store'])->name('inertia.store');
Route::get('/inertia/show/{id}',[InertiaTestController::class, 'show'])->name('inertia.show');


Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
