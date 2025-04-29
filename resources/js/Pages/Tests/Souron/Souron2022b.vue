<script setup>
import { Head, Link} from '@inertiajs/vue3';
import QuestionTemp1 from '../../../Components/QuestionTemp1.vue'
import QuestionTemp2 from '../../../Components/QuestionTemp2.vue'
import QuestionTemp3 from '../../../Components/QuestionTemp3.vue'

import Pagetitle from '../../../Components/Pagetitle.vue'
import SeihoTestLayout from '@/Layouts/SeihoTestLayout.vue';

const title = "生命保険総論"
const subject = '2022年度 フォームB'

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
                '保険契約準備金','責任準備金','安全','収益','予定利率', // 問１〜５
                ]"
                :labels="[
                'イ','エ','ア','コ','カ',  //問１〜５
                ]"
            />
            <QuestionTemp3
                :questionNumber="2"
                :title="title"
                :subject="subject"
                :contents="[
                '長期','貯蓄性','公共','貸付金','有価証券', //問６〜10
                ]"
                :labels="[
                'カ','オ','ク','ウ','コ',  //問６〜10
                ]"
            />
            <QuestionTemp3
                :questionNumber="3"
                :title="title"
                :subject="subject"
                :contents="[
                '平均寿命','7','速い','扶養','15〜64', //問11〜15
                ]"
                :labels="[
                'ク','ウ','キ','カ','コ',  //問11〜15
                ]"
            />
            <QuestionTemp3
                :questionNumber="4"
                :title="title"
                :subject="subject"
                :contents="[
                '年金','70','合計特殊出生率','下回って','労働力率', //問16〜20
                ]"
                :labels="[
                'エ','ケ','イ','オ','コ',  //問16〜20
                ]"
            />
            <QuestionTemp1
                :questionNumber="21"
                :title="title"
                :subject="subject"
                :contents="[
                '保険契約者の資格については別段の制限はなく、個人であると法人であるとを問わず、また行為能力者であると否とを問わない', //p13
                '正しい',
                '保険金受取人の資格については何らの制限はなく、個人であると法人であると、また行為能力者であると否とを問わない。' //p14
                ]"
                />
            <QuestionTemp1
                :questionNumber="22"
                :title="title"
                :subject="subject"
                :contents="[
                '保険法においては、保険契約者と実質的に同じ地位に置かれている共済契約者の保護の観点から、共済契約も保険法の適用対象とされている。', //p7
                '正しい',
                '法律に強行規定がある場合を除き、まず保険約款が適用され，保険約款に規定のない事項については、おおむね保険法、民法の順に適用される。' //p9
                ]"
            />
            <QuestionTemp1
                :questionNumber="23"
                :title="title"
                :subject="subject"
                :contents="[
                '65歳以上を第1号被保険者とし、40歳～65歳未満の医療保険加入者を第2号被保険者とする。', //p140
                '正しい',
                '第1号被保険者の保険料は各市町村ごとに基準保険料（所得段階別の定額保険料）が設定され、第2号被保険者については、それぞれ加入する医療保険者が制度の算定基準に基づき保険料を設定し、一般の医療保険料に上乗せする形で一括して徴収する。' //p141
                ]"
            />
            <QuestionTemp1
                :questionNumber="24"
                :title="title"
                :subject="subject"
                :contents="[
                '解約価格法ではなく、不没収法', //p62
                'マッカラン調査委員会ではなく、アームストロング調査委員会', //p63
                '正しい'
                ]"
            />
            <QuestionTemp1
                :questionNumber="25"
                :title="title"
                :subject="subject"
                :contents="[
                '正しい',
                '第三分野については生損保本体で取り扱えることとし、それ以外の分野については子会社方式により相互参入が可能とされた。', //p173
                '日米保険協議の結果を踏まえ、一部制限する激変緩和措置が講じられたが、2001年（平成13年）7月に全面解禁された。' //p174
                ]"
            />
            <QuestionTemp1
                :questionNumber="26"
                :title="title"
                :subject="subject"
                :contents="[
                '正しい',
                '正しい',
                '変額保険には、終身保険タイプの変額保険（終身型）と養老保険タイプの変額保険（有期型）のほか、個人年金保険タイプの変額個人年金保険がある。' //p41
                ]"
            />
            <QuestionTemp1
                :questionNumber="27"
                :title="title"
                :subject="subject"
                :contents="[
                '同措置は、保険金の支払い余力を示すソルベンシー・マージン比率が200%未満の会社が対象となった', //p99-100
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
                '賦課式の生命保険では、年を経るにつれ死亡率が高くなるので、給付金を一定にすれば、分担金が年々増加し。一方、分担金を一定にすれば、給付金が減少せざるを得ないことになる。', //p56
                '正しい'
                ]"
            />
            <QuestionTemp1
                :questionNumber="29"
                :title="title"
                :subject="subject"
                :contents="[
                '正しい',
                '厚生年金保険の上乗せ年金としては確定拠出年金（企業型）などがある。', //p127
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
                '特別勘定ではなく、区分経理の導入' //p200
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
                'ロイヤル・エクスチェンジではなく、エクイタブル', //p57
                '契約成立後ではなく、契約申込時に交付する。', //p83
                '正しい',
                // 問36〜40
                '社会扶助ではなく公的扶助制度', //p123
                '正しい',
                'ソルベンシー・マージン比率は、保険会社が直面している通常の予測を超える諸リスク（保険リスク・資産運用リスク等）相当額の1/2を分母とし、保険会社の自己資本勘定と考えられる資本勘定、諸準備金などの合計額を分子として計算される。', //p155
                '正しい',
                '生命保険会社は早くから医療や健康問題に関心を持ち、人間ドック紹介、健康相談サービス、介護事業者の紹介等を行っている。', //p193
                 //問41〜50
                'C（A・Bともに正しい）', 'C（A・Bともに正しい）', 'B-あらかじめ定められた', 'C（A・Bともに正しい）', 'A-自由',
                'A-経済的保障', 'B-損害共済', 'B-財務大臣', 'B-個人年金', 'A-団体定期保険',
                ]"
                :labels="[
                '解','解','解','解','解',  //問31〜35
                '解','解','解','解','解',  //問36〜40
                'オ','オ','エ','オ','イ',  //問41〜45
                'イ','ウ','エ','ウ','ア',  //問46〜50
                ]"
            />
        </div>

        <!-- ボタングループ -->
        <div class="flex flex-col items-center mt-4 pt-3 gap-4">
            <!-- 上段：前へ・次へボタン -->
            <div class="flex justify-center gap-16">
                <Link
                    :href="route('souron2022a')"
                    class="inline-flex items-center justify-center w-40 h-12 bg-purple-400 hover:bg-purple-500 text-white font-semibold rounded-lg shadow-md">
                    前の試験へ
                </Link>
                <Link
                    :href="route('souron2022c')"
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
