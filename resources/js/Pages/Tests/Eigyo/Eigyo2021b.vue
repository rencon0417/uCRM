<script setup>
import { Head, Link} from '@inertiajs/vue3';
import { reactive, onMounted, ref, computed } from 'vue'
import { Inertia } from '@inertiajs/inertia';
import KaTeXDisplay from '../../../Components/KaTeXDisplay.vue';
import QuestionTemp1 from '../../../Components/QuestionTemp1.vue'
import Pagetitle from '../../../Components/Pagetitle.vue'


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
    <Pagetitle
        title="生命保険商品と営業"
        description="2021年度 フォームB"
    />

    <!-- 問題リスト -->
    <div class="max-w-4xl mx-auto mt-4 space-y-2">
        <QuestionTemp1
            :questionNumber="21"
            :contents="[
            '年間収入を上回っている。',
            '正しい',
            '株式・投資信託ではなく、預貯金。'
            ]"
        />
        <QuestionTemp1
            :questionNumber="22"
            :contents="[
            '正しい',
            '契約より短い場合もある。',
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
            '正しい',
            '被保険者が受取人となる場合、非課税扱いになる。',
            '1年ではなく、6か月、1000万円ではなく3000万円。'
            ]"
        />
        <QuestionTemp1
            :questionNumber="25"
            :contents="[
            '対象規定上、死亡退職金等が支払われないときは、保険金は支払われない。',
            'ヒューマン・ヴァリュー特約ではなく、災害総合保障特約。',
            '正しい'
            ]"
        />
        <QuestionTemp1
            :questionNumber="26"
            :contents="[
            '正しい',
            '正しい',
            '労使折半により負担している。'
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
            'デビット・システムは、一定の地域に一名の営業職員を配置し、その地域内での保険販売・保全活動に当たらせる制度。',
            '正しい',
            '正しい'
            ]"
        />
        <QuestionTemp1
            :questionNumber="29"
            :contents="[
            '契約者と保険会社との間に立って中立の立場で保険契約の締結の媒介を行う。',
            '正しい',
            '正しい'
            ]"
        />
        <QuestionTemp1
            :questionNumber="30"
            :contents="[
            '正しい',
            '正しい',
            '個人情報保護法ではなく、金融サービス提供法。'
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
            '被保険者の死亡後は、年金の支払は行わない。',
            ]"
        />
        <QuestionTemp1
            :questionNumber="34"
            :contents="[
            '認定生命保険士ではなく生命保険面接土。',
            ]"
        />
        <QuestionTemp1
            :questionNumber="35"
            :contents="[
            '保険料総額ではなく保険金総額。',
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
            '応用課程ではなく専門課程。',
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
                :href="route('eigyo2021a')"
                class="inline-flex items-center justify-center w-40 h-12 bg-purple-400 hover:bg-purple-500 text-white font-semibold rounded-lg shadow-md">
                前の試験へ
            </Link>
            <Link
                :href="route('eigyo2021c')"
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
