<script setup>
import { Head, Link} from '@inertiajs/vue3';
import { reactive, onMounted, ref, computed } from 'vue'
import { Inertia } from '@inertiajs/inertia';
import SeihoTestLayout from '@/Layouts/SeihoTestLayout.vue';

</script>


<template>
    <SeihoTestLayout title="ホーム">
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
            <section class="w-full h-full bg-white p-6 border border-gray-300 rounded-sm shadow-md">
            <h2 class="text-lg font-semibold mb-4">目次</h2>
            <ul class="list-disc pl-5 space-y-3 text-gray-700">
                <li><a href="#souron" class="hover:text-purple-500">生命保険総論（作成中）</a></li>
                <li><a href="#keiri" class="hover:text-purple-500">生命保険計理（作成中）</a></li>
                <li><a href="#kiken" class="hover:text-purple-500">危険選択</a></li>
                <li><a href="#yakkan" class="hover:text-purple-500">約款と法律</a></li>
                <li><a href="#kaikei" class="hover:text-purple-500">生命保険会計</a></li>
                <li><a href="#eigyo" class="hover:text-purple-500">生命保険商品と営業</a></li>
                <li><a href="#zeihou" class="hover:text-purple-500">生命保険と税法</a></li>
                <li><a href="#sisan" class="hover:text-purple-500">資産の運用</a></li>
            </ul>
            </section>
        </div>

        <!-- 生命保険総論セクション -->
        <div id="souron" class="container pt-10 mt-10 flex justify-between items-center mx-auto px-1 md:px-14 lg:px-24 w-4/5 md:w-1/2 lg:w-3/5">
            <section class="w-full">
                <h2 class="secondary-title">生命保険総論<span class="text-sm">（作成中）</span></h2>
                <p class="secondary-paragraph text-sm">8月実施の試験</p>
                    <div class="bg-white p-10 border border-gray-300 rounded-sm shadow-md">
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
                <h2 class="secondary-title">生命保険計理<span class="text-sm">（作成中）</span></h2>
                <p class="secondary-paragraph text-sm">8月実施の試験</p>
                    <div class="bg-white p-10 border border-gray-300 rounded-sm shadow-md">
                        <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 ">

                            <!-- ２０２３年度 -->
                            <div class="w-full">
                                <h2 class="secondary-head">2023年度</h2>
                            <div class="divide-y divide-gray-200 border-y border-gray-200">
                                <div class="">
                                <Link :href="route('keiri2023a')">
                                    <div class="py-3">
                                    <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームAの解説</button>
                                    </div>
                                </Link>
                                </div>
                                <div class="">
                                <Link :href="route('keiri2023b')">
                                    <div class="py-3">
                                    <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームBの解説</button>
                                    </div>
                                </Link>
                                </div>
                                <div class="">
                                <Link :href="route('keiri2023c')">
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
                                <Link :href="route('keiri2022a')">
                                    <div class="py-3">
                                    <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームAの解説</button>
                                    </div>
                                </Link>
                                </div>
                                <div class="">
                                <Link :href="route('keiri2022b')">
                                    <div class="py-3">
                                    <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームBの解説</button>
                                    </div>
                                </Link>
                                </div>
                                <div class="">
                                <Link :href="route('keiri2022c')">
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
                                <Link :href="route('keiri2021a')">
                                    <div class="py-3">
                                    <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームAの解説</button>
                                    </div>
                                </Link>
                                </div>
                                <div class="">
                                <Link :href="route('keiri2021b')">
                                    <div class="py-3">
                                    <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームBの解説</button>
                                    </div>
                                </Link>
                                </div>
                                <div class="">
                                <Link :href="route('keiri2021c')">
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
                    <div class="bg-white p-10 border border-gray-300 rounded-sm shadow-md">
                        <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 ">

                            <!-- ２０２３年度 -->
                            <div class="w-full">
                                <h2 class="secondary-head">2023年度</h2>
                            <div class="divide-y divide-gray-200 border-y border-gray-200">
                                <div class="">
                                <Link :href="route('kiken2023a')">
                                    <div class="py-3">
                                    <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームAの解説</button>
                                    </div>
                                </Link>
                                </div>
                                <div class="">
                                <Link :href="route('kiken2023b')">
                                    <div class="py-3">
                                    <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームBの解説</button>
                                    </div>
                                </Link>
                                </div>
                                <div class="">
                                <Link :href="route('kiken2023c')">
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
                                <Link :href="route('kiken2022a')">
                                    <div class="py-3">
                                    <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームAの解説</button>
                                    </div>
                                </Link>
                                </div>
                                <div class="">
                                <Link :href="route('kiken2022b')">
                                    <div class="py-3">
                                    <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームBの解説</button>
                                    </div>
                                </Link>
                                </div>
                                <div class="">
                                <Link :href="route('kiken2022c')">
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
                                <Link :href="route('kiken2021a')">
                                    <div class="py-3">
                                    <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームAの解説</button>
                                    </div>
                                </Link>
                                </div>
                                <div class="">
                                <Link :href="route('kiken2021b')">
                                    <div class="py-3">
                                    <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームBの解説</button>
                                    </div>
                                </Link>
                                </div>
                                <div class="">
                                <Link :href="route('kiken2021c')">
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
                    <div class="bg-white p-10 border border-gray-300 rounded-sm shadow-md">
                        <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 ">

                            <!-- ２０２３年度 -->
                            <div class="w-full">
                                <h2 class="secondary-head">2023年度</h2>
                            <div class="divide-y divide-gray-200 border-y border-gray-200">
                                <div class="">
                                <Link :href="route('yakkan2023a')">
                                    <div class="py-3">
                                    <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームAの解説</button>
                                    </div>
                                </Link>
                                </div>
                                <div class="">
                                <Link :href="route('yakkan2023b')">
                                    <div class="py-3">
                                    <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームBの解説</button>
                                    </div>
                                </Link>
                                </div>
                                <div class="">
                                <Link :href="route('yakkan2023c')">
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
                                <Link :href="route('yakkan2022a')">
                                    <div class="py-3">
                                    <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームAの解説</button>
                                    </div>
                                </Link>
                                </div>
                                <div class="">
                                <Link :href="route('yakkan2022b')">
                                    <div class="py-3">
                                    <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームBの解説</button>
                                    </div>
                                </Link>
                                </div>
                                <div class="">
                                <Link :href="route('yakkan2022c')">
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
                                <Link :href="route('yakkan2021a')">
                                    <div class="py-3">
                                    <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームAの解説</button>
                                    </div>
                                </Link>
                                </div>
                                <div class="">
                                <Link :href="route('yakkan2021b')">
                                    <div class="py-3">
                                    <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームBの解説</button>
                                    </div>
                                </Link>
                                </div>
                                <div class="">
                                <Link :href="route('yakkan2021c')">
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
                    <div class="bg-white p-10 border border-gray-300 rounded-sm shadow-md">
                        <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 ">

                            <!-- ２０２３年度 -->
                            <div class="w-full">
                                <h2 class="secondary-head">2023年度</h2>
                            <div class="divide-y divide-gray-200 border-y border-gray-200">
                                <div class="">
                                <Link :href="route('kaikei2023a')">
                                    <div class="py-3">
                                    <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームAの解説</button>
                                    </div>
                                </Link>
                                </div>
                                <div class="">
                                <Link :href="route('kaikei2023b')">
                                    <div class="py-3">
                                    <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームBの解説</button>
                                    </div>
                                </Link>
                                </div>
                                <div class="">
                                <Link :href="route('kaikei2023c')">
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
                                <Link :href="route('kaikei2022a')">
                                    <div class="py-3">
                                    <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームAの解説</button>
                                    </div>
                                </Link>
                                </div>
                                <div class="">
                                <Link :href="route('kaikei2022b')">
                                    <div class="py-3">
                                    <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームBの解説</button>
                                    </div>
                                </Link>
                                </div>
                                <div class="">
                                <Link :href="route('kaikei2022c')">
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
                                <Link :href="route('kaikei2021a')">
                                    <div class="py-3">
                                    <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームAの解説</button>
                                    </div>
                                </Link>
                                </div>
                                <div class="">
                                <Link :href="route('kaikei2021b')">
                                    <div class="py-3">
                                    <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームBの解説</button>
                                    </div>
                                </Link>
                                </div>
                                <div class="">
                                <Link :href="route('kaikei2021c')">
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

        <!-- 生命保険商品と営業セクション -->
        <div id="eigyo" class="container pt-10 mt-10 flex justify-between items-center mx-auto px-1 md:px-14 lg:px-24 w-4/5 md:w-1/2 lg:w-3/5">
            <section class="w-full">
                <h2 class="secondary-title">生命保険商品と営業</h2>
                <p class="secondary-paragraph text-sm">12月実施の試験</p>
                    <div class="bg-white p-10 border border-gray-300 rounded-sm shadow-md">
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
                                <Link :href="route('eigyo2023b')">
                                    <div class="py-3">
                                    <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームBの解説</button>
                                    </div>
                                </Link>
                                </div>
                                <div class="">
                                <Link :href="route('eigyo2023c')">
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
                                <Link :href="route('eigyo2022a')">
                                    <div class="py-3">
                                    <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームAの解説</button>
                                    </div>
                                </Link>
                                </div>
                                <div class="">
                                <Link :href="route('eigyo2022b')">
                                    <div class="py-3">
                                    <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームBの解説</button>
                                    </div>
                                </Link>
                                </div>
                                <div class="">
                                <Link :href="route('eigyo2022c')">
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
                                <Link :href="route('eigyo2021a')">
                                    <div class="py-3">
                                    <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームAの解説</button>
                                    </div>
                                </Link>
                                </div>
                                <div class="">
                                <Link :href="route('eigyo2021b')">
                                    <div class="py-3">
                                    <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームBの解説</button>
                                    </div>
                                </Link>
                                </div>
                                <div class="">
                                <Link :href="route('eigyo2021c')">
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
                    <div class="bg-white p-10 border border-gray-300 rounded-sm shadow-md">
                        <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 ">

                            <!-- ２０２３年度 -->
                            <div class="w-full">
                                <h2 class="secondary-head">2023年度</h2>
                            <div class="divide-y divide-gray-200 border-y border-gray-200">
                                <div class="">
                                <Link :href="route('zeihou2023a')">
                                    <div class="py-3">
                                    <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームAの解説</button>
                                    </div>
                                </Link>
                                </div>
                                <div class="">
                                <Link :href="route('zeihou2023b')">
                                    <div class="py-3">
                                    <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームBの解説</button>
                                    </div>
                                </Link>
                                </div>
                                <div class="">
                                <Link :href="route('zeihou2023c')">
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
                                <Link :href="route('zeihou2022a')">
                                    <div class="py-3">
                                    <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームAの解説</button>
                                    </div>
                                </Link>
                                </div>
                                <div class="">
                                <Link :href="route('zeihou2022b')">
                                    <div class="py-3">
                                    <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームBの解説</button>
                                    </div>
                                </Link>
                                </div>
                                <div class="">
                                <Link :href="route('zeihou2022c')">
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
                                <Link :href="route('zeihou2021a')">
                                    <div class="py-3">
                                    <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームAの解説</button>
                                    </div>
                                </Link>
                                </div>
                                <div class="">
                                <Link :href="route('zeihou2021b')">
                                    <div class="py-3">
                                    <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームBの解説</button>
                                    </div>
                                </Link>
                                </div>
                                <div class="">
                                <Link :href="route('zeihou2021c')">
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

        <!-- 資産の運用セクション -->
        <div id="sisan" class="container pt-10 mt-10 flex justify-between items-center mx-auto px-1 md:px-14 lg:px-24 w-4/5 md:w-1/2 lg:w-3/5">
            <section class="w-full">
                <h2 class="secondary-title">資産の運用</h2>
                <p class="secondary-paragraph text-sm">2月実施の試験</p>
                    <div class="bg-white p-10 border border-gray-300 rounded-sm shadow-md">
                        <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 ">

                            <!-- ２０２３年度 -->
                            <div class="w-full">
                                <h2 class="secondary-head">2023年度</h2>
                            <div class="divide-y divide-gray-200 border-y border-gray-200">
                                <div class="">
                                <Link :href="route('sisan2023a')">
                                    <div class="py-3">
                                    <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームAの解説</button>
                                    </div>
                                </Link>
                                </div>
                                <div class="">
                                <Link :href="route('sisan2023b')">
                                    <div class="py-3">
                                    <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームBの解説</button>
                                    </div>
                                </Link>
                                </div>
                                <div class="">
                                <Link :href="route('sisan2023c')">
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
                                <Link :href="route('sisan2022a')">
                                    <div class="py-3">
                                    <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームAの解説</button>
                                    </div>
                                </Link>
                                </div>
                                <div class="">
                                <Link :href="route('sisan2022b')">
                                    <div class="py-3">
                                    <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームBの解説</button>
                                    </div>
                                </Link>
                                </div>
                                <div class="">
                                <Link :href="route('sisan2022c')">
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
                                <Link :href="route('sisan2021a')">
                                    <div class="py-3">
                                    <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームAの解説</button>
                                    </div>
                                </Link>
                                </div>
                                <div class="">
                                <Link :href="route('sisan2021b')">
                                    <div class="py-3">
                                    <button class="font-medium text-gray-700 h-10 hover:text-purple-500">フォームBの解説</button>
                                    </div>
                                </Link>
                                </div>
                                <div class="">
                                <Link :href="route('sisan2021c')">
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
    </SeihoTestLayout>
</template>
