<?php

namespace App\Services;

use App\Models\Truck as Model;

class TruckService
{
    public function get(int $id): mixed
    {
        return Model::where('id', $id)->first();
    }

    public function getPaginate(string|null $name, string|null $family, int $page, int $pageItems): mixed
    {
        return Model::where('name', 'LIKE', '%' . $name . '%')->where('family', 'LIKE', '%' . $family . '%')->orderBy('family', 'ASC')->orderBy('name', 'ASC')->orderBy('id', 'ASC')->skip(($page - 1) * $pageItems)->take($pageItems)->get();
    }

    public function store(string $name, string $family, string $nationalNo, string $mobile, string $irNo, string $transitNo): mixed
    {
        $data = [
            'name' => $name,
            'family' => $family,
            'national_no' => $nationalNo,
            'mobile' => $mobile,
            'ir_no' => $irNo,
            'transit_no' => $transitNo,
        ];
        return Model::create($data) ?? null;
    }

    public function update(Model $model, string $name, string $family, string $nationalNo, string $mobile, string $irNo, string $transitNo): bool
    {
        $data = [
            'name' => $name,
            'family' => $family,
            'national_no' => $nationalNo,
            'mobile' => $mobile,
            'ir_no' => $irNo,
            'transit_no' => $transitNo,
        ];
        return $model->update($data);
    }

    public function count(string|null $name, string|null $family): int
    {
        return Model::where('name', 'LIKE', '%' . $name . '%')->where('family', 'LIKE', '%' . $family . '%')->orderBy('family', 'ASC')->orderBy('name', 'ASC')->orderBy('id', 'ASC')->count();
    }
}
