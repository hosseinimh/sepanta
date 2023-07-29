<?php

namespace App\Http\Resources\Truck;

use App\Facades\Helper;
use Illuminate\Http\Resources\Json\JsonResource;

class TruckResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => intval($this->id),
            'name' => Helper::localeNumbers($this->name),
            'family' => Helper::localeNumbers($this->family),
            'nationalNo' => $this->national_no,
            'mobile' => $this->mobile,
            'irNo' => $this->ir_no,
            'transitNo' => $this->transit_no,
        ];
    }
}
