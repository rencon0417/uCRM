<script setup>
import { Head, Link} from '@inertiajs/vue3';
import QuestionTemp1 from '../../../Components/QuestionTemp1.vue'
import QuestionTemp2 from '../../../Components/QuestionTemp2.vue'
import QuestionTemp3 from '../../../Components/QuestionTemp3.vue'
import QuestionTemp4 from '../../../Components/QuestionTemp4.vue'

import Pagetitle from '../../../Components/Pagetitle.vue'
import SeihoTestLayout from '@/Layouts/SeihoTestLayout.vue';

const title = "生命保険計理"
const subject = '2023年度 フォームA'

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
                        answer: '5,425',
                        explanation:
                        '元金：500,000円<br>\
                        月利：0.18%（＝0.0018）<br><br>\
                        1ヶ月複利で6ヶ月間運用した場合の元利合計金額を求める。<br><br>\
                        (1 + 0.0018) <sup>6</sup> ＝ 1.0108487 ≒ 1.010849<br>\
                        500,000円 × 1.010849 ＝ 505,424.5円<br><br>\
                        利息：<br>\
                        505,424.5円 − 500,000円 ＝ 5,424.5円<br>\
                        ⇒ 5,425円（円未満を四捨五入）'
                    },
                    // 問２
                    {
                        title: '複利運用',
                        answer: '522,926',
                        explanation:
                        '元金：500,000円<br>\
                        年利：1.5%<br>\
                        半年利：0.75%（＝0.0075）<br>\
                        複利回数：6回（＝3年間 × 年2回）<br><br>\
                        (1 + 0.0075)<sup>6</sup> ＝ 1.0458522<br>\
                        500,000円 × 1.0458522 ＝ 522,926.1円<br><br>\
                        元利合計：<br>\
                        ⇒ 522,926円（円未満を四捨五入）'
                    },
                    // 問３
                    {
                        title: '複利運用',
                        answer: '1.51',
                        explanation:
                        '転化回数：1年間に利息を元金に繰り入れる回数<br><br>\
                        実利率 ＝（ 1 + 名称利率 ÷ 転化回数）<sup>転化回数</sup> - 1<br><br>\
                        実利率：<br>\
                        （ 1 + 0.015 ÷ 4 ）<sup>4</sup> - 1 ＝ 0.015084 ＝ 1.5084%<br>\
                        ⇒ 1.51%（小数第3位を四捨五入）'
                    },
                    // 問４
                    {
                        title: '複利運用',
                        answer: '1.23',
                        explanation:
                        '複利利率：1.2%（＝0.012）<br>\
                        投資期間：5年<br>\
                        年平均利回り ＝ （（ 1 + 複利利率）<sup>期間</sup> - 1 ） ÷ 期間<br><br>\
                        年平均利回り ＝ ((1 + 0.012)<sup>5</sup> − 1) ÷ 5<br>\
                        ＝ (1.061677 − 1) ÷ 5 ＝ 0.012291（＝1.229%）<br><br>\
                        年平均利回り：<br>\
                        ⇒ 1.23%（小数第3位を四捨五入）'
                    },
                    {
                        title: '複利運用',
                        answer: '2,710,245',
                        explanation:
                        '毎年の支払額：400,000円（年初）<br>\
                        期間：7年間<br>\
                        年利：1.1%（＝0.011）<br><br>\
                        各年の支払いに対応する現在価値を求め、合計する。<br><br>\
                        初年度 ： 400,000円<br>\
                        1年後 ： 400,000 × (1 ÷ 1.011) ＝ 395,648円<br>\
                        2年後 ： 400,000 × (1 ÷ 1.011)<sup>2</sup> ＝ 391,343.2円<br>\
                        3年後 ： 400,000 × (1 ÷ 1.011)<sup>3</sup> ＝ 387,085.2円<br>\
                        4年後 ： 400,000 × (1 ÷ 1.011)<sup>4</sup> ＝ 382,873.6円<br>\
                        5年後 ： 400,000 × (1 ÷ 1.011)<sup>5</sup> ＝ 378,707.6円<br>\
                        6年後 ： 400,000 × (1 ÷ 1.011)<sup>6</sup> ＝ 374,587.2円<br><br>\
                        現在価値の合計：<br>\
                        ⇒ 2,710,245円（円未満を四捨五入）'
                    }
                ]"
                :labels="[
                    'カ','ク','ウ','ア','コ',  //問１〜５
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
                        answer: '0.98530',
                        explanation:
                        '生存率 ＝ 期末の生存数 ÷ 期初の生存数<br><br>\
                        生存率：<br>\
                        96,441 ÷ 97,880 ＝ 0.985298<br>\
                        ⇒ 0.98530（小数第6位を四捨五入）'
                    },
                    // 問７
                    {
                        title: '生存率・生存数・平均余命・保険料計算',
                        answer: '98,455',
                        explanation:
                        '生存数 ＝ 期末の生存数 ÷ 期初の生存数 × 期初の生存者数<br><br>\
                        生存数：<br>\
                        91,616 ÷ 93,054 × 100,000 ＝ 98454.6<br>\
                        ⇒98,455（小数第1位を四捨五入）'
                    },
                    // 問８
                    {
                        title: '生存率・生存数・平均余命・保険料計算',
                        answer: '1.02',
                        explanation:
                        '前提：<br>\
                        死亡は年央に集中して発生するものと仮定。<br>\
                        よって、各年齢での平均生存年数を元に延べ生存年数を求める。<br><br>\
                        年齢 ： 死亡数 × 平均生存年数 ＝ 延べ生存年数<br>\
                        109歳：25.888人 × 0.5年 ＝ 12.94<br>\
                        110歳：10.1008人 × 1.5年 ＝ 15.15<br>\
                        111歳：3.4515人 × 2.5年 ＝ 8.63<br>\
                        112歳：1.0162人 × 3.5年 ＝ 3.56<br>\
                        113歳：0.3155人 × 4.5年 ＝ 1.42<br><br>\
                        109歳～113歳の延べ生存年数の合計 ＝ 45.15<br><br>\
                        平均余命 ＝ 延べ生存年数の合計 ÷ 生存者数<br><br>\
                        平均余命：<br>\
                        41.7 ÷ 40.772 ＝ 1.022<br>\
                        ⇒ 1.02（小数第3位を四捨五入）'
                    },
                    // 問９
                    {
                        title: '生存率・生存数・平均余命・保険料計算',
                        answer: '955,236',
                        explanation:
                        '<br>50歳の女性は1年間に192人が死亡し、1人あたりの保険金は500万円なので、合計の保険金額は<br>\
                        500万円 × 192人 ＝ 960,000千円<br><br>\
                        支払いは年央と仮定し、利率1.0%の期央払現価率0.995037で割引くと<br>\
                        960,000千円 × 0.995037 ＝ 955,235.52千円<br>\
                        ⇒ 千円未満を四捨五入して <strong>955,236千円</strong>'
                    },
                    // 問10
                    {
                        title: '生存率・生存数・平均余命・保険料計算',
                        answer: '9,790',
                        explanation:
                        '<br>問4で求めた死亡保険金の支払いに必要な費用は、50歳女性の年始生存者数97,539人で平等に分担するので、<br>\
                        955,236千円 ÷ 97,539人 ＝ 9,793･･･円<br>\
                        ⇒ 十円未満を四捨五入して <strong>9,790円</strong>'
                    }
                ]"
                :labels="[
                    'ア','キ','ウ','コ','カ',  //問６〜10
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
                        answer: '3,335,427千円',
                        explanation:
                        '<br>死亡保険金の支払いは平均して年の中央で発生すると仮定し、40歳〜44歳の各年齢における死亡保険金の現価求めてそれらを合計する。<br><br>\
                        死亡保険金 × 死亡数 × 期央払現価 ＝ 死亡保険金の現価<br>\
                        40歳：7,000,000 × 87 × 0.995037 ＝ 605,978千円<br>\
                        41歳：7,000,000 × 92 × 0.985185 ＝ 634,459千円<br>\
                        42歳：7,000,000 × 98 × 0.975431 ＝ 669,146千円<br>\
                        43歳：7,000,000 × 102 × 0.965773 ＝ 689,562千円<br>\
                        44歳：7,000,000 × 110 × 0.956211 ＝ 736,282千円<br>\
                        ⇒ 合計：<strong>3,335,427千円</strong>'
                    },
                    // 問22
                    {
                        title: '満期保険金の現価について',
                        answer: '654,563,889千円',
                        explanation:
                        '<br>5年後に支払う満期保険金の現価は、<br>\
                        5年後の生存数 × 保険金額 × 期末払現価で求める。<br><br>\
                        45歳の生存数 × 700万円 × 5年の期末払現価<br>\
                        98,279 × 7,000,000 × 0.951466 ＝ 654,563,889,098円<br>\
                        ⇒ 千円未満を四捨五入して <strong>654,563,889千円</strong>'
                    },
                    // 問23
                    {
                        title: '予定事業費の現価について',
                        answer: '17,284,400千円',
                        explanation:
                        '<br>予定事業費は保険金1000円につき25円より、一人当たりの予定事業費に加入時の生存数をかけて求める。<br><br>\
                        保険金額 × 予定事業費率 × 40歳の生存数<br>\
                        7,000,000 × (25 ÷ 1000) × 98,768 ＝ 17,284,400,000<br>\
                        ⇒ 千円未満を四捨五入して <strong>17,284,400千円</strong>'
                    },
                    // 問24
                    {
                        title: '養老保険の年払営業保険料について',
                        answer: '1,397,130円',
                        explanation:
                        '<br>収支相当の原則「収入現価 ＝ 支出現価」で求める。<br><br>\
                        ＜収入現価＞<br>\
                        収入の現価は、40歳〜44歳の各年齢の生存数×年払保険料（P）を現価に換算して合計する。<br><br>\
                        年払保険料 × 生存数 × 期始払現価 ＝ 収入現価<br>\
                        40歳 ： P × 98,768 × 1.000000 ＝ 98,768P<br>\
                        41歳 ： P × 98,681 × 0.990099 ＝ 97,704P<br>\
                        42歳 ： P × 98,590 × 0.980296 ＝ 96,647P<br>\
                        43歳 ： P × 98,492 × 0.970590 ＝ 95,595P<br>\
                        44歳 ： P × 98,390 × 0.960980 ＝ 94,551P<br>\
                        → 40歳～44歳の収入現価の合計 ＝ 483,265P<br><br>\
                        ＜支出現価＞<br>\
                        支出現価は問21〜23で算出した結果を用いて求める。<br><br>\
                        死亡保険金の現価+満期保険金の現価+予定事業費の現価<br>\
                        ＝ 3,335,427千円 + 654,563,889千円 + 17,284,400千円<br>\
                        ＝ 675,183,716千円<br><br>\
                        収支相当の原則より<br>\
                        483,265P = 675,183,716千円<br>\
                        P ＝ 1,397,129･･･円 <br>\
                        ⇒ 10円未満を四捨五入して <strong>1,397,130円</strong>'
                    },
                ]"
                :labels="[
                    'ウ','ア','ウ','イ',  //問21〜24
                ]"
            />
            <QuestionTemp1
                :questionNumber="25"
                questionTitle="契約者配当金の分配・支払方法について"
                :title="title"
                :subject="subject"
                :contents="[
                '年払保険料ではなく一時払保険料', //p134
                '配当金を保険料払込回数に等分して、毎回の保険料に充当、相殺する。', //p134
                '正しい'
                ]"
            />
            <QuestionTemp1
                :questionNumber="26"
                questionTitle="営業保険料について"
                :title="title"
                :subject="subject"
                :contents="[
                '保険金を比例させる方式、営業保険料に比例させる方式、1契約について予定事業費を一定額とする方式、これらの方式を組み合わせる方式の4方式のいずれかである。', //p54
                '正しい',
                '正しい'
                ]"
            />
            <QuestionTemp1
                :questionNumber="27"
                questionTitle="保険料積立金について"
                :title="title"
                :subject="subject"
                :contents="[
                '正しい',
                '',
                '正しい'
                ]"
            />
            <QuestionTemp1
                :questionNumber="28"
                questionTitle="事業年度末責任準備金について"
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
                questionTitle="解約返戻金について"
                :title="title"
                :subject="subject"
                :contents="[
                '正しい',
                '',
                '正しい'
                ]"
            />
            <QuestionTemp1
                :questionNumber="30"
                questionTitle="契約転換制度について"
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
                :questionTitle="[
                    '契約年齢', //問31
                    '単利', //問32
                    '予定利率', //問33
                    '終価', //問34
                    '保険料の計算原理', //問35
                    '1年定期保険の純保険料', //問36
                    '責任準備金', //問37
                    '決算による剰余金算定', //問38
                    '変額保険の仕組み', //問39
                    '団体定期保険の数理', //問40
                    '死亡率', //問41
                    '保険計理の基礎', //問42
                    '純保険料の変化', //問43
                    '責任準備金の積立', //問44
                    '積立に関する法的規制', //問45
                    '延長保険', //問46
                    '配当準備金繰入', //問47
                    '剰余金の発生源', //問48
                    '変額保険の仕組み', //問49
                    '団体年金制度の財政方式', //問50
                ]"
                :title="title"
                :subject="subject"
                :contents="[
                // 問31〜35
                '正しい',
                '正しい',
                '',
                '正しい',
                '',
                // 問36〜40
                '正しい',
                '正しい',
                '正しい',
                '',
                '',
                 //問41〜50
                'C（A・Bともに正しい）', 'A-大数', 'B-高くなる', 'B-平準保険料', 'A-未経過保険料',
                'A-定期保険', 'C（A・Bともに正しい）', 'B-価格変動', 'A-死亡保険金額', 'A-事前積立',
                ]"
                :labels="[
                '解','解','解','解','解',  //問31〜35
                '解','解','解','解','解',  //問36〜40
                'オ','イ','エ','ウ','イ',  //問41〜45
                'ア','オ','エ','ア','ア',  //問46〜50
                ]"
            />
        </div>

        <!-- ==== ナビゲーションボタン：グラデーションで強調 ==== -->
      <div class="flex flex-col items-center mt-10 gap-6">
        <div class="flex justify-center gap-10">
          <Link
            :href="route('keiri2024c')"
            class="w-40 h-12 flex items-center justify-center bg-gradient-to-r from-purple-400 to-blue-400 hover:from-purple-500 hover:to-blue-500 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
            前の試験へ
          </Link>
          <Link
            :href="route('keiri2023b')"
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
