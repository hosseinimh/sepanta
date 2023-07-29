<?php

namespace App\Http\Middleware;

use App\Constants\Locale;
use App\Services\UserService;
use Closure;
use Illuminate\Http\Request;

class SetLocale
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        if (!$this->setlocale($request->_locale)) {
            $this->setlocale(session('_locale'));
        }

        return $next($request);
    }

    private function setLocale(mixed $locale): bool
    {
        if (isset($locale) && in_array($locale, [Locale::EN, Locale::FA])) {
            app()->setLocale($locale);
            session(['_locale' => $locale]);

            if (auth()->user()) {
                $service = new UserService();
                $service->setLocale(auth()->user(), $locale);
            }
            return true;
        }
        return false;
    }
}
