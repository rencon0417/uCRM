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
        description="2022年度 フォームA"
    />

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
            '支払われる保険金は非課税扱いになる。',
            '契約自体はあくまでも当初の契約が継続する点も転換制度と異なる。',
            '正しい'
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
            '一定の条件を満たす保険代理店においては、一社専属性の例外が認められ、複数の生命保険会社の商品を取り扱うことができる。',
            '改正保険業法において、「代理店などの保険募集人に対する体制整備義務の導入」が定められた。'
            ]"
        />
        <QuestionTemp1
            :questionNumber="25"
            :contents="[
            '正しい',
            '銀行等金融機関を専門的にサポートする担当者を一般的に「ホールセラー」と呼称する。',
            '企業保険の販売を中心とした活動を行いつつ、個人保険販売の支援のため担当企業やその関連企業の基盤化を推進している法人営業組織もある。'
            ]"
        />
        <QuestionTemp1
            :questionNumber="26"
            :contents="[
            '消費者は契約を取り消すことができる。損害額の賠償を請求できるわけではない。',
            '正しい',
            '正しい'
            ]"
        />
        <QuestionTemp1
            :questionNumber="27"
            :contents="[
            '責任準金は生存した他の被保険者の保険金の支払に充当する。',
            '正しい',
            '正しい'
            ]"
        />
        <QuestionTemp1
            :questionNumber="28"
            :contents="[
            '正しい',
            '一般預貯金と同じく利子に対して20%課税される。',
            '正しい'
            ]"
        />
        <QuestionTemp1
            :questionNumber="29"
            :contents="[
            '正しい',
            '正しい',
            '金融商品取引法ではなく個人情報保護。'
            ]"
        />
        <QuestionTemp1
            :questionNumber="30"
            :contents="[
            'ソルベンシー・マージン比率ではなく、予定事業費とくに予定新契約費。',
            '正しい',
            '正しい'
            ]"
        />
        <QuestionTemp1
            :questionNumber="31"
            :contents="[
            '国、都道府県、被保険者が重層的に支えあう制度となっている。',
            ]"
        />
        <QuestionTemp1
            :questionNumber="32"
            :contents="[
            '業務の代理に保険募集の代理を含まれることを明確化したことから、保険会社が他保険会社と業務の代理・事務の代行に関する契約を結んで、他保険会社商品を販売することが可能となった。',
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
            '自己負担の一部を補填する治療給付金、定額の入院給付金、死亡時の死亡保険金の3つから構成される。'
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
            '正しい'
            ]"
        />
        <QuestionTemp1
            :questionNumber="40"
            :contents="[
            '専業型と兼業型。'
            ]"
        />
    </div>

    <!-- ボタングループ -->
    <div class="flex flex-col items-center mt-4 pt-3 gap-4">
        <!-- 上段：前へ・次へボタン -->
        <div class="flex justify-center gap-16">
            <Link
                :href="route('eigyo2023c')"
                class="inline-flex items-center justify-center w-40 h-12 bg-purple-400 hover:bg-purple-500 text-white font-semibold rounded-lg shadow-md">
                前の試験へ
            </Link>
            <Link
                :href="route('eigyo2022b')"
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
