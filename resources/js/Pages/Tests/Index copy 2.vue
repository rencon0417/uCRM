<script setup>
import { Link } from '@inertiajs/vue3';
import SeihoTestLayout from '@/Layouts/SeihoTestLayout.vue';

// セクションデータを配列で定義
const sections = [
    {
        id: 'souron',
        title: '生命保険総論',
        period: '8月〜9月実施の試験',
        years: [2024, 2023, 2022, 2021],
        routePrefix: 'souron',
        gridCols: 'lg:grid-cols-2 md:grid-cols-2'
    },
    {
        id: 'keiri',
        title: '生命保険計理',
        period: '8月〜9月実施の試験',
        years: [2024, 2023, 2022, 2021],
        routePrefix: 'keiri',
        gridCols: 'lg:grid-cols-2 md:grid-cols-2'
    },
    {
        id: 'kiken',
        title: '危険選択',
        period: '10月〜11月実施の試験',
        years: [2024, 2023, 2022, 2021],
        routePrefix: 'kiken',
        gridCols: 'lg:grid-cols-2 md:grid-cols-2'
    },
    {
        id: 'yakkan',
        title: '約款と法律',
        period: '10月〜11月実施の試験',
        years: [2024, 2023, 2022, 2021],
        routePrefix: 'yakkan',
        gridCols: 'lg:grid-cols-2 md:grid-cols-2'
    },
    {
        id: 'kaikei',
        title: '生命保険会計',
        period: '12月〜1月実施の試験',
        years: [2024, 2023, 2022, 2021],
        routePrefix: 'kaikei',
        gridCols: 'lg:grid-cols-2 md:grid-cols-2',
        showNew: true
    },
    {
        id: 'eigyo',
        title: '生命保険商品と営業',
        period: '12月〜1月実施の試験',
        years: [2024, 2023, 2022, 2021],
        routePrefix: 'eigyo',
        gridCols: 'lg:grid-cols-2 md:grid-cols-2',
        showNew: true
    },
    {
        id: 'zeihou',
        title: '生命保険と税法',
        period: '2月〜3月実施の試験',
        years: [2024, 2023, 2022, 2021],
        routePrefix: 'zeihou',
        gridCols: 'lg:grid-cols-2 md:grid-cols-2'
    },
    {
        id: 'sisan',
        title: '資産の運用',
        period: '2月〜3月実施の試験',
        years: [2024, 2023, 2022, 2021],
        routePrefix: 'sisan',
        gridCols: 'lg:grid-cols-2 md:grid-cols-2'
    }
];

const forms = ['a', 'b', 'c'];
</script>

