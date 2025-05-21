<template>
    <div class="bg-white px-6 py-3 border border-gray-300 rounded-lg shadow-md">
        <h2 class="text-base font-semibold mb-4">
            問題{{ props.questionNumber }}
        </h2>
      <div class="grid gap-2">
        <div v-for="(content, index) in props.contents" :key="index"
             class="grid gap-2 text-gray-700 select-none grid-cols-[2em_1fr]">
          <span class="font-semibold">{{ getLabel(index) }}：</span>
          <p>{{ content }}</p>
        </div>
      </div>
      <div class="flex justify-end text-gray-400 text-xxs lg:text-xs">
        {{ props.title }}
      </div>
      <div class="flex justify-end text-gray-400 text-xxs lg:text-xs">
        {{ props.subject }}
      </div>
    </div>
  </template>

  <script setup lang="ts">
  import { ref, computed } from 'vue'

  interface Props {
    questionNumber: number | string
    questionTitle: string
    contents: string[]
    title: string[]
    subject: string[]
  }

  const props = defineProps<Props>()
  const labels = ref(['ア', 'イ', 'ウ'])

  const getLabel = (index: number): string => {
        return labels.value[index]; // その他の場合はlabelsを使用
  }
  </script>
