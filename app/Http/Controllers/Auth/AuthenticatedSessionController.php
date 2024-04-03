<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;
use Carbon\Carbon;

class AuthenticatedSessionController extends Controller
{
    /**
     * Display the login view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Login', [
            'canResetPassword' => Route::has('password.request'),
            'status' => session('status'),
        ]);
    }

    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request)
    {
        $request->authenticate();
        $request->session()->regenerate();

        $guru =  $request->user()->hasRole('guru');
        $siswa =  $request->user()->hasRole('siswa');

        if ($guru) {
            return redirect()->route('dashbboard.guru');
        } else if ($siswa) {
            // User berhasil login
            $user = Auth::user();

            // Set waktu login untuk sesi ini
            $user->session_login_at = Carbon::now();
            $user->save();

            return redirect()->route('dashbboard.siswa');
        }
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): RedirectResponse
    {
        // Update total waktu login saat logout
        $user = Auth::user();

        // Hitung selisih waktu dan tambahkan ke total_login_time
        if ($user->session_login_at) {
            $timeDifference = Carbon::parse($user->session_login_at)->diffInMinutes(Carbon::now());
            $user->total_login_time += $timeDifference;
        }

        // Reset waktu login untuk sesi ini
        $user->session_login_at = null;
        $user->save();


        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }
}
