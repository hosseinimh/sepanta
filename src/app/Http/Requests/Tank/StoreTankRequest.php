<?php

namespace App\Http\Requests\Tank;

use App\Constants\ErrorCode;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;
use Illuminate\Validation\ValidationException;

class StoreTankRequest extends FormRequest
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
            'tank_no' => 'required|min_digits:1|max_digits:10|gt:0',
        ];
    }

    public function messages()
    {
        return [
            'name.required' => __('tank.name_required'),
            'name.min' => __('tank.name_min'),
            'name.max' => __('tank.name_max'),
            'family.required' => __('tank.family_required'),
            'family.min' => __('tank.family_min'),
            'family.max' => __('tank.family_max'),
            'national_no.required' => __('tank.national_no_required'),
            'national_no.digits' => __('tank.national_no_digits'),
            'national_no.gt' => __('tank.national_no_gt'),
            'mobile.required' => __('tank.mobile_required'),
            'mobile.digits' => __('tank.mobile_digits'),
            'mobile.gt' => __('tank.mobile_gt'),
            'tank_no.required' => __('tank.tank_no_required'),
            'tank_no.min_digits' => __('tank.tank_no_min_digits'),
            'tank_no.max_digits' => __('tank.tank_no_max_digits'),
            'tank_no.gt' => __('tank.tank_no_gt'),
        ];
    }
}
