<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DemandeStatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('demande_statuses')->insert([
            [
                'label' => '未対応',
                'color' => 'gray',
                'created_at' => now(),
                'updated_at' => now(),
            ],[
                'label' => '処理中',
                'color' => 'blue',
                'created_at' => now(),
                'updated_at' => now(),
            ],[
                'label' => '完了',
                'color' => 'green',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
