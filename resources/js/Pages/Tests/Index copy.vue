<script setup>
import { Link } from '@inertiajs/vue3';
import SeihoTestLayout from '@/Layouts/SeihoTestLayout.vue';

</script>

<template>
    <SeihoTestLayout title="生命保険講座過去問解説">
        <!-- ヒーローセクション -->
        <div class="mx-auto px-4 py-20 md:px-10 lg:px-20 w-4/5 md:w-1/2 lg:w-3/5 relative overflow-hidden">
            <!-- Background gradient -->
            <div class="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 rounded-lg"></div>

            <!-- Decorative elements -->
            <div class="absolute top-0 right-0 w-64 h-64 -mr-32 -mt-32 bg-blue-100 rounded-full opacity-50"></div>
            <div class="absolute bottom-0 left-0 w-48 h-48 -ml-24 -mb-24 bg-purple-100 rounded-full opacity-50"></div>

            <!-- Additional decorative circles -->
            <div class="absolute top-1/2 right-0 w-16 h-16 mr-8 bg-purple-100 rounded-full opacity-40"></div>
            <div class="absolute top-1/3 left-0 w-20 h-20 -ml-10 bg-blue-100 rounded-full opacity-40"></div>

            <!-- Small decorative dots -->
            <div class="absolute top-20 right-20 w-4 h-4 bg-blue-400 rounded-full opacity-30"></div>
            <div class="absolute bottom-16 right-40 w-3 h-3 bg-purple-400 rounded-full opacity-30"></div>
            <div class="absolute top-40 left-16 w-2 h-2 bg-blue-400 rounded-full opacity-30"></div>

            <!-- Subtle grid pattern -->
            <div class="absolute inset-0 opacity-5">
                <div class="w-full h-full" style="background-image: radial-gradient(circle at 1px 1px, gray 1px, transparent 0); background-size: 24px 24px;"></div>
            </div>

            <section class="w-full relative z-10">
                <div class="absolute -left-8 top-0 w-1 h-32 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full opacity-50"></div>

                <h1 class="font-bold text-5xl md:text-6xl lg:text-7xl text-gray-800 leading-tight font-sans">
                    生保講座<br>
                    過去問解説
                </h1>
                <p class="mt-8 mb-10 text-base md:text-xl lg:text-2xl text-gray-700 leading-relaxed font-sans">
                    生命保険講座の過去問を完全無料で徹底解説<br>

                </p>

                <!-- Enhanced visual separator -->
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
                <!-- 装飾的な背景要素 -->
                <div class="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-100 to-blue-100 opacity-50 rounded-full -mr-20 -mt-20"></div>
                <div class="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-blue-100 to-purple-100 opacity-50 rounded-full -ml-16 -mb-16"></div>

                <!-- 目次ヘッダー -->
                <div class="relative flex items-center gap-3 mb-8">
                    <div class="w-1.5 h-6 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
                    <h2 class="text-xl font-bold text-gray-800">目次</h2>
                </div>
                <!-- 目次リスト -->
                <ul class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-gray-800 text-base sm:text-lg">
                    <li class="flex items-center group hover:bg-gray-50 rounded-lg px-3 py-2 transition">
                        <div class="w-2 h-2 bg-purple-400 rounded-full mr-3 group-hover:bg-purple-600 transition-colors"></div>
                        <a href="#souron" class="hover:text-purple-600 transition-colors flex-grow font-medium">
                            生命保険総論
                        </a>
                    </li>
                    <li class="flex items-center group hover:bg-gray-50 rounded-lg px-3 py-2 transition">
                        <div class="w-2 h-2 bg-purple-400 rounded-full mr-3 group-hover:bg-purple-600 transition-colors"></div>
                        <a href="#keiri" class="hover:text-purple-600 transition-colors flex-grow font-medium">
                            生命保険計理
                        </a>
                    </li>
                    <li class="flex items-center group hover:bg-gray-50 rounded-lg px-3 py-2 transition">
                        <div class="w-2 h-2 bg-purple-400 rounded-full mr-3 group-hover:bg-purple-600 transition-colors"></div>
                        <a href="#kiken" class="hover:text-purple-600 transition-colors flex-grow font-medium">
                            危険選択
                        </a>
                    </li>
                    <li class="flex items-center group hover:bg-gray-50 rounded-lg px-3 py-2 transition">
                        <div class="w-2 h-2 bg-purple-400 rounded-full mr-3 group-hover:bg-purple-600 transition-colors"></div>
                        <a href="#yakkan" class="hover:text-purple-600 transition-colors flex-grow font-medium">
                            約款と法律
                        </a>
                    </li>
                    <li class="flex items-center group hover:bg-gray-50 rounded-lg px-3 py-2 transition">
                        <div class="w-2 h-2 bg-purple-400 rounded-full mr-3 group-hover:bg-purple-600 transition-colors"></div>
                        <a href="#kaikei" class="hover:text-purple-600 transition-colors flex-grow font-medium">
                            生命保険会計
                        </a>
                    </li>
                    <li class="flex items-center group hover:bg-gray-50 rounded-lg px-3 py-2 transition">
                        <div class="w-2 h-2 bg-purple-400 rounded-full mr-3 group-hover:bg-purple-600 transition-colors"></div>
                        <a href="#eigyo" class="hover:text-purple-600 transition-colors flex-grow font-medium">
                            生命保険商品と営業
                        </a>
                    </li>
                    <li class="flex items-center group hover:bg-gray-50 rounded-lg px-3 py-2 transition">
                        <div class="w-2 h-2 bg-purple-400 rounded-full mr-3 group-hover:bg-purple-600 transition-colors"></div>
                        <a href="#zeihou" class="hover:text-purple-600 transition-colors flex-grow font-medium">
                            生命保険と税法
                        </a>
                    </li>
                    <li class="flex items-center group hover:bg-gray-50 rounded-lg px-3 py-2 transition">
                        <div class="w-2 h-2 bg-purple-400 rounded-full mr-3 group-hover:bg-purple-600 transition-colors"></div>
                        <a href="#sisan" class="hover:text-purple-600 transition-colors flex-grow font-medium">
                            資産の運用
                        </a>
                    </li>
                </ul>
            </section>
        </div>

        <!-- 生命保険総論セクション -->
        <div id="souron" class="container pt-10 mt-10 flex justify-between items-center mx-auto px-4 md:px-10 lg:px-20 w-4/5">
            <section class="w-full">
                <!-- セクションヘッダー -->
                <div class="relative mb-6 flex items-center">
                    <div class="w-1.5 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mr-4"></div>
                    <div>
                        <h2 class="text-2xl font-bold text-gray-800">生命保険総論</h2>
                        <p class="text-sm text-gray-600 mt-1">8月〜9月実施の試験</p>
                    </div>
                </div>

                <!-- メインコンテンツ -->
                <div class="bg-white p-6 rounded-lg shadow-lg relative overflow-hidden">

                    <!-- グリッドレイアウト -->
                    <div class="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6 relative">
                        <!-- ２０２４年度 -->
                        <div class="group">
                            <div class="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 transition-all duration-300 hover:shadow-md">
                                <h2 class="text-lg font-bold text-gray-800 mb-4 flex items-center">
                                    <div class="w-1 h-4 bg-purple-400 rounded-full mr-2"></div>
                                    2024年度
                                </h2>
                                <div class="space-y-2">
                                    <Link :href="route('souron2024a')" class="block">
                                        <div class="p-3 rounded-md bg-white hover:bg-purple-50 transition-colors duration-200 border border-gray-100 hover:border-purple-200">
                                            <span class="font-medium text-gray-700 hover:text-purple-500">フォームAの解説</span>
                                        </div>
                                    </Link>
                                    <Link :href="route('souron2024b')" class="block">
                                        <div class="p-3 rounded-md bg-white hover:bg-purple-50 transition-colors duration-200 border border-gray-100 hover:border-purple-200">
                                            <span class="font-medium text-gray-700 hover:text-purple-500">フォームBの解説</span>
                                        </div>
                                    </Link>
                                    <Link :href="route('souron2024c')" class="block">
                                        <div class="p-3 rounded-md bg-white hover:bg-purple-50 transition-colors duration-200 border border-gray-100 hover:border-purple-200">
                                            <span class="font-medium text-gray-700 hover:text-purple-500">フォームCの解説</span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <!-- ２０２３年度 -->
                        <div class="group">
                            <div class="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 transition-all duration-300 hover:shadow-md">
                                <h2 class="text-lg font-bold text-gray-800 mb-4 flex items-center">
                                    <div class="w-1 h-4 bg-purple-400 rounded-full mr-2"></div>
                                    2023年度
                                </h2>
                                <div class="space-y-2">
                                    <Link :href="route('souron2023a')" class="block">
                                        <div class="p-3 rounded-md bg-white hover:bg-purple-50 transition-colors duration-200 border border-gray-100 hover:border-purple-200">
                                            <span class="font-medium text-gray-700 hover:text-purple-500">フォームAの解説</span>
                                        </div>
                                    </Link>
                                    <Link :href="route('souron2023b')" class="block">
                                        <div class="p-3 rounded-md bg-white hover:bg-purple-50 transition-colors duration-200 border border-gray-100 hover:border-purple-200">
                                            <span class="font-medium text-gray-700 hover:text-purple-500">フォームBの解説</span>
                                        </div>
                                    </Link>
                                    <Link :href="route('souron2023c')" class="block">
                                        <div class="p-3 rounded-md bg-white hover:bg-purple-50 transition-colors duration-200 border border-gray-100 hover:border-purple-200">
                                            <span class="font-medium text-gray-700 hover:text-purple-500">フォームCの解説</span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <!-- ２０２２年度 (同じパターンを繰り返し) -->
                        <div class="group">
                            <div class="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 transition-all duration-300 hover:shadow-md">
                                <h2 class="text-lg font-bold text-gray-800 mb-4 flex items-center">
                                    <div class="w-1 h-4 bg-purple-400 rounded-full mr-2"></div>
                                    2022年度
                                </h2>
                                <div class="space-y-2">
                                    <Link :href="route('souron2022a')" class="block">
                                        <div class="p-3 rounded-md bg-white hover:bg-purple-50 transition-colors duration-200 border border-gray-100 hover:border-purple-200">
                                            <span class="font-medium text-gray-700 hover:text-purple-500">フォームAの解説</span>
                                        </div>
                                    </Link>
                                    <Link :href="route('souron2022b')" class="block">
                                        <div class="p-3 rounded-md bg-white hover:bg-purple-50 transition-colors duration-200 border border-gray-100 hover:border-purple-200">
                                            <span class="font-medium text-gray-700 hover:text-purple-500">フォームBの解説</span>
                                        </div>
                                    </Link>
                                    <Link :href="route('souron2022c')" class="block">
                                        <div class="p-3 rounded-md bg-white hover:bg-purple-50 transition-colors duration-200 border border-gray-100 hover:border-purple-200">
                                            <span class="font-medium text-gray-700 hover:text-purple-500">フォームCの解説</span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <!-- ２０２１年度 (同じパターンを繰り返し) -->
                        <div class="group">
                            <div class="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 transition-all duration-300 hover:shadow-md">
                                <h2 class="text-lg font-bold text-gray-800 mb-4 flex items-center">
                                    <div class="w-1 h-4 bg-purple-400 rounded-full mr-2"></div>
                                    2021年度
                                </h2>
                                <div class="space-y-2">
                                    <Link :href="route('souron2021a')" class="block">
                                        <div class="p-3 rounded-md bg-white hover:bg-purple-50 transition-colors duration-200 border border-gray-100 hover:border-purple-200">
                                            <span class="font-medium text-gray-700 hover:text-purple-500">フォームAの解説</span>
                                        </div>
                                    </Link>
                                    <Link :href="route('souron2021b')" class="block">
                                        <div class="p-3 rounded-md bg-white hover:bg-purple-50 transition-colors duration-200 border border-gray-100 hover:border-purple-200">
                                            <span class="font-medium text-gray-700 hover:text-purple-500">フォームBの解説</span>
                                        </div>
                                    </Link>
                                    <Link :href="route('souron2021c')" class="block">
                                        <div class="p-3 rounded-md bg-white hover:bg-purple-50 transition-colors duration-200 border border-gray-100 hover:border-purple-200">
                                            <span class="font-medium text-gray-700 hover:text-purple-500">フォームCの解説</span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>

        <!-- 生命保険計理セクション -->
        <div id="keiri" class="container pt-10 mt-10 flex justify-between items-center mx-auto px-1 md:px-14 lg:px-24 w-4/5">
            <section class="w-full">
                <!-- セクションヘッダー -->
                <div class="relative mb-6 flex items-center">
                    <div class="w-1.5 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mr-4"></div>
                    <div>
                        <h2 class="text-2xl font-bold text-gray-800">生命保険計理</h2>
                        <p class="text-sm text-gray-600 mt-1">8月〜9月実施の試験</p>
                    </div>
                </div>

                <!-- メインコンテンツ -->
                <div class="bg-white p-6 rounded-lg shadow-lg relative overflow-hidden">
                    <!-- グリッドレイアウト -->
                    <div class="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6 relative">

                        <!-- ２０２４年度 -->
                        <div class="group">
                            <div class="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 transition-all duration-300 hover:shadow-md">
                                <h2 class="text-lg font-bold text-gray-800 mb-4 flex items-center">
                                    <div class="w-1 h-4 bg-purple-400 rounded-full mr-2"></div>
                                    2024年度
                                </h2>
                                <div class="space-y-2">
                                    <Link :href="route('keiri2024a')" class="block">
                                        <div class="p-3 rounded-md bg-white hover:bg-purple-50 transition-colors duration-200 border border-gray-100 hover:border-purple-200">
                                            <span class="font-medium text-gray-700 hover:text-purple-500">フォームAの解説</span>
                                        </div>
                                    </Link>
                                    <Link :href="route('keiri2024b')" class="block">
                                        <div class="p-3 rounded-md bg-white hover:bg-purple-50 transition-colors duration-200 border border-gray-100 hover:border-purple-200">
                                            <span class="font-medium text-gray-700 hover:text-purple-500">フォームBの解説</span>
                                        </div>
                                    </Link>
                                    <Link :href="route('keiri2024c')" class="block">
                                        <div class="p-3 rounded-md bg-white hover:bg-purple-50 transition-colors duration-200 border border-gray-100 hover:border-purple-200">
                                            <span class="font-medium text-gray-700 hover:text-purple-500">フォームCの解説</span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <!-- ２０２３年度 -->
                        <div class="group">
                            <div class="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 transition-all duration-300 hover:shadow-md">
                                <h2 class="text-lg font-bold text-gray-800 mb-4 flex items-center">
                                    <div class="w-1 h-4 bg-purple-400 rounded-full mr-2"></div>
                                    2023年度
                                </h2>
                                <div class="space-y-2">
                                    <Link :href="route('keiri2023a')" class="block">
                                        <div class="p-3 rounded-md bg-white hover:bg-purple-50 transition-colors duration-200 border border-gray-100 hover:border-purple-200">
                                            <span class="font-medium text-gray-700 hover:text-purple-500">フォームAの解説</span>
                                        </div>
                                    </Link>
                                    <Link :href="route('keiri2023b')" class="block">
                                        <div class="p-3 rounded-md bg-white hover:bg-purple-50 transition-colors duration-200 border border-gray-100 hover:border-purple-200">
                                            <span class="font-medium text-gray-700 hover:text-purple-500">フォームBの解説</span>
                                        </div>
                                    </Link>
                                    <Link :href="route('keiri2023c')" class="block">
                                        <div class="p-3 rounded-md bg-white hover:bg-purple-50 transition-colors duration-200 border border-gray-100 hover:border-purple-200">
                                            <span class="font-medium text-gray-700 hover:text-purple-500">フォームCの解説</span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <!-- ２０２２年度 (同じパターンを繰り返し) -->
                        <div class="group">
                            <div class="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 transition-all duration-300 hover:shadow-md">
                                <h2 class="text-lg font-bold text-gray-800 mb-4 flex items-center">
                                    <div class="w-1 h-4 bg-purple-400 rounded-full mr-2"></div>
                                    2022年度
                                </h2>
                                <div class="space-y-2">
                                    <Link :href="route('keiri2022a')" class="block">
                                        <div class="p-3 rounded-md bg-white hover:bg-purple-50 transition-colors duration-200 border border-gray-100 hover:border-purple-200">
                                            <span class="font-medium text-gray-700 hover:text-purple-500">フォームAの解説</span>
                                        </div>
                                    </Link>
                                    <Link :href="route('keiri2022b')" class="block">
                                        <div class="p-3 rounded-md bg-white hover:bg-purple-50 transition-colors duration-200 border border-gray-100 hover:border-purple-200">
                                            <span class="font-medium text-gray-700 hover:text-purple-500">フォームBの解説</span>
                                        </div>
                                    </Link>
                                    <Link :href="route('keiri2022c')" class="block">
                                        <div class="p-3 rounded-md bg-white hover:bg-purple-50 transition-colors duration-200 border border-gray-100 hover:border-purple-200">
                                            <span class="font-medium text-gray-700 hover:text-purple-500">フォームCの解説</span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <!-- ２０２１年度 (同じパターンを繰り返し) -->
                        <div class="group">
                            <div class="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 transition-all duration-300 hover:shadow-md">
                                <h2 class="text-lg font-bold text-gray-800 mb-4 flex items-center">
                                    <div class="w-1 h-4 bg-purple-400 rounded-full mr-2"></div>
                                    2021年度
                                </h2>
                                <div class="space-y-2">
                                    <Link :href="route('keiri2021a')" class="block">
                                        <div class="p-3 rounded-md bg-white hover:bg-purple-50 transition-colors duration-200 border border-gray-100 hover:border-purple-200">
                                            <span class="font-medium text-gray-700 hover:text-purple-500">フォームAの解説</span>
                                        </div>
                                    </Link>
                                    <Link :href="route('keiri2021b')" class="block">
                                        <div class="p-3 rounded-md bg-white hover:bg-purple-50 transition-colors duration-200 border border-gray-100 hover:border-purple-200">
                                            <span class="font-medium text-gray-700 hover:text-purple-500">フォームBの解説</span>
                                        </div>
                                    </Link>
                                    <Link :href="route('keiri2021c')" class="block">
                                        <div class="p-3 rounded-md bg-white hover:bg-purple-50 transition-colors duration-200 border border-gray-100 hover:border-purple-200">
                                            <span class="font-medium text-gray-700 hover:text-purple-500">フォームCの解説</span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>

        <!-- 危険選択セクション -->
        <div id="kiken" class="container pt-10 mt-10 flex justify-between items-center mx-auto px-1 md:px-14 lg:px-24 w-4/5">
            <section class="w-full">
                <!-- セクションヘッダー -->
                <div class="relative mb-6 flex items-center">
                    <div class="w-1.5 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mr-4"></div>
                    <div>
                        <h2 class="text-2xl font-bold text-gray-800">危険選択</h2>
                        <p class="text-sm text-gray-600 mt-1">10月〜11月実施の試験</p>
                    </div>
                </div>

                <!-- メインコンテンツ -->
                <div class="bg-white p-6 rounded-lg shadow-lg relative overflow-hidden">
                    <!-- グリッドレイアウト -->
                    <div class="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6 relative">

                        <!-- ２０２４年度 -->
                        <div class="group">
                            <div class="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 transition-all duration-300 hover:shadow-md">
                                <h2 class="text-lg font-bold text-gray-800 mb-4 flex items-center">
                                    <div class="w-1 h-4 bg-purple-400 rounded-full mr-2"></div>
                                    2024年度
                                </h2>
                                <div class="space-y-2">
                                    <Link :href="route('kiken2024a')" class="block">
                                        <div class="p-3 rounded-md bg-white hover:bg-purple-50 transition-colors duration-200 border border-gray-100 hover:border-purple-200">
                                            <span class="font-medium text-gray-700 hover:text-purple-500">フォームAの解説</span>
                                        </div>
                                    </Link>
                                    <Link :href="route('kiken2024b')" class="block">
                                        <div class="p-3 rounded-md bg-white hover:bg-purple-50 transition-colors duration-200 border border-gray-100 hover:border-purple-200">
                                            <span class="font-medium text-gray-700 hover:text-purple-500">フォームBの解説</span>
                                        </div>
                                    </Link>
                                    <Link :href="route('kiken2024c')" class="block">
                                        <div class="p-3 rounded-md bg-white hover:bg-purple-50 transition-colors duration-200 border border-gray-100 hover:border-purple-200">
                                            <span class="font-medium text-gray-700 hover:text-purple-500">フォームCの解説</span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <!-- ２０２３年度 -->
                        <div class="group">
                            <div class="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 transition-all duration-300 hover:shadow-md">
                                <h2 class="text-lg font-bold text-gray-800 mb-4 flex items-center">
                                    <div class="w-1 h-4 bg-purple-400 rounded-full mr-2"></div>
                                    2023年度
                                </h2>
                                <div class="space-y-2">
                                    <Link :href="route('kiken2023a')" class="block">
                                        <div class="p-3 rounded-md bg-white hover:bg-purple-50 transition-colors duration-200 border border-gray-100 hover:border-purple-200">
                                            <span class="font-medium text-gray-700 hover:text-purple-500">フォームAの解説</span>
                                        </div>
                                    </Link>
                                    <Link :href="route('kiken2023b')" class="block">
                                        <div class="p-3 rounded-md bg-white hover:bg-purple-50 transition-colors duration-200 border border-gray-100 hover:border-purple-200">
                                            <span class="font-medium text-gray-700 hover:text-purple-500">フォームBの解説</span>
                                        </div>
                                    </Link>
                                    <Link :href="route('kiken2023c')" class="block">
                                        <div class="p-3 rounded-md bg-white hover:bg-purple-50 transition-colors duration-200 border border-gray-100 hover:border-purple-200">
                                            <span class="font-medium text-gray-700 hover:text-purple-500">フォームCの解説</span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <!-- ２０２２年度 (同じパターンを繰り返し) -->
                        <div class="group">
                            <div class="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 transition-all duration-300 hover:shadow-md">
                                <h2 class="text-lg font-bold text-gray-800 mb-4 flex items-center">
                                    <div class="w-1 h-4 bg-purple-400 rounded-full mr-2"></div>
                                    2022年度
                                </h2>
                                <div class="space-y-2">
                                    <Link :href="route('kiken2022a')" class="block">
                                        <div class="p-3 rounded-md bg-white hover:bg-purple-50 transition-colors duration-200 border border-gray-100 hover:border-purple-200">
                                            <span class="font-medium text-gray-700 hover:text-purple-500">フォームAの解説</span>
                                        </div>
                                    </Link>
                                    <Link :href="route('kiken2022b')" class="block">
                                        <div class="p-3 rounded-md bg-white hover:bg-purple-50 transition-colors duration-200 border border-gray-100 hover:border-purple-200">
                                            <span class="font-medium text-gray-700 hover:text-purple-500">フォームBの解説</span>
                                        </div>
                                    </Link>
                                    <Link :href="route('kiken2022c')" class="block">
                                        <div class="p-3 rounded-md bg-white hover:bg-purple-50 transition-colors duration-200 border border-gray-100 hover:border-purple-200">
                                            <span class="font-medium text-gray-700 hover:text-purple-500">フォームCの解説</span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <!-- ２０２１年度 (同じパターンを繰り返し) -->
                        <div class="group">
                            <div class="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 transition-all duration-300 hover:shadow-md">
                                <h2 class="text-lg font-bold text-gray-800 mb-4 flex items-center">
                                    <div class="w-1 h-4 bg-purple-400 rounded-full mr-2"></div>
                                    2021年度
                                </h2>
                                <div class="space-y-2">
                                    <Link :href="route('kiken2021a')" class="block">
                                        <div class="p-3 rounded-md bg-white hover:bg-purple-50 transition-colors duration-200 border border-gray-100 hover:border-purple-200">
                                            <span class="font-medium text-gray-700 hover:text-purple-500">フォームAの解説</span>
                                        </div>
                                    </Link>
                                    <Link :href="route('kiken2021b')" class="block">
                                        <div class="p-3 rounded-md bg-white hover:bg-purple-50 transition-colors duration-200 border border-gray-100 hover:border-purple-200">
                                            <span class="font-medium text-gray-700 hover:text-purple-500">フォームBの解説</span>
                                        </div>
                                    </Link>
                                    <Link :href="route('kiken2021c')" class="block">
                                        <div class="p-3 rounded-md bg-white hover:bg-purple-50 transition-colors duration-200 border border-gray-100 hover:border-purple-200">
                                            <span class="font-medium text-gray-700 hover:text-purple-500">フォームCの解説</span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>

        <!-- 約款と法律セクション -->
        <div id="yakkan" class="container pt-10 mt-10 flex justify-between items-center mx-auto px-1 md:px-14 lg:px-24 w-4/5">
            <section class="w-full">
                <!-- セクションヘッダー -->
                <div class="relative mb-6 flex items-center">
                    <div class="w-1.5 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mr-4"></div>
                    <div>
                        <h2 class="text-2xl font-bold text-gray-800">約款と法律</h2>
                        <p class="text-sm text-gray-600 mt-1">10月〜11月実施の試験</p>
                    </div>
                </div>

                <!-- メインコンテンツ -->
                <div class="bg-white p-6 rounded-lg shadow-lg relative overflow-hidden">
                    <!-- グリッドレイアウト -->
                    <div class="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6 relative">
                        <!-- ２０２４年度 -->
                        <div class="group">
                            <div class="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 transition-all duration-300 hover:shadow-md">
                                <h2 class="text-lg font-bold text-gray-800 mb-4 flex items-center">
                                    <div class="w-1 h-4 bg-purple-400 rounded-full mr-2"></div>
                                    2024年度
                                </h2>
                                <div class="space-y-2">
                                    <Link :href="route('yakkan2024a')" class="block">
                                        <div class="p-3 rounded-md bg-white hover:bg-purple-50 transition-colors duration-200 border border-gray-100 hover:border-purple-200">
                                            <span class="font-medium text-gray-700 hover:text-purple-500">フォームAの解説</span>
                                        </div>
                                    </Link>
                                    <Link :href="route('yakkan2024b')" class="block">
                                        <div class="p-3 rounded-md bg-white hover:bg-purple-50 transition-colors duration-200 border border-gray-100 hover:border-purple-200">
                                            <span class="font-medium text-gray-700 hover:text-purple-500">フォームBの解説</span>
                                        </div>
                                    </Link>
                                    <Link :href="route('yakkan2024c')" class="block">
                                        <div class="p-3 rounded-md bg-white hover:bg-purple-50 transition-colors duration-200 border border-gray-100 hover:border-purple-200">
                                            <span class="font-medium text-gray-700 hover:text-purple-500">フォームCの解説</span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <!-- ２０２３年度 -->
                        <div class="group">
                            <div class="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 transition-all duration-300 hover:shadow-md">
                                <h2 class="text-lg font-bold text-gray-800 mb-4 flex items-center">
                                    <div class="w-1 h-4 bg-purple-400 rounded-full mr-2"></div>
                                    2023年度
                                </h2>
                                <div class="space-y-2">
                                    <Link :href="route('yakkan2023a')" class="block">
                                        <div class="p-3 rounded-md bg-white hover:bg-purple-50 transition-colors duration-200 border border-gray-100 hover:border-purple-200">
                                            <span class="font-medium text-gray-700 hover:text-purple-500">フォームAの解説</span>
                                        </div>
                                    </Link>
                                    <Link :href="route('yakkan2023b')" class="block">
                                        <div class="p-3 rounded-md bg-white hover:bg-purple-50 transition-colors duration-200 border border-gray-100 hover:border-purple-200">
                                            <span class="font-medium text-gray-700 hover:text-purple-500">フォームBの解説</span>
                                        </div>
                                    </Link>
                                    <Link :href="route('yakkan2023c')" class="block">
                                        <div class="p-3 rounded-md bg-white hover:bg-purple-50 transition-colors duration-200 border border-gray-100 hover:border-purple-200">
                                            <span class="font-medium text-gray-700 hover:text-purple-500">フォームCの解説</span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <!-- ２０２２年度 -->
                        <div class="group">
                            <div class="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 transition-all duration-300 hover:shadow-md">
                                <h2 class="text-lg font-bold text-gray-800 mb-4 flex items-center">
                                    <div class="w-1 h-4 bg-purple-400 rounded-full mr-2"></div>
                                    2022年度
                                </h2>
                                <div class="space-y-2">
                                    <Link :href="route('yakkan2022a')" class="block">
                                        <div class="p-3 rounded-md bg-white hover:bg-purple-50 transition-colors duration-200 border border-gray-100 hover:border-purple-200">
                                            <span class="font-medium text-gray-700 hover:text-purple-500">フォームAの解説</span>
                                        </div>
                                    </Link>
                                    <Link :href="route('yakkan2022b')" class="block">
                                        <div class="p-3 rounded-md bg-white hover:bg-purple-50 transition-colors duration-200 border border-gray-100 hover:border-purple-200">
                                            <span class="font-medium text-gray-700 hover:text-purple-500">フォームBの解説</span>
                                        </div>
                                    </Link>
                                    <Link :href="route('yakkan2022c')" class="block">
                                        <div class="p-3 rounded-md bg-white hover:bg-purple-50 transition-colors duration-200 border border-gray-100 hover:border-purple-200">
                                            <span class="font-medium text-gray-700 hover:text-purple-500">フォームCの解説</span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <!-- ２０２１年度 -->
                        <div class="group">
                            <div class="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 transition-all duration-300 hover:shadow-md">
                                <h2 class="text-lg font-bold text-gray-800 mb-4 flex items-center">
                                    <div class="w-1 h-4 bg-purple-400 rounded-full mr-2"></div>
                                    2021年度
                                </h2>
                                <div class="space-y-2">
                                    <Link :href="route('yakkan2021a')" class="block">
                                        <div class="p-3 rounded-md bg-white hover:bg-purple-50 transition-colors duration-200 border border-gray-100 hover:border-purple-200">
                                            <span class="font-medium text-gray-700 hover:text-purple-500">フォームAの解説</span>
                                        </div>
                                    </Link>
                                    <Link :href="route('yakkan2021b')" class="block">
                                        <div class="p-3 rounded-md bg-white hover:bg-purple-50 transition-colors duration-200 border border-gray-100 hover:border-purple-200">
                                            <span class="font-medium text-gray-700 hover:text-purple-500">フォームBの解説</span>
                                        </div>
                                    </Link>
                                    <Link :href="route('yakkan2021c')" class="block">
                                        <div class="p-3 rounded-md bg-white hover:bg-purple-50 transition-colors duration-200 border border-gray-100 hover:border-purple-200">
                                            <span class="font-medium text-gray-700 hover:text-purple-500">フォームCの解説</span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>

        <!-- 生命保険会計セクション -->
        <div id="kaikei" class="container pt-10 mt-10 flex justify-between items-center mx-auto px-1 md:px-14 lg:px-24 w-4/5">
            <section class="w-full">
                <!-- セクションヘッダー -->
                <div class="relative mb-6 flex items-center">
                    <div class="w-1.5 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mr-4"></div>
                    <div>
                        <h2 class="text-2xl font-bold text-gray-800">生命保険会計</h2>
                        <p class="text-sm text-gray-600 mt-1">12月〜1月実施の試験</p>
                    </div>
                </div>

                <!-- メインコンテンツ -->
                <div class="bg-white p-6 rounded-lg shadow-lg relative overflow-hidden">

                    <!-- グリッドレイアウト -->
                    <div class="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6 relative">
                        <!-- ２０２４年度 -->
                        <div class="group">
                            <div class="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 transition-all duration-300 hover:shadow-md">
                                <h2 class="text-lg font-bold text-gray-800 mb-4 flex items-center">
                                    <div class="w-1 h-4 bg-purple-400 rounded-full mr-2"></div>
                                    2024年度
                                    <span class="ml-3 text-xs font-semibold text-white bg-gradient-to-r from-pink-500 to-red-500 px-2 py-0.5 rounded-full shadow-sm animate-pulse">
                                        NEW
                                    </span>
                                </h2>
                                <div class="space-y-2">
                                    <Link :href="route('kaikei2024a')" class="block">
                                        <div class="p-3 rounded-md bg-white hover:bg-purple-50 transition-colors duration-200 border border-gray-100 hover:border-purple-200">
                                            <span class="font-medium text-gray-700 hover:text-purple-500">フォームAの解説</span>
                                        </div>
                                    </Link>
                                    <Link :href="route('kaikei2024b')" class="block">
                                        <div class="p-3 rounded-md bg-white hover:bg-purple-50 transition-colors duration-200 border border-gray-100 hover:border-purple-200">
                                            <span class="font-medium text-gray-700 hover:text-purple-500">フォームBの解説</span>
                                        </div>
                                    </Link>
                                    <Link :href="route('kaikei2024c')" class="block">
                                        <div class="p-3 rounded-md bg-white hover:bg-purple-50 transition-colors duration-200 border border-gray-100 hover:border-purple-200">
                                            <span class="font-medium text-gray-700 hover:text-purple-500">フォームCの解説</span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <!-- ２０２３年度 -->
                        <div class="group">
                            <div class="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 transition-all duration-300 hover:shadow-md">
                                <h2 class="text-lg font-bold text-gray-800 mb-4 flex items-center">
                                    <div class="w-1 h-4 bg-purple-400 rounded-full mr-2"></div>
                                    2023年度
                                </h2>
                                <div class="space-y-2">
                                    <Link :href="route('kaikei2023a')" class="block">
                                        <div class="p-3 rounded-md bg-white hover:bg-purple-50 transition-colors duration-200 border border-gray-100 hover:border-purple-200">
                                            <span class="font-medium text-gray-700 hover:text-purple-500">フォームAの解説</span>
                                        </div>
                                    </Link>
                                    <Link :href="route('kaikei2023b')" class="block">
                                        <div class="p-3 rounded-md bg-white hover:bg-purple-50 transition-colors duration-200 border border-gray-100 hover:border-purple-200">
                                            <span class="font-medium text-gray-700 hover:text-purple-500">フォームBの解説</span>
                                        </div>
                                    </Link>
                                    <Link :href="route('kaikei2023c')" class="block">
                                        <div class="p-3 rounded-md bg-white hover:bg-purple-50 transition-colors duration-200 border border-gray-100 hover:border-purple-200">
                                            <span class="font-medium text-gray-700 hover:text-purple-500">フォームCの解説</span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <!-- ２０２２年度 (同じパターンを繰り返し) -->
                        <div class="group">
                            <div class="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 transition-all duration-300 hover:shadow-md">
                                <h2 class="text-lg font-bold text-gray-800 mb-4 flex items-center">
                                    <div class="w-1 h-4 bg-purple-400 rounded-full mr-2"></div>
                                    2022年度
                                </h2>
                                <div class="space-y-2">
                                    <Link :href="route('kaikei2022a')" class="block">
                                        <div class="p-3 rounded-md bg-white hover:bg-purple-50 transition-colors duration-200 border border-gray-100 hover:border-purple-200">
                                            <span class="font-medium text-gray-700 hover:text-purple-500">フォームAの解説</span>
                                        </div>
                                    </Link>
                                    <Link :href="route('kaikei2022b')" class="block">
                                        <div class="p-3 rounded-md bg-white hover:bg-purple-50 transition-colors duration-200 border border-gray-100 hover:border-purple-200">
                                            <span class="font-medium text-gray-700 hover:text-purple-500">フォームBの解説</span>
                                        </div>
                                    </Link>
                                    <Link :href="route('kaikei2022c')" class="block">
                                        <div class="p-3 rounded-md bg-white hover:bg-purple-50 transition-colors duration-200 border border-gray-100 hover:border-purple-200">
                                            <span class="font-medium text-gray-700 hover:text-purple-500">フォームCの解説</span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <!-- ２０２１年度 (同じパターンを繰り返し) -->
                        <div class="group">
                            <div class="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 transition-all duration-300 hover:shadow-md">
                                <h2 class="text-lg font-bold text-gray-800 mb-4 flex items-center">
                                    <div class="w-1 h-4 bg-purple-400 rounded-full mr-2"></div>
                                    2021年度
                                </h2>
                                <div class="space-y-2">
                                    <Link :href="route('kaikei2021a')" class="block">
                                        <div class="p-3 rounded-md bg-white hover:bg-purple-50 transition-colors duration-200 border border-gray-100 hover:border-purple-200">
                                            <span class="font-medium text-gray-700 hover:text-purple-500">フォームAの解説</span>
                                        </div>
                                    </Link>
                                    <Link :href="route('kaikei2021b')" class="block">
                                        <div class="p-3 rounded-md bg-white hover:bg-purple-50 transition-colors duration-200 border border-gray-100 hover:border-purple-200">
                                            <span class="font-medium text-gray-700 hover:text-purple-500">フォームBの解説</span>
                                        </div>
                                    </Link>
                                    <Link :href="route('kaikei2021c')" class="block">
                                        <div class="p-3 rounded-md bg-white hover:bg-purple-50 transition-colors duration-200 border border-gray-100 hover:border-purple-200">
                                            <span class="font-medium text-gray-700 hover:text-purple-500">フォームCの解説</span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>

        <!-- 生命保険商品と営業セクション -->
        <div id="eigyo" class="container pt-10 mt-10 flex justify-between items-center mx-auto px-1 md:px-14 lg:px-24 w-4/5">
            <section class="w-full">
                <!-- セクションヘッダー -->
                <div class="relative mb-6 flex items-center">
                    <div class="w-1.5 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mr-4"></div>
                    <div>
                        <h2 class="text-2xl font-bold text-gray-800">生命保険商品と営業</h2>
                        <p class="text-sm text-gray-600 mt-1">12月〜1月実施の試験</p>
                    </div>
                </div>

                <!-- メインコンテンツ -->
                <div class="bg-white p-6 rounded-lg shadow-lg relative overflow-hidden">

                    <!-- グリッドレイアウト -->
                    <div class="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6 relative">

                        <!-- ２０２４年度 -->
                        <div class="group">
                            <div class="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 transition-all duration-300 hover:shadow-md">
                                <h2 class="text-lg font-bold text-gray-800 mb-4 flex items-center">
                                    <div class="w-1 h-4 bg-purple-400 rounded-full mr-2"></div>
                                    2024年度
                                    <span class="ml-3 text-xs font-semibold text-white bg-gradient-to-r from-pink-500 to-red-500 px-2 py-0.5 rounded-full shadow-sm animate-pulse">
                                        NEW
                                    </span>
                                </h2>
                                <div class="space-y-2">
                                    <Link :href="route('eigyo2024a')" class="block">
                                        <div class="p-3 rounded-md bg-white hover:bg-purple-50 transition-colors duration-200 border border-gray-100 hover:border-purple-200">
                                            <span class="font-medium text-gray-700 hover:text-purple-500">フォームAの解説</span>
                                        </div>
                                    </Link>
                                    <Link :href="route('eigyo2024b')" class="block">
                                        <div class="p-3 rounded-md bg-white hover:bg-purple-50 transition-colors duration-200 border border-gray-100 hover:border-purple-200">
                                            <span class="font-medium text-gray-700 hover:text-purple-500">フォームBの解説</span>
                                        </div>
                                    </Link>
                                    <Link :href="route('eigyo2024c')" class="block">
                                        <div class="p-3 rounded-md bg-white hover:bg-purple-50 transition-colors duration-200 border border-gray-100 hover:border-purple-200">
                                            <span class="font-medium text-gray-700 hover:text-purple-500">フォームCの解説</span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <!-- ２０２３年度 -->
                        <div class="group">
                            <div class="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 transition-all duration-300 hover:shadow-md">
                                <h2 class="text-lg font-bold text-gray-800 mb-4 flex items-center">
                                    <div class="w-1 h-4 bg-purple-400 rounded-full mr-2"></div>
                                    2023年度
                                </h2>
                                <div class="space-y-2">
                                    <Link :href="route('eigyo2023a')" class="block">
                                        <div class="p-3 rounded-md bg-white hover:bg-purple-50 transition-colors duration-200 border border-gray-100 hover:border-purple-200">
                                            <span class="font-medium text-gray-700 hover:text-purple-500">フォームAの解説</span>
                                        </div>
                                    </Link>
                                    <Link :href="route('eigyo2023b')" class="block">
                                        <div class="p-3 rounded-md bg-white hover:bg-purple-50 transition-colors duration-200 border border-gray-100 hover:border-purple-200">
                                            <span class="font-medium text-gray-700 hover:text-purple-500">フォームBの解説</span>
                                        </div>
                                    </Link>
                                    <Link :href="route('eigyo2023c')" class="block">
                                        <div class="p-3 rounded-md bg-white hover:bg-purple-50 transition-colors duration-200 border border-gray-100 hover:border-purple-200">
                                            <span class="font-medium text-gray-700 hover:text-purple-500">フォームCの解説</span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <!-- ２０２２年度 (同じパターンを繰り返し) -->
                        <div class="group">
                            <div class="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 transition-all duration-300 hover:shadow-md">
                                <h2 class="text-lg font-bold text-gray-800 mb-4 flex items-center">
                                    <div class="w-1 h-4 bg-purple-400 rounded-full mr-2"></div>
                                    2022年度
                                </h2>
                                <div class="space-y-2">
                                    <Link :href="route('eigyo2022a')" class="block">
                                        <div class="p-3 rounded-md bg-white hover:bg-purple-50 transition-colors duration-200 border border-gray-100 hover:border-purple-200">
                                            <span class="font-medium text-gray-700 hover:text-purple-500">フォームAの解説</span>
                                        </div>
                                    </Link>
                                    <Link :href="route('eigyo2022b')" class="block">
                                        <div class="p-3 rounded-md bg-white hover:bg-purple-50 transition-colors duration-200 border border-gray-100 hover:border-purple-200">
                                            <span class="font-medium text-gray-700 hover:text-purple-500">フォームBの解説</span>
                                        </div>
                                    </Link>
                                    <Link :href="route('eigyo2022c')" class="block">
                                        <div class="p-3 rounded-md bg-white hover:bg-purple-50 transition-colors duration-200 border border-gray-100 hover:border-purple-200">
                                            <span class="font-medium text-gray-700 hover:text-purple-500">フォームCの解説</span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <!-- ２０２１年度 (同じパターンを繰り返し) -->
                        <div class="group">
                            <div class="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 transition-all duration-300 hover:shadow-md">
                                <h2 class="text-lg font-bold text-gray-800 mb-4 flex items-center">
                                    <div class="w-1 h-4 bg-purple-400 rounded-full mr-2"></div>
                                    2021年度
                                </h2>
                                <div class="space-y-2">
                                    <Link :href="route('eigyo2021a')" class="block">
                                        <div class="p-3 rounded-md bg-white hover:bg-purple-50 transition-colors duration-200 border border-gray-100 hover:border-purple-200">
                                            <span class="font-medium text-gray-700 hover:text-purple-500">フォームAの解説</span>
                                        </div>
                                    </Link>
                                    <Link :href="route('eigyo2021b')" class="block">
                                        <div class="p-3 rounded-md bg-white hover:bg-purple-50 transition-colors duration-200 border border-gray-100 hover:border-purple-200">
                                            <span class="font-medium text-gray-700 hover:text-purple-500">フォームBの解説</span>
                                        </div>
                                    </Link>
                                    <Link :href="route('eigyo2021c')" class="block">
                                        <div class="p-3 rounded-md bg-white hover:bg-purple-50 transition-colors duration-200 border border-gray-100 hover:border-purple-200">
                                            <span class="font-medium text-gray-700 hover:text-purple-500">フォームCの解説</span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>

        <!-- 生命保険と税法セクション -->
        <div id="zeihou" class="container pt-10 mt-10 flex justify-between items-center mx-auto px-1 md:px-14 lg:px-24 w-4/5">
            <section class="w-full">
                <!-- セクションヘッダー -->
                <div class="relative mb-6 flex items-center">
                    <div class="w-1.5 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mr-4"></div>
                    <div>
                        <h2 class="text-2xl font-bold text-gray-800">生命保険と税法</h2>
                        <p class="text-sm text-gray-600 mt-1">2月〜3月実施の試験</p>
                    </div>
                </div>

                <!-- メインコンテンツ -->
                <div class="bg-white p-6 rounded-lg shadow-lg relative overflow-hidden">

                    <!-- グリッドレイアウト -->
                    <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 relative">

                        <!-- ２０２３年度 -->
                        <div class="group">
                            <div class="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 transition-all duration-300 hover:shadow-md">
                                <h2 class="text-lg font-bold text-gray-800 mb-4 flex items-center">
                                    <div class="w-1 h-4 bg-purple-400 rounded-full mr-2"></div>
                                    2023年度
                                </h2>
                                <div class="space-y-2">
                                    <Link :href="route('zeihou2023a')" class="block">
                                        <div class="p-3 rounded-md bg-white hover:bg-purple-50 transition-colors duration-200 border border-gray-100 hover:border-purple-200">
                                            <span class="font-medium text-gray-700 hover:text-purple-500">フォームAの解説</span>
                                        </div>
                                    </Link>
                                    <Link :href="route('zeihou2023b')" class="block">
                                        <div class="p-3 rounded-md bg-white hover:bg-purple-50 transition-colors duration-200 border border-gray-100 hover:border-purple-200">
                                            <span class="font-medium text-gray-700 hover:text-purple-500">フォームBの解説</span>
                                        </div>
                                    </Link>
                                    <Link :href="route('zeihou2023c')" class="block">
                                        <div class="p-3 rounded-md bg-white hover:bg-purple-50 transition-colors duration-200 border border-gray-100 hover:border-purple-200">
                                            <span class="font-medium text-gray-700 hover:text-purple-500">フォームCの解説</span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <!-- ２０２２年度 (同じパターンを繰り返し) -->
                        <div class="group">
                            <div class="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 transition-all duration-300 hover:shadow-md">
                                <h2 class="text-lg font-bold text-gray-800 mb-4 flex items-center">
                                    <div class="w-1 h-4 bg-purple-400 rounded-full mr-2"></div>
                                    2022年度
                                </h2>
                                <div class="space-y-2">
                                    <Link :href="route('zeihou2022a')" class="block">
                                        <div class="p-3 rounded-md bg-white hover:bg-purple-50 transition-colors duration-200 border border-gray-100 hover:border-purple-200">
                                            <span class="font-medium text-gray-700 hover:text-purple-500">フォームAの解説</span>
                                        </div>
                                    </Link>
                                    <Link :href="route('zeihou2022b')" class="block">
                                        <div class="p-3 rounded-md bg-white hover:bg-purple-50 transition-colors duration-200 border border-gray-100 hover:border-purple-200">
                                            <span class="font-medium text-gray-700 hover:text-purple-500">フォームBの解説</span>
                                        </div>
                                    </Link>
                                    <Link :href="route('zeihou2022c')" class="block">
                                        <div class="p-3 rounded-md bg-white hover:bg-purple-50 transition-colors duration-200 border border-gray-100 hover:border-purple-200">
                                            <span class="font-medium text-gray-700 hover:text-purple-500">フォームCの解説</span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <!-- ２０２１年度 (同じパターンを繰り返し) -->
                        <div class="group">
                            <div class="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 transition-all duration-300 hover:shadow-md">
                                <h2 class="text-lg font-bold text-gray-800 mb-4 flex items-center">
                                    <div class="w-1 h-4 bg-purple-400 rounded-full mr-2"></div>
                                    2021年度
                                </h2>
                                <div class="space-y-2">
                                    <Link :href="route('zeihou2021a')" class="block">
                                        <div class="p-3 rounded-md bg-white hover:bg-purple-50 transition-colors duration-200 border border-gray-100 hover:border-purple-200">
                                            <span class="font-medium text-gray-700 hover:text-purple-500">フォームAの解説</span>
                                        </div>
                                    </Link>
                                    <Link :href="route('zeihou2021b')" class="block">
                                        <div class="p-3 rounded-md bg-white hover:bg-purple-50 transition-colors duration-200 border border-gray-100 hover:border-purple-200">
                                            <span class="font-medium text-gray-700 hover:text-purple-500">フォームBの解説</span>
                                        </div>
                                    </Link>
                                    <Link :href="route('zeihou2021c')" class="block">
                                        <div class="p-3 rounded-md bg-white hover:bg-purple-50 transition-colors duration-200 border border-gray-100 hover:border-purple-200">
                                            <span class="font-medium text-gray-700 hover:text-purple-500">フォームCの解説</span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>

        <!-- 資産の運用セクション -->
        <div id="sisan" class="container pt-10 mt-10 mb-10 flex justify-between items-center mx-auto px-1 md:px-14 lg:px-24 w-4/5">
            <section class="w-full">
                <!-- セクションヘッダー -->
                <div class="relative mb-6 flex items-center">
                    <div class="w-1.5 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mr-4"></div>
                    <div>
                        <h2 class="text-2xl font-bold text-gray-800">資産の運用</h2>
                        <p class="text-sm text-gray-600 mt-1">2月〜3月実施の試験</p>
                    </div>
                </div>

                <!-- メインコンテンツ -->
                <div class="bg-white p-6 rounded-lg shadow-lg relative overflow-hidden">

                    <!-- グリッドレイアウト -->
                    <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 relative">

                        <!-- ２０２３年度 -->
                        <div class="group">
                            <div class="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 transition-all duration-300 hover:shadow-md">
                                <h2 class="text-lg font-bold text-gray-800 mb-4 flex items-center">
                                    <div class="w-1 h-4 bg-purple-400 rounded-full mr-2"></div>
                                    2023年度
                                </h2>
                                <div class="space-y-2">
                                    <Link :href="route('sisan2023a')" class="block">
                                        <div class="p-3 rounded-md bg-white hover:bg-purple-50 transition-colors duration-200 border border-gray-100 hover:border-purple-200">
                                            <span class="font-medium text-gray-700 hover:text-purple-500">フォームAの解説</span>
                                        </div>
                                    </Link>
                                    <Link :href="route('sisan2023b')" class="block">
                                        <div class="p-3 rounded-md bg-white hover:bg-purple-50 transition-colors duration-200 border border-gray-100 hover:border-purple-200">
                                            <span class="font-medium text-gray-700 hover:text-purple-500">フォームBの解説</span>
                                        </div>
                                    </Link>
                                    <Link :href="route('sisan2023c')" class="block">
                                        <div class="p-3 rounded-md bg-white hover:bg-purple-50 transition-colors duration-200 border border-gray-100 hover:border-purple-200">
                                            <span class="font-medium text-gray-700 hover:text-purple-500">フォームCの解説</span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <!-- ２０２２年度 (同じパターンを繰り返し) -->
                        <div class="group">
                            <div class="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 transition-all duration-300 hover:shadow-md">
                                <h2 class="text-lg font-bold text-gray-800 mb-4 flex items-center">
                                    <div class="w-1 h-4 bg-purple-400 rounded-full mr-2"></div>
                                    2022年度
                                </h2>
                                <div class="space-y-2">
                                    <Link :href="route('sisan2022a')" class="block">
                                        <div class="p-3 rounded-md bg-white hover:bg-purple-50 transition-colors duration-200 border border-gray-100 hover:border-purple-200">
                                            <span class="font-medium text-gray-700 hover:text-purple-500">フォームAの解説</span>
                                        </div>
                                    </Link>
                                    <Link :href="route('sisan2022b')" class="block">
                                        <div class="p-3 rounded-md bg-white hover:bg-purple-50 transition-colors duration-200 border border-gray-100 hover:border-purple-200">
                                            <span class="font-medium text-gray-700 hover:text-purple-500">フォームBの解説</span>
                                        </div>
                                    </Link>
                                    <Link :href="route('sisan2022c')" class="block">
                                        <div class="p-3 rounded-md bg-white hover:bg-purple-50 transition-colors duration-200 border border-gray-100 hover:border-purple-200">
                                            <span class="font-medium text-gray-700 hover:text-purple-500">フォームCの解説</span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <!-- ２０２１年度 (同じパターンを繰り返し) -->
                        <div class="group">
                            <div class="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 transition-all duration-300 hover:shadow-md">
                                <h2 class="text-lg font-bold text-gray-800 mb-4 flex items-center">
                                    <div class="w-1 h-4 bg-purple-400 rounded-full mr-2"></div>
                                    2021年度
                                </h2>
                                <div class="space-y-2">
                                    <Link :href="route('sisan2021a')" class="block">
                                        <div class="p-3 rounded-md bg-white hover:bg-purple-50 transition-colors duration-200 border border-gray-100 hover:border-purple-200">
                                            <span class="font-medium text-gray-700 hover:text-purple-500">フォームAの解説</span>
                                        </div>
                                    </Link>
                                    <Link :href="route('sisan2021b')" class="block">
                                        <div class="p-3 rounded-md bg-white hover:bg-purple-50 transition-colors duration-200 border border-gray-100 hover:border-purple-200">
                                            <span class="font-medium text-gray-700 hover:text-purple-500">フォームBの解説</span>
                                        </div>
                                    </Link>
                                    <Link :href="route('sisan2021c')" class="block">
                                        <div class="p-3 rounded-md bg-white hover:bg-purple-50 transition-colors duration-200 border border-gray-100 hover:border-purple-200">
                                            <span class="font-medium text-gray-700 hover:text-purple-500">フォームCの解説</span>
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


