<script setup>
import { Head, Link} from '@inertiajs/vue3';
import QuestionTemp1 from '../../../Components/QuestionTemp1.vue'
import QuestionTemp2 from '../../../Components/QuestionTemp2.vue'
import QuestionTemp3 from '../../../Components/QuestionTemp3.vue'

import Pagetitle from '../../../Components/Pagetitle.vue'
import SeihoTestLayout from '@/Layouts/SeihoTestLayout.vue';

const title = "生命保険計理"
const subject = '2023年度 フォームA'

</script>

<template>

<SeihoTestLayout>
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
                '5,425','522,926','1.51','1.23','2,710,245', // 問１〜５
                ]"
                :labels="[
                'カ','ク','ウ','ア','コ',  //問１〜５
                ]"
            />
            <QuestionTemp3
                :questionNumber="2"
                :title="title"
                :subject="subject"
                :contents="[
                '0.98530','98,455','1.02','955,236','9,790', //問６〜10
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
