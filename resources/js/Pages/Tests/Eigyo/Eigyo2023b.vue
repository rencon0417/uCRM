<script setup>
import { Head, Link} from '@inertiajs/vue3';
import { reactive, onMounted, ref, computed,createApp, h } from 'vue'
import { Inertia } from '@inertiajs/inertia';
import { createInertiaApp } from '@inertiajs/inertia-vue3';
import QuestionTemp1 from '../../../Components/QuestionTemp1.vue'

// Google Analyticsにページビューを送信する関数
function trackPageView(url) {
    if (typeof gtag === 'function') {
        gtag('config', 'G-6TB0WW8SWW', {
            page_path: url
        });
    }
}

// Inertiaのナビゲーションイベントにページビュー送信を追加
Inertia.on('navigate', (event) => {
    trackPageView(event.detail.page.url);
});

createInertiaApp({
    // Vueアプリの初期化処理
});

</script>

<template>
<Head title="生保講座過去問解説">
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
        <h1 class="text-2xl font-bold mb-2">生命保険商品と営業</h1>
        <p class="text-gray-600">2023年度 フォームB</p>
    </div>

    <!-- 問題リスト -->
    <div class="max-w-4xl mx-auto mt-4 space-y-2">
        <QuestionTemp1
            :questionNumber="21"
            :contents="[
            '契約の解約ではなく、契約を取り消すことができる',
            '正しい',
            '運用方針ではなく勧誘方針。'
            ]"
        />
        <QuestionTemp1
            :questionNumber="22"
            :contents="[
            '正しい',
            '変動保険金は毎月変動、満期保険金は満期時に確定、積立金と解約返戻金は毎日変動。',
            '契約時に定めた基本保険金額、特約保険金額は変動しない。'
            ]"
        />
        <QuestionTemp1
            :questionNumber="23"
            :contents="[
            '正しい',
            '1年以上ではなく2年以上、前後6か月以内ではなく前後1年以内。',
            '健康保険組合連合会ではなく、地方公共団体。'
            ]"
        />
        <QuestionTemp1
            :questionNumber="24"
            :contents="[
            '正しい',
            '従業員や団体の所属員が保険料を拠出し、加入脱退が任意で（任意加入）、保険料額・年金額の自在性があるのが特徴であり、「B（型）年金」とも称されるのは拠出型企業年金',
            '元本確保商品としての要件をみたすGICタイプの商品が生命保険商品として主流なのは、確定拠出年金保険。'
            ]"
        />
        <QuestionTemp1
            :questionNumber="25"
            :contents="[
            '契約者と保険会社との間に立って中立の立場で保険契約の締結の媒介を行う。',
            '日本固有の制度ではない。',
            '正しい'
            ]"
        />
        <QuestionTemp1
            :questionNumber="26"
            :contents="[
            '正しい',
            '正しい',
            '株式・株式投資信託等の有価証券ではなく定期性預貯金。'
            ]"
        />
        <QuestionTemp1
            :questionNumber="27"
            :contents="[
            '正しい',
            '第3号ではなく第1号被保険者。',
            '正しい'
            ]"
        />
        <QuestionTemp1
            :questionNumber="28"
            :contents="[
            '正しい',
            '年齢階級別ではなく所得段階別。',
            '正しい'
            ]"
        />
        <QuestionTemp1
            :questionNumber="29"
            :contents="[
            '正しい',
            '正しい',
            '個人型確定拠出年金（iDeCo）は対象外。'
            ]"
        />
        <QuestionTemp1
            :questionNumber="30"
            :contents="[
            '正しい',
            '正しい',
            '企業保険の販売を中心とした活動を行いつつ、個人保険販売の支援のため担当企業やその関連企業の基盤化を推進している法人営業組織もある。'
            ]"
        />
        <QuestionTemp1
            :questionNumber="31"
            :contents="[
            '正しい',
            ]"
        />
        <QuestionTemp1
            :questionNumber="32"
            :contents="[
            '住民票を有するすべての人へ個人番号が割り当てられた。',
            ]"
        />
        <QuestionTemp1
            :questionNumber="33"
            :contents="[
            '被保険者の生存中にかぎり、周期的に一定の金額の支払をするもの。',
            ]"
        />
        <QuestionTemp1
            :questionNumber="34"
            :contents="[
            '生命保険支払専門土ではなく生命保険面接士。',
            ]"
        />
        <QuestionTemp1
            :questionNumber="35"
            :contents="[
            '正しい',
            ]"
        />
        <QuestionTemp1
            :questionNumber="36"
            :contents="[
            '正しい'
            ]"
        />
        <QuestionTemp1
            :questionNumber="37"
            :contents="[
            '正しい',
            ]"
        />
        <QuestionTemp1
            :questionNumber="38"
            :contents="[
            '日本証券業協会ではなく生命保険協会。',
            ]"
        />
        <QuestionTemp1
            :questionNumber="39"
            :contents="[
            'これまで生命保険会社の支社の配置は、管理スパン上の問題や地域社会における店舗サービス機能の発揮ならびにPR効果の観点から、組織がある一定規模までに達すれば支社を分割するのが一般的であったが、近年ではコスト、効率化のため事務面の集約化や規模の大型化に向かう傾向が見られる。'
            ]"
        />
        <QuestionTemp1
            :questionNumber="40"
            :contents="[
            '正しい'
            ]"
        />
    </div>

    <!-- ボタングループ -->
    <div class="flex flex-col items-center mt-4 pt-3 gap-4">
        <!-- 上段：前へ・次へボタン -->
        <div class="flex justify-center gap-16">
            <Link
                :href="route('eigyo2023a')"
                class="inline-flex items-center justify-center w-40 h-12 bg-purple-400 hover:bg-purple-500 text-white font-semibold rounded-lg shadow-md">
                前の試験へ
            </Link>
            <Link
                :href="route('eigyo2023c')"
                class="inline-flex items-center justify-center w-40 h-12 bg-purple-400 hover:bg-purple-500 text-white font-semibold rounded-lg shadow-md">
                次の試験へ
            </Link>
        </div>

        <!-- 下段：戻るボタン -->
        <Link
            :href="route('tests.index')"
            class="inline-flex items-center justify-center w-40 h-12 bg-purple-400 hover:bg-purple-500 text-white font-semibold rounded-lg shadow-md">
            一覧画面に戻る
        </Link>
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