<template>
    <SeihoTestLayout title="生命保険講座過去問解説">
        <!-- ヒーローセクション -->
        <div class="mx-auto px-4 py-20 md:px-10 lg:px-20 w-4/5 md:w-1/2 lg:w-3/5 relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 rounded-lg"></div>
            <div class="absolute top-0 right-0 w-64 h-64 -mr-32 -mt-32 bg-blue-100 rounded-full opacity-50"></div>
            <div class="absolute bottom-0 left-0 w-48 h-48 -ml-24 -mb-24 bg-purple-100 rounded-full opacity-50"></div>
            <div class="absolute top-1/2 right-0 w-16 h-16 mr-8 bg-purple-100 rounded-full opacity-40"></div>
            <div class="absolute top-1/3 left-0 w-20 h-20 -ml-10 bg-blue-100 rounded-full opacity-40"></div>
            <div class="absolute top-20 right-20 w-4 h-4 bg-blue-400 rounded-full opacity-30"></div>
            <div class="absolute bottom-16 right-40 w-3 h-3 bg-purple-400 rounded-full opacity-30"></div>
            <div class="absolute top-40 left-16 w-2 h-2 bg-blue-400 rounded-full opacity-30"></div>
            <div class="absolute inset-0 opacity-5">
                <div class="w-full h-full" style="background-image: radial-gradient(circle at 1px 1px, gray 1px, transparent 0); background-size: 24px 24px;"></div>
            </div>

            <section class="w-full relative z-10">
                <div class="absolute -left-8 top-0 w-1 h-32 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full opacity-50"></div>
                <h1 class="font-bold text-5xl md:text-6xl lg:text-7xl text-gray-800 leading-tight font-sans">
                    生保講座<br>過去問解説
                </h1>
                <p class="mt-8 mb-10 text-base md:text-xl lg:text-2xl text-gray-700 leading-relaxed font-sans">
                    生命保険講座の過去問を完全無料で徹底解説<br>
                </p>
                <div class="flex items-center gap-3">
                    <div class="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                    <div class="w-3 h-3 bg-blue-500 rounded-full opacity-50"></div>
                    <div class="w-2 h-2 bg-purple-500 rounded-full opacity-30"></div>
                </div>
            </section>
        </div>

        <!-- 目次 -->
        <div id="index" class="container pb-10 my-20 flex justify-between items-center mx-auto px-1 md:px-14 lg:px-24 w-4/5">
            <section class="w-full h-full bg-white p-8 rounded-lg shadow-lg relative overflow-hidden">
                <div class="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-100 to-blue-100 opacity-50 rounded-full -mr-20 -mt-20"></div>
                <div class="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-blue-100 to-purple-100 opacity-50 rounded-full -ml-16 -mb-16"></div>

                <div class="relative flex items-center gap-3 mb-8">
                    <div class="w-1.5 h-6 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
                    <h2 class="text-xl font-bold text-gray-800">目次</h2>
                </div>

                <ul class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-gray-800 text-base sm:text-lg">
                    <li v-for="section in sections" :key="section.id"
                        class="flex items-center group hover:bg-gray-50 rounded-lg px-3 py-2 transition">
                        <div class="w-2 h-2 bg-purple-400 rounded-full mr-3 group-hover:bg-purple-600 transition-colors"></div>
                        <a :href="`#${section.id}`" class="hover:text-purple-600 transition-colors flex-grow font-medium">
                            {{ section.title }}
                        </a>
                    </li>
                </ul>
            </section>
        </div>

        <!-- 各セクションをループで生成 -->
        <div v-for="(section, index) in sections" :key="section.id"
             :id="section.id"
             class="container pt-10 mt-10 flex justify-between items-center mx-auto px-1 md:px-14 lg:px-24 w-4/5"
             :class="{ 'mb-10': index === sections.length - 1 }">
            <section class="w-full">
                <div class="relative mb-6 flex items-center">
                    <div class="w-1.5 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mr-4"></div>
                    <div>
                        <h2 class="text-2xl font-bold text-gray-800">{{ section.title }}</h2>
                        <p class="text-sm text-gray-600 mt-1">{{ section.period }}</p>
                    </div>
                </div>

                <div class="bg-white p-6 rounded-lg shadow-lg relative overflow-hidden">
                    <div class="grid grid-cols-1 gap-6 relative" :class="section.gridCols">
                        <div v-for="year in section.years" :key="year" class="group">
                            <div class="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 transition-all duration-300 hover:shadow-md">
                                <h2 class="text-lg font-bold text-gray-800 mb-4 flex items-center">
                                    <div class="w-1 h-4 bg-purple-400 rounded-full mr-2"></div>
                                    {{ year }}年度
                                    <span v-if="section.showNew && year === 2024"
                                          class="ml-3 text-xs font-semibold text-white bg-gradient-to-r from-pink-500 to-red-500 px-2 py-0.5 rounded-full shadow-sm animate-pulse">
                                        NEW
                                    </span>
                                </h2>
                                <div class="space-y-2">
                                    <Link v-for="form in forms" :key="form"
                                          :href="route(`${section.routePrefix}${year}${form}`)"
                                          class="block">
                                        <div class="p-3 rounded-md bg-white hover:bg-purple-50 transition-colors duration-200 border border-gray-100 hover:border-purple-200">
                                            <span class="font-medium text-gray-700 hover:text-purple-500">
                                                フォーム{{ form.toUpperCase() }}の解説
                                            </span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </SeihoTestLayout>
</template>
