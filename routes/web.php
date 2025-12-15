<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TestController;
use App\Http\Controllers\StudyMethodController;

Route::get('/', function () {
    return redirect('tests');
});

Route::resource('tests', TestController::class);

Route::controller(TestController::class)->group(function () {
    // 試験科目の定義
    $subjects = [
        'souron' => [2024, 2023, 2022, 2021],   // 生命保険総論
        'keiri'  => [2024, 2023, 2022, 2021],   // 生命保険計理
        'kiken'  => [2024, 2023, 2022, 2021],   // 危険選択
        'yakkan' => [2024, 2023, 2022, 2021],   // 約款と法律
        'kaikei' => [2024, 2023, 2022, 2021],   // 生命保険会計
        'eigyo'  => [2024, 2023, 2022, 2021],   // 生命保険商品と営業
        'zeihou' => [2023, 2022, 2021],   // 生命保険と税法
        'sisan'  => [2024, 2023, 2022, 2021],   // 資産運用
    ];

    $forms = ['a', 'b', 'c'];

    // 動的にルートを生成
    foreach ($subjects as $subject => $years) {
        foreach ($years as $year) {
            foreach ($forms as $form) {
                $routeName = "{$subject}{$year}{$form}";
                Route::get($routeName, $routeName)->name($routeName);
            }
        }
    }

    // 個別ページ
    Route::get('policy', 'policy')->name('policy');
    Route::get('updateInfo', 'updateInfo')->name('updateInfo');
    Route::get('studyMethod', 'studyMethod')->name('studyMethod');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
