<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {

        $user = User::create([
            'firstname' => $request->input('firstname'),
            'lastname' => $request->input('absen'),
            'email' => $request->input('email'),
            'password' => Hash::make($request->password),
            'kelas' => $request->input('kelas'),
            'absen' => $request->input('absen'),
        ]);
        $user->assignRole('siswa');

        event(new Registered($user));

        Auth::login($user);

        return redirect()->route('dashbboard.siswa');
    }
}
