<template>
  <div
    v-for="(content, index) in props.contents"
    :key="index"
    class="bg-white px-6 py-5 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition duration-300 space-y-4"
  >
    <!-- 問題番号 -->
    <div class="flex items-center gap-2">
      <div class="w-1.5 h-6 bg-gradient-to-b from-purple-400 to-blue-400 rounded-full"></div>
      <h2 class="text-lg font-bold text-gray-800">
        問{{ index + props.questionNumber }}：{{ content.title }}
      </h2>
    </div>

    <!-- 回答：強調ボックス -->
    <div class="bg-purple-50 border-l-4 border-purple-300 p-4 rounded-md text-sm sm:text-base text-gray-800">
      <span class="font-semibold">{{ props.labels[index] }}：</span>
      <span class="ml-1" v-html="content.answer"></span>
    </div>

    <!-- 解説 -->
    <div class="prose prose-sm max-w-none text-gray-700" v-html="content.explanation"></div>

    <!-- タイトル・科目（フッター） -->
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
  title: string
  subject: string
}

const props = defineProps<Props>()
</script>
