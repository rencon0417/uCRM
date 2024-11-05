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
            description="2022年度 フォームB"
        />

        <!-- 問題リスト -->
        <div class="max-w-4xl mx-auto mt-4 space-y-2">
            <QuestionTemp2
                :questionNumber="1"
                :contents="[
                '洗替方式', '費用', '標準', '除く', '最低額', // 問１〜５
                '未経過', '危険', '内部留保', '純保険料式', '20%', //問６〜10
                '現金', '未収保険料', '前納保険料', '費用収益対応', '全額', //問11〜15
                '売買目的', '発生', '保険金受取人', '評価換え', '内閣総理大臣', //問16〜20
                ]"
                :labels="[
                'エ', 'コ', 'カ', 'ウ', 'ケ',  //問１〜５
                'オ', 'ウ', 'イ', 'コ', 'キ',  //問６〜10
                'オ', 'キ', 'エ', 'イ', 'コ',  //問11〜15
                'キ', 'エ', 'イ', 'ク', 'カ',  //問16〜20
                ]"
            />
            <QuestionTemp1
                :questionNumber="21"
                :contents="[
                '正しい',
                '',
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
                '',
                '正しい',
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
                '正しい',
                ''
                ]"
            />
            <QuestionTemp1
                :questionNumber="28"
                :contents="[
                '正しい',
                '',
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
                '',
                '正しい',
                // 問36〜40
                '',
                '',
                '',
                '正しい',
                '正しい',
                 //問41〜50
                'C（A・Bともに正しい）', 'A-補助記入帳', 'B-のれん（連結調整勘定）', 'A-負債', 'B-固定',
                'B-相互会社だけに', 'A-団体年金', 'A-期末', 'C（A・Bともに正しい）', 'B-国税通則法',
                ]"
                :labels="[
                '解', '解', '解', '解', '解',  //問31〜35
                '解', '解', '解', '解', '解',  //問36〜40
                'オ', 'イ', 'エ', 'ア', 'ウ',  //問41〜45
                'ウ', 'イ', 'ア', 'オ', 'ウ',  //問46〜50
                ]"
            />
        </div>

        <!-- ボタングループ -->
        <div class="flex flex-col items-center mt-4 pt-3 gap-4">
            <!-- 上段：前へ・次へボタン -->
            <div class="flex justify-center gap-16">
                <Link
                    :href="route('kaikei2022a')"
                    class="inline-flex items-center justify-center w-40 h-12 bg-purple-400 hover:bg-purple-500 text-white font-semibold rounded-lg shadow-md">
                    前の試験へ
                </Link>
                <Link
                    :href="route('kaikei2022c')"
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
