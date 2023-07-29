<?php

namespace App\Http\Requests\User;

use App\Constants\ErrorCode;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;
use Illuminate\Validation\ValidationException;

class StoreUserRequest extends FormRequest
{
    protected function failedValidation(Validator $validator)
    {
        $response = new Response(['_result' => '0', '_error' => $validator->errors()->first(), '_errorCode' => ErrorCode::UPDATE_ERROR], 200);

        throw new ValidationException($validator, $response);
    }

    public function rules()
    {
        return [
            'username' => 'required|min:6|max:50|unique:tbl_users',
            'email' => 'required|min:5|max:50|unique:tbl_users',
            'password' => 'required|min:6|max:50|confirmed',
            'name' => 'required|min:2|max:50',
            'family' => 'required|min:2|max:50',
        ];
    }

    public function messages()
    {
        return [
            'username.required' => __('user.username_required'),
            'username.min' => __('user.username_min'),
            'username.max' => __('user.username_max'),
            'username.unique' => __('user.username_unique'),
            'email.required' => __('user.email_required'),
            'email.min' => __('user.email_min'),
            'email.max' => __('user.email_max'),
            'email.unique' => __('user.email_unique'),
            'password.required' => __('user.password_required'),
            'password.min' => __('user.password_min'),
            'password.max' => __('user.password_max'),
            'password.confirmed' => __('user.password_confirmed'),
            'name.required' => __('user.name_required'),
            'name.min' => __('user.name_min'),
            'name.max' => __('user.name_max'),
            'family.required' => __('user.family_required'),
            'family.min' => __('user.family_min'),
            'family.max' => __('user.family_max'),
        ];
    }
}
