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
            <span class="font-semibold text-sm sm:text-base">
            {{ props.labels[index] }}：
            </span>
            <p class="text-sm sm:text-base" v-html="content.answer"></p>
        </div>
<!-- 解説 -->
<div class="my-4 p-4 bg-gray-50 rounded-md border border-gray-200 space-y-2 text-base">
  <p class="font-semibold text-gray-600">【解説】</p>
  <div v-html="content.explanation" class="text-gray-700 leading-relaxed"></div>
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
