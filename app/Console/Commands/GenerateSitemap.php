<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Spatie\Sitemap\Sitemap;
use Spatie\Sitemap\Tags\Url;

class GenerateSitemap extends Command
{
    protected $signature = 'sitemap:generate';
    protected $description = 'Generate sitemap.xml';

    public function handle()
    {
        $baseUrl = 'https://seiho-test.com';

        $sitemap = Sitemap::create()
            ->add(Url::create("{$baseUrl}/"))
            ->add(Url::create("{$baseUrl}/tests"));

        $subjects = [
            'souron' => ['2024', '2023', '2022', '2021'],
            'keiri'  => ['2024', '2023', '2022', '2021'],
            'kiken'  => ['2023', '2022', '2021'],
            'yakkan' => ['2023', '2022', '2021'],
            'kaikei' => ['2023', '2022', '2021'],
            'eigyo'  => ['2023', '2022', '2021'],
            'zeihou' => ['2023', '2022', '2021'],
            'sisan'  => ['2023', '2022', '2021'],
        ];

        $forms = ['a', 'b', 'c'];

        foreach ($subjects as $subject => $years) {
            foreach ($years as $year) {
                foreach ($forms as $form) {
                    $url = "{$baseUrl}/{$subject}{$year}{$form}";
                    $sitemap->add(Url::create($url));
                }
            }
        }

        $sitemap->writeToFile(public_path('sitemap.xml'));

        $this->info('✅ sitemap.xml generated successfully!');
    }
}
