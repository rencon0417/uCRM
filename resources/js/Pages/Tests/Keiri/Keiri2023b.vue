<script setup>
import { Head, Link} from '@inertiajs/vue3';
import QuestionTemp1 from '../../../Components/QuestionTemp1.vue'
import QuestionTemp2 from '../../../Components/QuestionTemp2.vue'
import QuestionTemp3 from '../../../Components/QuestionTemp3.vue'
import QuestionTemp4 from '../../../Components/QuestionTemp4.vue'

import Pagetitle from '../../../Components/Pagetitle.vue'
import SeihoTestLayout from '@/Layouts/SeihoTestLayout.vue';

const title = "生命保険計理"
const subject = '2023年度 フォームB'

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
                    // 問１ p6-9
                    {
                        title: '生存率・生存数・平均余命・保険料計算',
                        answer: '0.97957',
                        explanation:
                        '<br>生存率 ＝ 期末の生存数 ÷ 期初の生存数<br>\
                        ＝ 93,054 ÷ 94,995<br>\
                        ＝ 0.979567･･･<br>\
                        ⇒ 小数第6位を四捨五入して <strong>0.97957</strong>'
                    },
                    // 問２ p6-9
                    {
                        title: '生存率・生存数・平均余命・保険料計算',
                        answer: '98,756',
                        explanation:
                        '<br>生存数 ＝ 期末の生存数 ÷ 期初の生存数 × 期初の生存者数<br>\
                        ＝ 97,539 ÷ 98,768 × 100,000<br>\
                        ＝ 98755.6･･･<br>\
                        ⇒ 小数第1位を四捨五入して <strong>98,756</strong>'
                    },
                    // 問３ p10
                    {
                        title: '生存率・生存数・平均余命・保険料計算',
                        answer: '1.02',
                        explanation:
                        '<br>死亡は年間を通じて発生するが、平均して年央に集中発生したものと考えられるので、例えば、100歳から101歳になるまでに死亡する人の平均生存年数は0.5年となる。<br><br>\
                        年齢 ： 死亡数 × 平均生存年数 ＝ 延べ生存年数<br>\
                        109歳 ： 25.888人 × 0.5年 ＝ 12.944 ＝ 12.94<br>\
                        110歳 ： 10.1008人 × 1.5年 ＝ 15.1512 ＝ 15.15<br>\
                        111歳 ： 3.4515人 × 2.5年 ＝ 8.62875 ＝ 8.63<br>\
                        112歳 ： 1.0162人 × 3.5年 ＝ 3.5567 ＝ 3.56<br>\
                        113歳 ： 0.3155人 × 4.5年 ＝ 1.41975 ＝ 1.42<br>\
                        → 109歳～113歳の延べ生存年数の合計 ＝ 45.15<br><br>\
                        平均余命 ＝ 延べ生存年数の合計 ÷ 生存者数<br>\
                        ＝ 41.7 ÷ 40.772 ＝ 1.022･･･<br>\
                        ⇒ 小数第3位を四捨五入して <strong>1.02</strong>'
                    },
                    // 問４ p39
                    {
                        title: '生存率・生存数・平均余命・保険料計算',
                        answer: '776,129',
                        explanation:
                        '<br>55歳の女性は1年間に260人が死亡し、1人あたりの保険金は300万円なので、合計の保険金額は<br>\
                        300万円 × 260人 ＝ 780,000千円<br><br>\
                        支払いは年央と仮定し、利率1.0%の期央払現価率0.995037で割引くと<br>\
                        780,000千円 × 0.995037 ＝ 776,128.86千円<br>\
                        ⇒ 千円未満を四捨五入して <strong>776,129千円</strong>'
                    },
                    // 問５ p39
                    {
                        title: '生存率・生存数・平均余命・保険料計算',
                        answer: '8,050',
                        explanation:
                        '<br>問4で求めた死亡保険金の支払いに必要な費用は、55歳女性の年始生存者数96,441人で平等に分担するので、<br>\
                        776,129千円 ÷ 96,441人 ＝ 8,047.70793円<br>\
                        ⇒ 十円未満を四捨五入して <strong>8,050円</strong>'
                    }
                ]"
                :labels="[
                    'イ','キ','ウ','コ','カ',  //問１〜５
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
                        answer: '6,015',
                        explanation:
                        '<br>元金は1,000,000円で、月利0.1%（＝0.001）の1ヶ月複利で6ヶ月間運用した場合の元利合計金額は、<br>\
                        1,000,000円 × (1 + 0.001) <sup>6</sup> ＝ 1,006,015.02<br><br>\
                        元金との差額が利息なので、<br>\
                        1,006,015.02 - 1,000,000 ＝ 6,015.02<br>\
                        ⇒ 円未満を四捨五入して <strong>6,015円</strong>'
                    },
                    // 問７
                    {
                        title: '複利運用',
                        answer: '1,061,646',
                        explanation:
                        '<br>年利1.2%で半年複利のため、利率は半年あたり0.6%（=0.006）となり、5年間で10回の複利が適用される。<br><br>\
                        よって元金1,000,000円の場合の元利合計金額は、<br>\
                        (1 + 0.006)<sup>10</sup> ＝ 1.0616461･･･ ＝ 1.061646(※)より<br>\
                        ※小数第7位四捨五入<br><br>\
                        1,000,000 × 1.061646 ＝ 1,061,646･･･<br>\
                        ⇒ 円未満を四捨五入して <strong>1,061,646円</strong>'
                    },
                    // 問８
                    {
                        title: '複利運用',
                        answer: '1.51',
                        explanation:
                        '<br>転化回数：1年間に利息を元金に繰り入れる回数<br><br>\
                        実利率 = （ 1 + 名称利率 ÷ 転化回数）<sup>転化回数</sup> - 1<br><br>\
                        （ 1 + 0.015 ÷ 4 ）<sup>4</sup> - 1 ＝ 0.015084 ＝ 1.5084%<br>\
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
                        answer: '1,941,180',
                        explanation:
                        '<br>元金 × （ 1 + 利率 ）<sup>期間</sup> ＝ 元利合計<br>\
                        元金 × （ 1 + 1.0% ）<sup>3年</sup> ＝ 200万円<br>\
                        元金 ＝ 2,000,000 ÷ （ 1 + 0.01 ）<sup>3</sup> ＝ 1,941,180.295<br>\
                        ⇒ 円未満を四捨五入して <strong>1,941,180円</strong>'
                    }
                ]"
                :labels="[
                    'カ','ク','ウ','イ','コ',  //問６〜10
                ]"
            />
            <QuestionTemp3
                :questionNumber="3"
                questionTitle="死亡表の種類"
                :title="title"
                :subject="subject"
                :contents="[
                '経験生命表','完全生命表','総合表','選択効果','年齢別', //問11〜15
                ]"
                :labels="[
                'ウ','ア','キ','カ','コ',  //問11〜15
                ]"
            />
            <QuestionTemp3
                :questionNumber="4"
                questionTitle="払済保険"
                :title="title"
                :subject="subject"
                :contents="[
                '解約返戻金','残存','そのときの被保険者の到達年齢','新契約費','同じ', //問16〜20
                ]"
                :labels="[
                'ウ','キ','ケ','ク','イ',  //問16〜20
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
                        answer: '2,139,522千円',
                        explanation:
                        '<br>死亡保険金の支払いは平均して年の中央で発生すると仮定し、50歳〜54歳の各年齢における死亡保険金の現価求めてそれらを合計する。<br><br>\
                        死亡保険金 × 死亡数 × 期央払現価 ＝ 死亡保険金の現価<br>\
                        50歳：2,000,000 × 192 × 0.995037 ＝ 382,094千円<br>\
                        51歳：2,000,000 × 205 × 0.985185 ＝ 403,926千円<br>\
                        52歳：2,000,000 × 219 × 0.975431 ＝ 427,239千円<br>\
                        53歳：2,000,000 × 234 × 0.965773 ＝ 451,982千円<br>\
                        54歳：2,000,000 × 248 × 0.956211 ＝ 474,281千円<br>\
                        ⇒ 合計：<strong>2,139,522千円</strong>'
                    },
                    // 問22
                    {
                        title: '満期保険金の現価について',
                        answer: '183,520,665千円',
                        explanation:
                        '<br>5年後に支払う満期保険金の現価は、<br>\
                        5年後の生存数 × 保険金額 × 期末払現価で求める。<br><br>\
                        55歳の生存数 × 200万円 × 5年の期末払現価<br>\
                        96,441 × 2,000,000 × 0.951466 ＝ 183,520,665,012円<br>\
                        ⇒ 千円未満を四捨五入して <strong>183,520,665千円</strong>'
                    },
                    // 問23
                    {
                        title: '予定事業費の現価について',
                        answer: '4,876,950千円',
                        explanation:
                        '<br>予定事業費は保険金1000円につき25円より、一人当たりの予定事業費に加入時の生存数をかけて求める。<br><br>\
                        保険金額 × 予定事業費率 × 50歳の生存数<br>\
                        2,000,000 × (25 ÷ 1000) × 97,539 ＝ 4,876,950,000<br>\
                        ⇒ 千円未満を四捨五入して <strong>4,876,950千円</strong>'
                    },
                    // 問24
                    {
                        title: '養老保険の年払営業保険料について',
                        answer: '400,170円',
                        explanation:
                        '<br>収支相当の原則「収入現価 ＝ 支出現価」で求める。<br><br>\
                        ＜収入現価＞<br>\
                        収入の現価は、50歳〜54歳の各年齢の生存数×年払保険料（P）を現価に換算して合計する。<br><br>\
                        年払保険料 × 生存数 × 期始払現価 ＝ 収入現価<br>\
                        50歳 ： P × 97,539 × 1.000000 ＝ 97,539P<br>\
                        51歳 ： P × 97,347 × 0.990099 ＝ 96,383P<br>\
                        52歳 ： P × 97,141 × 0.980296 ＝ 95,227P<br>\
                        53歳 ： P × 96,923 × 0.970590 ＝ 94,072P<br>\
                        54歳 ： P × 96,689 × 0.960980 ＝ 92,916P<br>\
                        → 50歳～54歳の収入現価の合計 ＝ 476,137P<br><br>\
                        ＜支出現価＞<br>\
                        支出現価は問21〜23で算出した結果を用いて求める。<br><br>\
                        死亡保険金の現価+満期保険金の現価+予定事業費の現価<br>\
                        ＝ 2,139,522千円 + 183,520,665千円 + 4,876,950千円<br>\
                        ＝ 190,537,137千円<br><br>\
                        収支相当の原則より<br>\
                        476,137P = 190,537,137千円<br>\
                        P ＝ 400,172･･･円 <br>\
                        ⇒ 10円未満を四捨五入して <strong>400,170円</strong>'
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
                :contents="[ //p134 (2023-A-25,2023-B-25,2023-C-25)
                '配当金を<u><b>一時</b></u>払保険料として契約応当日に保険を買増し（保険金を増額）する。',
                '配当金を保険料払込回数に等分して、毎回の保険料に充当、相殺する。',
                '正しい'
                ]"
            />
            <QuestionTemp1
                :questionNumber="26"
                :title="title"
                :subject="subject"
                :contents="[ //p54 (2023-A-26,2023-B-26,2023-C-26)
                '保険金を比例させる方式、営業保険料（または純保険料）に比例させる方式、<u>1契約について予定事業費を一定額とする方式</u>、これらの方式を組み合わせる方式の4方式のいずれかである。',
                '正しい',
                '正しい'
                ]"
            />
            <QuestionTemp1
                :questionNumber="27"
                :title="title"
                :subject="subject"
                :contents="[  //p102
                '正しい',
                '正しい',
                '保険計理人は、責任準備金が健全な保険計理に基づいて積み立てられているかどうかを確認し、その結果を配当の確認結果とあわせて意見書に記載して、<u><b>取締役会</b></u>に提出することが保険業法に定められている。'
                ]"
            />
            <QuestionTemp1
                :questionNumber="28"
                :title="title"
                :subject="subject"
                :contents="[ //p112
                '延長保険は、払済保険とは対照的に死亡保障に重点を置いて死亡保険金額は変わらないが、保険期間が短くなることもあり、満期時に受け取る保険金も<u><b>ゼロまたは少額</b></u>になる。',
                '正しい',
                '正しい'
                ]"
            />
            <QuestionTemp1
                :questionNumber="29"
                :title="title"
                :subject="subject"
                :contents="[ //p105 (2023-A-29,2023-B-29,2024-C-29)
                '正しい',
                '解約返戻金は、保険料の自動振替貸付と契約者貸付の限度基準として用いられている。',
                '正しい'
                ]"
            />
            <QuestionTemp1
                :questionNumber="30"
                :title="title"
                :subject="subject"
                :contents="[ //p129 (2023-B-30,2022-A-29,2022-B-29,2022-C-29)
                '正しい',
                '配当金の支払いを行わない無配当保険や5年ごと利差配当付保険のような保険は、保険料は通常の有配当保険より<u><b>安くなる</b></u>のが一般的である。',
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
                '生命保険会社では、満x歳を中心に前後6カ月の被保険者に対してx歳の保険料率を適用する「保険年齢方式」を採用している会社と、通常の年齢の数え方と同じ切捨方式（端数月はすべて切り捨てる）である「満年齢方式」を採用している会社がある。', //p15
                '正しい',
                '自然保険料ではなく平準保険料の説明。<br>毎年の保険料収入と保険金支出とが相等しくなるように定めた保険料を自然保険料という。', //p35-36 (2023-A-35,2023-B-35)
                // 問36〜40
                '正しい',
                '正しい',
                '正しい',
                '変額保険の変動保険金額は、毎月<u><b>月末</b></u>に、その時点での積立金と表定責任準備金との差額と、当該<u><b>月末</b></u>時点で計算された一時払保険料を用いて計算される。', //p144
                '正しい',
                 //問41〜50
                'C（A・Bともに正しい）', 'A-大数', 'B-高くなる', 'B-平準保険料', 'A-危険保険金',
                'A-標準', 'C（A・Bともに正しい）', 'C（A・Bともに正しい）', 'A-毎月', 'B-通常保険料',
                ]"
                :labels="[
                '解','解','解','解','解',  //問31〜35
                '解','解','解','解','解',  //問36〜40
                'オ','イ','エ','ウ','ア',  //問41〜45
                'イ','オ','オ','ア','ウ',  //問46〜50
                ]"
            />
        </div>

        <!-- ==== ナビゲーションボタン：グラデーションで強調 ==== -->
        <div class="flex flex-col items-center mt-10 gap-6">
            <div class="flex justify-center gap-10">
            <Link
                :href="route('keiri2023a')"
                class="w-40 h-12 flex items-center justify-center bg-gradient-to-r from-purple-400 to-blue-400 hover:from-purple-500 hover:to-blue-500 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
                前の試験へ
            </Link>
            <Link
                :href="route('keiri2023c')"
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
