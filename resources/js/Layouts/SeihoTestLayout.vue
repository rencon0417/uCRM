<script setup>
import { Head, Link} from '@inertiajs/vue3';
import { reactive, onMounted, ref, computed } from 'vue'
import { Inertia } from '@inertiajs/inertia';

const openGoogleForm = () => {
  const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSdYvdwHrldz56rBizNEgfUx9o5e9WdME_OwXpdjyv7oWlW3mQ/viewform?usp=header'; // ここに取得したURLを入力
  window.open(googleFormUrl, '_blank'); // 新しいタブで開く
};

defineProps({
  title: {
    type: String,
    required: true
  }
})

</script>

<template>
    <Head :title="title">
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

        <slot />

        <footer class="bg-white border-t border-gray-100">
    <div class="container px-5 py-10 mx-auto">
        <div class="flex flex-col items-center justify-center space-y-8">
            <!-- Links -->
            <div class="w-full flex justify-center">
                <nav class="flex flex-row items-center"> <!-- flex-colを削除し、常にflex-rowに -->
                    <button @click="openGoogleForm" class="text-gray-700 hover:text-gray-900 text-sm px-4 transition-colors duration-200">
                        お問い合わせ
                    </button>
                    <span class="text-gray-300">|</span> <!-- hiddenクラスを削除し、常に表示 -->
                    <Link
                        :href="route('policy')"
                        class="text-gray-700 hover:text-gray-900 text-sm px-4 transition-colors duration-200"
                    >
                        プライバシーポリシー
                    </Link>
                </nav>
            </div>

            <!-- Copyright -->
            <div class="text-sm text-gray-700">
                ©2024-2025
            </div>

            <!-- Logo and Title -->
            <div class="flex items-center space-x-3">
                <img
                    src="/images/rencon3.png"
                    alt="れんこん"
                    class="w-8 h-8 object-contain"
                />
                <span class="text-sm font-medium text-gray-800">
                    生保講座過去問解説
                </span>
            </div>
        </div>
    </div>
</footer>
    </div>

</template>
