<script setup>
import { Head, Link} from '@inertiajs/vue3';
import QuestionTemp1 from '../../../Components/QuestionTemp1.vue'
import QuestionTemp2 from '../../../Components/QuestionTemp2.vue'
import QuestionTemp3 from '../../../Components/QuestionTemp3.vue'
import QuestionTemp4 from '../../../Components/QuestionTemp4.vue'

import Pagetitle from '../../../Components/Pagetitle.vue'
import SeihoTestLayout from '@/Layouts/SeihoTestLayout.vue';

const title = "生命保険計理"
const subject = '2023年度 フォームC'

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
                        title: '複利運用',
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
                        title: '複利運用',
                        answer: '310,963',
                        explanation:
                        '<br>年利1.2%で半年複利のため、利率は半年あたり0.6%（=0.006）となり、3年間で6回の複利が適用される。<br><br>\
                        よって元金300,000円の場合の元利合計金額は、<br>\
                        300,000 × (1 + 0.006)<sup>6</sup> ＝ 310,963.30<br>\
                        ⇒ 円未満を四捨五入して <strong>310,963円</strong>'
                    },
                    // 問３
                    {
                        title: '複利運用',
                        answer: '1.51',
                        explanation:
                        '<br>転化回数：1年間に利息を元金に繰り入れる回数<br><br>\
                        実利率 = （ 1 + 名称利率 ÷ 転化回数）<sup>転化回数</sup> - 1<br><br>\
                        （ 1 + 0.015 ÷ 6 ）<sup>6</sup> - 1 ＝ 0.015094 ＝ 1.509･･･%<br>\
                        ⇒ 小数第3位を四捨五入して <strong>1.51%</strong>'
                    },
                    // 問４
                    {
                        title: '複利運用',
                        answer: '1.53',
                        explanation:
                        '<br>年平均利回り：投資によって得られる利益を、投資期間全体で年単位に平均化したもの<br><br>\
                        年平均利回り ＝ （（ 1 + 複利利率）<sup>期間</sup> - 1 ） ÷ 期間<br><br>\
                        （（ 1 + 0.015 ）<sup>4</sup> - 1 ） ÷ 4 ＝ 0.01534 ＝ 1.534%<br>\
                        ⇒ 小数第3位を四捨五入して <strong>1.53%</strong>'
                    },
                    {
                        title: '複利運用',
                        answer: '1,956,950',
                        explanation:
                        '<br>40万円を毎年始に5年間支払うために必要な資金は、各年の支払いの現在価値を合計して求める。<br><br>\
                        （ 1 ÷ 1.011 ） ＝ 0.9891196 ＝ 0.98912(※)<br>\
                        （ 1 ÷ 1.011 ）<sup>2</sup> ＝ 0.9783577 ＝ 0.978358(※)<br>\
                        （ 1 ÷ 1.011 ）<sup>3</sup> ＝ 0.9677129 ＝ 0.967713(※)<br>\
                        （ 1 ÷ 1.011 ）<sup>4</sup> ＝ 0.9571838 ＝ 0.957184(※)<br>\
                        ※小数第7位四捨五入<br><br>\
                        よって各年度始の現在価値は、<br>\
                        初年度 ： 400,000円<br>\
                        1年後 ： 400,000 × （ 1 ÷ 1.011 ） ＝ 395,648円<br>\
                        2年後 ： 400,000 × （ 1 ÷ 1.011 ）<sup>2</sup> ＝ 391,343.2円<br>\
                        3年後 ： 400,000 × （ 1 ÷ 1.011 ）<sup>3</sup> ＝ 387,085.2円<br>\
                        4年後 ： 400,000 × （ 1 ÷ 1.011 ）<sup>4</sup> ＝ 382,873.6円<br>\
                        現在において必要な資金の合計は、1,956,950.0円<br>\
                        ⇒ 円未満を四捨五入して <strong>1,956,950円</strong>'
                    }
                ]"
                :labels="[
                    'カ','ク','ウ','エ','コ',  //問１〜５
                ]"
            />
            <QuestionTemp4
                :questionNumber="6"
                :title="title"
                :subject="subject"
                :contents="[
                    // 問６
                    {
                        title: '生存率・生存数・平均余命・保険料計算',
                        answer: '0.98130',
                        explanation:
                        '<br>生存率 ＝ 期末の生存数 ÷ 期初の生存数<br>\
                        ＝ 96,441 ÷ 98,279<br>\
                        ＝ 0.981298･･･<br>\
                        ⇒ 小数第6位を四捨五入して <strong>0.98130</strong>'
                    },
                    // 問７
                    {
                        title: '生存率・生存数・平均余命・保険料計算',
                        answer: '97,957',
                        explanation:
                        '<br>生存数 ＝ 期末の生存数 ÷ 期初の生存数 × 期初の生存者数<br>\
                        ＝ 93,054 ÷ 94,995 × 100,000<br>\
                        ＝ 97956.7･･･<br>\
                        ⇒ 小数第1位を四捨五入して <strong>97,957</strong>'
                    },
                    // 問８
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
                    // 問９
                    {
                        title: '生存率・生存数・平均余命・保険料計算',
                        answer: '1,337,330',
                        explanation:
                        '<br>50歳の女性は1年間に192人が死亡し、1人あたりの保険金は700万円なので、合計の保険金額は<br>\
                        700万円 × 192人 ＝ 1,344,000千円<br><br>\
                        支払いは年央と仮定し、利率1.0%の期央払現価率0.995037で割引くと<br>\
                        1,344,000千円 × 0.995037 ＝ 1,337,329.73千円<br>\
                        ⇒ 千円未満を四捨五入して <strong>1,337,330千円</strong>'
                    },
                    // 問10
                    {
                        title: '生存率・生存数・平均余命・保険料計算',
                        answer: '13,710',
                        explanation:
                        '<br>問4で求めた死亡保険金の支払いに必要な費用は、50歳女性の年始生存者数97,539人で平等に分担するので、<br>\
                        1,337,330千円 ÷ 97,539人 ＝ 13,710.7208円<br>\
                        ⇒ 十円未満を四捨五入して <strong>13,710円</strong>'
                    }
                ]"
                :labels="[
                    'イ','ク','ウ','コ','カ',  //問６〜10
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
                        answer: '1,082,173千円',
                        explanation:
                        '<br>死亡保険金の支払いは平均して年の中央で発生すると仮定し、45歳〜49歳の各年齢における死亡保険金の現価求めてそれらを合計する。<br><br>\
                        死亡保険金 × 死亡数 × 期央払現価 ＝ 死亡保険金の現価<br>\
                        45歳：1,500,000 × 120 × 0.995037 ＝ 179,107千円<br>\
                        46歳：1,500,000 × 133 × 0.985185 ＝ 196,544千円<br>\
                        47歳：1,500,000 × 147 × 0.975431 ＝ 215,083千円<br>\
                        48歳：1,500,000 × 163 × 0.965773 ＝ 236,131千円<br>\
                        49歳：1,500,000 × 178 × 0.956211 ＝ 255,308千円<br>\
                        ⇒ 合計：<strong>1,082,173千円</strong>'
                    },
                    // 問22
                    {
                        title: '満期保険金の現価について',
                        answer: '139,207,563千円',
                        explanation:
                        '<br>5年後に支払う満期保険金の現価は、<br>\
                        5年後の生存数 × 保険金額 × 期末払現価で求める。<br><br>\
                        50歳の生存数 × 150万円 × 5年の期末払現価<br>\
                        97,539 × 1,500,000 × 0.951466 ＝ 139,207,563,261円<br>\
                        ⇒ 千円未満を四捨五入して <strong>139,207,563千円</strong>'
                    },
                    // 問23
                    {
                        title: '予定事業費の現価について',
                        answer: '3,685,463千円',
                        explanation:
                        '<br>予定事業費は保険金1000円につき25円より、一人当たりの予定事業費に加入時の生存数をかけて求める。<br><br>\
                        保険金額 × 予定事業費率 × 45歳の生存数<br>\
                        1,500,000 × (25 ÷ 1000) × 98,279 ＝ 3,685,462,500<br>\
                        ⇒ 千円未満を四捨五入して <strong>3,685,463千円</strong>'
                    },
                    // 問24
                    {
                        title: '養老保険の年払営業保険料について',
                        answer: '299,660円',
                        explanation:
                        '<br>収支相当の原則「収入現価 ＝ 支出現価」で求める。<br><br>\
                        ＜収入現価＞<br>\
                        収入の現価は、45歳〜49歳の各年齢の生存数×年払保険料（P）を現価に換算して合計する。<br><br>\
                        年払保険料 × 生存数 × 期始払現価 ＝ 収入現価<br>\
                        45歳 ： P × 98,279 × 1.000000 ＝ 98,279P<br>\
                        46歳 ： P × 98,160 × 0.990099 ＝ 97,188P<br>\
                        47歳 ： P × 98,027 × 0.980296 ＝ 96,095P<br>\
                        48歳 ： P × 97,880 × 0.970590 ＝ 95,001P<br>\
                        49歳 ： P × 97,717 × 0.960980 ＝ 93,904P<br>\
                        → 50歳～54歳の収入現価の合計 ＝ 480,467P<br><br>\
                        ＜支出現価＞<br>\
                        支出現価は問21〜23で算出した結果を用いて求める。<br><br>\
                        死亡保険金の現価+満期保険金の現価+予定事業費の現価<br>\
                        ＝ 1,082,173千円 + 139,207,563千円 + 3,685,463千円<br>\
                        ＝ 143,975,199千円<br><br>\
                        収支相当の原則より<br>\
                        480,467P = 143,975,199千円<br>\
                        P ＝ 299,656･･･円 <br>\
                        ⇒ 10円未満を四捨五入して <strong>299,660円</strong>'
                    },
                ]"
                :labels="[
                    'ア','イ','イ','イ',  //問21〜24
                ]"
            />
            <QuestionTemp1
                :questionNumber="25"
                :title="title"
                :subject="subject"
                :contents="[ //p134 (2023-A-25,2023-B-25,2024-C-25)
                '配当金を<u><b>一時</b></u>払保険料として契約応当日に保険を買増し（保険金を増額）する。',
                '契約応当日に始まる保険年度について、配当金を保険料払込回数に等分して、毎回の保険料に充当、相殺する',
                '正しい'
                ]"
            />
            <QuestionTemp1
                :questionNumber="26"
                :title="title"
                :subject="subject"
                :contents="[ //p54 (2023-A-26,2023-B-26,2024-C-26)
                '保険金を比例させる方式、営業保険料（または純保険料）に比例させる方式、<u>1契約について予定事業費を一定額とする方式</u>、これらの方式を組み合わせる方式の4方式のいずれかである。',
                '正しい',
                '正しい'
                ]"
            />
            <QuestionTemp1
                :questionNumber="27"
                :title="title"
                :subject="subject"
                :contents="[ //p79
                '正しい',
                '正しい',
                '保険料積立金は養老保険では年を追って逓増し、満期時に満期保険金相当額に達する。一方、<u><b>定期保険</u></b>では、ゆるやかな山なりのカーブを描いて最終的にゼロになる。'
                ]"
            />
            <QuestionTemp1
                :questionNumber="28"
                :title="title"
                :subject="subject"
                :contents="[ //p96 (2024-A-28,2024-B-28,2024-C-28,2023-C-28)
                '保険業法では、事業年度末までに経過した期間に見合う保険料部分に対応する積立金（保険料積立金）、翌事業年度以降に対応する保険料部分（未経過保険料）、<u>第三分野における積立傷害保険等の積立型商品において、将来の満期返戻金支払いに対応する保険料部分（払戻積立金）</u>および危険準備金に分けて計算することとされている。',
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
                :contents="[ //p155
                '年金制度の主な財政方式として、積立水準の低いものから高いものへ順に並べると完全賦課方式、平準積立方式、即時積立方式の順となる。',
                '正しい',
                '正しい'
                ]"
            />
            <QuestionTemp2
                :questionNumber="31"
                :title="title"
                :subject="subject"
                :contents="[
                // 問31〜35
                '生命保険会社では、満x歳を中心に前後6カ月の被保険者に対してx歳の保険料率を適用する「保険年齢方式」を採用している会社と、通常の年齢の数え方と同じ切捨方式（端数月はすべて切り捨てる）である「満年齢方式」を採用している会社がある。', //p15
                '正しい',
                '予定利率は、以前は、長期の契約の予定利率を短期の契約よりも低めの、保守的な水準に設定する生命保険会社もあったが、現在では多くの生命保険会社で保険期間によらず<u><b>商品の特性</b></u>に応じて予定利率を定めている。', //p38 (2023-A-33,2023-C-33)
                '正しい',
                '延長保険は、死亡保障に重点を置いて死亡保険金額は<u><b>変わらない</b></u>が、保険期間が<u><b>短くなる</b></u>こともあり、満期時に受け取る保険金も<u><b>ゼロまたは少額</b></u>になる。', //p113
                // 問36〜40
                '正しい',
                '正しい',
                '経過年数が短い契約については、通常、危険選択の<u><b>効果があり</b></u>、実際死亡率が予定死亡率を<u><b>かなり下回る</b></u>ので死差益は<u><b>多い</b></u>が、経過年数が増すにつれて選択効果が<u><b>薄れ</b></u>、死差益は<u><b>少なく</b></u>なる。', //p126
                '正しい',
                '資産運用に関するリスクは、定額保険は生命保険会社、変額保険は契約者に帰属する。', //p150
                 //問41〜50
                'C（A・Bともに正しい）', 'B-収支相当', 'B-高くなる', 'B-平準保険料', 'A-危険保険金',
                'B-負債十分性', 'C（A・Bともに正しい）', 'A-保険年度末保険料積立金', 'A-運用実績連動型', 'C（A・Bともに正しい）',
                ]"
                :labels="[
                '解','解','解','解','解',  //問31〜35
                '解','解','解','解','解',  //問36〜40
                'オ','ウ','エ','ウ','ア',  //問41〜45
                'エ','オ','ア','ア','オ',  //問46〜50
                ]"
            />
        </div>

        <!-- ==== ナビゲーションボタン：グラデーションで強調 ==== -->
        <div class="flex flex-col items-center mt-10 gap-6">
            <div class="flex justify-center gap-10">
            <Link
                :href="route('keiri2023b')"
                class="w-40 h-12 flex items-center justify-center bg-gradient-to-r from-purple-400 to-blue-400 hover:from-purple-500 hover:to-blue-500 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
                前の試験へ
            </Link>
            <Link
                :href="route('keiri2022a')"
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
