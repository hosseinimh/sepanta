<?php

namespace App\Http\Controllers\Administrator;

use App\Http\Controllers\Controller;
use App\Http\Requests\Driver\StoreDriverRequest;
use App\Http\Requests\Driver\UpdateDriverRequest;
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

    public function store(StoreDriverRequest $request): HttpJsonResponse
    {
        return $this->onStore($this->service->store($request->name, $request->family, $request->nationalNo, $request->mobile, $request->license_no, $request->card_no));
    }

    public function update(Model $model, UpdateDriverRequest $request): HttpJsonResponse
    {
        return $this->onUpdate($this->service->update($model, $request->name, $request->family, $request->nationalNo, $request->mobile, $request->license_no, $request->card_no));
    }
}
