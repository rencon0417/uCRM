<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTestRequest;
use App\Http\Requests\UpdateTestRequest;
use App\Models\Test;
use Inertia\Inertia;

class TestController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Tests/Index');
    }

    // 生命保険総論のコントローラ
    public function souron2023a()
    {
        return Inertia::render('Tests/Souron/Souron2023a');
    }
    public function souron2023b()
    {
        return Inertia::render('Tests/Souron/Souron2023b');
    }
    public function souron2023c()
    {
        return Inertia::render('Tests/Souron/Souron2023c');
    }
    public function souron2022a()
    {
        return Inertia::render('Tests/Souron/Souron2022a');
    }
    public function souron2022b()
    {
        return Inertia::render('Tests/Souron/Souron2022b');
    }
    public function souron2022c()
    {
        return Inertia::render('Tests/Souron/Souron2022c');
    }
    public function souron2021a()
    {
        return Inertia::render('Tests/Souron/Souron2021a');
    }
    public function souron2021b()
    {
        return Inertia::render('Tests/Souron/Souron2021b');
    }
    public function souron2021c()
    {
        return Inertia::render('Tests/Souron/Souron2021c');
    }







































    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreTestRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreTestRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Test  $test
     * @return \Illuminate\Http\Response
     */
    public function show(Test $test)
    {

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Test  $test
     * @return \Illuminate\Http\Response
     */
    public function edit(Test $test)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateTestRequest  $request
     * @param  \App\Models\Test  $test
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateTestRequest $request, Test $test)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Test  $test
     * @return \Illuminate\Http\Response
     */
    public function destroy(Test $test)
    {
        //
    }
}
