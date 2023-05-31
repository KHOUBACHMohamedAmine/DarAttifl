<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DemandeController;
use App\Http\Controllers\DemandeStatusController;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::group(['middleware' => 'auth:sanctum'], function() {
    Route::get('users/list', [UserController::class, 'list']);
    Route::get('me', [UserController::class, 'me']);

    // 課題
    Route::apiResource('demandes', DemandeController::class);
    Route::get('get-by-user/{userId}', [DemandeController::class, 'getByUserId']);

    // 課題ステータス
    Route::get('demande-statuses/list', [DemandeStatusController::class, 'list']);
    Route::apiResource('demande-statuses', DemandeStatusController::class);
});
