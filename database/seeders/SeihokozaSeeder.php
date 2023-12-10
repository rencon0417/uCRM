<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SeihokozaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('seihokozas')->insert([
            [
                'subject' => '生命保険会計',
                'year' => 2022,
                'form' => 1,
                'question' => 1,
                'answer' => 1,
                'explanation' => 'ここに解説が記載されます。',
            ],
            [
                'subject' => '生命保険会計',
                'year' => 2022,
                'form' => 1,
                'question' => 2,
                'answer' => 2,
                'explanation' => 'ここに解説が記載されます。',
            ],[
                'subject' => '生命保険会計',
                'year' => 2022,
                'form' => 1,
                'question' => 3,
                'answer' => 1,
                'explanation' => 'ここに解説が記載されます。',
            ],[
                'subject' => '生命保険会計',
                'year' => 2022,
                'form' => 1,
                'question' => 4,
                'answer' => 1,
                'explanation' => 'ここに解説が記載されます。',
            ],
        ]);
    }
}
