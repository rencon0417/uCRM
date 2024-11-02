<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SubjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('subjects')->insert([
            ['subject' => '生命保険総論'],
            ['subject' => '生命保険計理'],
            ['subject' => '約款と法律'],
            ['subject' => '危険選択'],
            ['subject' => '生命保険商品と営業'],
            ['subject' => '生命保険会計'],
            ['subject' => '生命保険と税法'],
            ['subject' => '資産運用'],
        ]);
    }
}

