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
                        answer: '5,425',
                        explanation:
                        '<br>元金は500,000円で、月利0.18%（＝0.0018）の1ヶ月複利で6ヶ月間運用した場合の元利合計金額は、<br>\
                        (1 + 0.0018) <sup>6</sup> ＝ 1.0108487 ＝ 1.010849（小数第7位四捨五入）より<br>\
                        500,000円 × 1.010849 ＝ 505,424.5<br><br>\
                        元金との差額が利息なので、<br>\
                        505,424.5 - 500,000 ＝ 5,424.5<br>\
                        ⇒ 円未満を四捨五入して <strong>5,425円</strong>'
                    },
                    // 問２
                    {
                        answer: '522,926',
                        explanation:
                        '<br>年利1.5%で半年複利のため、利率は半年あたり0.75%（=0.0075）となり、3年間で6回の複利が適用される。<br><br>\
                        よって元金500,000円の場合の元利合計金額は、<br>\
                        (1 + 0.0075)<sup>6</sup> ＝ 1.0458522･･･ ＝ 1.0458522（小数第7位四捨五入）より<br>\
                        500,000 × 1.0458522 ＝ 522,926.1<br>\
                        ⇒ 円未満を四捨五入して <strong>522,926円</strong>'
                    },
                    // 問３
                    {
                        answer: '1.51',
                        explanation:
                        '<br>転化回数：1年間に利息を元金に繰り入れる回数<br><br>\
                        実利率 = （ 1 + 名称利率 ÷ 転化回数）<sup>転化回数</sup> - 1<br><br>\
                        （ 1 + 0.015 ÷ 4 ）<sup>4</sup> - 1 ＝ 0.015084 ＝ 1.5084%<br>\
                        ⇒ 小数第3位を四捨五入して <strong>1.51%</strong>'
                    },
                    // 問４
                    {
                        answer: '1.23',
                        explanation:
                        '<br>年平均利回り：投資によって得られる利益を、投資期間全体で年単位に平均化したもの<br><br>\
                        年平均利回り ＝ （（ 1 + 複利利率）<sup>期間</sup> - 1 ） ÷ 期間<br><br>\
                        （（ 1 + 0.012 ）<sup>5</sup> - 1 ） ÷ 5 ＝ 0.012291 ＝ 1.229･･･%<br>\
                        ⇒ 小数第3位を四捨五入して <strong>1.23%</strong>'
                    },
                    {
                        answer: '2,710,245',
                        explanation:
                        '<br>40万円を毎年始に7年間支払うために必要な資金は、各年の支払いの現在価値を合計して求める。<br><br>\
                        （ 1 ÷ 1.011 ） ＝ 0.9891196 ＝ 0.98912(※)<br>\
                        （ 1 ÷ 1.011 ）<sup>2</sup> ＝ 0.9783577 ＝ 0.978358(※)<br>\
                        （ 1 ÷ 1.011 ）<sup>3</sup> ＝ 0.9677129 ＝ 0.967713(※)<br>\
                        （ 1 ÷ 1.011 ）<sup>4</sup> ＝ 0.9571838 ＝ 0.957184(※)<br>\
                        （ 1 ÷ 1.011 ）<sup>5</sup> ＝ 0.9467694 ＝ 0.946769(※)<br>\
                        （ 1 ÷ 1.011 ）<sup>6</sup> ＝ 0.9364682 ＝ 0.936468(※)<br>\
                        ※小数第7位四捨五入<br><br>\
                        よって各年度始の現在価値は、<br>\
                        初年度 ： 400,000円<br>\
                        1年後 ： 400,000 × （ 1 ÷ 1.011 ） ＝ 395,648円<br>\
                        2年後 ： 400,000 × （ 1 ÷ 1.011 ）<sup>2</sup> ＝ 391,343.2円<br>\
                        3年後 ： 400,000 × （ 1 ÷ 1.011 ）<sup>3</sup> ＝ 387,085.2円<br>\
                        4年後 ： 400,000 × （ 1 ÷ 1.011 ）<sup>4</sup> ＝ 382,873.6円<br>\
                        5年後 ： 400,000 × （ 1 ÷ 1.011 ）<sup>5</sup> ＝ 378,707.6円<br>\
                        6年後 ： 400,000 × （ 1 ÷ 1.011 ）<sup>6</sup> ＝ 374,587.2円<br><br>\
                        現在において必要な資金の合計は、2,710,244.6円<br>\
                        ⇒ 円未満を四捨五入して <strong>2,710,245円</strong>'
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
                        answer: '0.98530',
                        explanation:
                        '<br>生存率 ＝ 期末の生存数 ÷ 期初の生存数<br>\
                        ＝ 96,441 ÷ 97,880<br>\
                        ＝ 0.985298･･･<br>\
                        ⇒ 小数第6位を四捨五入して <strong>0.98530</strong>'
                    },
                    // 問７
                    {
                        answer: '98,455',
                        explanation:
                        '<br>生存数 ＝ 期末の生存数 ÷ 期初の生存数 × 期初の生存者数<br>\
                        ＝ 91,616 ÷ 93,054 × 100,000<br>\
                        ＝ 98454.6･･･<br>\
                        ⇒ 小数第1位を四捨五入して <strong>98,455</strong>'
                    },
                    // 問８
                    {
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
                        109歳の平均余命 ＝ 延べ生存年数の合計 ÷ 109歳の生存者数<br>\
                        ＝ 41.7 ÷ 40.772 ＝ 1.022･･･<br>\
                        ⇒ 小数第3位を四捨五入して <strong>1.02</strong>'
                    },
                    // 問９
                    {
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
                '解約返戻金','残存','そのときの被保険者の到達年齢','新契約費','同じ', //問16〜20
                ]"
                :labels="[
                'ウ','キ','ケ','ク','イ',  //問16〜20
                ]"
            />
            <QuestionTemp1
                :questionNumber="21"
                :title="title"
                :subject="subject"
                :contents="[
                '',
                '',
                '正しい'
                ]"
                />
            <QuestionTemp1
                :questionNumber="22"
                :title="title"
                :subject="subject"
                :contents="[
                '正しい',
                '',
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
                '',
                '',
                '正しい'
                ]"
            />
            <QuestionTemp1
                :questionNumber="26"
                :title="title"
                :subject="subject"
                :contents="[
                '',
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
                '',
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
                '正しい',
                '',
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

        <!-- ボタングループ -->
        <div class="flex flex-col items-center mt-4 pt-3 gap-4">
            <!-- 上段：前へ・次へボタン -->
            <div class="flex justify-center gap-16">
                <Link
                    :href="route('keiri2023b')"
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
