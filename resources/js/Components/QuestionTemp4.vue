<template>
    <div  v-for="(content, index) in props.contents"
        :key="index"
        class="bg-white px-2 sm:px-4 md:px-6 py-3 border border-gray-300 rounded-lg shadow-md">
        <!-- h2 -->
        <h2 class="text-sm sm:text-base md:text-lg font-semibold mb-4">
            問題{{ index + questionNumber }}
        </h2>
        <div class="grid gap-2">
            <div class="grid gap-2 text-gray-700 select-none grid-cols-[2em_1fr]" >
                <span class="font-semibold text-sm sm:text-base">
                {{ props.labels[index] }}：
                </span>
                <p v-html="content" class="text-sm sm:text-base"></p>
            </div>
        </div>
        <!-- title / subject -->
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
    contents: string[]
    labels: string[]
    title: string[]
    subject: string[]
  }

  const props = defineProps<Props>()

  </script>
