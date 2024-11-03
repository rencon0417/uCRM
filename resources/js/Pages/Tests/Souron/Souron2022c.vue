<script setup>
import { Head, Link} from '@inertiajs/vue3';
import { reactive, onMounted, ref, computed } from 'vue'
import { Inertia } from '@inertiajs/inertia';
import KaTeXDisplay from '../../../Components/KaTeXDisplay.vue';


</script>

<template>
<Head title="生命保険講座過去問解説サイト">
    <link rel="icon" href="/images/rencon3.png" />
</Head>
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

    <section class="bg-gray-100 text-gray-800 py-10">

    <!-- ページタイトル -->
    <div class="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 class="text-2xl font-bold mb-2">生命保険総論</h1>
        <p class="text-gray-600">2022年度 フォームC</p>
    </div>

    <!-- 問題リスト -->
    <div class="max-w-4xl mx-auto mt-4 space-y-2">

        <!-- 問題21 -->
        <div class="bg-white p-6 border border-gray-300 rounded-lg shadow-md">
            <h2 class="text-lg font-semibold mb-4">問題21</h2>
            <p class="mb-2"><span class="font-semibold">解答：</span>A</p>
            <div>
                <h3 class="font-semibold">解説：</h3>
                <p class="text-gray-700  select-none">この問題の解説内容をここに記載します。ポイントや考え方を説明してください。</p>
            </div>
        </div>

        <!-- 問題22 -->
        <div class="bg-white p-6 border border-gray-300 rounded-lg shadow-md">
            <h2 class="text-lg font-semibold mb-4">問題22</h2>
            <p class="mb-2"><span class="font-semibold">解答：</span>B</p>
            <div>
                <h3 class="font-semibold">解説：</h3>
                <p class="text-gray-700 select-none">この問題の解説内容をここに記載します。</p>
            </div>
        </div>

        <!-- 問題23 -->
        <div class="bg-white p-6 border border-gray-300 rounded-lg shadow-md">
            <h2 class="text-lg font-semibold mb-4">問題23</h2>
            <p class="mb-2"><span class="font-semibold">解答：</span>B</p>
            <div>
                <h3 class="font-semibold">解説：</h3>
                <p class="text-gray-700 select-none">この問題の解説内容をここに記載します。</p>
            </div>
        </div>

        <!-- 問題24 -->
        <div class="bg-white p-6 border border-gray-300 rounded-lg shadow-md">
            <h2 class="text-lg font-semibold mb-4">問題24</h2>
            <p class="mb-2"><span class="font-semibold">解答：</span>B</p>
            <div>
                <h3 class="font-semibold">解説：</h3>
                <p class="text-gray-700 select-none">この問題の解説内容をここに記載します。</p>
            </div>
        </div>

        <!-- 問題25 -->
        <div class="bg-white p-6 border border-gray-300 rounded-lg shadow-md">
            <h2 class="text-lg font-semibold mb-4">問題25</h2>
            <p class="mb-2"><span class="font-semibold">解答：</span>B</p>
            <div>
                <h3 class="font-semibold">解説：</h3>
                <p class="text-gray-700 select-none">この問題の解説内容をここに記載します。</p>
            </div>
        </div>

        <!-- 問題26 -->
        <div class="bg-white p-6 border border-gray-300 rounded-lg shadow-md">
            <h2 class="text-lg font-semibold mb-4">問題26</h2>
            <p class="mb-2"><span class="font-semibold">解答：</span>B</p>
            <div>
                <h3 class="font-semibold">解説：</h3>
                <p class="text-gray-700 select-none">この問題の解説内容をここに記載します。</p>
            </div>
        </div>

        <!-- 問題27 -->
        <div class="bg-white p-6 border border-gray-300 rounded-lg shadow-md">
            <h2 class="text-lg font-semibold mb-4">問題27</h2>
            <p class="mb-2"><span class="font-semibold">解答：</span>B</p>
            <div>
                <h3 class="font-semibold">解説：</h3>
                <p class="text-gray-700 select-none">この問題の解説内容をここに記載します。</p>
            </div>
        </div>

        <!-- 問題28 -->
        <div class="bg-white p-6 border border-gray-300 rounded-lg shadow-md">
            <h2 class="text-lg font-semibold mb-4">問題28</h2>
            <p class="mb-2"><span class="font-semibold">解答：</span>B</p>
            <div>
                <h3 class="font-semibold">解説：</h3>
                <p class="text-gray-700 select-none">この問題の解説内容をここに記載します。</p>
            </div>
        </div>

        <!-- 問題29 -->
        <div class="bg-white p-6 border border-gray-300 rounded-lg shadow-md">
            <h2 class="text-lg font-semibold mb-4">問題29</h2>
            <p class="mb-2"><span class="font-semibold">解答：</span>B</p>
            <div>
                <h3 class="font-semibold">解説：</h3>
                <p class="text-gray-700 select-none">この問題の解説内容をここに記載します。</p>
            </div>
        </div>

        <!-- 問題30 -->
        <div class="bg-white p-6 border border-gray-300 rounded-lg shadow-md">
            <h2 class="text-lg font-semibold mb-4">問題30</h2>
            <p class="mb-2"><span class="font-semibold">解答：</span>B</p>
            <div>
                <h3 class="font-semibold">解説：</h3>
                <p class="text-gray-700 select-none">この問題の解説内容をここに記載します。</p>
            </div>
        </div>

        <!-- 問題31 -->
        <div class="bg-white p-6 border border-gray-300 rounded-lg shadow-md">
            <h2 class="text-lg font-semibold mb-4">問題31</h2>
            <p class="mb-2"><span class="font-semibold">解答：</span>B</p>
            <div>
                <h3 class="font-semibold">解説：</h3>
                <p class="text-gray-700 select-none">この問題の解説内容をここに記載します。</p>
            </div>
        </div>

        <!-- 問題32 -->
        <div class="bg-white p-6 border border-gray-300 rounded-lg shadow-md">
            <h2 class="text-lg font-semibold mb-4">問題32</h2>
            <p class="mb-2"><span class="font-semibold">解答：</span>B</p>
            <div>
                <h3 class="font-semibold">解説：</h3>
                <p class="text-gray-700 select-none">この問題の解説内容をここに記載します。</p>
            </div>
        </div>

        <!-- 問題33 -->
        <div class="bg-white p-6 border border-gray-300 rounded-lg shadow-md">
            <h2 class="text-lg font-semibold mb-4">問題33</h2>
            <p class="mb-2"><span class="font-semibold">解答：</span>B</p>
            <div>
                <h3 class="font-semibold">解説：</h3>
                <p class="text-gray-700 select-none">この問題の解説内容をここに記載します。</p>
            </div>
        </div>

        <!-- 問題34 -->
        <div class="bg-white p-6 border border-gray-300 rounded-lg shadow-md">
            <h2 class="text-lg font-semibold mb-4">問題34</h2>
            <p class="mb-2"><span class="font-semibold">解答：</span>B</p>
            <div>
                <h3 class="font-semibold">解説：</h3>
                <p class="text-gray-700 select-none">この問題の解説内容をここに記載します。</p>
            </div>
        </div>

        <!-- 問題35 -->
        <div class="bg-white p-6 border border-gray-300 rounded-lg shadow-md">
            <h2 class="text-lg font-semibold mb-4">問題35</h2>
            <p class="mb-2"><span class="font-semibold">解答：</span>B</p>
            <div>
                <h3 class="font-semibold">解説：</h3>
                <p class="text-gray-700 select-none">この問題の解説内容をここに記載します。</p>
            </div>
        </div>

        <!-- 問題36 -->
        <div class="bg-white p-6 border border-gray-300 rounded-lg shadow-md">
            <h2 class="text-lg font-semibold mb-4">問題36</h2>
            <p class="mb-2"><span class="font-semibold">解答：</span>B</p>
            <div>
                <h3 class="font-semibold">解説：</h3>
                <p class="text-gray-700 select-none">この問題の解説内容をここに記載します。</p>
            </div>
        </div>

        <!-- 問題37 -->
        <div class="bg-white p-6 border border-gray-300 rounded-lg shadow-md">
            <h2 class="text-lg font-semibold mb-4">問題37</h2>
            <p class="mb-2"><span class="font-semibold">解答：</span>B</p>
            <div>
                <h3 class="font-semibold">解説：</h3>
                <p class="text-gray-700 select-none">この問題の解説内容をここに記載します。</p>
            </div>
        </div>

        <!-- 問題38 -->
        <div class="bg-white p-6 border border-gray-300 rounded-lg shadow-md">
            <h2 class="text-lg font-semibold mb-4">問題38</h2>
            <p class="mb-2"><span class="font-semibold">解答：</span>B</p>
            <div>
                <h3 class="font-semibold">解説：</h3>
                <p class="text-gray-700 select-none">この問題の解説内容をここに記載します。</p>
            </div>
        </div>

        <!-- 問題39 -->
        <div class="bg-white p-6 border border-gray-300 rounded-lg shadow-md">
            <h2 class="text-lg font-semibold mb-4">問題39</h2>
            <p class="mb-2"><span class="font-semibold">解答：</span>B</p>
            <div>
                <h3 class="font-semibold">解説：</h3>
                <p class="text-gray-700 select-none">この問題の解説内容をここに記載します。</p>
            </div>
        </div>

        <!-- 問題40 -->
        <div class="bg-white p-6 border border-gray-300 rounded-lg shadow-md">
            <h2 class="text-lg font-semibold mb-4">問題40</h2>
            <p class="mb-2"><span class="font-semibold">解答：</span>B</p>
            <div>
                <h3 class="font-semibold">解説：</h3>
                <p class="text-gray-700 select-none">この問題の解説内容をここに記載します。</p>
            </div>
        </div>

    </div>
    </section>

    <!-- フッターセクション -->
    <footer class="text-gray-600 body-font">
    <div class="container px-5 py-20 mx-auto flex items-center sm:flex-row flex-col">
        <img src="/images/rencon3.png" alt="れんこん" class="w-10 h-10" />
        <span class="ml-3">生保講座過去問解説</span>
        <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2024</p>
        <p class="text-gray-600 ml-1 text-sm" rel="noopener noreferrer" target="_blank">@ rencon</p>
    </div>
    </footer>

</template>
