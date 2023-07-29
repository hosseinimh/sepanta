<?php

namespace App\Http\Requests\Truck;

use App\Constants\ErrorCode;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;
use Illuminate\Validation\ValidationException;

class StoreTruckRequest extends FormRequest
{
    protected function failedValidation(Validator $validator)
    {
        $response = new Response(['_result' => '0', '_error' => $validator->errors()->first(), '_errorCode' => ErrorCode::STORE_ERROR], 200);

        throw new ValidationException($validator, $response);
    }

    public function rules()
    {
        return [
            'name' => 'required|min:2|max:50',
            'family' => 'required|min:2|max:50',
            'national_no' => 'required|digits:10|gt:0',
            'mobile' => 'required|digits:11|gt:0',
            'ir_no' => 'required|size:8',
            'transit_no' => 'required|size:8',
        ];
    }

    public function messages()
    {
        return [
            'name.required' => __('truck.name_required'),
            'name.min' => __('truck.name_min'),
            'name.max' => __('truck.name_max'),
            'family.required' => __('truck.family_required'),
            'family.min' => __('truck.family_min'),
            'family.max' => __('truck.family_max'),
            'national_no.required' => __('truck.national_no_required'),
            'national_no.digits' => __('truck.national_no_digits'),
            'national_no.gt' => __('truck.national_no_gt'),
            'mobile.required' => __('truck.mobile_required'),
            'mobile.digits' => __('truck.mobile_digits'),
            'mobile.gt' => __('truck.mobile_gt'),
            'ir_no.required' => __('truck.ir_no_required'),
            'ir_no.size' => __('truck.ir_no_size'),
            'transit_no.required' => __('truck.transit_no_required'),
            'transit_no.size' => __('truck.transit_no_size'),
        ];
    }
}
