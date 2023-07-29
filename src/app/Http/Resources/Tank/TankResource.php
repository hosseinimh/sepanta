<?php

namespace App\Http\Resources\Tank;

use App\Facades\Helper;
use Illuminate\Http\Resources\Json\JsonResource;

class TankResource extends JsonResource
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
