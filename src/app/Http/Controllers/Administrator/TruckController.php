<?php

namespace App\Http\Controllers\Administrator;

use App\Http\Controllers\Controller;
use App\Http\Requests\Truck\StoreTruckRequest;
use App\Http\Requests\Truck\UpdateTruckRequest;
use App\Models\Truck as Model;
use App\Packages\JsonResponse;
use App\Services\TruckService;
use Illuminate\Http\JsonResponse as HttpJsonResponse;

class TruckController extends Controller
{
    public function __construct(JsonResponse $response, public TruckService $service)
    {
        parent::__construct($response);
    }

    public function store(StoreTruckRequest $request): HttpJsonResponse
    {
        return $this->onStore($this->service->store($request->name, $request->family, $request->nationalNo, $request->mobile, $request->ir_no, $request->transit_no));
    }

    public function update(Model $model, UpdateTruckRequest $request): HttpJsonResponse
    {
        return $this->onUpdate($this->service->update($model, $request->name, $request->family, $request->nationalNo, $request->mobile, $request->ir_no, $request->transit_no));
    }
}
