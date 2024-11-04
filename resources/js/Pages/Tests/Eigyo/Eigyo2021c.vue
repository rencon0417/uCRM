<script setup>
import { Head, Link} from '@inertiajs/vue3';
import { reactive, onMounted, ref, computed } from 'vue'
import { Inertia } from '@inertiajs/inertia';
import KaTeXDisplay from '../../../Components/KaTeXDisplay.vue';
import QuestionTemp1 from '../../../Components/QuestionTemp1.vue'


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
        <p class="text-gray-600">2021年度 フォームC</p>
    </div>

    <!-- 問題リスト -->
    <div class="max-w-4xl mx-auto mt-4 space-y-2">
        <QuestionTemp1
            :questionNumber="21"
            :contents="[
            '25年ではなく10年。',
            '正しい',
            '3分の2ではなく4分の3。'
            ]"
        />
        <QuestionTemp1
            :questionNumber="22"
            :contents="[
            '正しい',
            '主契約より短い場合もある。',
            '相互会社でも認められている。'
            ]"
        />
        <QuestionTemp1
            :questionNumber="23"
            :contents="[
            '第3号被保険者は含まれない。',
            '正しい',
            '基金を契約者および受取人、基金の加入員を被保険者とする保険契約でり、基金の業務の引受も可能である。'
            ]"
        />
        <QuestionTemp1
            :questionNumber="24"
            :contents="[
            '保険金額のうち死亡保険金については、基本保険金額を保証されるが、満期保険金については保証されない。',
            '変動保険金は毎月変動、満期保険金は満期時に確定、積立金と解約返戻金は毎日変動。',
            '正しい'
            ]"
        />
        <QuestionTemp1
            :questionNumber="25"
            :contents="[
            '告知義務や契約始期に係わる問題、モラルリスク等が問題となりやすく、取扱保険商品や加入保険金額を制限しているケースが多い。',
            '契約の成立まで完了させる生保会社もある。',
            '正しい'
            ]"
        />
        <QuestionTemp1
            :questionNumber="26"
            :contents="[
            '退職給付ではなく、老齢給付（老齢になった場合）。',
            '正しい',
            '正しい'
            ]"
        />
        <QuestionTemp1
            :questionNumber="27"
            :contents="[
            '正しい',
            '年齢階級別ではなく所得段階別。',
            '正しい'
            ]"
        />
        <QuestionTemp1
            :questionNumber="28"
            :contents="[
            '正しい',
            '被保険者のモラルリスクではなく、被保険者の健康状態が一定の危険の範囲を超えているが危険の度合いに応じて「保険料の割り増し」などの特別の条件を付けて引き受けること。',
            '正しい'
            ]"
        />
        <QuestionTemp1
            :questionNumber="29"
            :contents="[
            '前納保険料ではなく一時払保険料。',
            '正しい',
            '正しい'
            ]"
        />
        <QuestionTemp1
            :questionNumber="30"
            :contents="[
            '正しい',
            '正しい',
            '団体信用生命保険ではなく、消費者情用団体生命保険。'
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
            '生命保険が第一分野、損害保険が第二分野。',
            ]"
        />
        <QuestionTemp1
            :questionNumber="33"
            :contents="[
            '消費者は契約を取り消すことができる。',
            ]"
        />
        <QuestionTemp1
            :questionNumber="34"
            :contents="[
            '認定生命保険士ではなく生命保険面接士。',
            ]"
        />
        <QuestionTemp1
            :questionNumber="35"
            :contents="[
            '被保険者が受取人の場合非課税扱いとなる。',
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
            '現在のところ、新企業年金保険、厚生年金基金保険、確定給付企業年金保険、国民年金基金保険、団体生存保険に付加する特別勘定特約が販売されている。',
            ]"
        />
        <QuestionTemp1
            :questionNumber="38"
            :contents="[
            '正しい',
            ]"
        />
        <QuestionTemp1
            :questionNumber="39"
            :contents="[
            '正しい'
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
                :href="route('eigyo2021b')"
                class="inline-flex items-center justify-center w-40 h-12 bg-purple-400 hover:bg-purple-500 text-white font-semibold rounded-lg shadow-md">
                前の試験へ
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
