<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Resume;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    /**
     * Display the home view
     */
    public function home(): Response
    {
        $user_id = Auth::id();
        $resume = Resume::where('user_id', $user_id)->first();

        return Inertia::render('Home', [
            'year' => $resume['year'],
            'q_no' => $resume['q_no'],
            'c_no' => $resume['c_no'],
            'unit' => $resume['unit'],
            'last_no' => $resume['last_no'],
        ]);
    }
}
