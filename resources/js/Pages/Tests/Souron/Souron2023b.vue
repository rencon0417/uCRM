<script setup>
import { Head, Link} from '@inertiajs/vue3';
import QuestionTemp1 from '../../../Components/QuestionTemp1.vue'
import QuestionTemp2 from '../../../Components/QuestionTemp2.vue'
import QuestionTemp3 from '../../../Components/QuestionTemp3.vue'

import Pagetitle from '../../../Components/Pagetitle.vue'
import SeihoTestLayout from '@/Layouts/SeihoTestLayout.vue';

const title = "生命保険総論"
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
            <QuestionTemp3
                :questionNumber="1"
                :title="title"
                :subject="subject"
                :contents="[
                '1年', '損金', '総合福祉', 'ヒューマン', '供与', // 問１〜５
                ]"
                :labels="[
                'イ', 'ケ', 'ウ', 'オ', 'コ',  //問１〜５
                ]"
            />
            <QuestionTemp3
                :questionNumber="2"
                :title="title"
                :subject="subject"
                :contents="[
                '受給権', '拠出型', '報酬比例部分', '第1号', '運用の指図', //問６〜10
                ]"
                :labels="[
                'カ', 'イ', 'ア', 'エ', 'ケ',  //問６〜10
                ]"
            />
            <QuestionTemp3
                :questionNumber="3"
                :title="title"
                :subject="subject"
                :contents="[
                '保障制度', '自給自足', '経済単位', '相互扶助', 'ギルド', //問11〜15
                ]"
                :labels="[
                'オ', 'ア', 'コ', 'キ', 'カ',  //問11〜15
                ]"
            />
            <QuestionTemp3
                :questionNumber="4"
                :title="title"
                :subject="subject"
                :contents="[
                '海上保険', '冒険貸借', '統計学', 'ドイツ', '社会保険', //問16〜20
                ]"
                :labels="[
                'カ', 'イ', 'エ', 'ケ', 'オ',  //問16〜20
                ]"
            />
            <QuestionTemp1
                :questionNumber="21"
                :title="title"
                :subject="subject"
                :contents="[
                '正しい',
                '一般に、標準以上に危険度の高い人は保険加入希望が強く、また、より高額な保険を選ぶ傾向がある。', //p17
                '保険経営に求められる2大原則は健全性と公平性であり、公平性の原点は危険の評価にある。危険の質を同じにするべくできるだけ危険を細かく分け、その危険度を把握することが公平性につながる。' //p18
                ]"
                />
            <QuestionTemp1
                :questionNumber="22"
                :title="title"
                :subject="subject"
                :contents="[
                '65歳以上を第1号被保険者とし、40歳～65歳未満の医療保険加入者を第2号被保険者とする。', //p140
                '第1号被保険者は、原因を問わず常に介護が必要な状態（要介護状態）あるいは日常生活に支援が必要な状態（要支援状態）であれば保険給付の対象となるが、第2号被保険者については、初老期の認知症など老化を原因とする特定の疾病による要支援状態または要介護状態であることが保険給付の要件となっている。', //p140
                '正しい'
                ]"
            />
            <QuestionTemp1
                :questionNumber="23"
                :title="title"
                :subject="subject"
                :contents="[
                'デリバティブ商品ではなく、ニューウェーブ商品。', //p69
                '正しい',
                '金融規制改革法（ドッド・フランク法）ではなく、グラム・リーチ・ブライリー法。' //p71
                ]"
            />
            <QuestionTemp1
                :questionNumber="24"
                :title="title"
                :subject="subject"
                :contents="[
                '正しい',
                '「少額短期保険業」は、短期（生保・医療保険で1年以内、損害保険で2年以内）かつ少額保険金額（疾病による死亡保険金300万円以内、疾病・傷害による入院給付金等80万円以内、損害保険金1,000万円以内等で、かつ総額1,000万円以下（複数契約合算））の保険のみを引き受ける保険業である。', //p176
                '少額短期保険業者には1,000万円以上の資本金と内閣総理大臣への登録が求められる。' //p176
                ]"
            />
            <QuestionTemp1
                :questionNumber="25"
                :title="title"
                :subject="subject"
                :contents="[
                '国連では老年人口割合が7%を超えた国を人口の高齢化が進んでいる国と見なしている', //p180
                '正しい',
                '合計特殊出生率は年々低下し2005年度（平成17年度）には1.26となり、出生数が死亡数を下回って遂に人口が減少するという歴史的転換点を迎えることとなった。' //p182
                ]"
            />
            <QuestionTemp1
                :questionNumber="26"
                :title="title"
                :subject="subject"
                :contents="[
                '正しい',
                '正しい',
                '保険契約の一方の当事者である保険契約者は、保険者が危険を負担していることに対して、保険事故発生の可能性に応じたものとして保険料を支払う。' //p15
                ]"
            />
            <QuestionTemp1
                :questionNumber="27"
                :title="title"
                :subject="subject"
                :contents="[
                '一般に、生命保険契約の締結に際して保険契約の申込者が保険約款の各条項を知ったうえで理解し納得しているとは限らない。そこで、生命保険会社があらかじめ作成した保険約款が保険契約者を拘束するか否かについてが問題となるが、一般的には保険約款には拘束力があるとされている。', //p8
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
                '正しい',
                '収支相当の原則ではなく、大数の法則。' //p126
                ]"
            />
            <QuestionTemp1
                :questionNumber="29"
                :title="title"
                :subject="subject"
                :contents="[
                '正しい',
                '正しい',
                '生命保険協会には、「生命保険相談所」が設けられ、会社側との話合い・斡旋の場を提供している。そこで解決しない場合は、学識経験者などの第三者で構成された「裁定審査会」に委ねられる。' //p83
                ]"
            />
            <QuestionTemp1
                :questionNumber="30"
                :title="title"
                :subject="subject"
                :contents="[
                '正しい',
                '一般の多くの人々を対象に保険契約の引受けを行う事業である保険業には、保険業の公共性に鑑み、免許制（少額短期保険業者については登録制）が採用されている。', //p150
                '正しい'
                ]"
            />
            <QuestionTemp2
                :questionNumber="31"
                :title="title"
                :subject="subject"
                :contents="[
                // 問31〜35
                '傷害・疾病危険に関しては、商法では明確な規定がなかったが、<u>保険法</u>においては「傷害疾病定額保険契約」として典型契約としての地位が与えられ、同保険契約は「人の傷害疾病に基づき一定の保険給付を行うことを約するもの」（保険法第2条）と規定されている。', //p5
                '正しい',
                '正しい',
                '正しい',
                '正しい',
                // 問36〜40
                '',
                '',
                '',
                '正しい',
                '正しい',
                 //問41〜50
                'A-符号契約', 'A-負債', 'B-20%', 'B-同額の分担金', 'A-更生手続',
                'A-家系可処分所得', 'C（A・Bともに正しい）', 'C（A・Bともに正しい）', 'A-長期火災保険', 'B-変額年金',
                ]"
                :labels="[
                '解', '解', '解', '解', '解',  //問31〜35
                '解', '解', '解', '解', '解',  //問36〜40
                'ア', 'ア', 'ウ', 'エ', 'イ',  //問41〜45
                'ア', 'オ', 'オ', 'イ', 'ウ',  //問46〜50
                ]"
            />
        </div>

        <!-- ボタングループ -->
        <div class="flex flex-col items-center mt-4 pt-3 gap-4">
            <!-- 上段：前へ・次へボタン -->
            <div class="flex justify-center gap-16">
                <Link
                    :href="route('souron2023a')"
                    class="inline-flex items-center justify-center w-40 h-12 bg-purple-400 hover:bg-purple-500 text-white font-semibold rounded-lg shadow-md">
                    前の試験へ
                </Link>
                <Link
                    :href="route('souron2023c')"
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
