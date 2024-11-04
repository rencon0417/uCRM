<script setup>
import { Head, Link} from '@inertiajs/vue3';
import { reactive, onMounted, ref, computed } from 'vue'
import { Inertia } from '@inertiajs/inertia';
import KaTeXDisplay from '../../Components/KaTeXDisplay.vue';

</script>

<template>
<Head title="生保講座過去問解説">
    <link rel="icon" href="/images/rencon3.png" />
</Head>
<div class="scroll-smooth">
    <!-- ナビゲーションバー -->
    <header class="py-6">
        <div class="container mx-auto flex justify-between items-center px-8 md:px-14 lg:px-24 w-full">
            <div class="text-xl font-bold flex justify-between items-center">
                <div class="px-2">
                    <img src="/images/rencon3.png" alt="れんこん" class="w-10 h-10" />
                </div>
                <Link :href="route('tests.index')">生保講座過去問解説</Link>
            </div>
        </div>
    </header>

    <!-- ヒーローセクション -->
    <div id="index" class="container my-20 py-4 flex justify-between items-center mx-auto px-1 md:px-14 lg:px-24 w-4/5 md:w-1/2 lg:w-3/5">
        <section class="w-full h-30">
            <h1 class="font-bold text-3xl lg:text-5xl md:text-3xl sm:text-3xl">
                    生保講座 <br />
                    過去問解説
            </h1>

        </section>
    </div>

    <!-- 目次 -->
    <div id="index" class="container pb-10 my-20 flex justify-between items-center mx-auto px-1 md:px-14 lg:px-24 w-4/5 md:w-1/2 lg:w-3/5">
        <section class="w-full h-full p-6 border border-gray-300 rounded-sm shadow-md">
        <h2 class="text-lg font-semibold mb-4">目次</h2>
        <ul class="list-disc pl-5 space-y-3 text-gray-700">
            <li><a href="#souron" class="hover:text-purple-500">生命保険総論</a></li>
            <li><a href="#keiri" class="hover:text-purple-500">生命保険計理</a></li>
            <li><a href="#kiken" class="hover:text-purple-500">危険選択</a></li>
            <li><a href="#yakkan" class="hover:text-purple-500">約款と法律</a></li>
            <li><a href="#kaikei" class="hover:text-purple-500">生命保険会計</a></li>
            <li><a href="#eigyo" class="hover:text-purple-500">生命保険と営業</a></li>
            <li><a href="#zeihou" class="hover:text-purple-500">生命保険と税法</a></li>
            <li><a href="#sisan" class="hover:text-purple-500">資産運用</a></li>
        </ul>
        </section>
    </div>

    <!-- 生命保険総論セクション -->
    <div id="souron" class="container pt-10 mt-10 flex justify-between items-center mx-auto px-1 md:px-14 lg:px-24 w-4/5 md:w-1/2 lg:w-3/5">
        <section class="w-full">
            <h2 class="secondary-title">生命保険総論</h2>
            <p class="secondary-paragraph text-sm">8月実施の試験</p>
                <div class="bg-white px-6 py-6 rounded">
                    <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 ">

                        <!-- ２０２３年度 -->
                        <div class="w-full">
                            <h2 class="secondary-head">2023年度</h2>
                        <div class="divide-y divide-gray-200 border-y border-gray-200">
                            <div class="">
                            <Link :href="route('souron2023a')">
                                <div class="py-3">
                                <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームAの解説</button>
                                </div>
                            </Link>
                            </div>
                            <div class="">
                            <Link :href="route('souron2023b')">
                                <div class="py-3">
                                <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームBの解説</button>
                                </div>
                            </Link>
                            </div>
                            <div class="">
                            <Link :href="route('souron2023c')">
                                <div class="py-3">
                                <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームCの解説</button>
                                </div>
                            </Link>
                            </div>
                        </div>
                        </div>
                        <!-- ２０２２年度 -->
                        <div class="w-full">
                            <h2 class="secondary-head">2022年度</h2>
                        <div class="divide-y divide-gray-200 border-y border-gray-200">
                            <div class="">
                            <Link :href="route('souron2022a')">
                                <div class="py-3">
                                <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームAの解説</button>
                                </div>
                            </Link>
                            </div>
                            <div class="">
                            <Link :href="route('souron2022b')">
                                <div class="py-3">
                                <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームBの解説</button>
                                </div>
                            </Link>
                            </div>
                            <div class="">
                            <Link :href="route('souron2022c')">
                                <div class="py-3">
                                <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームCの解説</button>
                                </div>
                            </Link>
                            </div>
                        </div>
                        </div>

                        <!-- ２０２１年度 -->
                        <div class="w-full">
                            <h2 class="secondary-head">2021年度</h2>
                        <div class="divide-y divide-gray-200 border-y border-gray-200">
                            <div class="">
                            <Link :href="route('souron2021a')">
                                <div class="py-3">
                                <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームAの解説</button>
                                </div>
                            </Link>
                            </div>
                            <div class="">
                            <Link :href="route('souron2021a')">
                                <div class="py-3">
                                <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームBの解説</button>
                                </div>
                            </Link>
                            </div>
                            <div class="">
                            <Link :href="route('souron2021a')">
                                <div class="py-3">
                                <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームCの解説</button>
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
    <div id="keiri" class="container pt-10 mt-10 flex justify-between items-center mx-auto px-1 md:px-14 lg:px-24 w-4/5 md:w-1/2 lg:w-3/5">
        <section class="w-full">
            <h2 class="secondary-title">生命保険計理</h2>
            <p class="secondary-paragraph text-sm">8月実施の試験</p>
                <div class="bg-white px-6 py-6 rounded">
                    <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 ">

                        <!-- ２０２３年度 -->
                        <div class="w-full">
                            <h2 class="secondary-head">2023年度</h2>
                        <div class="divide-y divide-gray-200 border-y border-gray-200">
                            <div class="">
                            <Link :href="route('souron2023a')">
                                <div class="py-3">
                                <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームAの解説</button>
                                </div>
                            </Link>
                            </div>
                            <div class="">
                            <Link :href="route('souron2023a')">
                                <div class="py-3">
                                <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームBの解説</button>
                                </div>
                            </Link>
                            </div>
                            <div class="">
                            <Link :href="route('souron2023a')">
                                <div class="py-3">
                                <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームCの解説</button>
                                </div>
                            </Link>
                            </div>
                        </div>
                        </div>
                        <!-- ２０２２年度 -->
                        <div class="w-full">
                            <h2 class="secondary-head">2022年度</h2>
                        <div class="divide-y divide-gray-200 border-y border-gray-200">
                            <div class="">
                            <Link :href="route('souron2023a')">
                                <div class="py-3">
                                <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームAの解説</button>
                                </div>
                            </Link>
                            </div>
                            <div class="">
                            <Link :href="route('souron2023a')">
                                <div class="py-3">
                                <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームBの解説</button>
                                </div>
                            </Link>
                            </div>
                            <div class="">
                            <Link :href="route('souron2023a')">
                                <div class="py-3">
                                <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームCの解説</button>
                                </div>
                            </Link>
                            </div>
                        </div>
                        </div>

                        <!-- ２０２１年度 -->
                        <div class="w-full">
                            <h2 class="secondary-head">2021年度</h2>
                        <div class="divide-y divide-gray-200 border-y border-gray-200">
                            <div class="">
                            <Link :href="route('souron2023a')">
                                <div class="py-3">
                                <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームAの解説</button>
                                </div>
                            </Link>
                            </div>
                            <div class="">
                            <Link :href="route('souron2023a')">
                                <div class="py-3">
                                <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームBの解説</button>
                                </div>
                            </Link>
                            </div>
                            <div class="">
                            <Link :href="route('souron2023a')">
                                <div class="py-3">
                                <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームCの解説</button>
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
    <div id="kiken" class="container pt-10 mt-10 flex justify-between items-center mx-auto px-1 md:px-14 lg:px-24 w-4/5 md:w-1/2 lg:w-3/5">
        <section class="w-full">
            <h2 class="secondary-title">危険選択</h2>
            <p class="secondary-paragraph text-sm">10月実施の試験</p>
                <div class="bg-white px-6 py-6 rounded">
                    <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 ">

                        <!-- ２０２３年度 -->
                        <div class="w-full">
                            <h2 class="secondary-head">2023年度</h2>
                        <div class="divide-y divide-gray-200 border-y border-gray-200">
                            <div class="">
                            <Link :href="route('souron2023a')">
                                <div class="py-3">
                                <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームAの解説</button>
                                </div>
                            </Link>
                            </div>
                            <div class="">
                            <Link :href="route('souron2023b')">
                                <div class="py-3">
                                <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームBの解説</button>
                                </div>
                            </Link>
                            </div>
                            <div class="">
                            <Link :href="route('souron2023a')">
                                <div class="py-3">
                                <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームCの解説</button>
                                </div>
                            </Link>
                            </div>
                        </div>
                        </div>
                        <!-- ２０２２年度 -->
                        <div class="w-full">
                            <h2 class="secondary-head">2022年度</h2>
                        <div class="divide-y divide-gray-200 border-y border-gray-200">
                            <div class="">
                            <Link :href="route('souron2023a')">
                                <div class="py-3">
                                <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームAの解説</button>
                                </div>
                            </Link>
                            </div>
                            <div class="">
                            <Link :href="route('souron2023a')">
                                <div class="py-3">
                                <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームBの解説</button>
                                </div>
                            </Link>
                            </div>
                            <div class="">
                            <Link :href="route('souron2023a')">
                                <div class="py-3">
                                <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームCの解説</button>
                                </div>
                            </Link>
                            </div>
                        </div>
                        </div>

                        <!-- ２０２１年度 -->
                        <div class="w-full">
                            <h2 class="secondary-head">2021年度</h2>
                        <div class="divide-y divide-gray-200 border-y border-gray-200">
                            <div class="">
                            <Link :href="route('souron2023a')">
                                <div class="py-3">
                                <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームAの解説</button>
                                </div>
                            </Link>
                            </div>
                            <div class="">
                            <Link :href="route('souron2023a')">
                                <div class="py-3">
                                <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームBの解説</button>
                                </div>
                            </Link>
                            </div>
                            <div class="">
                            <Link :href="route('souron2023a')">
                                <div class="py-3">
                                <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームCの解説</button>
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
    <div id="yakkan" class="container pt-10 mt-10 flex justify-between items-center mx-auto px-1 md:px-14 lg:px-24 w-4/5 md:w-1/2 lg:w-3/5">
        <section class="w-full">
            <h2 class="secondary-title">約款と法律</h2>
            <p class="secondary-paragraph text-sm">10月実施の試験</p>
                <div class="bg-white px-6 py-6 rounded">
                    <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 ">

                        <!-- ２０２３年度 -->
                        <div class="w-full">
                            <h2 class="secondary-head">2023年度</h2>
                        <div class="divide-y divide-gray-200 border-y border-gray-200">
                            <div class="">
                            <Link :href="route('souron2023a')">
                                <div class="py-3">
                                <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームAの解説</button>
                                </div>
                            </Link>
                            </div>
                            <div class="">
                            <Link :href="route('souron2023a')">
                                <div class="py-3">
                                <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームBの解説</button>
                                </div>
                            </Link>
                            </div>
                            <div class="">
                            <Link :href="route('souron2023a')">
                                <div class="py-3">
                                <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームCの解説</button>
                                </div>
                            </Link>
                            </div>
                        </div>
                        </div>
                        <!-- ２０２２年度 -->
                        <div class="w-full">
                            <h2 class="secondary-head">2022年度</h2>
                        <div class="divide-y divide-gray-200 border-y border-gray-200">
                            <div class="">
                            <Link :href="route('souron2023a')">
                                <div class="py-3">
                                <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームAの解説</button>
                                </div>
                            </Link>
                            </div>
                            <div class="">
                            <Link :href="route('souron2023a')">
                                <div class="py-3">
                                <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームBの解説</button>
                                </div>
                            </Link>
                            </div>
                            <div class="">
                            <Link :href="route('souron2023a')">
                                <div class="py-3">
                                <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームCの解説</button>
                                </div>
                            </Link>
                            </div>
                        </div>
                        </div>

                        <!-- ２０２１年度 -->
                        <div class="w-full">
                            <h2 class="secondary-head">2021年度</h2>
                        <div class="divide-y divide-gray-200 border-y border-gray-200">
                            <div class="">
                            <Link :href="route('souron2023a')">
                                <div class="py-3">
                                <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームAの解説</button>
                                </div>
                            </Link>
                            </div>
                            <div class="">
                            <Link :href="route('souron2023a')">
                                <div class="py-3">
                                <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームBの解説</button>
                                </div>
                            </Link>
                            </div>
                            <div class="">
                            <Link :href="route('souron2023a')">
                                <div class="py-3">
                                <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームCの解説</button>
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
    <div id="kaikei" class="container pt-10 mt-10 flex justify-between items-center mx-auto px-1 md:px-14 lg:px-24 w-4/5 md:w-1/2 lg:w-3/5">
        <section class="w-full">
            <h2 class="secondary-title">生命保険会計</h2>
            <p class="secondary-paragraph text-sm">12月実施の試験</p>
                <div class="bg-white px-6 py-6 rounded">
                    <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 ">

                        <!-- ２０２３年度 -->
                        <div class="w-full">
                            <h2 class="secondary-head">2023年度</h2>
                        <div class="divide-y divide-gray-200 border-y border-gray-200">
                            <div class="">
                            <Link :href="route('souron2023a')">
                                <div class="py-3">
                                <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームAの解説</button>
                                </div>
                            </Link>
                            </div>
                            <div class="">
                            <Link :href="route('souron2023b')">
                                <div class="py-3">
                                <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームBの解説</button>
                                </div>
                            </Link>
                            </div>
                            <div class="">
                            <Link :href="route('souron2023a')">
                                <div class="py-3">
                                <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームCの解説</button>
                                </div>
                            </Link>
                            </div>
                        </div>
                        </div>
                        <!-- ２０２２年度 -->
                        <div class="w-full">
                            <h2 class="secondary-head">2022年度</h2>
                        <div class="divide-y divide-gray-200 border-y border-gray-200">
                            <div class="">
                            <Link :href="route('souron2023a')">
                                <div class="py-3">
                                <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームAの解説</button>
                                </div>
                            </Link>
                            </div>
                            <div class="">
                            <Link :href="route('souron2023a')">
                                <div class="py-3">
                                <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームBの解説</button>
                                </div>
                            </Link>
                            </div>
                            <div class="">
                            <Link :href="route('souron2023a')">
                                <div class="py-3">
                                <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームCの解説</button>
                                </div>
                            </Link>
                            </div>
                        </div>
                        </div>

                        <!-- ２０２１年度 -->
                        <div class="w-full">
                            <h2 class="secondary-head">2021年度</h2>
                        <div class="divide-y divide-gray-200 border-y border-gray-200">
                            <div class="">
                            <Link :href="route('souron2023a')">
                                <div class="py-3">
                                <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームAの解説</button>
                                </div>
                            </Link>
                            </div>
                            <div class="">
                            <Link :href="route('souron2023a')">
                                <div class="py-3">
                                <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームBの解説</button>
                                </div>
                            </Link>
                            </div>
                            <div class="">
                            <Link :href="route('souron2023a')">
                                <div class="py-3">
                                <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームCの解説</button>
                                </div>
                            </Link>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
        </section>
    </div>

    <!-- 生命保険と営業セクション -->
    <div id="eigyo" class="container pt-10 mt-10 flex justify-between items-center mx-auto px-1 md:px-14 lg:px-24 w-4/5 md:w-1/2 lg:w-3/5">
        <section class="w-full">
            <h2 class="secondary-title">生命保険と営業</h2>
            <p class="secondary-paragraph text-sm">12月実施の試験</p>
                <div class="bg-white px-6 py-6 rounded">
                    <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 ">

                        <!-- ２０２３年度 -->
                        <div class="w-full">
                            <h2 class="secondary-head">2023年度</h2>
                        <div class="divide-y divide-gray-200 border-y border-gray-200">
                            <div class="">
                            <Link :href="route('eigyo2023a')">
                                <div class="py-3">
                                <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームAの解説</button>
                                </div>
                            </Link>
                            </div>
                            <div class="">
                            <Link :href="route('souron2023a')">
                                <div class="py-3">
                                <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームBの解説</button>
                                </div>
                            </Link>
                            </div>
                            <div class="">
                            <Link :href="route('souron2023a')">
                                <div class="py-3">
                                <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームCの解説</button>
                                </div>
                            </Link>
                            </div>
                        </div>
                        </div>
                        <!-- ２０２２年度 -->
                        <div class="w-full">
                            <h2 class="secondary-head">2022年度</h2>
                        <div class="divide-y divide-gray-200 border-y border-gray-200">
                            <div class="">
                            <Link :href="route('souron2023a')">
                                <div class="py-3">
                                <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームAの解説</button>
                                </div>
                            </Link>
                            </div>
                            <div class="">
                            <Link :href="route('souron2023a')">
                                <div class="py-3">
                                <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームBの解説</button>
                                </div>
                            </Link>
                            </div>
                            <div class="">
                            <Link :href="route('souron2023a')">
                                <div class="py-3">
                                <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームCの解説</button>
                                </div>
                            </Link>
                            </div>
                        </div>
                        </div>

                        <!-- ２０２１年度 -->
                        <div class="w-full">
                            <h2 class="secondary-head">2021年度</h2>
                        <div class="divide-y divide-gray-200 border-y border-gray-200">
                            <div class="">
                            <Link :href="route('souron2023a')">
                                <div class="py-3">
                                <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームAの解説</button>
                                </div>
                            </Link>
                            </div>
                            <div class="">
                            <Link :href="route('souron2023a')">
                                <div class="py-3">
                                <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームBの解説</button>
                                </div>
                            </Link>
                            </div>
                            <div class="">
                            <Link :href="route('souron2023a')">
                                <div class="py-3">
                                <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームCの解説</button>
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
    <div id="zeihou" class="container pt-10 mt-10 flex justify-between items-center mx-auto px-1 md:px-14 lg:px-24 w-4/5 md:w-1/2 lg:w-3/5">
        <section class="w-full">
            <h2 class="secondary-title">生命保険と税法</h2>
            <p class="secondary-paragraph text-sm">2月実施の試験</p>
                <div class="bg-white px-6 py-6 rounded">
                    <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 ">

                        <!-- ２０２３年度 -->
                        <div class="w-full">
                            <h2 class="secondary-head">2023年度</h2>
                        <div class="divide-y divide-gray-200 border-y border-gray-200">
                            <div class="">
                            <Link :href="route('souron2023a')">
                                <div class="py-3">
                                <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームAの解説</button>
                                </div>
                            </Link>
                            </div>
                            <div class="">
                            <Link :href="route('souron2023b')">
                                <div class="py-3">
                                <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームBの解説</button>
                                </div>
                            </Link>
                            </div>
                            <div class="">
                            <Link :href="route('souron2023a')">
                                <div class="py-3">
                                <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームCの解説</button>
                                </div>
                            </Link>
                            </div>
                        </div>
                        </div>
                        <!-- ２０２２年度 -->
                        <div class="w-full">
                            <h2 class="secondary-head">2022年度</h2>
                        <div class="divide-y divide-gray-200 border-y border-gray-200">
                            <div class="">
                            <Link :href="route('souron2023a')">
                                <div class="py-3">
                                <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームAの解説</button>
                                </div>
                            </Link>
                            </div>
                            <div class="">
                            <Link :href="route('souron2023a')">
                                <div class="py-3">
                                <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームBの解説</button>
                                </div>
                            </Link>
                            </div>
                            <div class="">
                            <Link :href="route('souron2023a')">
                                <div class="py-3">
                                <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームCの解説</button>
                                </div>
                            </Link>
                            </div>
                        </div>
                        </div>

                        <!-- ２０２１年度 -->
                        <div class="w-full">
                            <h2 class="secondary-head">2021年度</h2>
                        <div class="divide-y divide-gray-200 border-y border-gray-200">
                            <div class="">
                            <Link :href="route('souron2023a')">
                                <div class="py-3">
                                <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームAの解説</button>
                                </div>
                            </Link>
                            </div>
                            <div class="">
                            <Link :href="route('souron2023a')">
                                <div class="py-3">
                                <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームBの解説</button>
                                </div>
                            </Link>
                            </div>
                            <div class="">
                            <Link :href="route('souron2023a')">
                                <div class="py-3">
                                <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームCの解説</button>
                                </div>
                            </Link>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
        </section>
    </div>

    <!-- 資産運用セクション -->
    <div id="sisan" class="container pt-10 mt-10 flex justify-between items-center mx-auto px-1 md:px-14 lg:px-24 w-4/5 md:w-1/2 lg:w-3/5">
        <section class="w-full">
            <h2 class="secondary-title">資産運用</h2>
            <p class="secondary-paragraph text-sm">2月実施の試験</p>
                <div class="bg-white px-6 py-6 rounded">
                    <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 ">

                        <!-- ２０２３年度 -->
                        <div class="w-full">
                            <h2 class="secondary-head">2023年度</h2>
                        <div class="divide-y divide-gray-200 border-y border-gray-200">
                            <div class="">
                            <Link :href="route('souron2023a')">
                                <div class="py-3">
                                <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームAの解説</button>
                                </div>
                            </Link>
                            </div>
                            <div class="">
                            <Link :href="route('souron2023a')">
                                <div class="py-3">
                                <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームBの解説</button>
                                </div>
                            </Link>
                            </div>
                            <div class="">
                            <Link :href="route('souron2023a')">
                                <div class="py-3">
                                <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームCの解説</button>
                                </div>
                            </Link>
                            </div>
                        </div>
                        </div>
                        <!-- ２０２２年度 -->
                        <div class="w-full">
                            <h2 class="secondary-head">2022年度</h2>
                        <div class="divide-y divide-gray-200 border-y border-gray-200">
                            <div class="">
                            <Link :href="route('souron2023a')">
                                <div class="py-3">
                                <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームAの解説</button>
                                </div>
                            </Link>
                            </div>
                            <div class="">
                            <Link :href="route('souron2023a')">
                                <div class="py-3">
                                <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームBの解説</button>
                                </div>
                            </Link>
                            </div>
                            <div class="">
                            <Link :href="route('souron2023a')">
                                <div class="py-3">
                                <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームCの解説</button>
                                </div>
                            </Link>
                            </div>
                        </div>
                        </div>

                        <!-- ２０２１年度 -->
                        <div class="w-full">
                            <h2 class="secondary-head">2021年度</h2>
                        <div class="divide-y divide-gray-200 border-y border-gray-200">
                            <div class="">
                            <Link :href="route('souron2023a')">
                                <div class="py-3">
                                <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームAの解説</button>
                                </div>
                            </Link>
                            </div>
                            <div class="">
                            <Link :href="route('souron2023a')">
                                <div class="py-3">
                                <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームBの解説</button>
                                </div>
                            </Link>
                            </div>
                            <div class="">
                            <Link :href="route('souron2023a')">
                                <div class="py-3">
                                <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームCの解説</button>
                                </div>
                            </Link>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
        </section>
    </div>

    <!-- フッターセクション -->
    <footer class="text-gray-600 body-font">
    <div class="container px-5 py-20 mx-auto flex items-center sm:flex-row flex-col">
        <img src="/images/rencon3.png" alt="れんこん" class="w-10 h-10" />
        <span class="ml-3">生保講座過去問解説</span>
        <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2024</p>
        <p class="text-gray-600 ml-1 text-sm" rel="noopener noreferrer" target="_blank">@ rencon</p>
    </div>
    </footer>
</div>

</template>
