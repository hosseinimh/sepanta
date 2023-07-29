<?php

namespace App\Services;

use App\Models\Error as Model;

class ErrorService
{
    public function store(string $message): mixed
    {
        $data = [
            'message' => $message,
        ];
        $model = Model::create($data);

        return $model ?? null;
    }
}
