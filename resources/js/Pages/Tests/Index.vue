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
    },
    {
        id: 'eigyo',
        title: '生命保険商品と営業',
        period: '12月〜1月実施の試験',
        years: [2024, 2023, 2022, 2021],
        routePrefix: 'eigyo',
        gridCols: 'lg:grid-cols-2 md:grid-cols-2',
    },
    {
        id: 'zeihou',
        title: '生命保険と税法',
        period: '2月〜3月実施の試験',
        years: [2023, 2022, 2021],
        routePrefix: 'zeihou',
        gridCols: 'lg:grid-cols-3 md:grid-cols-2',
        showNew: true
    },
    {
        id: 'sisan',
        title: '資産の運用',
        period: '2月〜3月実施の試験',
        years: [2024, 2023, 2022, 2021],
        routePrefix: 'sisan',
        gridCols: 'lg:grid-cols-2 md:grid-cols-2',
        showNew: true
    }
];

// 更新履歴データ
const updates = [
    {
        date: '2025.12.16',
        title: '資産の運用 2024年度の解説を追加',
        description: '2024年度の『資産の運用』の解説を公開しました。フォームA・B・Cすべての解説をご用意しています。',
        badge: 'NEW',
        badgeColor: 'from-pink-500 to-red-500',
        category: 'コンテンツ追加'
    },
    {
        date: '2025.12.16',
        title: 'サイトリニューアル',
        description: 'ホーム画面のデザインを一新しました。また更新履歴一覧ページを新たに作成しました。',
        badge: 'INFO',
        badgeColor: 'from-purple-500 to-indigo-500',
        category: 'サイト改善'
    },
];

const forms = ['a', 'b', 'c'];

</script>

