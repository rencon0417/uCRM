<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreseihokozaRequest;
use App\Http\Requests\UpdateseihokozaRequest;
use App\Models\seihokoza;
use Inertia\Inertia;

class SeihokozaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Seiho/Index', [
            'seihokozas' => seihokoza::select('id','subject', 'year', 'form', 'question', 'answer', 'explanation')->get()
        ]);
    }
    public function souron()
    {
        return Inertia::render('Seiho/Souron');
    }

    public function vueTest1()
    {
        return Inertia::render('Seiho/VueTest1');
    }

    public function vueTest2()
    {
        return Inertia::render('Seiho/VueTest2');
    }

    public function vueTest3()
    {
        return Inertia::render('Seiho/VueTest3');
    }

    public function vueTest4()
    {
        return Inertia::render('Seiho/VueTest4');
    }

    /*4
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
4    */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreseihokozaRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreseihokozaRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\seihokoza  $seihokoza
     * @return \Illuminate\Http\Response
     */
    public function show(seihokoza $seihokoza)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\seihokoza  $seihokoza
     * @return \Illuminate\Http\Response
     */
    public function edit(seihokoza $seihokoza)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateseihokozaRequest  $request
     * @param  \App\Models\seihokoza  $seihokoza
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateseihokozaRequest $request, seihokoza $seihokoza)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\seihokoza  $seihokoza
     * @return \Illuminate\Http\Response
     */
    public function destroy(seihokoza $seihokoza)
    {
        //
    }


}
