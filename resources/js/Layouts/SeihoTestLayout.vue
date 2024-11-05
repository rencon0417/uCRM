<script setup>
import { Head, Link} from '@inertiajs/vue3';
import { reactive, onMounted, ref, computed } from 'vue'
import { Inertia } from '@inertiajs/inertia';
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

        <slot />

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
