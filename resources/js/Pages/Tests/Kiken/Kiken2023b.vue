<script setup>
import { Head, Link} from '@inertiajs/vue3';
import QuestionTemp1 from '../../../Components/QuestionTemp1.vue'
import QuestionTemp2 from '../../../Components/QuestionTemp2.vue'
import QuestionTemp3 from '../../../Components/QuestionTemp3.vue'

import Pagetitle from '../../../Components/Pagetitle.vue'
import SeihoTestLayout from '@/Layouts/SeihoTestLayout.vue';

const title = "危険選択"
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
                '経営効率','剰余金','配当','予定死亡率','死差益', // 問１〜５
                ]"
                :labels="[
                'キ','ウ','ア','ク','エ',  //問１〜５
                ]"
            />
            <QuestionTemp3
                :questionNumber="2"
                :title="title"
                :subject="subject"
                :contents="[
                '低い','統計的方式','逓減','定期付養老保険','定期保険', //問６〜10
                ]"
                :labels="[
                'カ','ア','オ','ウ','コ',  //問６〜10
                ]"
            />
            <QuestionTemp3
                :questionNumber="3"
                :title="title"
                :subject="subject"
                :contents="[
                '被用者団体','団体性','相似する','保険加入のみ','加入率', //問11〜15
                ]"
                :labels="[
                'カ','ア','キ','ク','ウ',  //問11〜15
                ]"
            />
            <QuestionTemp3
                :questionNumber="4"
                :title="title"
                :subject="subject"
                :contents="[
                '総合福祉団体定期保険','団体の弔慰金・死亡退職金規程','保険契約者','一括告知','平準化', //問16〜20
                ]"
                :labels="[
                'イ','カ','ア','コ','オ',  //問16〜20
                ]"
            />
            <QuestionTemp1
                :questionNumber="21"
                :title="title"
                :subject="subject"
                :contents="[
                '生命表には、国民全体を対象とした国民生命表と、それよりは小さな特定集団を対象とする経験生命表がある。',
                '正しい',
                '死亡指数は「実際死亡率÷予定死亡率×100(%) 」で計算される。'
                ]"
                />
            <QuestionTemp1
                :questionNumber="22"
                :title="title"
                :subject="subject"
                :contents="[
                '国民の平均入院日数よりも長期である。',
                '生活習慣病特約での糖尿病入院発生率が著しく高い。',
                '正しい'
                ]"
            />
            <QuestionTemp1
                :questionNumber="23"
                :title="title"
                :subject="subject"
                :contents="[
                '「アルコール中毒や不摂生生活のような職業に随伴する危険」も含まれる。',
                '正しい',
                '職業と入院率についても相当の関連があることが判明している。'
                ]"
            />
            <QuestionTemp1
                :questionNumber="24"
                :title="title"
                :subject="subject"
                :contents="[
                '正しい',
                '金融庁ではなく生命保険協会。',
                '「査定」と「決定」が逆。'
                ]"
            />
            <QuestionTemp1
                :questionNumber="25"
                :title="title"
                :subject="subject"
                :contents="[
                '正しい',
                '取扱いが簡単であるが、元受会社にとっては危険に関係のない責任準備金部分まで再保険料を支払わなければならない。',
                'ストップ・ロス再保険ではなくエクセス・オブ・ロス再保険。'
                ]"
            />
            <QuestionTemp1
                :questionNumber="26"
                :title="title"
                :subject="subject"
                :contents="[
                '正しい',
                '正しい',
                '約款上では書面による告知をした時以降に生じた事項については告知義務はないとしている。'
                ]"
            />
            <QuestionTemp1
                :questionNumber="27"
                :title="title"
                :subject="subject"
                :contents="[
                '正しい',
                '正しい',
                '若年齢層と高年齢層が逆'
                ]"
            />
            <QuestionTemp1
                :questionNumber="28"
                :title="title"
                :subject="subject"
                :contents="[
                '正しい',
                '正しい',
                '保険業法ではなく保険法。'
                ]"
            />
            <QuestionTemp1
                :questionNumber="29"
                :title="title"
                :subject="subject"
                :contents="[
                '正しい',
                '健康の異常や症状に対する明確な診断は必ずしも必要でない。',
                '正しい'
                ]"
            />
            <QuestionTemp1
                :questionNumber="30"
                :title="title"
                :subject="subject"
                :contents="[
                '保険金受取人ではなく被保険者',
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
                '体重÷身長の2乗。',
                '一般に短期養老または短期払込養老保険の経験死亡率は長期のものより良好である。ただ、定期保険ではこの開係は逆転し、保険期間が短期のものに逆選択が集中する傾向がある。',
                '正しい',
                // 問36〜40
                '利用目的は明示しなくてもよい場合もある。',
                '正しい',
                '失効後の期間の長いものほど逆選択混入の期限が多く、また診査による場合に比べ、告知のみによる場合のほうが経験死亡率が高いとされている。',
                '正しい',
                '正しい',
                 //問41〜50
                'A-実体的危険', 'C（A・Bともに正しい）', 'C（A・Bともに正しい）', 'B-大数の法則', 'A-二次性高血圧',
                'A-告知書', 'A-数字査定法', 'B-不実の告知', 'B-感染症法', 'B-保険体',
                ]"
                :labels="[
                '解','解','解','解','解',  //問31〜35
                '解','解','解','解','解',  //問36〜40
                'イ','オ','オ','エ','ア',  //問41〜45
                'イ','ア','ウ','ウ','エ',  //問46〜50
                ]"
            />
        </div>

        <!-- ボタングループ -->
        <div class="flex flex-col items-center mt-4 pt-3 gap-4">
            <!-- 上段：前へ・次へボタン -->
            <div class="flex justify-center gap-16">
                <Link
                    :href="route('kiken2023a')"
                    class="inline-flex items-center justify-center w-40 h-12 bg-purple-400 hover:bg-purple-500 text-white font-semibold rounded-lg shadow-md">
                    前の試験へ
                </Link>
                <Link
                    :href="route('kiken2023c')"
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
