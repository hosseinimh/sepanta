<?php

use App\Http\Controllers\User\DashboardController;
use App\Http\Controllers\User\DriverController;
use App\Http\Controllers\User\TankController;
use App\Http\Controllers\User\TruckController;
use App\Http\Controllers\User\UserController;
use Illuminate\Support\Facades\Route;

// not logged users
Route::middleware(['cors'])->group(function () {
    Route::post('users/login', [UserController::class, 'login']);
    Route::post('users/logout', [UserController::class, 'logout']);
});

// 'user' type users
Route::middleware(['auth:sanctum', 'auth.user'])->group(function () {
    Route::post('dashboard', [DashboardController::class, 'index']);

    Route::post('users/update', [UserController::class, 'update']);
    Route::post('users/change_password', [UserController::class, 'changePassword']);
});

// 'user' | 'administrator' type users
Route::middleware(['auth:sanctum', 'auth.logged'])->group(function () {
    Route::post('users/auth', [UserController::class, 'showAuth']);

    Route::post('tanks', [TankController::class, 'index']);
    Route::post('tanks/show/{model}', [TankController::class, 'show']);

    Route::post('trucks', [TruckController::class, 'index']);
    Route::post('trucks/show/{model}', [TruckController::class, 'show']);

    Route::post('drivers', [DriverController::class, 'index']);
    Route::post('drivers/show/{model}', [DriverController::class, 'show']);
});
