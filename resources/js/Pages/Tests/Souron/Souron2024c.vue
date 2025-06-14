<script setup>
import { Head, Link} from '@inertiajs/vue3';
import QuestionTemp1 from '../../../Components/QuestionTemp1.vue'
import QuestionTemp2 from '../../../Components/QuestionTemp2.vue'
import QuestionTemp3 from '../../../Components/QuestionTemp3.vue'

import Pagetitle from '../../../Components/Pagetitle.vue'
import SeihoTestLayout from '@/Layouts/SeihoTestLayout.vue';

const title = "生命保険総論"
const subject = '2024年度 フォームC'

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
                '商法', '経済的', '損害額', '主観的', '一定額', // 問１〜５
                ]"
                :labels="[
                'オ', 'コ', 'イ', 'キ', 'エ',  //問１〜５
                ]"
            />
            <QuestionTemp3
                :questionNumber="2"
                :title="title"
                :subject="subject"
                :contents="[
                '傷害疾病定額保険契約', '潜在的', '平準保険料', '運用', '養老保険', //問６〜10
                ]"
                :labels="[
                'イ', 'オ', 'キ', 'コ', 'ケ',  //問６〜10
                ]"
            />
            <QuestionTemp3
                :questionNumber="3"
                :title="title"
                :subject="subject"
                :contents="[
                '予定利率', '逆ざや', 'ALM（資産負債統合管理）', '法令等の遵守（コンプライアンス）', '負債特性', //問11〜15
                ]"
                :labels="[
                'ウ', 'オ', 'コ', 'カ', 'イ',  //問11〜15
                ]"
            />
            <QuestionTemp3
                :questionNumber="4"
                :title="title"
                :subject="subject"
                :contents="[
                '法定他業', '規制緩和', '金融システム改革法', '50', 'デリバティブ', //問16〜20
                ]"
                :labels="[
                'コ', 'エ', 'キ', 'オ', 'ア',  //問16〜20
                ]"
            />
            <QuestionTemp1
                :questionNumber="21"
                :title="title"
                :subject="subject"
                :contents="[ //p11-12
                '正しい',
                '生命保険契約の締結に当たって、実際上は申込書の提出や保険証券の発行が伴うけれども、これらは大量事務処理の便宜上行うものであり、これをもって<u><b>生命保険契約が要式契約であるとはいえない</b></u>。',
                '<u><b>契約当事者の一方があらかじめ定めた契約条項を相手方が包括的に承認する</b></u>ことによって成立する。'
                ]"
                />
            <QuestionTemp1
                :questionNumber="22"
                :title="title"
                :subject="subject"
                :contents="[ //p63-64
                '1906年、アームストロング調査委員会の勧告に基づき、新契約費と年間の新契約高を<u><b>制限する</b></u>内容の取締法がニューヨーク州で制定された。',
                '1906年、アームストロング調査委員会の勧告に基づき、<u><b>会社役員選出</b></u>に関する基準を制定する内容の取締法がニューヨーク州で制定された。',
                '正しい'
                ]"
            />
            <QuestionTemp1
                :questionNumber="23"
                :title="title"
                :subject="subject"
                :contents="[ //p126-127
                '一般国民を対象とした年金制度としては、1942年（昭和17年）に、<u><b>工場などで働く男子労働者を対象とした労働者年金保険制度</b></u>が発足している。',
                '正しい',
                '自営業者等に対する国民年金の上乗せ年金としては国民年金基金制度があり、厚生年金保険の上乗せ年金としては<u><b>確定拠出年金（企業型）</b></u>などがある。'
                ]"
            />
            <QuestionTemp1
                :questionNumber="24"
                :title="title"
                :subject="subject"
                :contents="[ //p150,P155
                '免許には生命保険業免許と損害保険業免許の<u><b>2種類</b></u>がある。',
                'ソルベンシー・マージン比率が100%以上200%未満となった場合は「経営改善計画と実行」、0%未満の場合は「業務の一部または全部の停止」を命じることができる。',
                '正しい'
                ]"
            />
            <QuestionTemp1
                :questionNumber="25"
                :title="title"
                :subject="subject"
                :contents="[ //p180-182
                '国連では老年人口割合が<u><b>7%</b></u>を超えた国を人口の高齢化が進んでいる国と見なしている。',
                '正しい',
                '合計特殊出生率は年々低下し2005年度には1.26となり、<u><b>出生数が死亡数を下回って遂に人口が減少する</b></u>という歴史的転換点を迎えることとなった。'
                ]"
            />
            <QuestionTemp1
                :questionNumber="26"
                :title="title"
                :subject="subject"
                :contents="[ //p13
                '正しい',
                '正しい',
                '被保険者ではなく保険契約者の資格の説明。被保険者の資格については個人であることのほかは別段の制限はない。'
                ]"
            />
            <QuestionTemp1
                :questionNumber="27"
                :title="title"
                :subject="subject"
                :contents="[ //p69
                'デリバティブではなくニューウェーブ商品。',
                '正しい',
                '正しい'
                ]"
            />
            <QuestionTemp1
                :questionNumber="28"
                :title="title"
                :subject="subject"
                :contents="[ //p112-113
                '生命保険会社の資産の構成をみると、1975年度（昭和50年度）には総資産の67.9%を占めていた<u><b>貸付金</b></u>が2022年度（令和4年度）にはシェアを大幅に減らしている。一方、<u><b>有価証券</b></u>のシェアは8割以上を占めている。',
                '正しい',
                '正しい'
                ]"
            />
            <QuestionTemp1
                :questionNumber="29"
                :title="title"
                :subject="subject"
                :contents="[ //p176
                '正しい',
                '少額短期保険業は、短期（生保・医療保険で1年以内、損害保険で2年以内）かつ少額保険金額（疾病による死亡保険金<u><b>300万円</b></u>以内、疾病・傷害による入院給付金等80万円以内、損害保険金<u><b>1,000万円</b></u>以内等で、<u><b>かつ総額1,000万円以下（複数契約合算）</b></u>）の保険のみを引き受ける保険業である。',
                '正しい'
                ]"
            />
            <QuestionTemp1
                :questionNumber="30"
                :title="title"
                :subject="subject"
                :contents="[ //p184
                '正しい',
                '従来であれば、「周りの人が持っているから」とか「テレビのコマーシャルで見たから」といった外的要素に左右される面が多かったが、今日では、自分の好みに合っているか、本当に必要か、価格は適切かなどを判断し、自分で納得のいく商品を購入する方向に変わってきている。',
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
                'スペインかぜの大流行と<u><b>関東大震災</b></u>の2つ。', //76
                '流動性の原則は、生保資金の長期的性格と安定的性格から、銀行などに比べればその重要性は<u><b>低い</b></u>。', //p109
                // 問36〜40
                '資力調査（ミーンズ・テスト）によって測定される困窮の程度に応じて、生活保護法に基づき必要な保護を行う制度は、<u><b>公的扶助制度</b></u>の一つである。', //p123
                '日本では、<u><b>実体的監督主義が採用されている</b></u>。実体的監督主義は、監督官庁に広範な権限を与えて、保険事業の開始から業務運営、そして経営不振会社に対する最終的整理、統合に至る事業経営のあらゆる段階において監督を行うもの。', //p148
                '正しい',
                '生命保険会社においても、従来の保険商品による金銭給付のみならず、<u><b>人間ドック紹介、健康相談サービス、介護事業者の紹介等を行っている</b></u>。', //p193
                '正しい',
                 //問41〜50
                'A-縮小', 'B-20%', 'B-逓減定期保険', 'A-生命保険', 'C（A・Bともに正しい）',
                'B-責任準備金', 'A-国民皆保険', 'C（A・Bともに正しい）', 'A-保険者', 'B-変額年金',
                ]"
                :labels="[
                '解', '解', '解', '解', '解',  //問31〜35
                '解', '解', '解', '解', '解',  //問36〜40
                'ア', 'ウ', 'エ', 'イ', 'オ',  //問41〜45
                'エ', 'イ', 'オ', 'ア', 'ウ',  //問46〜50
                ]"
            />
        </div>

        <!-- ボタングループ -->
        <div class="flex flex-col items-center mt-10 gap-6">
            <div class="flex justify-center gap-10">
            <Link
                :href="route('souron2024b')"
                class="w-40 h-12 flex items-center justify-center bg-gradient-to-r from-purple-400 to-blue-400 hover:from-purple-500 hover:to-blue-500 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
                前の試験へ
            </Link>
            <Link
                :href="route('souron2023a')"
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
