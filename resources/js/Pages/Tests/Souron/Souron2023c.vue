<script setup>
import { Head, Link} from '@inertiajs/vue3';
import { onMounted, ref} from 'vue'
import QuestionTemp1 from '../../../Components/QuestionTemp1.vue'
import QuestionTemp2 from '../../../Components/QuestionTemp2.vue'
import QuestionTemp3 from '../../../Components/QuestionTemp3.vue'

import Pagetitle from '../../../Components/Pagetitle.vue'
import SeihoTestLayout from '@/Layouts/SeihoTestLayout.vue';

const title = "生命保険総論"
const subject = '2023年度 フォームC'

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
                '内閣総理大臣', '委託', '禁止行為', '販売チャネル', '保険ブローカー（保険仲立人）', // 問１〜５
                ]"
                :labels="[
                'キ', 'エ', 'コ', 'ア', 'ウ',  //問１〜５
                ]"
            />
            <QuestionTemp3
                :questionNumber="2"
                :title="title"
                :subject="subject"
                :contents="[
                '意向把握義務', '勧誘方針', '消費者契約法', '金融商品取引法', '特定保険契約', //問６〜10
                ]"
                :labels="[
                'ケ', 'ア', 'ク', 'ウ', 'コ',  //問６〜10
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
                '保険者の危険引受けが可能となるためには、同様な危険を多数引き受けることにより、危険の発生頻度の変動幅を縮小させ、平均経験率を得る必要がある。', //p4
                '保険金額と危険度の積として危険評価額は数量化可能となる。' //p4
                ]"
                />
            <QuestionTemp1
                :questionNumber="22"
                :title="title"
                :subject="subject"
                :contents="[
                '80%ではなく20%', //p27
                '正しい',
                '生命保険会社における配当は保険料の精算という意味合いが強く，保険料を投資することによる利潤というイメージではないので一般会社における株主配当とは性格が異なる。' //p29
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
                '公的年金制度は、全国民（20歳以上60歳未満の者）が加入する。', //p127
                '厚生年金保険の上乗せ年金としては確定拠出年金（企業型）などがある。', //p127
                '正しい'
                ]"
            />
            <QuestionTemp1
                :questionNumber="25"
                :title="title"
                :subject="subject"
                :contents="[
                '2001年（平成13年）に、住宅ローン関連の信用生命保険と長期火災保険等の販売からスタートしたが、2002年（平成14年）に個人年金の販売が認められたことを受け、一気に販売額が急増した。', //p175
                '2005年（平成17年）には一時払終身保険、一時払養老保険や期間10年以下の平準払養老保険等が販売対象に加えられた。', //p175
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
                '保険契約の一方の当事者である保険契約者は、保険者が危険を負担していることに対して、保険事故発生の可能性に応じたものとして保険料を支払う。' //p15
                ]"
            />
            <QuestionTemp1
                :questionNumber="27"
                :title="title"
                :subject="subject"
                :contents="[
                '正しい',
                '契約条項に保険料払込猶予期間と不可争期間の規定を設けることという内容の取締法が制定された。', //p64
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
                '適合性の原則ではなく、給付・反対給付均等の原則', //p164
                '正しい'
                ]"
            />
            <QuestionTemp1
                :questionNumber="30"
                :title="title"
                :subject="subject"
                :contents="[
                '個人保険分野が最初に機械化された分野である', //p197-198
                '正しい',
                '正しい'
                ]"
            />
            <QuestionTemp2
                :questionNumber="31"
                :title="title"
                :subject="subject"
                :contents="[
                // 問31〜35
                '生命保険契約は保険金支払債務と保険料支払債務とが対価関係になる双務契約である。', //p11
                '正しい',
                '正しい',
                '正しい',
                '正しい',
                // 問36〜40
                '正しい',
                '100株ではなく1株。', //p162
                'JA共済事業は、農協系統組織の一環であり、農業協同組合の行う信用・購入・販売など、他の事業と同様、JA（単位農協）、JA共済連という2段階による組織機構により運営されている。', //p166
                '正しい',
                '倍額ではなく同額', //p191
                 //問41〜50
                'B-いずれかの遅い日', 'A-負債', 'B-維持費', 'C（A・Bともに正しい）', 'A-更生手続',
                'A-家系可処分所得', 'C（A・Bともに正しい）', 'A-安全性', 'B-第2号被保険者', 'B-保険金額',
                ]"
                :labels="[
                '解', '解', '解', '解', '解',  //問31〜35
                '解', '解', '解', '解', '解',  //問36〜40
                'エ', 'ア', 'エ', 'オ', 'イ',  //問41〜45
                'ア', 'オ', 'イ', 'ウ', 'ウ',  //問46〜50
                ]"
            />
        </div>


        <!-- ボタングループ -->
        <div class="flex flex-col items-center mt-4 pt-3 gap-4">
            <!-- 上段：前へ・次へボタン -->
            <div class="flex justify-center gap-16">
                <Link
                    :href="route('souron2023b')"
                    class="inline-flex items-center justify-center w-40 h-12 bg-purple-400 hover:bg-purple-500 text-white font-semibold rounded-lg shadow-md">
                    前の試験へ
                </Link>
                <Link
                    :href="route('souron2022a')"
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
