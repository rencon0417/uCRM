<script setup>
import { Head, Link} from '@inertiajs/vue3';
import QuestionTemp1 from '../../../Components/QuestionTemp1.vue'
import QuestionTemp2 from '../../../Components/QuestionTemp2.vue'
import QuestionTemp3 from '../../../Components/QuestionTemp3.vue'
import QuestionTemp4 from '../../../Components/QuestionTemp4.vue'

import Pagetitle from '../../../Components/Pagetitle.vue'
import SeihoTestLayout from '@/Layouts/SeihoTestLayout.vue';

const title = "生命保険計理"
const subject = '2022年度 フォームC'

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
                        title: '生存率・生存数・平均余命・保険料計算',
                        answer: '0.96114',
                        explanation:
                        '<br>生存率 ＝ 期末の生存数 ÷ 期初の生存数<br>\
                        ＝ 88,751 ÷ 92,339<br>\
                        ＝ 0.961143･･･<br>\
                        ⇒ 小数第6位を四捨五入して <strong>0.96114</strong>'
                    },
                    // 問２
                    {
                        title: '生存率・生存数・平均余命・保険料計算',
                        answer: '98,233',
                        explanation:
                        '<br>生存数 ＝ 期末の生存数 ÷ 期初の生存数 × 期初の生存者数<br>\
                        ＝ 96,319 ÷ 98,052 × 100,000<br>\
                        ＝ 98232.5･･･<br>\
                        ⇒ 小数第1位を四捨五入して <strong>98,233</strong>'
                    },
                    // 問３
                    {
                        title: '生存率・生存数・平均余命・保険料計算',
                        answer: '1.26',
                        explanation:
                        '<br>死亡は年間を通じて発生するが、平均して年央に集中発生したものと考えられるので、例えば、100歳から101歳になるまでに死亡する人の平均生存年数は0.5年となる。<br><br>\
                        年齢 ： 死亡数 × 平均生存年数 ＝ 延べ生存年数<br>\
                        104歳 ： 62.726人 × 0.5年 ＝ 31.363 ＝ 31.36<br>\
                        105歳 ： 30.877人 × 1.5年 ＝ 46.3155 ＝ 46.32<br>\
                        116歳 ： 13.8961人 × 2.5年 ＝ 34.74025 ＝ 34.74<br>\
                        107歳 ： 5.6633人 × 3.5年 ＝ 19.82155 ＝ 19.82<br>\
                        108歳 ： 2.0682人 × 4.5年 ＝ 9.3069 ＝ 9.31<br>\
                        109歳 ： 0.9156人 × 5.5年 ＝ 5.0358 ＝ 5.04<br>\
                        → 104歳～109歳の延べ生存年数の合計 ＝ 141.59<br><br>\
                        平均余命 ＝ 延べ生存年数の合計 ÷ 生存者数<br>\
                        ＝ 146.59 ÷ 116.15 ＝ 1.262･･･<br>\
                        ⇒ 小数第3位を四捨五入して <strong>1.26</strong>'
                    },
                    // 問４ p39
                    {
                        title: '生存率・生存数・平均余命・保険料計算',
                        answer: '1,194,044',
                        explanation:
                        '<br>55歳の男性は1年間に400人が死亡し、1人あたりの保険金は300万円なので、合計の保険金額は<br>\
                        300万円 × 400人 ＝ 1,200,000千円<br><br>\
                        支払いは年央と仮定し、利率1.0%の期央払現価率0.995037で割引くと<br>\
                        1,200,000千円 × 0.995037 ＝ 1,194,044.4千円<br>\
                        ⇒ 千円未満を四捨五入して <strong>1,194,044千円</strong>'
                    },
                    // 問５ p39
                    {
                        title: '生存率・生存数・平均余命・保険料計算',
                        answer: '12,610',
                        explanation:
                        '<br>問4で求めた死亡保険金の支払いに必要な費用は、55歳男性の年始生存者数94,704人で平等に分担するので、<br>\
                        1,194,044千円 ÷ 94,704人 ＝ 12,608.1･･･円<br>\
                        ⇒ 十円未満を四捨五入して <strong>12,610円</strong>'
                    }
                ]"
                :labels="[
                    'ア','ク','ウ','コ','カ',  //問１〜５
                ]"
            />
            <QuestionTemp4
                :questionNumber="6"
                :title="title"
                :subject="subject"
                :contents="[
                    // 問６
                    {
                        title: '複利運用',
                        answer: '24,120',
                        explanation:
                        '<br>元金は2,000,000円で、月利0.2%（＝0.002）の1ヶ月複利で6ヶ月間運用した場合の元利合計金額は、<br>\
                        2,000,000円 × (1 + 0.002) <sup>6</sup> ＝ 2,024,120.32<br><br>\
                        元金との差額が利息なので、<br>\
                        2,024,120.32 - 2,000,000 ＝ 24,120.32<br>\
                        ⇒ 円未満を四捨五入して <strong>24,120円</strong>'
                    },
                    // 問７
                    {
                        title: '複利運用',
                        answer: '2,123,292',
                        explanation:
                        '<br>年利1.2%で半年複利のため、利率は半年あたり0.6%（=0.006）となり、5年間で10回の複利が適用される。<br><br>\
                        よって元金2,000,000円の場合の元利合計金額は、<br>\
                        2,000,000 × (1 + 0.006)<sup>10</sup> ＝ 2,123,292.3･･･<br>\
                        ⇒ 円未満を四捨五入して <strong>2,123,292円</strong>'
                    },
                    // 問８
                    {
                        title: '複利運用',
                        answer: '1.51',
                        explanation:
                        '<br>転化回数：1年間に利息を元金に繰り入れる回数<br><br>\
                        実利率 = （ 1 + 名称利率 ÷ 転化回数）<sup>転化回数</sup> - 1<br><br>\
                        （ 1 + 0.015 ÷ 4 ）<sup>4</sup> - 1 ＝ 0.015084 ＝ 1.508･･･%<br>\
                        ⇒ 小数第3位を四捨五入して <strong>1.51%</strong>'
                    },
                    // 問９
                    {
                        title: '複利運用',
                        answer: '1.33',
                        explanation:
                        '<br>年平均利回り：投資によって得られる利益を、投資期間全体で年単位に平均化したもの<br><br>\
                        年平均利回り ＝ （（ 1 + 複利利率）<sup>期間</sup> - 1 ） ÷ 期間<br><br>\
                        （（ 1 + 0.013 ）<sup>5</sup> - 1 ） ÷ 5 ＝ 0.0133424 ＝ 1.334･･･%<br>\
                        ⇒ 小数第3位を四捨五入して <strong>1.33%</strong>'
                    },
                    // 問10
                    {
                        title: '複利運用',
                        answer: '1,902,931',
                        explanation:
                        '<br>元金 × （ 1 + 利率 ）<sup>期間</sup> ＝ 元利合計<br>\
                        元金 × （ 1 + 1.0% ）<sup>5年</sup> ＝ 200万円<br>\
                        元金 ＝ 2,000,000 ÷ （ 1 + 0.01 ）<sup>5</sup> ＝ 1,902,931.3･･･<br>\
                        ⇒ 円未満を四捨五入して <strong>1,902,931円</strong>'
                    }
                ]"
                :labels="[
                    'オ','コ','ウ','イ','ク',  //問６〜10
                ]"
            />
            <QuestionTemp3
                :questionNumber="3"
                questionTitle="純保険料式保険料積立金"
                :title="title"
                :subject="subject"
                :contents="[
                '将来法','過去法','一致する','逓増','ゼロ', //問11〜15
                ]"
                :labels="[
                'キ','イ','エ','ケ','コ',  //問11〜15
                ]"
            />
            <QuestionTemp3
                :questionNumber="4"
                questionTitle="チルメル式保険料積立金"
                :title="title"
                :subject="subject"
                :contents="[
                '貯蓄','歩合','新契約','大きい','未償却', //問16〜20
                ]"
                :labels="[
                'ア','エ','ウ','ク','オ',  //問16〜20
                ]"
            />
            <QuestionTemp4
                :questionNumber="21"
                :title="title"
                :subject="subject"
                :contents="[
                    // 問21
                    {
                        title: '死亡保険金の現価について',
                        answer: '3,002,390千円',
                        explanation:
                        '<br>死亡保険金の支払いは平均して年の中央で発生すると仮定し、40歳〜44歳の各年齢における死亡保険金の現価求めてそれらを合計する。<br><br>\
                        死亡保険金 × 死亡数 × 期央払現価 ＝ 死亡保険金の現価<br>\
                        40歳：4,500,000 × 116 × 0.995037 ＝ 519,409千円<br>\
                        41歳：4,500,000 × 126 × 0.985185 ＝ 558,600千円<br>\
                        42歳：4,500,000 × 137 × 0.975431 ＝ 601,353千円<br>\
                        43歳：4,500,000 × 147 × 0.965773 ＝ 638,859千円<br>\
                        44歳：4,500,000 × 159 × 0.956211 ＝ 684,169千円<br>\
                        ⇒ 合計：<strong>3,002,390千円</strong>'
                    },
                    // 問22
                    {
                        title: '満期保険金の現価について',
                        answer: '416,881,974千円',
                        explanation:
                        '<br>5年後に支払う満期保険金の現価は、<br>\
                        5年後の生存数 × 保険金額 × 期末払現価で求める。<br><br>\
                        45歳の生存数 × 450万円 × 5年の期末払現価<br>\
                        97,366 × 4,500,000 × 0.951466 ＝ 416,881,973,502円<br>\
                        ⇒ 千円未満を四捨五入して <strong>416,881,974千円</strong>'
                    },
                    // 問23
                    {
                        title: '予定事業費の現価について',
                        answer: '11,030,850千円',
                        explanation:
                        '<br>予定事業費は保険金1000円につき25円より、一人当たりの予定事業費に加入時の生存数をかけて求める。<br><br>\
                        保険金額 × 予定事業費率 × 40歳の生存数<br>\
                        4,500,000 × (25 ÷ 1000) × 98,052 ＝ 11,030,850,000<br>\
                        ⇒ 千円未満を四捨五入して <strong>11,030,850千円</strong>'
                    },
                    // 問24
                    {
                        title: '養老保険の年払保険料について',
                        answer: '898,820円',
                        explanation:
                        '<br>収支相当の原則「収入現価 ＝ 支出現価」で求める。<br><br>\
                        ＜収入現価＞<br>\
                        収入の現価は、40歳〜44歳の各年齢の生存数×年払保険料（P）を現価に換算して合計する。<br><br>\
                        年払保険料 × 生存数 × 期始払現価 ＝ 収入現価<br>\
                        40歳 ： P × 98,052 × 1.000000 ＝ 98,052P<br>\
                        41歳 ： P × 97,936 × 0.990099 ＝ 96,966P<br>\
                        42歳 ： P × 97,810 × 0.980296 ＝ 95,883P<br>\
                        43歳 ： P × 97,673 × 0.970590 ＝ 94,800P<br>\
                        44歳 ： P × 97,525 × 0.960980 ＝ 93,720P<br>\
                        → 40歳～44歳の収入現価の合計 ＝ 479,421P<br><br>\
                        ＜支出現価＞<br>\
                        支出現価は問21〜23で算出した結果を用いて求める。<br><br>\
                        死亡保険金の現価+満期保険金の現価+予定事業費の現価<br>\
                        ＝ 3,002,390千円 + 416,881,974千円 + 11,030,850千円<br>\
                        ＝ 430,915,214千円<br><br>\
                        収支相当の原則より<br>\
                        479,421P = 430,915,214千円<br>\
                        P ＝ 898,824･･･円 <br>\
                        ⇒ 10円未満を四捨五入して <strong>898,820円</strong>'
                    },
                ]"
                :labels="[
                    'イ','イ','ウ','イ',  //問21〜24
                ]"
            />
            <QuestionTemp1
                :questionNumber="25"
                :title="title"
                :subject="subject"
                :contents="[ //p134 (2023-A-25,2023-B-25,2023-C-25,2022-A-25,2022-B-25,2022-C-25)
                '配当金を<u><b>一時</b></u>払保険料として契約応当日に保険を買増し（保険金を増額）する。',
                '配当金を保険料払込回数に等分して、毎回の保険料に充当、相殺する。',
                '正しい'
                ]"
            />
            <QuestionTemp1
                :questionNumber="26"
                :title="title"
                :subject="subject"
                :contents="[ //p53
                '予定死亡率を低く、予定利率を高くすると、定期保険と養老保険の純保険料は<u><b>低く</b></u>なる。',
                '正しい',
                '正しい'
                ]"
            />
            <QuestionTemp1
                :questionNumber="27"
                :title="title"
                :subject="subject"
                :contents="[ //p132
                '決算事業年度末において契約日からその日を含めて<u><b>1年</b></u>を超えている有効契約。',
                '正しい',
                '正しい'
                ]"
            />
            <QuestionTemp1
                :questionNumber="28"
                :title="title"
                :subject="subject"
                :contents="[ //p113 (2022-A-28,2022-B-28,2022-C-28)
                '正しい',
                '正しい',
                '満期時まで続いてなお解約返戻金（保険料積立金）の残額があれば生存保険金として、その額を支払う。'
                ]"
            />
            <QuestionTemp1
                :questionNumber="29"
                :title="title"
                :subject="subject"
                :contents="[ //p129 (2023-B-30,2022-A-29,2022-B-29,2022-C-29)
                '正しい',
                '配当金の支払いを行わない無配当保険や5年ごと利差配当付保険のような保険は、保険料は通常の有配当保険より<u><b>安くなる</b></u>のが一般的である。',
                '正しい'
                ]"
            />
            <QuestionTemp1
                :questionNumber="30"
                :title="title"
                :subject="subject"
                :contents="[
                '正しい',
                '団体定期保険では、保険料が被保険者ごとの積み上げを基礎としているのに対して、配当は、被保険者ごとの配当を算出して<u><b>それを積み上げるのではなく、団体単位で計算されている</b></u>。', //p154
                '正しい'
                ]"
            />
            <QuestionTemp2
                :questionNumber="31"
                :title="title"
                :subject="subject"
                :contents="[
                // 問31〜35
                '正しい',
                '正しい',
                '正しい',
                '平準保険料と異なり、自然保険料は責任準備金は積み立てる必要はない。',
                '各年齢ごとに1年定期保険の純保険料を計算すると、<u><b>予定死亡率の動きを反映したもの</b></u>となる。', //p40
                // 問36〜40
                '正しい',
                '正しい',
                '変額保険の変動保険金額は、毎月<u><b>月末</b></u>に、その時点での積立金と表定責任準備金との差額と、当該<u><b>月末</b></u>時点で計算された一時払保険料を用いて計算される。', //p144
                '変額保険の資産運用に関するリスクは、すべて<u><b>契約者</b></u>に帰属する。', //p150
                '団体年金数理においても収支相等が原則であるが、個人年金が収支相等の保証をもっぱら大数の法則に求めるのに対して、団体年金の場合、<u><b>大数の法則に加え、企業等の財政負担力に依存して</b></u>費用の時間的配分の効率化を図るということが重要である。',
                 //問41〜50
                'A-国民生命表', 'B-保険金に比例させる', 'B-責任準備金', 'A-年始生存者数', 'B-契約者貸付',
                'C（A・Bともに正しい）', 'A-第三分野保険', 'A-危険保険金額', 'A-運用実績連動型', 'B-通常保険料',
                ]"
                :labels="[
                '解','解','解','解','解',  //問31〜35
                '解','解','解','解','解',  //問36〜40
                'イ','ウ','エ','イ','エ',  //問41〜45
                'オ','ア','ア','ア','ウ',  //問46〜50
                ]"
            />
        </div>

        <!-- ==== ナビゲーションボタン：グラデーションで強調 ==== -->
        <div class="flex flex-col items-center mt-10 gap-6">
            <div class="flex justify-center gap-10">
            <Link
                :href="route('keiri2022b')"
                class="w-40 h-12 flex items-center justify-center bg-gradient-to-r from-purple-400 to-blue-400 hover:from-purple-500 hover:to-blue-500 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
                前の試験へ
            </Link>
            <Link
                :href="route('keiri2021a')"
                class="w-40 h-12  flex items-center justify-center bg-gradient-to-r from-purple-400 to-blue-400 hover:from-purple-500 hover:to-blue-500 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
                次の試験へ
            </Link>
            </div>

            <Link
            :href="route('tests.index')"
            class="w-40 h-12 flex items-center justify-center bg-gradient-to-r from-purple-400 to-blue-400 hover:from-purple-500 hover:to-blue-500 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
            一覧画面に戻る
            </Link>
        </div>

    </section>

    </SeihoTestLayout>


</template>
