<script setup>
import { Head, Link} from '@inertiajs/vue3';
import { reactive, onMounted, ref, computed } from 'vue'
import { Inertia } from '@inertiajs/inertia';

const openGoogleForm = () => {
  const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSdYvdwHrldz56rBizNEgfUx9o5e9WdME_OwXpdjyv7oWlW3mQ/viewform?usp=header'; // ここに取得したURLを入力
  window.open(googleFormUrl, '_blank'); // 新しいタブで開く
};

defineProps({
  title: {
    type: String,
    required: true
  }
})

</script>

<template>
    <Head :title="title">
        <link rel="icon" href="/images/rencon3.png" />
    </Head>
    <div class="scroll-smooth">
        <!-- ナビゲーションバー -->
        <header class="py-6">
            <div class="container mx-auto flex justify-between items-center px-8 md:px-14 lg:px-24 w-full">
                <div class="text-xl font-bold flex justify-between items-center">
                    <div class="px-2">
                        <img src="/images/rencon3.png" alt="れんこん" class="w-10 h-10" />
                    </div>
                    <Link :href="route('tests.index')">生保講座過去問解説</Link>
                </div>
            </div>
        </header>

        <slot />

        <footer class="bg-white border-t border-gray-100 mt-12">
        <div class="container mx-auto px-6 py-10">
            <div class="flex flex-col md:flex-row md:justify-between md:items-center space-y-6 md:space-y-0">

        <!-- 左：ロゴとサイト名 -->
        <div class="flex items-center justify-center md:justify-start space-x-2 flex-nowrap">
        <img
            src="/images/rencon3.png"
            alt="れんこん"
            class="w-7 h-7 object-contain shrink-0"
        />
        <div class="flex flex-col text-left">
            <span class="text-sm font-semibold text-gray-800 whitespace-nowrap">
            生保講座過去問解説
            </span>
            <span class="text-[11px] text-gray-500 leading-tight mt-0.5">
                ※本サイトは非公式であり、試験問題の転載は行っていません。
            </span>
        </div>
        </div>

      <!-- 中央：リンク -->
      <nav class="flex justify-center space-x-4 text-sm text-gray-700">
        <button @click="openGoogleForm" class="hover:text-purple-600 transition-colors duration-200">
          お問い合わせ
        </button>
        <span class="text-gray-300">|</span>
        <Link :href="route('policy')" class="hover:text-purple-600 transition-colors duration-200">
          プライバシーポリシー
        </Link>
      </nav>

      <!-- 右：コピーライト -->
      <div class="text-sm text-gray-500 text-center md:text-right">
        © 2024–2025 生保講座過去問解説
      </div>
    </div>

    <!-- 下：免責文（左揃え） -->
    <div class="mt-8 px-4 text-[11px] text-gray-400 leading-relaxed text-left md:max-w-4xl md:mx-auto">
      当サイトは受験者の学習支援を目的としたものであり、生命保険協会等の公式機関とは一切関係ありません。<br>
      問題文等の転載は行っておらず、独自に作成した解説コンテンツを掲載しています。<br>
      内容の正確性・完全性は保証されませんのでご了承ください。
    </div>
  </div>
</footer>

    </div>
</template>