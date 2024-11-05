<script setup>
import KaTeXDisplay from '../../../Components/KaTeXDisplay.vue';
import QuestionTemp1 from '../../../Components/QuestionTemp1.vue'
import SeihoTestLayout from '@/Layouts/SeihoTestLayout.vue';

</script>

<template>
    <SeihoTestLayout>
        <section class="bg-gray-100 text-gray-800 py-10">

        <!-- ページタイトル -->
        <div class="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
            <h1 class="text-2xl font-bold mb-2">生命保険商品と営業</h1>
            <p class="text-gray-600">2023年度 フォームA</p>
        </div>
        
        <!-- 問題リスト -->
        <div class="max-w-4xl mx-auto mt-4 space-y-2">
            <QuestionTemp1
                :questionNumber="21"
                :contents="[
                '正しい',
                '正しい',
                '正しい'
                ]"
            />
            <QuestionTemp1
                :questionNumber="22"
                :contents="[
                '正しい',
                '正しい',
                '正しい'
                ]"
            />
            <QuestionTemp1
                :questionNumber="23"
                :contents="[
                '正しい',
                '正しい',
                '正しい'
                ]"
            />
            <QuestionTemp1
                :questionNumber="24"
                :contents="[
                '正しい',
                '正しい',
                '正しい'
                ]"
            />
            <QuestionTemp1
                :questionNumber="25"
                :contents="[
                '正しい',
                '正しい',
                '正しい'
                ]"
            />
            <QuestionTemp1
                :questionNumber="26"
                :contents="[
                '正しい',
                '正しい',
                '正しい'
                ]"
            />
            <QuestionTemp1
                :questionNumber="27"
                :contents="[
                '正しい',
                '正しい',
                '正しい'
                ]"
            />
            <QuestionTemp1
                :questionNumber="28"
                :contents="[
                '正しい',
                '正しい',
                '正しい'
                ]"
            />
            <QuestionTemp1
                :questionNumber="29"
                :contents="[
                '正しい',
                '正しい',
                '正しい'
                ]"
            />
            <QuestionTemp1
                :questionNumber="30"
                :contents="[
                '正しい',
                '正しい',
                '正しい'
                ]"
            />
            <QuestionTemp1
                :questionNumber="31"
                :contents="[
                '正しい',
                ]"
            />
            <QuestionTemp1
                :questionNumber="32"
                :contents="[
                '正しい',
                ]"
            />
            <QuestionTemp1
                :questionNumber="33"
                :contents="[
                '正しい',
                ]"
            />
            <QuestionTemp1
                :questionNumber="34"
                :contents="[
                '正しい',
                ]"
            />
            <QuestionTemp1
                :questionNumber="35"
                :contents="[
                '正しい',
                ]"
            />
            <QuestionTemp1
                :questionNumber="36"
                :contents="[
                '正しい'
                ]"
            />
            <QuestionTemp1
                :questionNumber="37"
                :contents="[
                '正しい',
                ]"
            />
            <QuestionTemp1
                :questionNumber="38"
                :contents="[
                '正しい',
                ]"
            />
            <QuestionTemp1
                :questionNumber="39"
                :contents="[
                '正しい'
                ]"
            />
            <QuestionTemp1
                :questionNumber="40"
                :contents="[
                '正しい'
                ]"
            />
        </div>

        <!-- ボタングループ -->
        <div class="flex flex-col items-center mt-4 pt-3 gap-4">
            <!-- 上段：前へ・次へボタン -->
            <div class="flex justify-center gap-16">
                <Link
                    :href="route('eigyo2023a')"
                    class="inline-flex items-center justify-center w-40 h-12 bg-purple-400 hover:bg-purple-500 text-white font-semibold rounded-lg shadow-md">
                    前の試験へ
                </Link>
                <Link
                    :href="route('eigyo2023b')"
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
