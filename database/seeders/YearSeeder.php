<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class YearSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('years')->insert([
            ['year' => '2022'],
            ['year' => '2021'],
            ['year' => '2020'],
            ['year' => '2019'],
            ['year' => '2018'],
        ]);
    }
}
