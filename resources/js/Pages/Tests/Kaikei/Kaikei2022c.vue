<script setup>
import { Head, Link} from '@inertiajs/vue3';
import { reactive, onMounted, ref, computed } from 'vue'
import { Inertia } from '@inertiajs/inertia';
import QuestionTemp1 from '../../../Components/QuestionTemp1.vue'
import QuestionTemp2 from '../../../Components/QuestionTemp2.vue'
import QuestionTemp3 from '../../../Components/QuestionTemp3.vue'
import Pagetitle from '../../../Components/Pagetitle.vue'
import SeihoTestLayout from '@/Layouts/SeihoTestLayout.vue';

const title = "生命保険会計"
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
                '洗替方式', '費用', '標準', '除く', '最低額', // 問１〜５
                ]"
                :labels="[
                'エ', 'コ', 'カ', 'ウ', 'ケ',  //問１〜５
                ]"
            />
            <QuestionTemp3
                :questionNumber="2"
                :title="title"
                :subject="subject"
                :contents="[
                '未経過', '危険', '内部留保', '純保険料式', '20%', //問６〜10
                ]"
                :labels="[
                'オ', 'ウ', 'イ', 'コ', 'キ',  //問６〜10
                ]"
            />
            <QuestionTemp3
                :questionNumber="3"
                :title="title"
                :subject="subject"
                :contents="[
                '発生', '給付金', '団体定期保険の年金払特約', '個人年金の年金一括支払額', '解除控除', //問11〜15
                ]"
                :labels="[
                'キ', 'ク', 'ケ', 'ウ', 'コ',  //問11〜15
                ]"
            />
            <QuestionTemp3
                :questionNumber="4"
                :title="title"
                :subject="subject"
                :contents="[
                '支払遅延利息', '特定取引', '除く', '特例', '減価償却費', //問16〜20
                ]"
                :labels="[
                'ケ', 'キ', 'オ', 'カ', 'イ',  //問16〜20
                ]"
            />
            <QuestionTemp1
                :questionNumber="21"
                :title="title"
                :subject="subject"
                :contents="[
                '会社の設備投資限度額の算定ではなく、株主配当の限度額の算定。',
                '正しい',
                '株主配当については、旧商法では企業が株主へ配当を行うのは年2回までに制限されていたが、会社法では株主総会の決議があればいつでも配当を出すことが可能となった。'
                ]"
                />
            <QuestionTemp1
                :questionNumber="22"
                :title="title"
                :subject="subject"
                :contents="[
                '企業の経済活動を記帳・計算するのが簿記であるが、経済活動のすべてを記帳・計算するわけではない。たとえば、電力会社と電力供給の契約を締結した場合、契約締結の時点では、それぞれに「電力を供給する義務」と「電力の供給を受ける権利」が発生するが、会計上の取引とはならない。',
                '正しい',
                '元帳の締切ではなく、転記'
                ]"
            />
            <QuestionTemp1
                :questionNumber="23"
                :title="title"
                :subject="subject"
                :contents="[
                '従来連結子会社及び子法人等の範囲は議決権の所有割合（50%超で子会社及び子法人等）で形式的に判定していたが、現在は会社が他の会社の意思決定機関を支配しているか否かによって実質的に判定する。',
                '連結会社相互間の取引によって取得した資産に含まれる未実現損益はその全額を消去する',
                '正しい'
                ]"
            />
            <QuestionTemp1
                :questionNumber="24"
                :title="title"
                :subject="subject"
                :contents="[
                '正しい',
                '取得原価ではなく、償却原価法。',
                '従来、負債の部に計上されていたが、保険業法施行規則の改正により1999年度（平成11年度）決算より資産の部の控除項目となった。'
                ]"
            />
            <QuestionTemp1
                :questionNumber="25"
                :title="title"
                :subject="subject"
                :contents="[
                '保険料収入，保険金支払，配当金支払等の保険関係の資金移動については、原則として、資金移動の発生と同時にその帰属する「商品区分」が判明する場合には、その当該「商品区分」に反映させる。',
                '資産の購入・売却、利息・配当金収入等の資産運用関係の資金移動については、原則として、運用資産の管理方法に応じて、資金移動の発生と同時に対応する「資産区分」に反映させる。',
                '正しい'
                ]"
            />
            <QuestionTemp1
                :questionNumber="26"
                :title="title"
                :subject="subject"
                :contents="[
                '正しい',
                '正しい',
                '単一性の原則ではなく、継続性の原則。'
                ]"
            />
            <QuestionTemp1
                :questionNumber="27"
                :title="title"
                :subject="subject"
                :contents="[
                '正しい',
                '正しい',
                'その他有価証券の評価差額から税効果会計上の税効果相当額を控除した額を計上する。'
                ]"
            />
            <QuestionTemp1
                :questionNumber="28"
                :title="title"
                :subject="subject"
                :contents="[
                '正しい',
                '「保険料及び責任準備金の算出方法書」ではなく、「事業方法書」に定める金銭の振替を除き認められていない。',
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
                '日本公認会計士協会ではなく、生命保険協会経理委員会。'
                ]"
            />
            <QuestionTemp1
                :questionNumber="30"
                :title="title"
                :subject="subject"
                :contents="[
                '営業保険料は、純保険料と付加保険料から成り立っている。純保険料は、予定死亡率・予定利率から計算し、将来の保険金・年金・給付金の支払に充当する。また、付加保険料は、予定事業費率から計算し、事業費と事業費に準ずる経費に充当する。',
                '正しい',
                '正しい'
                ]"
            />
            <QuestionTemp2
                :questionNumber="31"
                :questionTitle="[
                    '', //問31
                    '', //問32
                    '', //問33
                    '', //問34
                    '', //問35
                    '', //問36
                    '', //問37
                    '', //問38
                    '', //問39
                    '', //問40
                    '', //問41
                    '', //問42
                    '', //問43
                    '', //問44
                    '', //問45
                    '', //問46
                    '', //問47
                    '', //問48
                    '', //問49
                    '', //問50
                ]"
                :title="title"
                :subject="subject"
                :contents="[
                // 問31〜35
                '正しい',
                '正しい',
                '会計情報の開示という機能はその中に含まれていないという点で、会社法・金融商品取引法に基づく会計とは異なっている。',
                '正しい',
                '正しい',
                // 問36〜40
                '正しい',
                '内閣府令で、資産ごとに定められた積立基準により計算された額を、積立限度額に達するまで価格変動準備金として積み立てることを義務付けている。',
                '現金主義ではなく、実現主義。',
                '正しい',
                '監査役会は3人以上で構成された監査役（そのうち半数以上は社外監査役）のすべてで組織する。',
                 //問41〜50
                'C（A・Bともに正しい）', 'B-管理会計', 'C（A・Bともに正しい）', 'A-負債', 'B-5分の1',
                'A-売買目的有価証券', 'A-評価換え', 'A-期末', 'B-定款', 'B-自己査定',
                ]"
                :labels="[
                '解', '解', '解', '解', '解',  //問31〜35
                '解', '解', '解', '解', '解',  //問36〜40
                'オ', 'エ', 'オ', 'ア', 'ウ',  //問41〜45
                'イ', 'イ', 'ア', 'エ', 'ウ',  //問46〜50
                ]"
            />
        </div>

        <!-- ボタングループ -->
        <div class="flex flex-col items-center mt-4 pt-3 gap-4">
            <!-- 上段：前へ・次へボタン -->
            <div class="flex justify-center gap-16">
                <Link
                    :href="route('kaikei2022b')"
                    class="inline-flex items-center justify-center w-40 h-12 bg-purple-400 hover:bg-purple-500 text-white font-semibold rounded-lg shadow-md">
                    前の試験へ
                </Link>
                <Link
                    :href="route('kaikei2021a')"
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
