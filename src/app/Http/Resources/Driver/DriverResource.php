<?php

namespace App\Http\Resources\Driver;

use App\Facades\Helper;
use Illuminate\Http\Resources\Json\JsonResource;

class DriverResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => intval($this->id),
            'name' => Helper::localeNumbers($this->name),
            'family' => Helper::localeNumbers($this->family),
            'nationalNo' => $this->national_no,
            'mobile' => $this->mobile,
            'licenseNo' => $this->license_no,
            'cardNo' => $this->card_no,
        ];
    }
}
