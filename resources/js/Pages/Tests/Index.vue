<script setup>
import { Head, Link} from '@inertiajs/vue3';
import { reactive, onMounted, ref, computed } from 'vue'
import { Inertia } from '@inertiajs/inertia';
import SeihoTestLayout from '@/Layouts/SeihoTestLayout.vue';

const openGoogleForm = () => {
  const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSdYvdwHrldz56rBizNEgfUx9o5e9WdME_OwXpdjyv7oWlW3mQ/viewform?usp=header'; // ここに取得したURLを入力
  window.open(googleFormUrl, '_blank'); // 新しいタブで開く
};

</script>


<template>
    <SeihoTestLayout title="生命保険講座過去問解説">
        <div class="container mx-auto px-4 py-20 md:px-10 lg:px-20 w-4/5 md:w-1/2 lg:w-3/5 relative overflow-hidden">
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
        <p class="mt-8 mb-10 text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed font-sans">
            生命保険講座の過去問を無料解説
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
        <div id="index" class="container pb-10 my-20 flex justify-between items-center mx-auto px-1 md:px-14 lg:px-24 w-4/5 md:w-1/2 lg:w-3/5">
            <section class="w-full h-full bg-white p-6 border border-gray-300 rounded-sm shadow-md">
            <h2 class="text-lg font-semibold mb-4">目次</h2>
            <ul class="list-disc pl-5 space-y-3 text-gray-700">
                <li><a href="#souron" class="hover:text-purple-500">生命保険総論</a></li>
                <li><a href="#keiri" class="hover:text-purple-500">生命保険計理</a></li>
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
                <h2 class="secondary-title">生命保険総論</h2>
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
                <h2 class="secondary-title">生命保険計理</h2>
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
