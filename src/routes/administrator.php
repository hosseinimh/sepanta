<?php

use App\Http\Controllers\Administrator\DashboardController;
use App\Http\Controllers\Administrator\DriverController;
use App\Http\Controllers\Administrator\ErrorController;
use App\Http\Controllers\Administrator\TankController;
use App\Http\Controllers\Administrator\TruckController;
use App\Http\Controllers\Administrator\UserController;
use Illuminate\Support\Facades\Route;

// not logged users
Route::middleware(['cors'])->group(function () {
    Route::post('errors/store', [ErrorController::class, 'store']);
});

// 'administrator' type users
Route::middleware(['auth:sanctum', 'auth.administrator'])->group(function () {
    Route::post('dashboard', [DashboardController::class, 'index']);

    Route::post('users', [UserController::class, 'index']);
    Route::post('users/show/{model}', [UserController::class, 'show']);
    Route::post('users/store', [UserController::class, 'store']);
    Route::post('users/update/{model}', [UserController::class, 'update']);
    Route::post('users/change_password/{model}', [UserController::class, 'changePassword']);

    Route::post('tanks/store', [TankController::class, 'store']);
    Route::post('tanks/update/{model}', [TankController::class, 'update']);

    Route::post('trucks/store', [TruckController::class, 'store']);
    Route::post('trucks/update/{model}', [TruckController::class, 'update']);

    Route::post('drivers/store', [DriverController::class, 'store']);
    Route::post('drivers/update/{model}', [DriverController::class, 'update']);
});
