<?php

namespace App\Http\Requests\Driver;

use App\Constants\ErrorCode;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;
use Illuminate\Validation\ValidationException;

class StoreDriverRequest extends FormRequest
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
            'license_no' => 'required|digits:10|gt:0',
            'card_no' => 'required|digits:10|gt:0',
        ];
    }

    public function messages()
    {
        return [
            'name.required' => __('driver.name_required'),
            'name.min' => __('driver.name_min'),
            'name.max' => __('driver.name_max'),
            'family.required' => __('driver.family_required'),
            'family.min' => __('driver.family_min'),
            'family.max' => __('driver.family_max'),
            'national_no.required' => __('driver.national_no_required'),
            'national_no.digits' => __('driver.national_no_digits'),
            'national_no.gt' => __('driver.national_no_gt'),
            'mobile.required' => __('driver.mobile_required'),
            'mobile.digits' => __('driver.mobile_digits'),
            'mobile.gt' => __('driver.mobile_gt'),
            'license_no.required' => __('driver.license_no_required'),
            'license_no.digits' => __('driver.license_no_digits'),
            'license_no.gt' => __('driver.license_no_gt'),
            'card_no.required' => __('driver.card_no_required'),
            'card_no.digits' => __('driver.card_no_digits'),
            'card_no.gt' => __('driver.card_no_gt'),
        ];
    }
}
