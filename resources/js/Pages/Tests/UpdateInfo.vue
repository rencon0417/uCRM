<script setup>
import { ref, computed } from 'vue';
import { Link } from '@inertiajs/vue3';
import SeihoTestLayout from '@/Layouts/SeihoTestLayout.vue';

// 更新履歴の全データ
const allUpdates = [
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
    {
        date: '2025.11.30',
        title: '生命保険会計 解説不備の訂正',
        description: '2022年度『生命保険会計』フォームC（問11,12,19）の解説に不備があったため内容を修正いたしました。',
        badge: 'UPDATE',
        badgeColor: 'from-blue-500 to-indigo-500',
        category: 'コンテンツ更新'
    },
    {
        date: '2025.11.30',
        title: '生命保険商品と営業 解説不備の訂正',
        description: '2021年度『生命保険商品と営業』フォームB・C（問21,24,25,26,28,29,30）の解説に不備があったため内容を修正いたしました。',
        badge: 'UPDATE',
        badgeColor: 'from-blue-500 to-indigo-500',
        category: 'コンテンツ更新'
    },
    // {
    //     date: '2024.11.20',
    //     title: '危険選択・約款と法律 2024年度版を追加',
    //     description: '10月〜11月実施の試験科目の最新解説を公開しました。全フォームの詳細な解説をご覧いただけます。',
    //     badge: 'NEW',
    //     badgeColor: 'from-pink-500 to-red-500',
    //     category: 'コンテンツ追加'
    // },
    // {
    //     date: '2024.10.10',
    //     title: 'サイトリニューアル',
    //     description: 'デザインを一新し、より使いやすいUIになりました。レスポンシブ対応も強化し、スマートフォンでも快適にご利用いただけます。',
    //     badge: 'INFO',
    //     badgeColor: 'from-purple-500 to-indigo-500',
    //     category: 'サイト改善'
    // },
    // {
    //     date: '2024.09.15',
    //     title: '生命保険総論・計理 2024年度版を追加',
    //     description: '8月〜9月実施の試験科目の最新解説を公開しました。フォームA・B・Cすべての詳細な解説をご用意しています。',
    //     badge: 'NEW',
    //     badgeColor: 'from-pink-500 to-red-500',
    //     category: 'コンテンツ追加'
    // },
    // {
    //     date: '2024.08.20',
    //     title: '検索機能を追加',
    //     description: '過去問を科目や年度から簡単に検索できる機能を追加しました。目的の問題により素早くアクセスできます。',
    //     badge: 'NEW',
    //     badgeColor: 'from-pink-500 to-red-500',
    //     category: 'サイト改善'
    // },
    // {
    //     date: '2024.07.05',
    //     title: '解説の詳細度を向上',
    //     description: '2023年度の全科目について、解説内容をより詳しく改訂しました。図表や補足説明を多数追加しています。',
    //     badge: 'UPDATE',
    //     badgeColor: 'from-blue-500 to-indigo-500',
    //     category: 'コンテンツ更新'
    // },
    // {
    //     date: '2024.06.01',
    //     title: 'お気に入り機能を実装',
    //     description: '気になる問題をお気に入りに登録できる機能を追加しました。後から見返したい問題を簡単に管理できます。',
    //     badge: 'NEW',
    //     badgeColor: 'from-pink-500 to-red-500',
    //     category: 'サイト改善'
    // },
    // {
    //     date: '2024.03.10',
    //     title: '2024年度試験対応ガイドを公開',
    //     description: '2024年度の試験に向けた学習ガイドと出題傾向分析を公開しました。効率的な学習計画の参考にしてください。',
    //     badge: 'INFO',
    //     badgeColor: 'from-purple-500 to-indigo-500',
    //     category: 'お知らせ'
    // },
    // {
    //     date: '2024.02.20',
    //     title: '生命保険と税法・資産の運用 2024年度版を追加',
    //     description: '2月〜3月実施の試験科目の最新解説を公開しました。税制改正に対応した内容となっています。',
    //     badge: 'NEW',
    //     badgeColor: 'from-pink-500 to-red-500',
    //     category: 'コンテンツ追加'
    // },
    // {
    //     date: '2024.01.15',
    //     title: 'モバイルアプリ版をリリース',
    //     description: 'iOS・Android向けのモバイルアプリをリリースしました。オフラインでも過去問を学習できます。',
    //     badge: 'NEW',
    //     badgeColor: 'from-pink-500 to-red-500',
    //     category: 'サイト改善'
    // }
];

// フィルター用のカテゴリー一覧
const categories = ['すべて', 'コンテンツ追加', 'コンテンツ更新', 'サイト改善', 'お知らせ'];
const selectedCategory = ref('すべて');

// フィルター済みの更新履歴
const filteredUpdates = computed(() => {
    if (selectedCategory.value === 'すべて') {
        return allUpdates;
    }
    return allUpdates.filter(update => update.category === selectedCategory.value);
});

