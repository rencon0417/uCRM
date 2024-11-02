<script setup>
import { Head, Link} from '@inertiajs/vue3';
import { ref, computed } from 'vue';
</script>

<template>
<Head title="生命保険講座｜問題" />

     <!-- ナビゲーションバー -->
     <header class="py-6">
        <div class="container mx-auto flex justify-between items-center px-8 md:px-14 lg:px-24 w-full">
            <div class="text-xl font-bold">
                <Link :href="route('tests.index')">生命保険講座.com</Link>
            </div>
            <div class="space-x-12 hidden md:flex items-center">
                <a href="#exam8" class="hover:text-selected-text transition-all duration-300">8月試験</a>
                <a href="#exam10" class="hover:text-selected-text transition-all duration-300">10月試験</a>
                <a href="#exam12" class="hover:text-selected-text transition-all duration-300">12月試験</a>
                <a href="#exam2" class="hover:text-selected-text transition-all duration-300">2月試験</a>
                <button class="px-6 py-2 bg-purple-400 font-bold rounded-lg hover:bg-purple-600 transition-all duration-300">
                    <Link :href="route('seihokozas.index')">一覧画面</Link>
                </button>
            </div>
            <div class="md:hidden">
                <i class="fa-solid fa-bars"></i>
            </div>
        </div>
    </header>

    <!-- ヒーローセクション -->
    <div id="home" class="container mt-16 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
        <div class="flex flex-wrap md:flex-nowrap">
            <div class="md:my-36 lg:ml-20 flex flex-wrap justify-center md:justify-start  max-w-xl">
                <h1 class="font-bold text-3xl text-center md:text-left lg:text-7xl md:text-6xl sm:text-5xl mr-10">
                    生命保険総論2023フォームA
                </h1>
            </div>
        </div>
    </div>


</template>
