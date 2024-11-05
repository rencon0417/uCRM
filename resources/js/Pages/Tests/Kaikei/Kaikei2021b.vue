<script setup>
import { Head, Link} from '@inertiajs/vue3';
import { reactive, onMounted, ref, computed } from 'vue'
import { Inertia } from '@inertiajs/inertia';
import QuestionTemp1 from '../../../Components/QuestionTemp1.vue'
import QuestionTemp2 from '../../../Components/QuestionTemp2.vue'
import Pagetitle from '../../../Components/Pagetitle.vue'
import SeihoTestLayout from '@/Layouts/SeihoTestLayout.vue';

</script>

<template>
    <SeihoTestLayout>
    <section class="bg-gray-100 text-gray-800 py-10">

        <!-- ページタイトル -->
        <Pagetitle
            title="生命保険会計"
            description="2021年度 フォームB"
        />

        <!-- 問題リスト -->
        <div class="max-w-4xl mx-auto mt-4 space-y-2">
            <QuestionTemp2
                :questionNumber="1"
                :contents="[
                '財務会計', '株主配当', '財務内容', '有限責任', '利害調整', // 問１〜５
                '価格形成', '課税の公平性', '別段の定め', '会計慣行', 'エネルギー', //問６〜10
                '認識', '実現主義', '発生主義', '費用収益対応の原則', '前者', //問11〜15
                '売上高', '付加保険料', '現金主義', '未収保険料', '責任準備金', //問16〜20
                ]"
                :labels="[
                'ウ', 'コ', 'オ', 'カ', 'キ',  //問１〜５
                'キ', 'イ', 'エ', 'ク', 'ア',  //問６〜10
                'カ', 'ア', 'ク', 'ウ', 'エ',  //問11〜15
                'ク', 'カ', 'イ', 'オ', 'ウ',  //問16〜20
                ]"
            />
            <QuestionTemp1
                :questionNumber="21"
                :contents="[
                '',
                '正しい',
                ''
                ]"
                />
            <QuestionTemp1
                :questionNumber="22"
                :contents="[
                '',
                '正しい',
                ''
                ]"
            />
            <QuestionTemp1
                :questionNumber="23"
                :contents="[
                '',
                '',
                '正しい'
                ]"
            />
            <QuestionTemp1
                :questionNumber="24"
                :contents="[
                '正しい',
                '',
                ''
                ]"
            />
            <QuestionTemp1
                :questionNumber="25"
                :contents="[
                '正しい',
                '',
                ''
                ]"
            />
            <QuestionTemp1
                :questionNumber="26"
                :contents="[
                '正しい',
                '正しい',
                ''
                ]"
            />
            <QuestionTemp1
                :questionNumber="27"
                :contents="[
                '正しい',
                '',
                '正しい'
                ]"
            />
            <QuestionTemp1
                :questionNumber="28"
                :contents="[
                '',
                '正しい',
                '正しい'
                ]"
            />
            <QuestionTemp1
                :questionNumber="29"
                :contents="[
                '',
                '正しい',
                '正しい'
                ]"
            />
            <QuestionTemp1
                :questionNumber="30"
                :contents="[
                '正しい',
                '',
                '正しい'
                ]"
            />
            <QuestionTemp2
                :questionNumber="31"
                :contents="[
                // 問31〜35
                '正しい',
                '正しい',
                '正しい',
                '正しい',
                '正しい',
                // 問36〜40
                '',
                '',
                '',
                '',
                '',
                 //問41〜50
                'C（A・Bともに正しい）', 'A-利益性', 'B-4ヵ月', 'B-保険業法', 'C（A・Bともに正しい）',
                'A-資産除去', 'B-1000分の3', 'B-支払備金', 'B-物件費', 'A-社外',
                ]"
                :labels="[
                '解', '解', '解', '解', '解',  //問31〜35
                '解', '解', '解', '解', '解',  //問36〜40
                'オ', 'イ', 'エ', 'エ', 'オ',  //問41〜45
                'ア', 'ウ', 'エ', 'ウ', 'イ',  //問46〜50
                ]"
            />
        </div>

        <!-- ボタングループ -->
        <div class="flex flex-col items-center mt-4 pt-3 gap-4">
            <!-- 上段：前へ・次へボタン -->
            <div class="flex justify-center gap-16">
                <Link
                    :href="route('kaikei2021a')"
                    class="inline-flex items-center justify-center w-40 h-12 bg-purple-400 hover:bg-purple-500 text-white font-semibold rounded-lg shadow-md">
                    前の試験へ
                </Link>
                <Link
                    :href="route('kaikei2021c')"
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
