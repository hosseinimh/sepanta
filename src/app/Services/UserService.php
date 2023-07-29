<?php

namespace App\Services;

use App\Constants\ErrorCode;
use App\Constants\Role;
use App\Constants\Status;
use App\Models\User as Model;
use Exception;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserService
{
    public function get(int $id): mixed
    {
        return Model::where('id', $id)->first();
    }

    public function getByEmail(string $email): mixed
    {
        return Model::where('email', $email)->first();
    }

    public function getPaginate(string|null $username, string|null $name, string|null $family, int $page, int $pageItems): mixed
    {
        return Model::where('username', 'LIKE', '%' . $username . '%')->where('name', 'LIKE', '%' . $name . '%')->where('family', 'LIKE', '%' . $family . '%')->orderBy('family', 'ASC')->orderBy('name', 'ASC')->orderBy('id', 'ASC')->skip(($page - 1) * $pageItems)->take($pageItems)->get();
    }

    public function store(string $username, string $password, string $name, string $family, string $nationalNo, string $mobile, string $email, int $role, int $isActive): mixed
    {
        $this->throwIfEmailNotUnique($email);
        $role = ($role >= Role::USER && $role <= Role::ADMINISTRATOR) ? $role : Role::USER;
        $isActive = $isActive === Status::ACTIVE ? Status::ACTIVE : Status::NOT_ACTIVE;
        $data = [
            'username' => $username,
            'password' => $password,
            'name' => $name,
            'family' => $family,
            'national_no' => $nationalNo,
            'mobile' => $mobile,
            'email' => $email,
            'role' => $role,
            'is_active' => $isActive,
        ];
        return Model::create($data) ?? null;
    }

    public function update(Model $model, string $name, string $family, string $nationalNo, string $mobile, string $email, int $role, int $isActive): bool
    {
        $this->throwIfEmailNotUnique($email, $model);
        $role = ($role >= Role::USER && $role <= Role::ADMINISTRATOR) ? $role : Role::USER;
        $isActive = $isActive === Status::ACTIVE ? Status::ACTIVE : Status::NOT_ACTIVE;
        $data = [
            'name' => $name,
            'family' => $family,
            'national_no' => $nationalNo,
            'mobile' => $mobile,
            'email' => $email,
            'role' => $role,
            'is_active' => $isActive,
        ];

        return $model->update($data);
    }

    public function changePassword(Model $user, string $password): bool
    {
        $password = Hash::make($password);

        return DB::statement("UPDATE `tbl_users` SET `password`='$password' WHERE `id`=$user->id");
    }

    public function count(string|null $username, string|null $name, string|null $family): int
    {
        return Model::where('username', 'LIKE', '%' . $username . '%')->where('name', 'LIKE', '%' . $name . '%')->where('family', 'LIKE', '%' . $family . '%')->orderBy('family', 'ASC')->orderBy('name', 'ASC')->orderBy('id', 'ASC')->count();
    }

    public function countAll(): int
    {
        return Model::count();
    }

    private function throwIfEmailNotUnique(string $email, mixed $targetModel = null)
    {
        $user = $this->getByEmail($email);
        if (!$user || ($targetModel instanceof Model && $targetModel->id === $user->id)) {
            return;
        }
        throw new Exception(__('user.email_unique'), ErrorCode::CUSTOM_ERROR);
    }
}
