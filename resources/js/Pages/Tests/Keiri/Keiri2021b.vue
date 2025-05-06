<script setup>
import { Head, Link} from '@inertiajs/vue3';
import QuestionTemp1 from '../../../Components/QuestionTemp1.vue'
import QuestionTemp2 from '../../../Components/QuestionTemp2.vue'
import QuestionTemp3 from '../../../Components/QuestionTemp3.vue'
import QuestionTemp4 from '../../../Components/QuestionTemp4.vue'

import Pagetitle from '../../../Components/Pagetitle.vue'
import SeihoTestLayout from '@/Layouts/SeihoTestLayout.vue';

const title = "生命保険計理"
const subject = '2021年度 フォームB'

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
            <QuestionTemp4
                :questionNumber="1"
                :title="title"
                :subject="subject"
                :contents="[
                    // 問１
                    {
                        answer: '2,710',
                        explanation:
                        '<br>元金は300,000円で、月利0.15%（＝0.0015）の1ヶ月複利で6ヶ月間運用した場合の元利合計金額は、<br>\
                        300,000円 × (1 + 0.0015) <sup>6</sup> ＝ 302,710.14<br><br>\
                        元金との差額が利息なので、<br>\
                        302,710.14 - 300,000 ＝ 2,710.14<br>\
                        ⇒ 円未満を四捨五入して <strong>2,710円</strong>'
                    },
                    // 問２
                    {
                        answer: '310,963',
                        explanation:
                        '<br>年利1.2%で半年複利のため、利率は半年あたり0.6%（=0.006）となり、3年間で6回の複利が適用される。<br><br>\
                        よって元金300,000円の場合の元利合計金額は、<br>\
                        300,000 × (1 + 0.006)<sup>6</sup> ＝ 310,963.30<br>\
                        ⇒ 円未満を四捨五入して <strong>310,963円</strong>'
                    },
                    // 問３
                    {
                        answer: '1.51',
                        explanation:
                        '<br>転化回数：1年間に利息を元金に繰り入れる回数<br><br>\
                        実利率 = （ 1 + 名称利率 ÷ 転化回数）<sup>転化回数</sup> - 1<br><br>\
                        （ 1 + 0.015 ÷ 6 ）<sup>6</sup> - 1 ＝ 0.015094 ＝ 1.5094%<br>\
                        ⇒ 小数第3位を四捨五入して <strong>1.51%</strong>'
                    },
                    // 問４
                    {
                        answer: '1.53',
                        explanation:
                        '<br>年平均利回り：投資によって得られる利益を、投資期間全体で年単位に平均化したもの<br><br>\
                        年平均利回り ＝ （（ 1 + 複利利率）<sup>期間</sup> - 1 ） ÷ 期間<br><br>\
                        （（ 1 + 0.015 ）<sup>4</sup> - 1 ） ÷ 4 ＝ 0.01534 ＝ 1.534%<br>\
                        ⇒ 小数第3位を四捨五入して <strong>1.53%</strong>'
                    },
                    // 問５ 400,000 + 395,648 + 391,343 + 387,085 + 382,874
                    {
                        answer: '1,956,950',
                        explanation:
                        '<br>40万円を毎年始に5年間支払うために必要な資金は、各年の支払いの現在価値を合計して求める。<br><br>\
                        初年度（今年） ： 400,000円<br>\
                        1年後の現在価値 ： 400,000 × （ 1 ÷ 1.011 ） ＝ 395,647.873 ＝ 395,648円<br>\
                        2年後の現在価値 ： 400,000 × （ 1 ÷ 1.011 ）<sup>2</sup> ＝ 391,343.099 ＝ 391,343円<br>\
                        3年後の現在価値 ： 400,000 × （ 1 ÷ 1.011 ）<sup>3</sup> ＝ 387,085.162 ＝ 387,085円<br>\
                        4年後の現在価値 ： 400,000 × （ 1 ÷ 1.011 ）<sup>4</sup> ＝ 382,873.553 ＝ 382,874円<br><br>\
                        現在において必要な資金の合計は<br>\
                        400,000 + 395,648 + 391,343 + 387,085 + 382,874 ＝ <strong>1,956,950円</strong>'
                    }
                ]"
                :labels="[
                    'カ','キ','ウ','エ','コ',  //問１〜５
                ]"
            />
            <QuestionTemp3
                :questionNumber="1"
                :title="title"
                :subject="subject"
                :contents="[
                '2,710','310,963','1.51','1.53','1,956,950', // 問１〜５
                ]"
                :labels="[
                'カ','キ','ウ','エ','コ',  //問１〜５
                ]"
            />
            <QuestionTemp3
                :questionNumber="2"
                :title="title"
                :subject="subject"
                :contents="[
                '0.98130','97,957','1.02','1,337,330','13,710', //問６〜10
                ]"
                :labels="[
                'イ','ク','ウ','コ','カ',  //問６〜10
                ]"
            />
            <QuestionTemp3
                :questionNumber="3"
                :title="title"
                :subject="subject"
                :contents="[
                '未経過保険料','危険準備金','4月1日から翌年3月31日','契約月','保険リスク', //問11〜15
                ]"
                :labels="[
                'キ','イ','エ','ケ','コ',  //問11〜15
                ]"
            />
            <QuestionTemp3
                :questionNumber="4"
                :title="title"
                :subject="subject"
                :contents="[
                '保証はない','変動保険金額','毎日','契約者','生命保険会社', //問16〜20
                ]"
                :labels="[
                'コ','カ','キ','ケ','イ',  //問16〜20
                ]"
            />
            <QuestionTemp1
                :questionNumber="21"
                :title="title"
                :subject="subject"
                :contents="[
                '正しい',
                '',
                ''
                ]"
                />
            <QuestionTemp1
                :questionNumber="22"
                :title="title"
                :subject="subject"
                :contents="[
                '',
                '正しい',
                ''
                ]"
            />
            <QuestionTemp1
                :questionNumber="23"
                :title="title"
                :subject="subject"
                :contents="[
                '',
                '',
                '正しい'
                ]"
            />
            <QuestionTemp1
                :questionNumber="24"
                :title="title"
                :subject="subject"
                :contents="[
                '',
                '正しい',
                ''
                ]"
            />
            <QuestionTemp1
                :questionNumber="25"
                :title="title"
                :subject="subject"
                :contents="[
                '正しい',
                '',
                ''
                ]"
            />
            <QuestionTemp1
                :questionNumber="26"
                :title="title"
                :subject="subject"
                :contents="[
                '正しい',
                '',
                '正しい'
                ]"
            />
            <QuestionTemp1
                :questionNumber="27"
                :title="title"
                :subject="subject"
                :contents="[
                '',
                '正しい',
                '正しい'
                ]"
            />
            <QuestionTemp1
                :questionNumber="28"
                :title="title"
                :subject="subject"
                :contents="[
                '正しい',
                '正しい',
                ''
                ]"
            />
            <QuestionTemp1
                :questionNumber="29"
                :title="title"
                :subject="subject"
                :contents="[
                '',
                '正しい',
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
                ''
                ]"
            />
            <QuestionTemp2
                :questionNumber="31"
                :title="title"
                :subject="subject"
                :contents="[
                // 問31〜35
                '',
                '正しい',
                '',
                '',
                '',
                // 問36〜40
                '正しい',
                '',
                '',
                '',
                '正しい',
                 //問41〜50
                'C（A・Bともに正しい）', 'B-総合表', 'B-1年間の毎日の資産残高の累計', 'A-高くなる', 'B-危険保険金',
                'A-契約者貸付', 'A-保険年度末保険料積立金', 'A-責任準備金', 'C（A・Bともに正しい）', 'B-純保険料率',
                ]"
                :labels="[
                '解','解','解','解','解',  //問31〜35
                '解','解','解','解','解',  //問36〜40
                'オ','ウ','エ','イ','ウ',  //問41〜45
                'ア','ア','イ','オ','ウ',  //問46〜50
                ]"
            />
        </div>

        <!-- ボタングループ -->
        <div class="flex flex-col items-center mt-4 pt-3 gap-4">
            <!-- 上段：前へ・次へボタン -->
            <div class="flex justify-center gap-16">
                <Link
                    :href="route('keiri2021a')"
                    class="inline-flex items-center justify-center w-40 h-12 bg-purple-400 hover:bg-purple-500 text-white font-semibold rounded-lg shadow-md">
                    前の試験へ
                </Link>
                <Link
                    :href="route('keiri2021c')"
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

    </SeihoTestLayout>


</template>
