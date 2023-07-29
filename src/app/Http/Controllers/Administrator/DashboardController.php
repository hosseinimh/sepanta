<?php

namespace App\Http\Controllers\Administrator;

use App\Constants\ChallengeStatus;
use App\Http\Controllers\Controller;
use App\Packages\JsonResponse;
use App\Services\ChallengeService;
use App\Services\UserService;
use Illuminate\Http\JsonResponse as HttpJsonResponse;

class DashboardController extends Controller
{
    public function __construct(JsonResponse $response)
    {
        parent::__construct($response);
    }

    public function index(): HttpJsonResponse
    {
        $userService = new UserService();
        $challengeService = new ChallengeService();

        return $this->onItems(['usersCount' => $userService->countAll(), 'waitingChallengesCount' => $challengeService->count(null, ChallengeStatus::WAITING_VERIFICATION)]);
    }
}
