<script setup>
import { Head, Link} from '@inertiajs/vue3';
import { reactive, onMounted, ref, computed } from 'vue'
import { Inertia } from '@inertiajs/inertia';
import SeihoTestLayout from '@/Layouts/SeihoTestLayout.vue';

</script>


<template>
    <SeihoTestLayout title="プライバシーポリシー">

        <div class="min-h-screen bg-gray-50">
        <div class="container mx-auto px-4 py-8 max-w-4xl">
            <div class="bg-white rounded-lg shadow-sm p-6 md:p-8">
                <h1 class="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                    プライバシーポリシー（個人情報保護方針）
                </h1>

                <div class="space-y-8">
                    <section>
                        <h2 class="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                            1. 個人情報の取り扱いについて
                        </h2>
                        <p class="text-gray-700 leading-relaxed">
                            当サイト「生保講座過去問解説」（以下「当サイト」）は、ユーザーの個人情報の保護を重要な責務と考え、以下のプライバシーポリシーに従って個人情報を取り扱います。
                        </p>
                    </section>

                    <!-- 他のセクションも同様のパターンで実装 -->

                    <section>
                        <h2 class="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                            2. 収集する情報
                        </h2>
                        <p class="text-gray-700 leading-relaxed mb-4">
                            当サイトでは、以下の情報を収集する場合があります：
                        </p>
                        <ul class="list-disc list-inside text-gray-700 space-y-2 ml-4">
                            <li>お問い合わせフォームからの送信情報（メールアドレス、お問い合わせ内容）</li>
                            <li>アクセス解析による利用状況データ（アクセス日時、参照元ページ、使用ブラウザなど）</li>
                        </ul>
                    </section>

                    <section>
                        <h2 class="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                            3. 個人情報の利用目的
                        </h2>
                        <p class="text-gray-700 leading-relaxed mb-4">
                            収集した個人情報は、以下の目的で利用いたします：
                        </p>
                        <ul class="list-disc list-inside text-gray-700 space-y-2 ml-4">
                            <li>お問い合わせに対する回答や必要な情報の提供</li>
                            <li>サービスの改善や新機能の開発</li>
                            <li>不正アクセスの防止やセキュリティの確保</li>
                            <li>利用規約違反への対応</li>
                        </ul>
                    </section>
                    <section>
                        <h2 class="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                            4. 個人情報の第三者提供
                        </h2>
                        <p class="text-gray-700 leading-relaxed mb-4">
                            当サイトは、以下の場合を除き、収集した個人情報を第三者に提供いたしません：
                        </p>
                        <ul class="list-disc list-inside text-gray-700 space-y-2 ml-4">
                            <li>ユーザーの同意がある場合</li>
                            <li>法令に基づく場合</li>
                            <li>人の生命、身体または財産の保護のために必要がある場合</li>
                        </ul>
                    </section>
                    <section>
                        <h2 class="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                            5. アクセス解析ツールについて
                        </h2>
                        <p class="text-gray-700 leading-relaxed mb-4">
                            当サイトでは、Googleアナリティクスを使用して、サイトの利用状況を分析しています。Googleアナリティクスは、Cookieを使用してデータを収集しますが、個人を特定する情報は収集しません。
                        </p>
                    </section>
                    <section>
                        <h2 class="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                            6. Cookieの使用について
                        </h2>
                        <p class="text-gray-700 leading-relaxed mb-4">
                            当サイトでは、ユーザーの利便性向上のためにCookieを使用することがあります。Cookieの使用を望まない場合は、ブラウザの設定でCookieを無効にすることができます。
                        </p>
                    </section>
                    <section>
                        <h2 class="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                            7. 情報の開示・訂正・削除
                        </h2>
                        <p class="text-gray-700 leading-relaxed mb-4">
                            当サイトが保有する個人情報について、ユーザーから開示、訂正、削除の要望があった場合、本人確認の上で速やかに対応いたします。
                        </p>
                    </section>
                    <section>
                        <h2 class="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                            8. セキュリティ対策
                        </h2>
                        <p class="text-gray-700 leading-relaxed mb-4">
                            当サイトでは、個人情報の漏洩、滅失、き損を防ぐため、適切なセキュリティ対策を実施しています。
                        </p>
                    </section>
                    <section>
                        <h2 class="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                            9. プライバシーポリシーの変更
                        </h2>
                        <p class="text-gray-700 leading-relaxed mb-4">
                            当サイトは、必要に応じて本プライバシーポリシーを変更することがあります。変更した場合は、当ページにて告知いたします。
                        </p>
                    </section>
                    <section>
                        <h2 class="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                            10. お問い合わせ先
                        </h2>
                        <p class="text-gray-700 leading-relaxed mb-4">
                            本プライバシーポリシーに関するお問い合わせは、お問い合わせフォームよりご連絡ください。
                        </p>
                    </section>
                </div>

                <div class="mt-12 text-sm text-gray-600 border-t pt-4">
                    最終更新日：2025年2月8日
                </div>
            </div>
        </div>
    </div>


    </SeihoTestLayout>
</template>
