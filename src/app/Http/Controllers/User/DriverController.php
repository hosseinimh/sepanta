<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\Driver\IndexDriversRequest;
use App\Models\Driver as Model;
use App\Packages\JsonResponse;
use App\Services\DriverService;
use Illuminate\Http\JsonResponse as HttpJsonResponse;

class DriverController extends Controller
{
    public function __construct(JsonResponse $response, public DriverService $service)
    {
        parent::__construct($response);
    }

    public function index(IndexDriversRequest $request): HttpJsonResponse
    {
        return $this->onItems($this->service->getPaginate($request->name, $request->family, $request->_pn, $request->_pi), $this->service->count($request->name, $request->family));
    }

    public function show(Model $model): HttpJsonResponse
    {
        return $this->onItem($this->service->get($model->id));
    }
}
