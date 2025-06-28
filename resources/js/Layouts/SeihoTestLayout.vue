<script setup>
import { Head, Link} from '@inertiajs/vue3';
import { reactive, onMounted, ref, computed } from 'vue'
import { Inertia } from '@inertiajs/inertia';

const openGoogleForm = () => {
  const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSdYvdwHrldz56rBizNEgfUx9o5e9WdME_OwXpdjyv7oWlW3mQ/viewform?usp=header'; // ここに取得したURLを入力
  window.open(googleFormUrl, '_blank'); // 新しいタブで開く
};

const isMenuOpen = ref(false)

// メニュー閉じたら全て閉じる
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  if (!isMenuOpen.value) openSubjects.value.clear()
}

const openSubjects = ref(new Set())

const toggleSubject = (key) => {
  if (openSubjects.value.has(key)) {
    openSubjects.value.delete(key)
  } else {
    openSubjects.value.add(key)
  }
}

const subjects = [
  {
    name: '生命保険総論',
    key: 'souron',
    tests: {
      '2024年度': ['a', 'b', 'c'],
      '2023年度': ['a', 'b', 'c'],
      '2022年度': ['a', 'b', 'c'],
      '2021年度': ['a', 'b', 'c'],
    },
  },
  {
    name: '生命保険計理',
    key: 'keiri',
    tests: {
      '2024年度': ['a', 'b', 'c'],
      '2023年度': ['a', 'b', 'c'],
      '2022年度': ['a', 'b', 'c'],
      '2021年度': ['a', 'b', 'c'],
    },
  },
  {
    name: '危険選択',
    key: 'kiken',
    tests: {
      '2023年度': ['a', 'b', 'c'],
      '2022年度': ['a', 'b', 'c'],
      '2021年度': ['a', 'b', 'c'],
    },
  },
  {
    name: '約款と法律',
    key: 'yakkan',
    tests: {
      '2023年度': ['a', 'b', 'c'],
      '2022年度': ['a', 'b', 'c'],
      '2021年度': ['a', 'b', 'c'],
    },
  },
  {
    name: '生命保険会計',
    key: 'kaikei',
    tests: {
      '2023年度': ['a', 'b', 'c'],
      '2022年度': ['a', 'b', 'c'],
      '2021年度': ['a', 'b', 'c'],
    },
  },
  {
    name: '生命保険商品と営業',
    key: 'eigyo',
    tests: {
      '2023年度': ['a', 'b', 'c'],
      '2022年度': ['a', 'b', 'c'],
      '2021年度': ['a', 'b', 'c'],
    },
  },
  {
    name: '生命保険と税法',
    key: 'zeihou',
    tests: {
      '2023年度': ['a', 'b', 'c'],
      '2022年度': ['a', 'b', 'c'],
      '2021年度': ['a', 'b', 'c'],
    },
  },
  {
    name: '資産運用',
    key: 'sisan',
    tests: {
      '2023年度': ['a', 'b', 'c'],
      '2022年度': ['a', 'b', 'c'],
      '2021年度': ['a', 'b', 'c'],
    },
  },
]

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
            <div class="container mx-auto flex justify-between items-center px-8 md:px-14 lg:px-24 w-full ">
                <div class="text-xl font-extrabold flex justify-between items-center">
                    <div class="px-2">
                        <img src="/images/rencon3.png" alt="生保講座 過去問解説 ロゴ" class="w-10 h-10" />
                    </div>
                    <Link :href="route('tests.index')">生保講座過去問解説</Link>
                </div>
                <!-- モバイル用ハンバーガー -->
                <button @click="toggleMenu" class="md:hidden">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2"
                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                </button>
            </div>
        </header>

        <slot />

        <!-- サイドメニュー -->

        <transition name="fade">
            <div v-if="isMenuOpen" class="fixed inset-0 z-40 bg-black bg-opacity-50" @click="toggleMenu">
            <aside class="fixed top-0 right-0 w-56 h-full bg-gray-900 shadow-xl z-50 overflow-y-auto" @click.stop>

                <!-- ヘッダー -->
                <div class="bg-gray-800 text-white text-center text-lg font-bold py-3 relative">
                サイトメニュー
                <div class="absolute bottom-0 left-0 w-full h-1 bg-purple-500"></div>
                </div>

                <!-- メニュー本体 -->
                <div class="px-4 pt-4 text-sm text-white">

                    <div v-for="subject in subjects" :key="subject.key">
                        <button
                            @click="toggleSubject(subject.key)"
                            class="w-full flex justify-between items-center font-semibold text-gray-300 py-2 hover:text-white"
                        >
                            <span>{{ subject.name }}</span>
                            <span class="text-xs text-gray-400">
                                {{ openSubjects.has(subject.key) ? '▼' : '▶' }}
                            </span>
                        </button>

                        <!-- 年度ごとの試験 -->
                        <div v-if="openSubjects.has(subject.key)" class="pl-2 space-y-2 text-sm mt-1">
                        <div v-for="(forms, yearLabel) in subject.tests" :key="yearLabel">
                            <!-- ✅ 年度を白・太字・標準サイズに変更 -->
                            <div class="text-white font-bold px-3 pt-2 pb-1">
                            {{ yearLabel }}
                            </div>

                            <!-- ✅ 区切り線をなくし、リストをシンプルに -->
                            <ul class="space-y-1">
                            <li v-for="form in forms" :key="form">
                                <Link
                                :href="route(`${subject.key}${yearLabel.replace('年度', '')}${form}`)"
                                class="flex justify-between items-center px-3 py-1 hover:bg-gray-800 transition"
                                >
                                フォーム{{ form.toUpperCase() }}
                                <span class="text-gray-500 text-sm">＞</span>
                                </Link>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                </div>

                <!-- 閉じるボタン -->
                <div class="mt-6 px-4">
                <button class="w-full text-sm text-gray-400 hover:text-red-400" @click="toggleMenu">
                    × 閉じる
                </button>
                </div>
            </aside>
            </div>
        </transition>





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

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
