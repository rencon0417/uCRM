<template>
    <div  v-for="(content, index) in props.contents"
        :key="index"
        class="bg-white px-6 py-3 border border-gray-300 rounded-lg shadow-md">

        <!-- 問題番号 -->
        <div class="flex items-center gap-2 my-4">
            <div class="w-1.5 h-6 bg-gradient-to-b from-purple-400 to-blue-400 rounded-full"></div>
            <h2 class="text-base font-bold text-gray-800">
                問{{ index + props.questionNumber }}
            </h2>
        </div>

          <!-- 回答 -->
        <div class="grid gap-2 text-gray-700 select-none grid-cols-[2em_1fr]">
            <span class="font-semibold text-base">
            {{ props.labels[index] }}：
            </span>
            <p class="text-base" v-html="content.answer"></p>
        </div>
        <!-- 解説 -->
        <div class="my-4 p-4 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-md">
        <div
            class="text-sm sm:text-base leading-relaxed text-gray-800 overflow-x-auto whitespace-nowrap"
            v-html="content.explanation">
        </div>
        </div>

        <!-- タイトルと科目 -->
        <div class="flex justify-end text-gray-400 text-xxs lg:text-xs">
            {{ props.title }}
        </div>
        <div class="flex justify-end text-gray-400 text-xxs lg:text-xs">
            {{ props.subject }}
        </div>
    </div>
</template>

  <script setup lang="ts">

  interface Props {
    questionNumber: number
    contents: { title: string; answer: string; explanation: string }[]
    labels: string[]
    title: string[]
    subject: string[]
  }

  const props = defineProps<Props>()

  </script>
