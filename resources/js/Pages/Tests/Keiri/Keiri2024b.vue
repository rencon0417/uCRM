<script setup>
import { Head, Link} from '@inertiajs/vue3';
import QuestionTemp1 from '../../../Components/QuestionTemp1.vue'
import QuestionTemp2 from '../../../Components/QuestionTemp2.vue'
import QuestionTemp3 from '../../../Components/QuestionTemp3.vue'
import QuestionTemp4 from '../../../Components/QuestionTemp4.vue'

import Pagetitle from '../../../Components/Pagetitle.vue'
import SeihoTestLayout from '@/Layouts/SeihoTestLayout.vue';

const title = "生命保険計理"
const subject = '2024年度 フォームB'

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
                'キ','ケ','オ','エ','カ',  //問11〜15
                ]"
            />
            <QuestionTemp3
                :questionNumber="4"
                :title="title"
                :subject="subject"
                :contents="[
                '解約返戻金','残存','そのときの被保険者の到達年齢','新契約費','同じ', //問16〜20
                ]"
                :labels="[
                'キ','イ','オ','カ','ケ',  //問16〜20
                ]"
            />
            <QuestionTemp4
                :questionNumber="21"
                :title="title"
                :subject="subject"
                :contents="[
                    // 問21
                    {
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
                        answer: '4,876,950千円',
                        explanation:
                        '<br>予定事業費は保険金1000円につき25円より、一人当たりの予定事業費に加入時の生存数をかけて求める。<br><br>\
                        保険金額 × 予定事業費率 × 50歳の生存数<br>\
                        2,000,000 × (25 ÷ 1000) × 97,539 ＝ 4,876,950,000<br>\
                        ⇒ 千円未満を四捨五入して <strong>4,876,950千円</strong>'
                    },
                    // 問24
                    {
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
                    'イ','イ','ウ','ア','ア'  //問21〜25
                ]"
            />
            <QuestionTemp1
                :questionNumber="26"
                :title="title"
                :subject="subject"
                :contents="[
                '正しい',
                '正しい',
                ''
                ]"
            />
            <QuestionTemp1
                :questionNumber="27"
                :title="title"
                :subject="subject"
                :contents="[
                '正しい',
                '正しい',
                ''
                ]"
            />
            <QuestionTemp1
                :questionNumber="28"
                :title="title"
                :subject="subject"
                :contents="[
                '',
                '正しい',
                '正しい'
                ]"
            />
            <QuestionTemp1
                :questionNumber="29"
                :title="title"
                :subject="subject"
                :contents="[
                '正しい',
                '正しい',
                ''
                ]"
            />
            <QuestionTemp1
                :questionNumber="30"
                :title="title"
                :subject="subject"
                :contents="[
                '正しい',
                '',
                '正しい'
                ]"
            />
            <QuestionTemp2
                :questionNumber="31"
                :title="title"
                :subject="subject"
                :contents="[
                // 問31〜35
                '',
                '',
                '正しい',
                '',
                '',
                // 問36〜40
                '正しい',
                '',
                '正しい',
                '正しい',
                '正しい',
                 //問41〜50
                'A-経験生命表', 'A-現価', 'B-高くなる', 'C（A・Bともに正しい）', 'A-純保険料式保険料積立金',
                'A-定期保険', 'A-保険種類別', 'C（A・Bともに正しい）', 'B-を禁止されている', 'B-特別保険料',
                ]"
                :labels="[
                '解','解','解','解','解',  //問31〜35
                '解','解','解','解','解',  //問36〜40
                'ア','ア','ウ','オ','イ',  //問41〜45
                'ア','ア','オ','エ','ウ',  //問46〜50
                ]"
            />
        </div>

        <!-- ボタングループ -->
        <div class="flex flex-col items-center mt-4 pt-3 gap-4">
            <!-- 上段：前へ・次へボタン -->
            <div class="flex justify-center gap-16">
                <Link
                    :href="route('keiri2024a')"
                    class="inline-flex items-center justify-center w-40 h-12 bg-purple-400 hover:bg-purple-500 text-white font-semibold rounded-lg shadow-md">
                    前の試験へ
                </Link>
                <Link
                    :href="route('keiri2024c')"
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
