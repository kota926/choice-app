<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/', function () {
    return Inertia::render('Auth/Login');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth'])->name('dashboard');

// Route::get('/login', function () {
//     return Inertia::render('Login');
// })->name('login');

// Route::get('/register', function () {
//     return Inertia::render('Register');
// })->name('register');

// Route::get('/home', function () {
//     return Inertia::render('Home');
// })->middleware(['auth'])->name('home');

Route::get('/quiz', function () {
    return Inertia::render('Quiz');
})->middleware(['auth'])->name('quiz');

Route::get('/table', function () {
    return Inertia::render('Table');
})->middleware(['auth'])->name('table');

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

require __DIR__.'/auth.php';
