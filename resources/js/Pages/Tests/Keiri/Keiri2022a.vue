<script setup>
import { Head, Link} from '@inertiajs/vue3';
import QuestionTemp1 from '../../../Components/QuestionTemp1.vue'
import QuestionTemp2 from '../../../Components/QuestionTemp2.vue'
import QuestionTemp3 from '../../../Components/QuestionTemp3.vue'
import QuestionTemp4 from '../../../Components/QuestionTemp4.vue'

import Pagetitle from '../../../Components/Pagetitle.vue'
import SeihoTestLayout from '@/Layouts/SeihoTestLayout.vue';

const title = "生命保険計理"
const subject = '2022年度 フォームA'

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
                questionTitle="剰余金の発生源-①"
                :title="title"
                :subject="subject"
                :contents="[
                '危険保険金','危険保険料','多く','責任準備金','利息および配当金等収入', //問11〜15
                ]"
                :labels="[
                'キ','イ','オ','ケ','コ',  //問11〜15
                ]"
            />
            <QuestionTemp3
                :questionNumber="4"
                questionTitle="剰余金の発生源-②"
                :title="title"
                :subject="subject"
                :contents="[
                '付加保険料','価格変動','危険準備金','解約・失効益','法人税および住民税額', //問16〜20
                ]"
                :labels="[
                'イ','オ','エ','ケ','カ',  //問16〜20
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
                        answer: '4,722,311千円',
                        explanation:
                        '<br>死亡保険金の支払いは平均して年の中央で発生すると仮定し、50歳〜54歳の各年齢における死亡保険金の現価求めてそれらを合計する。<br><br>\
                        死亡保険金 × 死亡数 × 期央払現価 ＝ 死亡保険金の現価<br>\
                        50歳：3,000,000 × 275 × 0.995037 ＝ 820,906千円<br>\
                        51歳：3,000,000 × 299 × 0.985185 ＝ 883,711千円<br>\
                        52歳：3,000,000 × 323 × 0.975431 ＝ 945,193千円<br>\
                        53歳：3,000,000 × 347 × 0.965773 ＝ 1,005,370千円<br>\
                        54歳：3,000,000 × 372 × 0.956211 ＝ 1,067,131千円<br>\
                        ⇒ 合計：<strong>4,722,311千円</strong>'
                    },
                    // 問22
                    {
                        title: '満期保険金の現価について',
                        answer: '270,322,908千円',
                        explanation:
                        '<br>5年後に支払う満期保険金の現価は、<br>\
                        5年後の生存数 × 保険金額 × 期末払現価で求める。<br><br>\
                        55歳の生存数 × 300万円 × 5年の期末払現価<br>\
                        94,704 × 3,000,000 × 0.951466 ＝ 270,322,908,192円<br>\
                        ⇒ 千円未満を四捨五入して <strong>270,322,908千円</strong>'
                    },
                    // 問23
                    {
                        title: '予定事業費の現価について',
                        answer: '7,223,925千円',
                        explanation:
                        '<br>予定事業費は保険金1000円につき25円より、一人当たりの予定事業費に加入時の生存数をかけて求める。<br><br>\
                        保険金額 × 予定事業費率 × 50歳の生存数<br>\
                        3,000,000 × (25 ÷ 1000) × 96,319 ＝ 7,223,925,000<br>\
                        ⇒ 千円未満を四捨五入して <strong>7,223,925千円</strong>'
                    },
                    // 問24
                    {
                        title: '養老保険の年払保険料について',
                        answer: '601,530円',
                        explanation:
                        '<br>収支相当の原則「収入現価 ＝ 支出現価」で求める。<br><br>\
                        ＜収入現価＞<br>\
                        収入の現価は、50歳〜54歳の各年齢の生存数×年払保険料（P）を現価に換算して合計する。<br><br>\
                        年払保険料 × 生存数 × 期始払現価 ＝ 収入現価<br>\
                        50歳 ： P × 96,319 × 1.000000 ＝ 96,319P<br>\
                        51歳 ： P × 96,045 × 0.990099 ＝ 95,094P<br>\
                        52歳 ： P × 95,746 × 0.980296 ＝ 93,859P<br>\
                        53歳 ： P × 95,423 × 0.970590 ＝ 92617P<br>\
                        54歳 ： P × 95,076 × 0.960980 ＝ 91,366P<br>\
                        → 50歳～54歳の収入現価の合計 ＝ 469,255P<br><br>\
                        ＜支出現価＞<br>\
                        支出現価は問21〜23で算出した結果を用いて求める。<br><br>\
                        死亡保険金の現価+満期保険金の現価+予定事業費の現価<br>\
                        ＝ 4,722,311千円 + 270,322,908千円 + 7,223,925千円<br>\
                        ＝ 282,269,144千円<br><br>\
                        収支相当の原則より<br>\
                        469,255P = 282,269,144千円<br>\
                        P ＝ 601,526･･･円 <br>\
                        ⇒ 10円未満を四捨五入して <strong>601,530円</strong>'
                    },
                ]"
                :labels="[
                    'ア','イ','ウ','イ',  //問21〜24
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
                :contents="[ //p12
                '国内では、経験表として日本、明治（現在の明治安田）、帝国（現在の朝日）の3社協同による「<u><b>日本三会社生命表</b></u>」が明治後半に作成されており、これが初の完備した経験表であった。',
                '正しい',
                '正しい'
                ]"
            />
            <QuestionTemp1
                :questionNumber="27"
                :title="title"
                :subject="subject"
                :contents="[ //p99
                '正しい',
                '生命保険会社では標準責任準備金が導入される以前から、保険料計算に用いた計算基礎を用いて責任準備金を積み立てていたが、例えば予定利率を高くすれば責任準備金の積立水準が低くなったりと、標準責任準備金の概念に沿った積み立てを行ってはいなかった。',
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
                :contents="[ //p147
                '正しい',
                '正しい',
                '保険金は契約当初の基本保険金額を基準として積立金の変動に応じて<u><b>毎月</b></u>変動する。'
                ]"
            />
            <QuestionTemp2
                :questionNumber="31"
                :questionTitle="[
                ]"
                :title="title"
                :subject="subject"
                :contents="[
                // 問31〜35
                '正しい',
                '正しい',
                '正しい',
                '予定死亡率を低く、予定利率を高くすると、定期保険と養老保険の純保険料は<u><b>低く</b></u>なる。', //p53
                '正しい',
                // 問36〜40
                '正しい',
                '自然保険料方式で計算されている場合、責任準備金を積み立てる必要はないが、平準保険料方式で計算されている場合は、責任準備金を積み立てる必要がある。', //p68
                '正しい',
                '変額保険の資産運用に関するリスクは、すべて<u><b>契約者</b></u>に帰属する。', //p150
                '正しい',
                 //問41〜50
                'B-2', 'B-収支相当', 'A-貯蓄保険料', 'B-予定利率', 'B-契約者貸付',
                'C（A・Bともに正しい）', 'A-保険種類', 'C（A・Bともに正しい）', 'C（A・Bともに正しい）', 'B-通常保険料',
                ]"
                :labels="[
                '解','解','解','解','解',  //問31〜35
                '解','解','解','解','解',  //問36〜40
                'エ','ウ','イ','エ','エ',  //問41〜45
                'オ','ア','オ','オ','ウ',  //問46〜50
                ]"
            />
        </div>

        <!-- ==== ナビゲーションボタン：グラデーションで強調 ==== -->
        <div class="flex flex-col items-center mt-10 gap-6">
            <div class="flex justify-center gap-10">
            <Link
                :href="route('keiri2023c')"
                class="w-40 h-12 flex items-center justify-center bg-gradient-to-r from-purple-400 to-blue-400 hover:from-purple-500 hover:to-blue-500 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
                前の試験へ
            </Link>
            <Link
                :href="route('keiri2022b')"
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
