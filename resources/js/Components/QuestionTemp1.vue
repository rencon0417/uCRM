<template>
    <div class="bg-white p-6 border border-gray-300 rounded-lg shadow-md">
      <h2 class="text-lg font-semibold mb-4">問題{{ props.questionNumber }}</h2>
      <div class="grid gap-2">
        <div v-for="(content, index) in props.contents" :key="index"
             class="grid gap-2 text-gray-700 select-none"
             :class="gridColsClass">
          <span class="font-semibold">{{ getLabel(index) }}：</span>
          <p>{{ content }}</p>
        </div>
      </div>
    </div>
  </template>

  <script setup lang="ts">
  import { ref, computed } from 'vue'

  interface Props {
    questionNumber: number | string
    contents: string[]
    labelin: string
  }

  const props = defineProps<Props>()
  const labels = ref(['ア', 'イ', 'ウ'])

  const getLabel = (index: number): string => {
    const qNum = Number(props.questionNumber)

    if ((qNum >= 1 && qNum <= 20) || (qNum >= 41 && qNum <= 50)) {
        return props.labelin; // questionNumberが1〜20または41〜50の場合はlabelinを返す
    } else if (qNum >= 30 && qNum < 40) {
        return '解'; // questionNumberが30〜40の場合は'解'を返す
    } else {
        return labels.value[index]; // その他の場合はlabelsを使用
    }
 }

  const gridColsClass = computed(() => {
    return props.contents.length === 1
      ? 'grid-cols-[2em_1fr]'  // 解説の場合は幅を広げる
      : 'grid-cols-[2em_1fr]'  // ア、イ、ウの場合は元のまま
  })
  </script>
