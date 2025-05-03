<script setup>
import { Head, Link} from '@inertiajs/vue3';
import QuestionTemp1 from '../../../Components/QuestionTemp1.vue'
import QuestionTemp2 from '../../../Components/QuestionTemp2.vue'
import QuestionTemp3 from '../../../Components/QuestionTemp3.vue'

import Pagetitle from '../../../Components/Pagetitle.vue'
import SeihoTestLayout from '@/Layouts/SeihoTestLayout.vue';

const title = "生命保険計理"
const subject = '2021年度 フォームA'

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
            <QuestionTemp2
                :questionNumber="1"
                :title="title"
                :subject="subject"
                :contents="[
                    // 問１
                    '0.97957<br><br>\
                    生存率 ＝ 期末の生存数 ÷ 期初の生存数<br>\
                    ＝ 93,054 ÷ 94,995<br>\
                    ＝ 0.979567346...<br>\
                    ⇒ 小数第6位を四捨五入して <strong>0.97957</strong>',
                    // 問２
                    '98,756<br><br>\
                    生存数 ＝ 期末の生存数 ÷ 期初の生存数 × 期初の生存者数<br>\
                    ＝ 97,539 ÷ 98,768 × 100,000<br>\
                    ＝ 98755.6699...<br>\
                    ⇒ 小数第1位を四捨五入して <strong>98,756</strong>',
                    // 問３
                    '1.12<br><br>\
                    ＜平均生存年数＞<br>\
                    死亡は年間を通じて発生するが、平均して年央に集中発生したものと考えられるので、<br>\
                    例えば、108歳から109歳になるまでに死亡する人の平均生存年数は0.5年となる。<br><br>\
                    ＜年齢＞：＜死亡数＞×＜平均生存年数＞＝＜生存年数＞<br>\
                    108歳：58.951人 × 0.5年 ＝ 29.4755<br>\
                    109歳：25.888人 × 1.5年 ＝ 38.832<br>\
                    110歳：10.1008人 × 2.5年 ＝ 25.252<br>\
                    111歳：3.4515人 × 3.5年 ＝ 12.08025<br>\
                    112歳：1.0162人 × 4.5年 ＝ 4.5729<br>\
                    113歳：0.3155人 × 5.5年 ＝ 1.73525<br><br>\
                    → 108歳～113歳の生存年数の合計 ＝ 111.9479<br><br>\
                    108歳の平均余命 ＝ 延べ生存年数 ÷ 108歳の生存者数<br>\
                    ＝ 111.9479 ÷ 99.723<br>\
                    ＝ 1.12258857...<br>\
                    ⇒ 小数第3位を四捨五入して <strong>1.12</strong>',
                    // 問４
                    '776,129',
                    // 問５
                    '8,050',
                ]"
                :labels="[
                    'イ', 'キ', 'ウ', 'コ', 'カ'  // 問１〜５
                ]"
            />

            <QuestionTemp2
                :questionNumber="2"
                :title="title"
                :subject="subject"
                :contents="[
                '6,015','1,061,646','1.51','1.33','1,941,180', //問６〜10
                ]"
                :labels="[
                'カ','ク','ウ','イ','コ',  //問６〜10
                ]"
            />
            <QuestionTemp3
                :questionNumber="3"
                :title="title"
                :subject="subject"
                :contents="[
                '未経過保険料','危険準備金','4月1日から翌年3月31日','契約月','保険リスク', //問11〜15
                ]"
                :labels="[
                'キ','イ','エ','ケ','コ',  //問11〜15
                ]"
            />
            <QuestionTemp3
                :questionNumber="4"
                :title="title"
                :subject="subject"
                :contents="[
                '保証はない','変動保険金額','毎日','契約者','生命保険会社', //問16〜20
                ]"
                :labels="[
                'コ','カ','キ','ケ','イ',  //問16〜20
                ]"
            />
            <QuestionTemp1
                :questionNumber="21"
                :title="title"
                :subject="subject"
                :contents="[
                '正しい',
                '',
                ''
                ]"
                />
            <QuestionTemp1
                :questionNumber="22"
                :title="title"
                :subject="subject"
                :contents="[
                '',
                '正しい',
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
                '正しい',
                '',
                ''
                ]"
            />
            <QuestionTemp1
                :questionNumber="26"
                :title="title"
                :subject="subject"
                :contents="[
                '正しい',
                '',
                '正しい'
                ]"
            />
            <QuestionTemp1
                :questionNumber="27"
                :title="title"
                :subject="subject"
                :contents="[
                '',
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
                '',
                '正しい'
                ]"
            />
            <QuestionTemp1
                :questionNumber="29"
                :title="title"
                :subject="subject"
                :contents="[
                '',
                '正しい',
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
                '',
                '正しい',
                '',
                '正しい',
                '',
                // 問36〜40
                '',
                '',
                '正しい',
                '',
                '正しい',
                 //問41〜50
                'C（A・Bともに正しい）', 'B-完全生命表', 'C（A・Bともに正しい）', 'A-高くなる', 'A-大数',
                'B-貯蓄保険料', 'A-危険保険金', 'A-定款', 'A-保険種類別', 'B-純保険料率',
                ]"
                :labels="[
                '解','解','解','解','解',  //問31〜35
                '解','解','解','解','解',  //問36〜40
                'オ','エ','オ','イ','ア',  //問41〜45
                'ウ','ア','ア','ア','ウ',  //問46〜50
                ]"
            />
        </div>

        <!-- ボタングループ -->
        <div class="flex flex-col items-center mt-4 pt-3 gap-4">
            <!-- 上段：前へ・次へボタン -->
            <div class="flex justify-center gap-16">
                <Link
                    :href="route('keiri2022c')"
                    class="inline-flex items-center justify-center w-40 h-12 bg-purple-400 hover:bg-purple-500 text-white font-semibold rounded-lg shadow-md">
                    前の試験へ
                </Link>
                <Link
                    :href="route('keiri2021b')"
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
