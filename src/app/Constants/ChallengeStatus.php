<?php

namespace App\Constants;

abstract class ChallengeStatus
{
    const WAITING_VERIFICATION = 1; // در انتظار تایید
    const WAITING_TRADE = 2; // منتظر اولین ترید
    const TRADING = 3; // در حال ترید
    const END_CHALLENGE = 4; // پایان چالش
}
