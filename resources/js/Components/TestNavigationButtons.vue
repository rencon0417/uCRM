<script setup>
import { Link } from '@inertiajs/vue3';

const props = defineProps({
  previousRoute: {
    type: String,
    default: null
  },
  nextRoute: {
    type: String,
    default: null
  },
  homeRoute: {
    type: String,
    default: 'tests.index'
  }
});
</script>

<template>
  <div class="flex flex-col items-center mt-10 gap-6">
    <!-- 前の試験・次の試験ボタン -->
    <div v-if="previousRoute || nextRoute" class="flex justify-center gap-10">
      <Link
        v-if="previousRoute"
        :href="route(previousRoute)"
        class="w-40 h-12 flex items-center justify-center bg-gradient-to-r from-purple-400 to-blue-400 hover:from-purple-500 hover:to-blue-500 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
      >
        前の試験へ
      </Link>

      <Link
        v-if="nextRoute"
        :href="route(nextRoute)"
        class="w-40 h-12 flex items-center justify-center bg-gradient-to-r from-purple-400 to-blue-400 hover:from-purple-500 hover:to-blue-500 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
      >
        次の試験へ
      </Link>
    </div>

    <!-- 一覧画面に戻るボタン -->
    <Link
      :href="route(homeRoute)"
      class="w-40 h-12 flex items-center justify-center bg-gradient-to-r from-purple-400 to-blue-400 hover:from-purple-500 hover:to-blue-500 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
    >
      一覧画面に戻る
    </Link>
  </div>
</template>
