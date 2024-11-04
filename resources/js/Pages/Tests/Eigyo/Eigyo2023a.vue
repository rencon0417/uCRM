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
        <p class="text-gray-600">2023年度 フォームA</p>
    </div>

    <!-- 問題リスト -->
    <div class="max-w-4xl mx-auto mt-4 space-y-2">
        <QuestionTemp1
            :questionNumber="21"
            :contents="[
            '初めてではなく1985年には発売されている。',
            '正しい',
            '3000万円を上限とし、特約保険料は不要（無料）となっている。'
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
            '一定の条件を満たす保険代理店においては、一社専属性の例外が認められ、複数の生命保険会社の商品を取り扱うことができる。',
            '正しい',
            '保険代理店についても、業務の特性や規模に応じて、体制整備が求められることとなった。'
            ]"
        />
        <QuestionTemp1
            :questionNumber="25"
            :contents="[
            '専門課程ではなく応用課程',
            '応用課程試験に合格した者が「シニア・ライフ・コンサルタント」の称号を得る。',
            '正しい'
            ]"
        />
        <QuestionTemp1
            :questionNumber="26"
            :contents="[
            '生活習慣病罹患率ではなく、乳児死亡率の急速な低下。',
            '正しい',
            '正しい'
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
            '正しい',
            '相互会社でも一定の制限のもとで可能となっている。'
            ]"
        />
        <QuestionTemp1
            :questionNumber="29"
            :contents="[
            '終身保険等の主契約に充当する方法に加え、定期保険特約部分に充当する方法がある。',
            '正しい',
            '正しい'
            ]"
        />
        <QuestionTemp1
            :questionNumber="30"
            :contents="[
            '正しい',
            '正しい',
            '保険契約者保護の観点から保険仲立人に係る規制を緩和することが適当であるとされており、それを受け、保険業法の改正で保証金の額の引き下げなど一部の規制が和された。'
            ]"
        />
        <QuestionTemp1
            :questionNumber="31"
            :contents="[
            'ライフスタイルではなくライフステージ。ライフ・プランニングではなくライフサイクル。',
            ]"
        />
        <QuestionTemp1
            :questionNumber="32"
            :contents="[
            '2000年の日米保険協議の決着により、2001年にまず子会社による参入が、続いて本体による参入が解禁となった。',
            ]"
        />
        <QuestionTemp1
            :questionNumber="33"
            :contents="[
            '被保険者の生存中にかきり、周期的に一定の金額の支払をするもの。'
            ]"
        />
        <QuestionTemp1
            :questionNumber="34"
            :contents="[
            '生命保険支払専門土ではなく生命保険面接士。'
            ]"
        />
        <QuestionTemp1
            :questionNumber="35"
            :contents="[
            '払込保険料を割り引く方式と給付金として割り戻す方式がある。'
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
            '勤労者財産形成教育貯蓄契約（財形教育）ではなく、勤労者財産形成住宅貯蓄契約（財形住宅）。'
            ]"
        />
        <QuestionTemp1
            :questionNumber="38"
            :contents="[
            'パソコンやスマートフォンで資料請求や申込ができるだけでなく、契約の成立までも完了できる生保会社もある。'
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
            <!-- <Link
                :href="route('eigyo2023a')"
                class="inline-flex items-center justify-center w-40 h-12 bg-purple-400 hover:bg-purple-500 text-white font-semibold rounded-lg shadow-md">
                前の試験へ
            </Link> -->
            <Link
                :href="route('eigyo2023b')"
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
