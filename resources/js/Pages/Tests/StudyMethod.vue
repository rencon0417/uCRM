<script setup>
import { Head } from '@inertiajs/vue3';
import SeihoTestLayout from '@/Layouts/SeihoTestLayout.vue';
</script>

<template>
    <SeihoTestLayout title="勉強方法">
      <Head title="勉強方法" />

      <div class="min-h-screen bg-gray-50">
        <div class="container mx-auto px-4 py-8 max-w-4xl">
          <div class="bg-white rounded-lg shadow-sm p-6 md:p-8">
            <h1 class="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              生命保険講座８科目を1年で優秀賞を獲得した勉強法
            </h1>

            <div class="space-y-8 text-gray-700 leading-relaxed">
              <section>
                <h2 class="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                  1. 全体像の把握から始める
                </h2>
                <p>
                  各科目で「何が問われるか」をざっくり掴むことから始めました。<br />
                  まずは過去問を1年分解いてみて、出題形式やボリューム感を確認します。
                </p>
              </section>

              <section>
                <h2 class="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                  2. 過去問中心の学習
                </h2>
                <p>
                  テキストを一から読むよりも、「間違えた問題の解説を理解する」方が効率的です。<br />
                  私は自身の解説サイトを活用し、「なぜ間違えたか」を掘り下げて学習しました。
                </p>
              </section>

              <section>
                <h2 class="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                  3. 学習スケジュール
                </h2>
                <ul class="list-disc list-inside ml-4 space-y-1">
                  <li>平日：1〜2時間（朝や夜のスキマ時間）</li>
                  <li>休日：3〜4時間（まとめて過去問演習）</li>
                  <li>最低3年分の過去問を繰り返し解く</li>
                  <li>間違えた問題は1〜2週間後にもう一度解く</li>
                </ul>
              </section>

              <section>
                <h2 class="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                  4. モチベーション管理
                </h2>
                <ul class="list-disc list-inside ml-4 space-y-1">
                  <li>合格後の「賞状を持った自分」を想像する</li>
                  <li>進捗を記録するアプリやノートを使う</li>
                  <li>SNSで勉強仲間と交流する</li>
                </ul>
                <p class="mt-2">
                  落ち込んだ時は、「完璧じゃなくていい、まずは動こう」と考えるようにしていました。
                </p>
              </section>

              <section>
                <h2 class="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                  5. まとめ
                </h2>
                <ul class="list-disc list-inside ml-4 space-y-1">
                  <li>まずは行動。完璧を目指さない</li>
                  <li>過去問 → 分析 → 再チャレンジの繰り返し</li>
                  <li>自分に合った時間帯・ペースで継続</li>
                  <li>モチベーションは仕組みで維持する</li>
                </ul>
              </section>

              <section>
                <p>
                  本サイトの解説ページでは、各問題の「どこが間違っているか」を丁寧に記載しています。<br />
                  実際に私が使っていたものなので、ぜひご活用ください！
                </p>
              </section>
            </div>

            <div class="mt-12 text-sm text-gray-600 border-t pt-4">
              最終更新日：2025年6月24日
            </div>
          </div>
        </div>
      </div>
    </SeihoTestLayout>
  </template>
