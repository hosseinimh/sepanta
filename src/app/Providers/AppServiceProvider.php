<?php

namespace App\Providers;

use App\Constants\Theme;
use App\Http\Controllers\Administrator\DashboardController;
use App\Http\Controllers\Administrator\DriverController;
use App\Http\Controllers\Administrator\ErrorController;
use App\Http\Controllers\Administrator\TankController;
use App\Http\Controllers\Administrator\TruckController;
use App\Http\Controllers\Administrator\UserController;
use App\Http\Controllers\User\DashboardController as UserDashboardController;
use App\Http\Controllers\User\DriverController as UserDriverController;
use App\Http\Controllers\User\TankController as UserTankController;
use App\Http\Controllers\User\TruckController as UserTruckController;
use App\Http\Controllers\User\UserController as UserUserController;
use App\Http\Resources\Driver\DriverResource;
use App\Http\Resources\Error\ErrorResource;
use App\Http\Resources\Tank\TankResource;
use App\Http\Resources\Truck\TruckResource;
use App\Http\Resources\User\UserResource;
use App\Packages\Helper;
use App\Packages\JsonResponse;
use App\Services\DriverService;
use App\Services\ErrorService;
use App\Services\TankService;
use App\Services\TruckService;
use App\Services\UserService;
use Illuminate\Support\Facades\View;
use Illuminate\Support\ServiceProvider;

require_once __DIR__ . '/../../server-config.php';

class AppServiceProvider extends ServiceProvider
{
    public function register()
    {
        $this->app->bind('helper', function () {
            return new Helper();
        });
    }

    public function boot()
    {
        $this->app->bind('path.public', function () {
            return PUBLIC_PATH;
        });

        View::share('THEME', Theme::class);

        $this->app->bind(ErrorController::class, function ($app) {
            return new ErrorController(new JsonResponse(ErrorResource::class), $app->make(ErrorService::class));
        });

        $this->app->bind(DashboardController::class, function ($app) {
            return new DashboardController($app->make(JsonResponse::class));
        });

        $this->app->bind(UserDashboardController::class, function ($app) {
            return new UserDashboardController($app->make(JsonResponse::class));
        });

        $this->app->bind(UserController::class, function ($app) {
            return new UserController(new JsonResponse(UserResource::class), $app->make(UserService::class));
        });

        $this->app->bind(UserUserController::class, function ($app) {
            return new UserUserController(new JsonResponse(UserResource::class), $app->make(UserService::class));
        });

        $this->app->bind(TankController::class, function ($app) {
            return new TankController(new JsonResponse(TankResource::class), $app->make(TankService::class));
        });

        $this->app->bind(UserTankController::class, function ($app) {
            return new UserTankController(new JsonResponse(TankResource::class), $app->make(TankService::class));
        });

        $this->app->bind(TruckController::class, function ($app) {
            return new TruckController(new JsonResponse(TruckResource::class), $app->make(TruckService::class));
        });

        $this->app->bind(UserTruckController::class, function ($app) {
            return new UserTruckController(new JsonResponse(TruckResource::class), $app->make(TruckService::class));
        });

        $this->app->bind(DriverController::class, function ($app) {
            return new DriverController(new JsonResponse(DriverResource::class), $app->make(DriverService::class));
        });

        $this->app->bind(UserDriverController::class, function ($app) {
            return new UserDriverController(new JsonResponse(DriverResource::class), $app->make(DriverService::class));
        });
    }
}
