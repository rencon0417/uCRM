<script setup>
import { Head, Link} from '@inertiajs/vue3';
import QuestionTemp1 from '../../../Components/QuestionTemp1.vue'
import QuestionTemp2 from '../../../Components/QuestionTemp2.vue'
import QuestionTemp3 from '../../../Components/QuestionTemp3.vue'
import QuestionTemp4 from '../../../Components/QuestionTemp4.vue'

import Pagetitle from '../../../Components/Pagetitle.vue'
import SeihoTestLayout from '@/Layouts/SeihoTestLayout.vue';

const title = "生命保険計理"
const subject = '2024年度 フォームA'

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
                        answer: '0.98925',
                        explanation:
                        '生存率 ＝ 期末の生存数 ÷ 期初の生存数<br><br>\
                        生存率：<br>\
                        96,319 ÷ 97,366 ＝ 0.989246<br>\
                        ⇒ 0.98925（小数第6位を四捨五入）'
                    },
                    // 問２
                    {
                        answer: '93,714',
                        explanation:
                        '生存数 ＝ 期末の生存数 ÷ 期初の生存数 × 期初の生存者数<br><br>\
                        生存数：<br>\
                        88,751 ÷ 94,704 × 100,000 ＝ 93714.0<br>\
                        ⇒93,714（小数第1位を四捨五入）'
                    },
                    // 問３
                    {
                        answer: '1.16',
                        explanation:
                        '前提：<br>\
                        死亡は年央に集中して発生するものと仮定。<br>\
                        各年齢での平均生存年数を元に延べ生存年数を求める。<br><br>\
                        年齢 ： 死亡数 × 平均生存年数 ＝ 延べ生存年数<br>\
                        105歳 ： 30.877人 × 0.5年 ＝ 15.44<br>\
                        116歳 ： 13.8961人 × 1.5年 ＝ 20.84<br>\
                        107歳 ： 5.6633人 × 2.5年 ＝ 14.16<br>\
                        108歳 ： 2.0682人 × 3.5年 ＝ 7.24<br>\
                        109歳 ： 0.9156人 × 4.5年 ＝ 4.12<br>\
                        105歳～109歳の延べ生存年数の合計 ＝ 61.8<br><br>\
                        平均余命 ＝ 延べ生存年数の合計 ÷ 生存者数<br><br>\
                        平均余命：<br>\
                        61.8 ÷ 53.420 ＝ 1.156<br>\
                        ⇒ 1.16（小数第3位を四捨五入）'
                    },
                    // 問４ p39
                    {
                        answer: '1,368,176',
                        explanation:
                        '50歳男性の死亡数：275人<br>\
                        1人あたりの保険金：500万円<br><br>\
                        合計保険金額 ＝ 500万円 × 275人 ＝ 1,375,000千円<br><br>\
                        支払いは年央と仮定<br>\
                        利率1.0%の期央払現価率：0.995037<br><br>\
                        現価 ＝ 1,375,000千円 × 0.995037 ＝ 1,368,175.8千円<br><br>\
                        必要な現価：<br>\
                        ⇒ 1,368,176千円（千円未満を四捨五入）'
                    },
                    // 問５ p39
                    {
                        title: '生存率・生存数・平均余命・保険料計算',
                        answer: '14,200',
                        explanation:
                        '必要な現価：1,368,176千円（問4より）<br>\
                        50歳男性の年始生存者数：96,319人<br><br>\
                        保険料 ＝ 1,368,176千円 ÷ 96,319人 ＝ 14,204円<br><br>\
                        1人あたりの保険料：<br>\
                        ⇒ 14,200円（十円未満を四捨五入）'
                    },
                ]"
                :labels="[
                    'イ','ク','ウ','コ','オ',  //問１〜５
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
                        answer: '4,517',
                        explanation:
                        '元金：500,000円<br>\
                        月利：0.15%（＝0.0015）<br><br>\
                        1ヶ月複利で6ヶ月間運用した場合の元利合計金額を求める。<br><br>\
                        500,000円 × (1 + 0.0015) <sup>6</sup> ＝ 504,516.9円<br><br>\
                        利息：<br>\
                        504,516.9円 − 500,000円 ＝ 4,516.9円<br>\
                        ⇒ 4,517円（円未満を四捨五入）'
                    },
                    // 問７
                    {
                        title: '複利運用',
                        answer: '528,696',
                        explanation:
                        '元金：500,000円<br>\
                        年利：1.4%<br>\
                        半年利：0.7%（＝0.007）<br>\
                        複利回数：8回（＝4年間 × 年2回）<br><br>\
                        500,000円 × (1 + 0.007)<sup>8</sup> ＝ 528,695.6円<br><br>\
                        元利合計：<br>\
                        ⇒ 528,696円（円未満を四捨五入）'
                    },
                    // 問８
                    {
                        title: '複利運用',
                        answer: '1.21',
                        explanation:
                        '転化回数：1年間に利息を元金に繰り入れる回数<br><br>\
                        実利率 ＝（ 1 + 名称利率 ÷ 転化回数）<sup>転化回数</sup> - 1<br><br>\
                        実利率：<br>\
                        （ 1 + 0.012 ÷ 4 ）<sup>4</sup> - 1 ＝ 0.01205 ＝ 1.205%<br>\
                        ⇒ 1.21%（小数第3位を四捨五入）'
                    },
                    // 問９
                    {
                        title: '複利運用',
                        answer: '1.83',
                        explanation:
                        '複利利率：1.8%（＝0.018）<br>\
                        投資期間：3年<br>\
                        年平均利回り ＝ （（ 1 + 複利利率）<sup>期間</sup> - 1 ） ÷ 期間<br><br>\
                        年平均利回り ＝ ((1 + 0.018)<sup>3</sup> − 1) ÷ 3 ＝ 0.01832（＝1.832%）<br><br>\
                        年平均利回り：<br>\
                        ⇒ 1.83%（小数第3位を四捨五入）'
                    },
                    // 問10
                    {
                        title: '複利運用',
                        answer: '4,618,507',
                        explanation:
                        '年利率：1.6%（＝0.016）<br>\
                        投資期間：5年<br>\
                        元利合計 ＝ 元金 ×（ 1 + 利率 ）<sup>期間</sup><br><br>\
                        元金 ×（ 1 + 1.6% ）<sup>5年</sup> ＝ 500万円<br>\
                        元金 ＝ 5,000,000 ÷ （ 1 + 0.016 ）<sup>5</sup> ＝ 4,618,505.4<br>\
                        ⇒ 4,618,505円（円未満を四捨五入）<br><br>\
                        ※本解説は標準的な複利計算に基づいていますが、模範解答と結果が相違しております。<br>\
                        出題側の処理基準が不明確なため、本解説の方が正確である可能性もあります。'
                    }
                ]"
                :labels="[
                    'オ','ク','ア','ウ','コ',  //問６〜10
                ]"
            />
            <QuestionTemp3
                :questionNumber="3"
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
                :title="title"
                :subject="subject"
                :contents="[
                '安全性','公平性','利源別配当方式（利源式）','保険業法施行規則','1年', //問16〜20
                ]"
                :labels="[
                'ウ','オ','コ','ク','ア',  //問16〜20
                ]"
            />
            <QuestionTemp4
                :questionNumber="21"
                :title="title"
                :subject="subject"
                :contents="[
                    // 問21
                    {
                        answer: '2,887,038千円',
                        explanation:
                        '保険金額：400万円<br>\
                        保険期間：5年（41歳〜45歳）<br><br>\
                        死亡保険金の支払いは平均して年の中央で発生すると仮定<br>\
                        各年齢における死亡保険金の現価求めて合計する<br><br>\
                        死亡保険金 × 死亡数 × 期央払現価 ＝ 死亡保険金の現価<br>\
                        41歳：4,000,000 × 126 × 0.995037 ＝ 501,499千円<br>\
                        42歳：4,000,000 × 137 × 0.985185 ＝ 539,881千円<br>\
                        43歳：4,000,000 × 147 × 0.975431 ＝ 573,553千円<br>\
                        44歳：4,000,000 × 159 × 0.965773 ＝ 614,232千円<br>\
                        45歳：4,000,000 × 172 × 0.956211 ＝ 657,873千円<br><br>\
                        死亡保険金現価の合計：<br>\
                        ⇒ 2,887,038千円'
                    },
                    // 問22
                    {
                        answer: '369,907,146千円',
                        explanation:
                        '保険金額：400万円<br>\
                        満期保険金の現価：5年後の生存数 × 保険金額 × 期末払現価<br><br>\
                        46歳の生存数 × 400万円 × 5年の期末払現価<br>\
                        97,194 × 4,000,000 × 0.951466 ＝ 369,907,145,616円<br><br>\
                        5年後に支払う満期保険金の現価：<br>\
                        ⇒ 369,907,146千円（千円未満を四捨五入）'
                    },
                    // 問23
                    {
                        answer: '9,793,600千円',
                        explanation:
                        '保険金額：400万円<br>\
                        予定事業費：保険金1000円につき25円<br><br>\
                        一人当たりの予定事業費に加入時の生存数をかけて求める。<br><br>\
                        保険金額 × 予定事業費率 × 41歳の生存数<br>\
                        4,000,000 × (25 ÷ 1000) × 97,936 ＝ 9,793,600,000<br><br>\
                        予定事業費の現価：<br>\
                        ⇒ 9,793,600千円（千円未満を四捨五入）'
                    },
                    // 問24
                    {
                        answer: '799,140円',
                        explanation:
                        '収支相当の原則：収入現価 ＝ 支出現価<br><br>\
                        ＜収入現価＞<br>\
                        各年齢の生存数×年払保険料（P）を現価に換算して合計する。<br><br>\
                        年払保険料 × 生存数 × 期始払現価 ＝ 収入現価<br>\
                        41歳 ： P × 97,936 × 1.000000 ＝ 97,936P<br>\
                        42歳 ： P × 97,810 × 0.990099 ＝ 96,842P<br>\
                        43歳 ： P × 97,673 × 0.980296 ＝ 95,748P<br>\
                        44歳 ： P × 97,525 × 0.970590 ＝ 94,657P<br>\
                        45歳 ： P × 97,366 × 0.960980 ＝ 93,567P<br>\
                        41歳～45歳の収入現価の合計 ＝ 478,750P<br><br>\
                        ＜支出現価＞<br>\
                        問21〜23で算出した結果を用いて求める。<br><br>\
                        死亡保険金の現価+満期保険金の現価+予定事業費の現価<br>\
                        2,887,038千円 + 369,907,146千円 + 9,793,600千円<br>\
                        ＝ 382,587,784千円<br><br>\
                        収支相当の原則より<br>\
                        478,750P = 382,587,784千円<br>\
                        P ＝ 799,138円 <br><br>\
                        営業保険料：<br>\
                        ⇒ 799,140円（10円未満を四捨五入）'
                    },
                    // 問25
                    {
                        answer: '1,097,000円',
                        explanation:
                        '払済保険金 ＝解約返戻金 × (保険金額 ÷ 養老保険の一時払保険料)<br><br>\
                        858,000 × (3,000,000 ÷ 2,345,580) ＝ 1,097,383円<br><br>\
                        払済保険金：<br>\
                        ⇒ 1,097,000円（千円未満を四捨五入）'
                    }
                ]"
                :labels="[
                    'ア','イ','ウ','イ','ア',  //問21〜25
                ]"
            />
            <QuestionTemp1
                :questionNumber="26"
                :title="title"
                :subject="subject"
                :contents="[ //p53
                '予定死亡率と予定利率を低くすると、生存保険の純保険料は<u><b>高くなる</b></u>。',
                '正しい',
                '正しい'
                ]"
            />
            <QuestionTemp1
                :questionNumber="27"
                :title="title"
                :subject="subject"
                :contents="[ //p55
                '保険金に比例させる方式と保険料に比例させる方式を組み合わせる方式が一般的である。',
                '正しい',
                '正しい'
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
                :contents="[ //p119 (2024-A-29,2024-B-29,2024-C-29)
                '正しい',
                '正しい',
                '転換前契約の責任準備金は転換後契約の一時払保険料（新契約費部分を<u><b>含まない</b></u>もの）に充当する。'
                ]"
            />
            <QuestionTemp1
                :questionNumber="30"
                :title="title"
                :subject="subject"
                :contents="[ //p147
                '正しい',
                '毎月ではなく毎日。',
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
                '通常、単に現価という場合には<u><b>期末払現価</b></u>を指す。', //p27 (2024-A-32,2024-B-32,2024-C-32)
                '正しい',
                '1年分を何回かに分けて払い込む分割払営業保険料の年間払込額は、年払の営業保険料額を以下の理由で<u><b>上回る</b></u>。<br>①分割払のために保険料払込みが遅れるための利息の損失（年払保険料の場合に比べて年間の予定利息分は少なくなる）<br>②集金回数（払込回数）の増加に伴う事業費の増加', //p62 (2024-A-34,2024-B-34,2024-C-34)
                '自然保険料方式と異なり、平準保険料方式は責任準備金を積み立てる必要がある。', //p68
                // 問36〜40
                '正しい',
                '正しい',
                '正しい',
                '正しい',
                '配当は、被保険者ごとの配当を算出してそれを<u><b>積み上げるのではなく</b></u>、団体単位で計算されている。', //p154
                 //問41〜50
                'C（A・Bともに正しい）', 'A-現価', 'C（A・Bともに正しい）', 'B-（1 + 予定利率）1/2乗', 'A-標準',
                'A-失効', 'A-危険保険金額', 'C（A・Bともに正しい）', 'B-を禁止されている', 'B-総合保険料',
                ]"
                :labels="[
                '解','解','解','解','解',  //問31〜35
                '解','解','解','解','解',  //問36〜40
                'オ','ア','オ','ウ','イ',  //問41〜45
                'イ','ア','オ','エ','ウ',  //問46〜50
                ]"
            />
        </div>

        <!-- ==== ナビゲーションボタン：グラデーションで強調 ==== -->
        <div class="flex flex-col items-center mt-10 gap-6">
            <div class="flex justify-center gap-10">
            <Link
                :href="route('keiri2024b')"
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
