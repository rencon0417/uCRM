<template>
    <div  v-for="(content, index) in props.contents"
        :key="index"
        class="bg-white px-2 sm:px-6 md:px-6 py-3 border border-gray-300 rounded-lg shadow-md">
        <!-- 問題番号 -->
        <h2 class="text-lg font-semibold mb-4">
            問題{{ index + questionNumber }}
        </h2>
          <!-- 回答 -->
        <div class="grid gap-2 text-gray-700 select-none grid-cols-[2em_1fr]">
            <span class="font-semibold text-sm sm:text-base">
            {{ props.labels[index] }}：
            </span>
            <p class="text-sm sm:text-base" v-html="content.answer"></p>
        </div>
        <!-- 解説 -->
        <p class="text-sm sm:text-base text-gray-700 select-none" v-html="content.explanation"></p>

        <!-- タイトルと科目 -->
        <div class="flex justify-end text-xs sm:text-sm text-gray-400">
            {{ props.title }}
        </div>
        <div class="flex justify-end text-xs sm:text-sm text-gray-400">
            {{ props.subject }}
        </div>
    </div>
</template>

  <script setup lang="ts">
  import { ref, computed } from 'vue'

  interface Props {
    questionNumber: number
    contents: { answer: string; explanation: string }[]
    labels: string[]
    title: string[]
    subject: string[]
  }

  const props = defineProps<Props>()

  </script>
