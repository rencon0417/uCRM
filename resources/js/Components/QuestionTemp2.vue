<template>
    <div  v-for="(content, index) in props.contents" :key="index"
          class="bg-white px-6 py-3 border border-gray-300 rounded-lg shadow-md">
        <h2 class="text-base font-semibold mb-4">
            問題{{ index + questionNumber }}：{{ questionTitle[index] }}
        </h2>
      <div class="grid gap-2">
        <div class="grid gap-2 text-gray-700 select-none grid-cols-[2em_1fr]" >
          <span class="font-semibold">{{ props.labels[index] }}：</span>
          <p v-html="content"></p>
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
    questionNumber: number
    questionTitle: string[]
    contents: string[]
    labels: string[]
    title: string[]
    subject: string[]
  }

  const props = defineProps<Props>()

  </script>