<template>
    <SeihoTestLayout title="生命保険講座過去問解説">
        <!-- ヒーローセクション - モダンなグラデーションとガラスモーフィズム -->
        <div class="relative mx-auto px-6 py-24 md:py-32 w-full max-w-7xl overflow-hidden rounded-3xl">
            <!-- 動的な背景グラデーション -->
            <div class="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 opacity-10"></div>

            <!-- フローティングオーブ -->
            <div class="absolute top-10 right-10 w-72 h-72 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div class="absolute top-0 left-10 w-72 h-72 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            <div class="absolute -bottom-8 left-20 w-72 h-72 bg-gradient-to-br from-pink-400 to-red-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

            <section class="relative z-10 text-center">
                <div class="inline-block mb-4 px-4 py-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full">
                    <span class="text-white text-sm font-semibold tracking-wide">完全無料</span>
                </div>

                <h1 class="font-black text-6xl md:text-7xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 leading-tight mb-6">
                    生保講座<br>過去問解説
                </h1>

                <p class="text-xl md:text-2xl text-gray-600 font-medium max-w-2xl mx-auto leading-relaxed">
                    生命保険講座の過去問を<br class="md:hidden">徹底解説
                </p>

                <div class="mt-8 flex justify-center items-center gap-2">
                    <div class="h-1 w-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
                    <div class="h-2 w-2 bg-purple-500 rounded-full"></div>
                    <div class="h-1 w-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                </div>
            </section>
        </div>

        <!-- 更新履歴セクション -->
        <div class="container mx-auto px-6 mb-20 max-w-7xl">
            <div class="bg-white/80 backdrop-blur-sm p-10 rounded-3xl shadow-2xl border border-gray-100 relative overflow-hidden">
                <!-- 背景装飾 -->
                <div class="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full filter blur-3xl opacity-30 -ml-32 -mt-32"></div>

                <div class="relative">
                    <div class="flex items-center gap-4 mb-10">
                        <div class="h-8 w-1.5 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full"></div>
                        <h2 class="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">更新履歴</h2>
                    </div>

                    <div class="space-y-6">
                        <div v-for="(update, index) in updates" :key="index"
                             class="group relative flex gap-6">
                            <!-- タイムラインライン -->
                            <div class="relative flex flex-col items-center">
                                <div class="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    <div class="w-4 h-4 bg-white rounded-full"></div>
                                </div>
                                <div v-if="index !== updates.length - 1"
                                     class="w-0.5 flex-1 bg-gradient-to-b from-indigo-200 to-purple-200 mt-2"
                                     style="min-height: 60px;"></div>
                            </div>

                            <!-- コンテンツカード -->
                            <div class="flex-1 pb-8">
                                <div class="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-200 group-hover:border-indigo-300 transition-all duration-300 group-hover:shadow-lg">
                                    <div class="flex items-start justify-between gap-4 mb-3">
                                        <div class="flex-1">
                                            <div class="flex items-center gap-3 mb-2">
                                                <span class="text-sm font-semibold text-indigo-600">{{ update.date }}</span>
                                                <span class="px-3 py-0.5 text-xs font-bold text-white rounded-full shadow-sm"
                                                      :class="`bg-gradient-to-r ${update.badgeColor}`">
                                                    {{ update.badge }}
                                                </span>
                                            </div>
                                            <h3 class="text-lg font-bold text-gray-900 mb-2">{{ update.title }}</h3>
                                            <p class="text-sm text-gray-600 leading-relaxed">{{ update.description }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- もっと見るボタン -->
                    <div class="mt-8 text-center">
                        <Link :href="route('updateInfo')" class="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105">
                            <span>すべての更新履歴を見る</span>
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

        <!-- 目次 - カード型デザイン -->
        <div id="index" class="container mx-auto px-6 mb-20 max-w-7xl">
            <div class="bg-white/80 backdrop-blur-sm p-10 rounded-3xl shadow-2xl border border-gray-100 relative overflow-hidden">
                <!-- 背景装飾 -->
                <div class="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full filter blur-3xl opacity-30 -mr-32 -mt-32"></div>

                <div class="relative">
                    <div class="flex items-center gap-4 mb-10">
                        <div class="h-8 w-1.5 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full"></div>
                        <h2 class="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">目次</h2>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <a v-for="section in sections" :key="section.id"
                           :href="`#${section.id}`"
                           class="group flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-br from-gray-50 to-white hover:from-indigo-50 hover:to-purple-50 border border-gray-200 hover:border-indigo-300 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                            <div class="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <div class="w-3 h-3 bg-white rounded-full"></div>
                            </div>
                            <span class="text-lg font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors">
                                {{ section.title }}
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <!-- 各セクション - モダンなカードレイアウト -->
        <div v-for="(section, index) in sections" :key="section.id"
             :id="section.id"
             class="container mx-auto px-6 mb-16 max-w-7xl"
             :class="{ 'mb-32': index === sections.length - 1 }">

            <div class="mb-8">
                <div class="inline-flex items-center gap-3 px-5 py-2 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full mb-3">
                    <div class="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full animate-pulse"></div>
                    <span class="text-sm font-semibold text-indigo-600">{{ section.period }}</span>
                </div>
                <h2 class="text-4xl font-black text-gray-900">{{ section.title }}</h2>
            </div>

            <div class="grid grid-cols-1 gap-8" :class="section.gridCols">
                <div v-for="year in section.years" :key="year"
                     class="group relative">
                    <div class="relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 overflow-hidden">
                        <!-- 背景グラデーション -->
                        <div class="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                        <div class="relative">
                            <div class="flex items-center gap-3 mb-6">
                                <div class="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 shadow-lg">
                                    <span class="text-white font-bold text-lg">{{ year }}</span>
                                </div>
                                <div>
                                    <h3 class="text-2xl font-bold text-gray-900">{{ year }}年度</h3>
                                </div>
                                <span v-if="section.showNew && year === 2024"
                                      class="ml-auto px-3 py-1 text-xs font-bold text-white bg-gradient-to-r from-pink-500 to-red-500 rounded-full shadow-lg animate-pulse">
                                    NEW
                                </span>
                            </div>

                            <div class="space-y-3">
                                <Link v-for="form in forms" :key="form"
                                      :href="route(`${section.routePrefix}${year}${form}`)"
                                      class="block group/link">
                                    <div class="relative p-5 rounded-2xl bg-white border-2 border-gray-100 hover:border-indigo-300 transition-all duration-300 hover:shadow-md overflow-hidden">
                                        <div class="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 opacity-0 group-hover/link:opacity-100 transition-opacity"></div>
                                        <div class="relative flex items-center justify-between">
                                            <span class="font-bold text-gray-800 group-hover/link:text-indigo-600 transition-colors">
                                                フォーム{{ form.toUpperCase() }}の解説
                                            </span>
                                            <svg class="w-5 h-5 text-indigo-500 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </SeihoTestLayout>
</template>

<style scoped>
@keyframes blob {
    0%, 100% { transform: translate(0, 0) scale(1); }
    25% { transform: translate(20px, -50px) scale(1.1); }
    50% { transform: translate(-20px, 20px) scale(0.9); }
    75% { transform: translate(50px, 50px) scale(1.05); }
}

.animate-blob {
    animation: blob 7s infinite;
}

.animation-delay-2000 {
    animation-delay: 2s;
}

.animation-delay-4000 {
    animation-delay: 4s;
}
</style>
