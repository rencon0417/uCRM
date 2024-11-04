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
        <p class="text-gray-600">2022年度 フォームB</p>
    </div>

    <!-- 問題リスト -->
    <div class="max-w-4xl mx-auto mt-4 space-y-2">
        <QuestionTemp1
            :questionNumber="21"
            :contents="[
            '住民票を有するすべての人へ個人番号の割り当てている。',
            '正しい',
            '重大個人情報ではなく特定個人情報。'
            ]"
        />
        <QuestionTemp1
            :questionNumber="22"
            :contents="[
            '正しい',
            '年齢要因ではなく時代要因の説明。',
            '時代要因ではなく年齢要因の説明。'
            ]"
        />
        <QuestionTemp1
            :questionNumber="23"
            :contents="[
            '死差配当ではなく利差配当。',
            '正しい',
            '完全生命表ではなく標準生命表。'
            ]"
        />
        <QuestionTemp1
            :questionNumber="24"
            :contents="[
            '団体用生命保険ではなく消費者用団体生命保険。',
            '信用保証機関を保険契約者および保険金受取人、債務者を被保険者とする。',
            '正しい'
            ]"
        />
        <QuestionTemp1
            :questionNumber="25"
            :contents="[
            '生命限険会社とを委託契約を結び、その生命保険商品を代理販売する募集代理店。',
            '募集代理店には、個人募集代理店と法人募集代理店がある。',
            '正しい'
            ]"
        />
        <QuestionTemp1
            :questionNumber="26"
            :contents="[
            '正しい',
            '学識経験者で構成され、高齢者の心身の状況調査と主治医意見書等に基づくコンピューター判定（一次判定）と主治医意見書に基づく審査判定（二次判定）を行う。',
            '正しい'
            ]"
        />
        <QuestionTemp1
            :questionNumber="27"
            :contents="[
            '責任準備金は生存した他の被保険者の保険金の支払に充当する。',
            '正しい',
            '正しい'
            ]"
        />
        <QuestionTemp1
            :questionNumber="28"
            :contents="[
            '正しい',
            '説明を怠った場合、業者は元本欠損額の賠償責任を負う。',
            '正しい'
            ]"
        />
        <QuestionTemp1
            :questionNumber="29"
            :contents="[
            '正しい',
            '正しい',
            '変動保険金は毎月変動、満期保険金は満期時に確定、積立金と解約返戻金は毎日変動。'
            ]"
        />
        <QuestionTemp1
            :questionNumber="30"
            :contents="[
            '一般課程試験の目的の説明。',
            '正しい',
            '正しい'
            ]"
        />
        <QuestionTemp1
            :questionNumber="31"
            :contents="[
            '財源構成は保険料50%、公費50%。',
            ]"
        />
        <QuestionTemp1
            :questionNumber="32"
            :contents="[
            '正しい',
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
            'メリットとしては、海外の比較的高い金利を反映することで、予定利率を高く設定していること。',
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
            '受け取る年金についても非課税である。'
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
            '正しい',
            ]"
        />
        <QuestionTemp1
            :questionNumber="39"
            :contents="[
            '保険仲立人は諸外国で一般的に認められている。'
            ]"
        />
        <QuestionTemp1
            :questionNumber="40"
            :contents="[
            '生命保険協会ではなく内閣総理大臣。'
            ]"
        />
    </div>

    <!-- ボタングループ -->
    <div class="flex flex-col items-center mt-4 pt-3 gap-4">
        <!-- 上段：前へ・次へボタン -->
        <div class="flex justify-center gap-16">
            <Link
                :href="route('eigyo2022a')"
                class="inline-flex items-center justify-center w-40 h-12 bg-purple-400 hover:bg-purple-500 text-white font-semibold rounded-lg shadow-md">
                前の試験へ
            </Link>
            <Link
                :href="route('eigyo2022c')"
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
