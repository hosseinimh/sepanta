<?php

namespace App\Http\Controllers\User;

use App\Constants\ErrorCode;
use App\Constants\Role;
use App\Http\Controllers\Controller;
use App\Http\Requests\User\ChangePasswordRequest;
use App\Http\Requests\User\LoginUserRequest as LoginRequest;
use App\Http\Requests\User\UpdateUserRequest;
use App\Packages\JsonResponse;
use App\Services\UserService;
use Illuminate\Http\JsonResponse as HttpJsonResponse;

class UserController extends Controller
{
    public function __construct(JsonResponse $response, public UserService $service)
    {
        parent::__construct($response);
    }

    public function showAuth(): HttpJsonResponse
    {
        return $this->onItem($this->service->get(auth()->user()->id));
    }

    public function update(UpdateUserRequest $request): HttpJsonResponse
    {
        return $this->onUpdate($this->service->update(auth()->user(), $request->name, $request->family, $request->nationalNo, $request->mobile, $request->email, Role::USER, 1));
    }

    public function changePassword(ChangePasswordRequest $request): HttpJsonResponse
    {
        return $this->onUpdate($this->service->changePassword(auth()->user(), $request->new_password));
    }

    public function login(LoginRequest $request): HttpJsonResponse
    {
        return $this->handleLogin(['username' => $request->username, 'password' => $request->password, 'is_active' => 1]);
    }

    public function logout(): HttpJsonResponse
    {
        auth()->logout();
        return $this->onOk();
    }

    private function handleLogin(array $data): HttpJsonResponse
    {
        if (!auth()->attempt($data)) {
            return $this->onError(['_error' => __('user.user_not_found'), '_errorCode' => ErrorCode::USER_NOT_FOUND]);
        }
        return $this->onItem($this->service->get(auth()->user()->id));
    }
}
