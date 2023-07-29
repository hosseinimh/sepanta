<?php

require_once __DIR__ . '/Helper/MessageHelper.php';

return [
    'name_required' => $requiredMessage('نام'),
    'name_min' => $minStringMessage('نام', 2),
    'name_max' => $maxStringMessage('نام', 50),
    'family_required' => $requiredMessage('نام خانوادگی'),
    'family_min' => $minStringMessage('نام خانوادگی', 2),
    'family_max' => $maxStringMessage('نام خانوادگی', 50),
    'national_no_required' => $requiredMessage('شماره ملی'),
    'national_no_digits' => $digitsMessage('شماره ملی', 10),
    'national_no_gt' => $gtNumericMessage('شماره ملی', 0),
    'mobile_required' => $requiredMessage('شماره همراه'),
    'mobile_digits' => $digitsMessage('شماره همراه', 11),
    'mobile_gt' => $gtNumericMessage('شماره همراه', 0),
    'tank_no_required' => $requiredMessage('شماره تانک'),
    'tank_no_min_digits' => $minDigitsMessage('شماره تانک', 1),
    'tank_no_max_digits' => $maxDigitsMessage('شماره تانک', 10),
    'tank_no_gt' => $gtNumericMessage('شماره تانک', 0),
];
