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
            <QuestionTemp3
                :questionNumber="1"
                :title="title"
                :subject="subject"
                :contents="[
                '客観性', '会計慣習', '注解', '報告', '処理', // 問１〜５
                ]"
                :labels="[
                'ク', 'カ', 'ア', 'ウ', 'エ',  //問１〜５
                ]"
            />
            <QuestionTemp3
                :questionNumber="2"
                :title="title"
                :subject="subject"
                :contents="[
                '真実性', '資本取引・損益取引区分', '資本剰余金', '保守主義', '単一性', //問６〜10
                ]"
                :labels="[
                'イ', 'ケ', 'ク', 'カ', 'ウ',  //問６〜10
                ]"
            />
            <QuestionTemp3
                :questionNumber="3"
                :title="title"
                :subject="subject"
                :contents="[
                '認識', '実現主義', '発生主義', '費用収益対応', '前者', //問11〜15
                ]"
                :labels="[
                'カ', 'ア', 'ク', 'ウ', 'エ',  //問11〜15
                ]"
            />
            <QuestionTemp3
                :questionNumber="4"
                :title="title"
                :subject="subject"
                :contents="[
                '売上高', '付加保険料', '現金主義', '未収保険料', '責任準備金', //問16〜20
                ]"
                :labels="[
                'ク', 'カ', 'イ', 'オ', 'ウ',  //問16〜20
                ]"
            />
            <QuestionTemp1
                :questionNumber="21"
                :title="title"
                :subject="subject"
                :contents="[
                '企業というものをその所有者とは切り離して考えるという前提である。この公準により、企業を、その所有者の手から分離された一つの実体としてとらえることができる。',
                '正しい',
                '会計行為はすべて円で評価される。'
                ]"
                />
            <QuestionTemp1
                :questionNumber="22"
                :title="title"
                :subject="subject"
                :contents="[
                '試算表ではなく精算表。',
                '正しい',
                '仕訳帳の作成ではなく、決算整理。'
                ]"
            />
            <QuestionTemp1
                :questionNumber="23"
                :title="title"
                :subject="subject"
                :contents="[
                '正しい',
                '任意積立金ではなく、払戻積立金',
                '危険準備金は、法人税法上は利益性の内部留保との立場から、損金とはならない。'
                ]"
            />
            <QuestionTemp1
                :questionNumber="24"
                :title="title"
                :subject="subject"
                :contents="[
                '1,000分の2以上ではなく、1,000分の3以上。',
                '3分の1ではなく、5分の1。',
                '正しい'
                ]"
            />
            <QuestionTemp1
                :questionNumber="25"
                :title="title"
                :subject="subject"
                :contents="[
                '維持費の人件費ではなく、新契約費の営業職員経費。',
                '新契約費の人件費ではなく、維持費の人件費。',
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
                '精算帳ではなく、総勘定元帳'
                ]"
            />
            <QuestionTemp1
                :questionNumber="27"
                :title="title"
                :subject="subject"
                :contents="[
                ' 会計情報の開示という機能はその中に含まれていないという点で、会社法・金融商品取引法に基づく会計とは異なっている。',
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
                '「保険料及び責任準備金の算出方法書」ではなく、「事業方法書」に定める金銭の振替を除き認められていない。',
                '正しい'
                ]"
            />
            <QuestionTemp1
                :questionNumber="29"
                :title="title"
                :subject="subject"
                :contents="[
                '「商品有価証券」が通常の「有価証券」と区分されているのは、「有価証券」が本来業務である資産運用の一つとして保有されているのに対し、「商品有価証券」は、法定他業である当該有価証券の転売により利益を得るために保有されるなど、その目的が全く異なるからである。',
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
                '危険準備金損益・為替損益ではなく、責任準備金関係損益・価格変動損益。',
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
                '各勘定の期間修正を行うべきであるが、生命保険会計では行わず、支払備金・責任準備金で、期間修正を行い発生主義に修正することとしている。',
                '正しい',
                '計算規定を中心に株式会社については会社法を準用し、相互会社については保険業法を中心に定めている。',
                '正しい',
                // 問36〜40
                '繰延税金資産は、その期の将来減算一時差異および税務上繰越欠損等に法定実効税率を乗じた額となる。なお、繰延税金資産は一時差異等に係る税金相当額が将来回収できる可能性のあるものでなければ、貸借対照表に計上できないことになっている。',
                '自己株式は、純資産の部から控除する形式で表示することとされた。',
                '損益計算書上、他の税金と区別して税引前当期剰余から控除する形式で表示される。',
                '正しい',
                '正しい',
                 //問41〜50
                'A-財務会計', 'B-売掛金元帳', 'C（A・Bともに正しい）', 'A-意思決定期間', 'B-定額法',
                'A-評価換え', 'C（A・Bともに正しい）', 'A-販売費及び一般管理費', 'A-損益計算書', 'B-自己査定',
                ]"
                :labels="[
                '解', '解', '解', '解', '解',  //問31〜35
                '解', '解', '解', '解', '解',  //問36〜40
                'イ', 'エ', 'オ', 'ア', 'ウ',  //問41〜45
                'イ', 'オ', 'ア', 'イ', 'ウ',  //問46〜50
                ]"
            />
        </div>

        <!-- ボタングループ -->
        <div class="flex flex-col items-center mt-4 pt-3 gap-4">
            <!-- 上段：前へ・次へボタン -->
            <div class="flex justify-center gap-16">
                <Link
                    :href="route('kaikei2023b')"
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
