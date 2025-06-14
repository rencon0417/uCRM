<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TestController;

Route::get('/', function () {
    return redirect('tests');
});

Route::resource('tests', TestController::class);

Route::controller(TestController::class)->group(function () {
    // 生命保険総論
    Route::get('souron2024a', 'souron2024a')->name('souron2024a');
    Route::get('souron2024b', 'souron2024b')->name('souron2024b');
    Route::get('souron2024c', 'souron2024c')->name('souron2024c');
    Route::get('souron2023a', 'souron2023a')->name('souron2023a');
    Route::get('souron2023b', 'souron2023b')->name('souron2023b');
    Route::get('souron2023c', 'souron2023c')->name('souron2023c');
    Route::get('souron2022a', 'souron2022a')->name('souron2022a');
    Route::get('souron2022b', 'souron2022b')->name('souron2022b');
    Route::get('souron2022c', 'souron2022c')->name('souron2022c');
    Route::get('souron2021a', 'souron2021a')->name('souron2021a');
    Route::get('souron2021b', 'souron2021b')->name('souron2021b');
    Route::get('souron2021c', 'souron2021c')->name('souron2021c');

    // 生命保険計理
    Route::get('keiri2024a', 'keiri2024a')->name('keiri2024a');
    Route::get('keiri2024b', 'keiri2024b')->name('keiri2024b');
    Route::get('keiri2024c', 'keiri2024c')->name('keiri2024c');
    Route::get('keiri2023a', 'keiri2023a')->name('keiri2023a');
    Route::get('keiri2023b', 'keiri2023b')->name('keiri2023b');
    Route::get('keiri2023c', 'keiri2023c')->name('keiri2023c');
    Route::get('keiri2022a', 'keiri2022a')->name('keiri2022a');
    Route::get('keiri2022b', 'keiri2022b')->name('keiri2022b');
    Route::get('keiri2022c', 'keiri2022c')->name('keiri2022c');
    Route::get('keiri2021a', 'keiri2021a')->name('keiri2021a');
    Route::get('keiri2021b', 'keiri2021b')->name('keiri2021b');
    Route::get('keiri2021c', 'keiri2021c')->name('keiri2021c');

    // 危険選択
    Route::get('kiken2023a', 'kiken2023a')->name('kiken2023a');
    Route::get('kiken2023b', 'kiken2023b')->name('kiken2023b');
    Route::get('kiken2023c', 'kiken2023c')->name('kiken2023c');
    Route::get('kiken2022a', 'kiken2022a')->name('kiken2022a');
    Route::get('kiken2022b', 'kiken2022b')->name('kiken2022b');
    Route::get('kiken2022c', 'kiken2022c')->name('kiken2022c');
    Route::get('kiken2021a', 'kiken2021a')->name('kiken2021a');
    Route::get('kiken2021b', 'kiken2021b')->name('kiken2021b');
    Route::get('kiken2021c', 'kiken2021c')->name('kiken2021c');

    // 約款と法律
    Route::get('yakkan2023a', 'yakkan2023a')->name('yakkan2023a');
    Route::get('yakkan2023b', 'yakkan2023b')->name('yakkan2023b');
    Route::get('yakkan2023c', 'yakkan2023c')->name('yakkan2023c');
    Route::get('yakkan2022a', 'yakkan2022a')->name('yakkan2022a');
    Route::get('yakkan2022b', 'yakkan2022b')->name('yakkan2022b');
    Route::get('yakkan2022c', 'yakkan2022c')->name('yakkan2022c');
    Route::get('yakkan2021a', 'yakkan2021a')->name('yakkan2021a');
    Route::get('yakkan2021b', 'yakkan2021b')->name('yakkan2021b');
    Route::get('yakkan2021c', 'yakkan2021c')->name('yakkan2021c');

    // 生命保険会計
    Route::get('kaikei2023a', 'kaikei2023a')->name('kaikei2023a');
    Route::get('kaikei2023b', 'kaikei2023b')->name('kaikei2023b');
    Route::get('kaikei2023c', 'kaikei2023c')->name('kaikei2023c');
    Route::get('kaikei2022a', 'kaikei2022a')->name('kaikei2022a');
    Route::get('kaikei2022b', 'kaikei2022b')->name('kaikei2022b');
    Route::get('kaikei2022c', 'kaikei2022c')->name('kaikei2022c');
    Route::get('kaikei2021a', 'kaikei2021a')->name('kaikei2021a');
    Route::get('kaikei2021b', 'kaikei2021b')->name('kaikei2021b');
    Route::get('kaikei2021c', 'kaikei2021c')->name('kaikei2021c');

    // 生命保険商品と営業
    Route::get('eigyo2023a', 'eigyo2023a')->name('eigyo2023a');
    Route::get('eigyo2023b', 'eigyo2023b')->name('eigyo2023b');
    Route::get('eigyo2023c', 'eigyo2023c')->name('eigyo2023c');
    Route::get('eigyo2022a', 'eigyo2022a')->name('eigyo2022a');
    Route::get('eigyo2022b', 'eigyo2022b')->name('eigyo2022b');
    Route::get('eigyo2022c', 'eigyo2022c')->name('eigyo2022c');
    Route::get('eigyo2021a', 'eigyo2021a')->name('eigyo2021a');
    Route::get('eigyo2021b', 'eigyo2021b')->name('eigyo2021b');
    Route::get('eigyo2021c', 'eigyo2021c')->name('eigyo2021c');

    // 生命保険と税法
    Route::get('zeihou2023a', 'zeihou2023a')->name('zeihou2023a');
    Route::get('zeihou2023b', 'zeihou2023b')->name('zeihou2023b');
    Route::get('zeihou2023c', 'zeihou2023c')->name('zeihou2023c');
    Route::get('zeihou2022a', 'zeihou2022a')->name('zeihou2022a');
    Route::get('zeihou2022b', 'zeihou2022b')->name('zeihou2022b');
    Route::get('zeihou2022c', 'zeihou2022c')->name('zeihou2022c');
    Route::get('zeihou2021a', 'zeihou2021a')->name('zeihou2021a');
    Route::get('zeihou2021b', 'zeihou2021b')->name('zeihou2021b');
    Route::get('zeihou2021c', 'zeihou2021c')->name('zeihou2021c');

    // 資産運用
    Route::get('sisan2023a', 'sisan2023a')->name('sisan2023a');
    Route::get('sisan2023b', 'sisan2023b')->name('sisan2023b');
    Route::get('sisan2023c', 'sisan2023c')->name('sisan2023c');
    Route::get('sisan2022a', 'sisan2022a')->name('sisan2022a');
    Route::get('sisan2022b', 'sisan2022b')->name('sisan2022b');
    Route::get('sisan2022c', 'sisan2022c')->name('sisan2022c');
    Route::get('sisan2021a', 'sisan2021a')->name('sisan2021a');
    Route::get('sisan2021b', 'sisan2021b')->name('sisan2021b');
    Route::get('sisan2021c', 'sisan2021c')->name('sisan2021c');

    // プライバシーポリシー
    Route::get('policy', 'policy')->name('policy');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