// 年別にグループ化（新しい年が上）
const groupedByYear = computed(() => {
    const groups = {};
    filteredUpdates.value.forEach(update => {
        const year = update.date.split('.')[0];
        if (!groups[year]) {
            groups[year] = [];
        }
        groups[year].push(update);
    });
    // 年を降順（新しい年が上）にソートして配列として返す
    return Object.keys(groups)
        .sort((a, b) => Number(b) - Number(a))
        .map(year => ({
            year,
            updates: groups[year]
        }));
});
</script>

<template>
    <SeihoTestLayout title="更新履歴 - 生命保険講座過去問解説">
        <!-- ヒーローセクション -->
        <div class="relative mx-auto px-6 py-16 md:py-24 w-full max-w-7xl overflow-hidden rounded-3xl">
            <!-- 背景装飾 -->
            <div class="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 opacity-10"></div>
            <div class="absolute top-10 right-10 w-72 h-72 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div class="absolute top-0 left-10 w-72 h-72 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

            <section class="relative z-10">

                <div class="flex items-center gap-4 mb-6">
                    <div class="h-12 w-2 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full"></div>
                    <h1 class="text-5xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
                        更新履歴
                    </h1>
                </div>

                <p class="text-lg text-gray-600 font-medium">
                    サイトの更新情報をお知らせします
                </p>
            </section>
        </div>

        <!-- フィルターセクション -->
        <div class="container mx-auto px-6 my-12 max-w-7xl">
            <div class="bg-white/80 backdrop-blur-sm p-6 rounded-3xl shadow-xl border border-gray-100">
                <div class="flex flex-wrap gap-3">
                    <button v-for="category in categories" :key="category"
                            @click="selectedCategory = category"
                            :class="[
                                'px-6 py-2.5 rounded-full font-semibold transition-all duration-300',
                                selectedCategory === category
                                    ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg scale-105'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                            ]">
                        {{ category }}
                    </button>
                </div>
            </div>
        </div>

        <!-- 更新履歴タイムライン -->
        <div class="container mx-auto px-6 mb-32 max-w-7xl">
            <div v-for="group in groupedByYear" :key="group.year" class="mb-16">
                <!-- 年見出し -->
                <div class="flex items-center gap-4 mb-8">
                    <div class="flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-indigo-500 to-purple-500 shadow-2xl">
                        <span class="text-white font-black text-2xl">{{ group.year }}</span>
                    </div>
                    <div class="h-1 flex-1 bg-gradient-to-r from-indigo-200 to-transparent rounded-full"></div>
                </div>

                <!-- タイムラインアイテム -->
                <div class="space-y-6 ml-10">
                    <div v-for="(update, index) in group.updates" :key="index"
                         class="group relative flex gap-6">
                        <!-- タイムラインライン -->
                        <div class="relative flex flex-col items-center">
                            <div class="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 shadow-lg group-hover:scale-110 transition-transform duration-300 z-10">
                                <div class="w-5 h-5 bg-white rounded-full"></div>
                            </div>
                            <div v-if="index !== group.updates.length - 1"
                                 class="w-0.5 flex-1 bg-gradient-to-b from-indigo-200 to-purple-200 mt-2"
                                 style="min-height: 80px;"></div>
                        </div>

                        <!-- コンテンツカード -->
                        <div class="flex-1 pb-8">
                            <div class="bg-white p-8 rounded-3xl border border-gray-200 group-hover:border-indigo-300 transition-all duration-300 group-hover:shadow-2xl shadow-xl relative overflow-hidden">
                                <!-- 背景グラデーション -->
                                <div class="absolute inset-0 bg-gradient-to-br from-indigo-50/50 via-purple-50/50 to-pink-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                    <div class="relative">
                                        <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-2 md:gap-4 mb-4">
                                            <div class="flex items-center gap-3">
                                                <span class="text-lg font-bold text-indigo-600">{{ update.date }}</span>
                                                <span class="px-4 py-1 text-xs font-bold text-white rounded-full shadow-md"
                                                    :class="`bg-gradient-to-r ${update.badgeColor}`">
                                                    {{ update.badge }}
                                                </span>
                                            </div>
                                            <span class="px-3 py-1 text-xs font-semibold text-gray-600 bg-gray-100 rounded-full self-start">
                                                {{ update.category }}
                                            </span>
                                        </div>

                                        <h3 class="text-2xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                                            {{ update.title }}
                                        </h3>

                                        <p class="text-base sm:text-sm text-gray-600 leading-relaxed">
                                            {{ update.description }}
                                        </p>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- フッターCTA -->
        <div class="container mx-auto px-6 mb-32 max-w-7xl">
            <div class="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-12 rounded-3xl shadow-2xl text-center relative overflow-hidden">
                <!-- 装飾 -->
                <div class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full filter blur-3xl"></div>
                <div class="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full filter blur-3xl"></div>

                <div class="relative">
                    <h2 class="text-3xl md:text-4xl font-black text-white mb-4">
                        過去問解説を見る
                    </h2>
                    <p class="text-lg text-white/90 mb-8">
                        生命保険講座の過去問を徹底解説しています
                    </p>
                    <Link href="/"
                          class="inline-flex items-center gap-3 px-8 py-4 bg-white text-indigo-600 font-bold rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105">
                        <span>ホームに戻る</span>
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                        </svg>
                    </Link>
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
</style>
