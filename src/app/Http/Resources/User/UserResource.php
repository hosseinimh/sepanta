<?php

namespace App\Http\Resources\User;

use App\Facades\Helper;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => intval($this->id),
            'username' => $this->username,
            'name' => Helper::localeNumbers($this->name),
            'family' => Helper::localeNumbers($this->family),
            'nationalNo' => $this->national_no,
            'mobile' => $this->mobile,
            'email' => $this->email,
            'role' => intval($this->role),
            'isActive' => intval($this->is_active),
        ];
    }
}
