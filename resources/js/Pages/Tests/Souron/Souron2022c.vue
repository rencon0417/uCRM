<script setup>
import { Head, Link} from '@inertiajs/vue3';
import QuestionTemp1 from '../../../Components/QuestionTemp1.vue'
import QuestionTemp2 from '../../../Components/QuestionTemp2.vue'
import QuestionTemp3 from '../../../Components/QuestionTemp3.vue'

import Pagetitle from '../../../Components/Pagetitle.vue'
import SeihoTestLayout from '@/Layouts/SeihoTestLayout.vue';

const title = "生命保険総論"
const subject = '2022年度 フォームC'

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
                '保険料の拠出','全国健康保険協会管掌保険','国家公務員','国民健康保険','後期高齢者', // 問１〜５
                ]"
                :labels="[
                'イ','オ','ケ','キ','エ',  //問１〜５
                ]"
            />
            <QuestionTemp3
                :questionNumber="2"
                :title="title"
                :subject="subject"
                :contents="[
                '共済年金','国民年金','労働者災害補償保険','生活保護','資力調査（ミーンズ・テスト）', //問６〜10
                ]"
                :labels="[
                'ケ','イ','カ','オ','エ',  //問６〜10
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
                '保険契約者の資格については別段の制限はなく、個人であると法人であるとを問わず、また行為能力者であると否とを問わない。', //p13
                '正しい',
                '保険金受取人の資格については何らの制限はなく、個人であると法人であると、また行為能力者であると否とを問わない。' //p14
                ]"
                />
            <QuestionTemp1
                :questionNumber="22"
                :title="title"
                :subject="subject"
                :contents="[
                '正しい',
                '確率論における大数の法則に基づき、危険を被る対象物（母数）が多いほど危険の発生頻度の変動幅は小さくなる。', //p4
                '傷害・疾病危険に関しては、商法では明確な規定がなかったが、保険法においては「傷害疾病定額保険契約」として典型契約としての地位が与えられ、同保険契約は「人の傷害疾病に基づき一定の保険給付を行うことを約するもの」と規定されている。' //p5
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
                'ユニバーサル保険は、保険料をキャッシュ・バリューとして積み立て、このキャッシュ・バリューをTB、CD、CPといった短期自由金利商品に投資し、短期金利にスライドする形で利殖した中から死亡保障コストを控除する商品である。', //p69
                '決済機能は持たない。', //p69
                '正しい'
                ]"
            />
            <QuestionTemp1
                :questionNumber="25"
                :title="title"
                :subject="subject"
                :contents="[
                '正しい',
                '従来であれば、「周りの人が持っているから」とか「テレビのコマーシャルで見たから」といった外的要素に左右される面が多かったのであるが、今日では、自分の好みに合っているか、本当に必要か、価格は適切かなどを判断し、自分で納得のいく商品を購入する方向に変わってきている。', //p184
                '企業としても従来の画一的商品を大量生産、低価格で販売するという戦略だけでは対応し切れなくなってきた面もあり、いかにニーズを先取りし、他に先駆けて新製品を市場に提供できるかが、重要な課題となっている。' //p184-185
                ]"
            />
            <QuestionTemp1
                :questionNumber="26"
                :title="title"
                :subject="subject"
                :contents="[
                '正しい',
                '正しい',
                '太古の共同体や奴隷制度、さらに封建社会における農奴制度などは、社会それ自体が保障制度であったが、ギルドは封建社会の中で独立的な経済単位が結合して、自らの力で危険に対処した最初の試みである。' //p53
                ]"
            />
            <QuestionTemp1
                :questionNumber="27"
                :title="title"
                :subject="subject"
                :contents="[
                '一般勘定資産ではなく、特別勘定資産の運用実績が直接保険金額や年金額に反映されるため留意する必要がある', //p110
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
                '適合性の原則ではなく、給付・反対給付均等の原則', //p164
                '正しい'
                ]"
            />
            <QuestionTemp1
                :questionNumber="30"
                :title="title"
                :subject="subject"
                :contents="[
                '正しい',
                '生命保険の取り扱う個人年金保険には年金支払期間を一生涯とすることができる点、各種の医療関係特約を付加することができる点等において他の金融機関の年金型商品と比べて優れた特色がある。', //p190
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
                '任意規定ではなく強行規定', //p9
                'ロイヤル・エクスチェンジではなく、エクイタブル', //p57
                '正しい',
                '日本の保険はこれらの類似制度から発展したものではない', //p72
                // 問36〜40
                '正しい',
                '正しい',
                '「金融商品の販売等に関する法律（現在、金融サービス提供法に改称）」によって、顧客への重要事項の説明と勧誘方針の策定・公表が義務付けられており、「消費者契約法」では、不適切な勧誘を行った際の契約取消権や不当な契約条項の無効等を定めることにより消費者保護を図っている。', //p158
                '正しい',
                '簡易保険の既契約に対しては政府による保証が継続された。', //p172
                 //問41〜50
                'B-不要式契約', 'C（A・Bともに正しい）', 'A-10', 'A-財形住宅貯蓄積立保険', 'C（A・Bともに正しい）',
                'B-生命保険会社各社の拠出', 'A-200%', 'B-財務大臣', 'B-保険金額', 'A-団体定期保険',
                ]"
                :labels="[
                '解','解','解','解','解',  //問31〜35
                '解','解','解','解','解',  //問36〜40
                'ウ','オ','ア','イ','オ',  //問41〜45
                'エ','イ','エ','ウ','ア',  //問46〜50
                ]"
            />
        </div>

        <!-- ボタングループ -->
        <div class="flex flex-col items-center mt-4 pt-3 gap-4">
            <!-- 上段：前へ・次へボタン -->
            <div class="flex justify-center gap-16">
                <Link
                    :href="route('souron2022b')"
                    class="inline-flex items-center justify-center w-40 h-12 bg-purple-400 hover:bg-purple-500 text-white font-semibold rounded-lg shadow-md">
                    前の試験へ
                </Link>
                <Link
                    :href="route('souron2021a')"
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
