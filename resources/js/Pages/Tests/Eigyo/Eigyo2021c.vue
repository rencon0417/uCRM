<script setup>
import { Head, Link} from '@inertiajs/vue3';
import { reactive, onMounted, ref, computed } from 'vue'
import { Inertia } from '@inertiajs/inertia';
import QuestionTemp1 from '../../../Components/QuestionTemp1.vue'
import QuestionTemp2 from '../../../Components/QuestionTemp2.vue'
import QuestionTemp3 from '../../../Components/QuestionTemp3.vue'

import Pagetitle from '../../../Components/Pagetitle.vue'
import SeihoTestLayout from '@/Layouts/SeihoTestLayout.vue';

const title = "生命保険商品と営業"
const subject = '2021年度 フォームC'

</script>

<template>
<SeihoTestLayout :title="title">
    <section class="bg-gray-100 text-gray-800 py-10">
        <!-- ページタイトル -->
        <Pagetitle
            :title="title"
            :description="subject"
        />
        <!-- 問題リスト -->
        <div class="max-w-4xl mx-auto mt-4 space-y-2">
            <QuestionTemp3
                :questionNumber="1"
                :title="title"
                :subject="subject"
                :contents="[
                '継続的', 'マーケティング', '転換制度', '必要な情報の提供者', '不可分化', // 問１〜５
                ]"
                :labels="[
                'ウ', 'コ', 'カ', 'キ', 'ク',  //問１〜５
                ]"
            />
            <QuestionTemp3
                :questionNumber="2"
                :title="title"
                :subject="subject"
                :contents="[
                'face to face', '情報通信機器', '囲い込み', 'CS（Customer Satisfaction）', '金融改革', //問６〜10
                ]"
                :labels="[
                'ア', 'キ', 'ウ', 'ケ', 'オ',  //問６〜10
                ]"
            />
            <QuestionTemp3
                :questionNumber="3"
                :title="title"
                :subject="subject"
                :contents="[
                '信用生命保険', '競争条件の公平性', '流出防止', '抱き合わせ販売', '商品情報', //問11〜15
                ]"
                :labels="[
                'キ', 'エ', 'コ', 'ク', 'カ',  //問11〜15
                ]"
            />
            <QuestionTemp3
                :questionNumber="4"
                :title="title"
                :subject="subject"
                :contents="[
                '個人年金保険（定額・変額）', '事前説明義務', '残債務リスク', '相談窓口', '全面解禁', //問16〜20
                ]"
                :labels="[
                'カ', 'ク', 'キ', 'コ', 'ケ',  //問16〜20
                ]"
            />
            <QuestionTemp1
                :questionNumber="21"
                :title="title"
                :subject="subject"
                :contents="[
                '30～39歳の年齢層の労働力率がいったん低下している。これは、結婚して退職し、子育てに専念している女性が多いことに起因するものと考えられる。',
                '40～50歳代は老後保障のニーズ、50～60歳は介護保障ニーズが高くなっている。',
                '正しい'
                ]"
            />
            <QuestionTemp1
                :questionNumber="22"
                :title="title"
                :subject="subject"
                :contents="[
                '正しい',
                '主契約より短い場合もある。',
                '相互会社でも認められている。'
                ]"
            />
            <QuestionTemp1
                :questionNumber="23"
                :title="title"
                :subject="subject"
                :contents="[
                '第3号被保険者は含まれない。',
                '正しい',
                '基金を契約者および受取人、基金の加入員を被保険者とする保険契約でり、基金の業務の引受も可能である。'
                ]"
            />
            <QuestionTemp1
                :questionNumber="24"
                :title="title"
                :subject="subject"
                :contents="[
                '正しい',
                '一定の条件を満たす保険代理店においては、一社専属性の例外が認められ、複数の生命保険会社の商品を取り扱うことができる。',
                '諸外国でもみられる。'
                ]"
            />
            <QuestionTemp1
                :questionNumber="25"
                :title="title"
                :subject="subject"
                :contents="[
                '正しい',
                '履修が任意で、業界共通の研修時間が定められていないのは応用課程。',
                'シニルライフ・コンサルタント（SLC）の称号が与えられる。'
                ]"
            />
            <QuestionTemp1
                :questionNumber="26"
                :title="title"
                :subject="subject"
                :contents="[
                '生産年齢層の死亡率の急速な低下ではなく、乳児死亡率の急速な低下。',
                '正しい',
                '正しい'
                ]"
            />
            <QuestionTemp1
                :questionNumber="27"
                :title="title"
                :subject="subject"
                :contents="[
                '正しい',
                '年齢級別ではなく所得段階別。',
                '正しい'
                ]"
            />
            <QuestionTemp1
                :questionNumber="28"
                :title="title"
                :subject="subject"
                :contents="[
                '正しい',
                '契約者自身の運用方針を反映させることができる。',
                '正しい'
                ]"
            />
            <QuestionTemp1
                :questionNumber="29"
                :title="title"
                :subject="subject"
                :contents="[
                '正しい',
                '企業が「どれだけのサービスを提供してきたか」ではなく、顧客がサービスの質について、「良いサービス」と「悪いサービス」を判断し、企業を選択する時代になった。',
                '正しい'
                ]"
            />
            <QuestionTemp1
                :questionNumber="30"
                :title="title"
                :subject="subject"
                :contents="[
                '正しい',
                '正しい',
                '専業型と兼業型。'
                ]"
            />
            <QuestionTemp2
                :questionNumber="31"
                :title="title"
                :subject="subject"
                :contents="[
                // 問31〜35
                '正しい',
                '生命保険が第一分野、損害保険が第二分野。',
                '消費者は契約を取り消すことができる。',
                '認定生命保険士ではなく生命保険面接土。',
                '被保険者が受取人の場合非課税扱いとなる。',
                // 問36〜40
                '正しい',
                '現在のところ、新企業年金保険、厚生年金基金保険、確定給付企業年金保険、国民年金基金保険、団体生存保険に付加する特別勘定特約が販売されている。',
                '正しい',
                '正しい',
                '正しい',
                 //問41〜50
                'B-通貨性預貯金', 'A-三大疾病', 'B-利差配当', 'A-55歳', 'A-経験死亡率',
                'C（A・Bともに正しい）', 'C（A・Bともに正しい）', 'B-自己負担の一部を補填する', 'B-終身', 'A-募集代理店',
                ]"
                :labels="[
                '解', '解', '解', '解', '解',  //問31〜35
                '解', '解', '解', '解', '解',  //問36〜40
                'ウ', 'イ', 'ウ', 'イ', 'ア',  //問41〜45
                'オ', 'オ', 'エ', 'エ', 'ア',  //問46〜50
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
</SeihoTestLayout>
</template>
