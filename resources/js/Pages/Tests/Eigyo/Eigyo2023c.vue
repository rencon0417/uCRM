resources/js/Pages/Tests/Souron/Souron2023a.vue
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
        <p class="text-gray-600">2023年度 フォームC</p>
    </div>

    <!-- 問題リスト -->
    <div class="max-w-4xl mx-auto mt-4 space-y-2">
        <QuestionTemp1
            :questionNumber="21"
            :contents="[
            '主契約より長い場合はない。',
            '短縮払ではなく短期払。',
            '正しい'
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
            '告知義務や契約始期、モラルリスク等が問題となりやすく、取扱保険商品、加入保険金額を制限しているケースが多い。',
            'パソコンやスマートフォンで資料請求や申込ができるだけでなく、契約の成立までも完了できる生保会社もある。',
            '正しい'
            ]"
        />
        <QuestionTemp1
            :questionNumber="25"
            :contents="[
            '生命保険協会ではなく内閣総理大臣（金融庁長官に委任）の登録を受ける。',
            '正しい',
            '一般課程試験合格後に生命保険募集人として登録される。'
            ]"
        />
        <QuestionTemp1
            :questionNumber="26"
            :contents="[
            '正しい',
            '正しい',
            '説明を怠った場合、業者は元本欠損額の賠償責任を負う。'
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
            'ホールセラーではなく、「法人営業第●部」',
            '正しい'
            ]"
        />
        <QuestionTemp1
            :questionNumber="29"
            :contents="[
            '再販売等に活用することが一般的となってきている。',
            '正しい',
            '正しい'
            ]"
        />
        <QuestionTemp1
            :questionNumber="30"
            :contents="[
            'これまで生命保険会社の支社の配置は、管理スパン上の問題や地域社会における店舗サービス機能の発揮ならびにPR効果の観点から、組織がある一定規模までに達すれば支社を分割するのが一般的であったか近年ではコスト、効率化のため事務面の集約化や規模の大型化に向かう傾向が見られる。',
            '正しい',
            '正しい'
            ]"
        />
        <QuestionTemp1
            :questionNumber="31"
            :contents="[
            '企業福祉制度のあり方も、従来のような総合的・恩恵的福祉から、自己責任原則のもと、従業員の自助努力・自立を側面から支援するものに重点が移されつつある。',
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
            '被保険者が受取人となる場合、非課税扱いとなる。',
            ]"
        />
        <QuestionTemp1
            :questionNumber="38"
            :contents="[
            '一般の生命保険料と異なり保険料は生命保険料控除の対象とはならない。',
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
                :href="route('eigyo2023b')"
                class="inline-flex items-center justify-center w-40 h-12 bg-purple-400 hover:bg-purple-500 text-white font-semibold rounded-lg shadow-md">
                前の試験へ
            </Link>
            <Link
                :href="route('eigyo2022a')"
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
