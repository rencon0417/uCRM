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
        <p class="text-gray-600">2021年度 フォームA</p>
    </div>

    <!-- 問題リスト -->
    <div class="max-w-4xl mx-auto mt-4 space-y-2">
        <QuestionTemp1
            :questionNumber="21"
            :contents="[
            '30～39歳の年齢層の労働力率がいったん低下している。これは、結婚して退職し、子育てに専念している女性が多いことに起因するものと考えられる。',
            '40～50歳代は老後保障のニーズ、50～60歳は介護保障ニーズが高くなっている。',
            '正しい'
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
            '正しい',
            '一定の条件を満たす保険代理店においては、一社専属性の例外が認められ、複数の生命保険会社の商品を取り扱うことができる。',
            '諸外国でもみられる。'
            ]"
        />
        <QuestionTemp1
            :questionNumber="25"
            :contents="[
            '正しい',
            '履修が任意で、業界共通の研修時間が定められていないのは応用課程。',
            'シニルライフ・コンサルタント（SLC）の称号が与えられる。'
            ]"
        />
        <QuestionTemp1
            :questionNumber="26"
            :contents="[
            '生産年齢層の死亡率の急速な低下ではなく、乳児死亡率の急速な低下。',
            '正しい',
            '正しい'
            ]"
        />
        <QuestionTemp1
            :questionNumber="27"
            :contents="[
            '正しい',
            '年齢級別ではなく所得段階別。',
            '正しい'
            ]"
        />
        <QuestionTemp1
            :questionNumber="28"
            :contents="[
            '正しい',
            '契約者自身の運用方針を反映させることができる。',
            '正しい'
            ]"
        />
        <QuestionTemp1
            :questionNumber="29"
            :contents="[
            '正しい',
            '企業が「どれだけのサービスを提供してきたか」ではなく、顧客がサービスの質について、「良いサービス」と「悪いサービス」を判断し、企業を選択する時代になった。',
            '正しい'
            ]"
        />
        <QuestionTemp1
            :questionNumber="30"
            :contents="[
            '正しい',
            '正しい',
            '専業型と兼業型。'
            ]"
        />
        <QuestionTemp1
            :questionNumber="31"
            :contents="[
            '運営主体は各都道府県ではなく各市区町村。',
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
            '正しい',
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
            '3倍ではなく5倍。',
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
            '最低賃金法に基づく地域別最低賃金が適用される。'
            ]"
        />
    </div>

    <!-- ボタングループ -->
    <div class="flex flex-col items-center mt-4 pt-3 gap-4">
        <!-- 上段：前へ・次へボタン -->
        <div class="flex justify-center gap-16">
            <Link
                :href="route('eigyo2022c')"
                class="inline-flex items-center justify-center w-40 h-12 bg-purple-400 hover:bg-purple-500 text-white font-semibold rounded-lg shadow-md">
                前の試験へ
            </Link>
            <Link
                :href="route('eigyo2021b')"
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
