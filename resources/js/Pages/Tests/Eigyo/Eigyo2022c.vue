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
        <p class="text-gray-600">2022年度 フォームC</p>
    </div>

    <!-- 問題リスト -->
    <div class="max-w-4xl mx-auto mt-4 space-y-2">
        <QuestionTemp1
            :questionNumber="21"
            :contents="[
            '住民票を有するすべての人へ個人番号を割り当てている。',
            '正しい',
            '重大個人情報ではなく特定個人情報。'
            ]"
        />
        <QuestionTemp1
            :questionNumber="22"
            :contents="[
            '正しい',
            '3分の1ではなく2分の1。',
            '短期労働者に対する厚生年金保険・健康保険の適用拡大が行われた。'
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
            '正しい',
            '学識経験者で構成され、高齢者の心身の状況調査と主治医意見書等に基づくコンピューター判定（一次判定）と主治医意見書に基づく審査判定（二次判定）を行う。',
            '施設サービスを利用した場合の食費及び居住費は自己負担。'
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
            '初めてではなく、1985年には発売されている。',
            '正しい',
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
            '保険期間は1年。',
            '正しい'
            ]"
        />
        <QuestionTemp1
            :questionNumber="29"
            :contents="[
            '子会社・兄弟会社限定が解除され、生保商品の銀行窓販が実質的に解禁されることとなった。',
            '正しい',
            '正しい'
            ]"
        />
        <QuestionTemp1
            :questionNumber="30"
            :contents="[
            '正しい',
            '正しい',
            'スーパーバイザーではなくホールセラー。'
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
            '既契約者から本人情報の開示を求められた場合には、個人情報保護法により開示が義務付けられている項目・箇所については開示しなければならない。',
            ]"
        />
        <QuestionTemp1
            :questionNumber="33"
            :contents="[
            '特別配当の権利は転換後の契約に引き継がれる。',
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
            '入院または医師の指示により自宅療養をし、業務に全く従事できない状態（就業不能状態）が所定の期間を超えて継続した場合に就業不能保険金を支払う保険である。'
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
            '生命保険商品の枠を超えたコンサルティングセールスも要求されている。',
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
            'トータル・ライフ・コンサルタント（TLC）が正しい。'
            ]"
        />
    </div>

    <!-- ボタングループ -->
    <div class="flex flex-col items-center mt-4 pt-3 gap-4">
        <!-- 上段：前へ・次へボタン -->
        <div class="flex justify-center gap-16">
            <Link
                :href="route('eigyo2022b')"
                class="inline-flex items-center justify-center w-40 h-12 bg-purple-400 hover:bg-purple-500 text-white font-semibold rounded-lg shadow-md">
                前の試験へ
            </Link>
            <Link
                :href="route('eigyo2021a')"
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
