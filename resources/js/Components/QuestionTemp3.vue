<template>
    <div class="bg-white p-6 border border-gray-300 rounded-lg shadow-md">
      <h2 class="text-lg font-semibold mb-4">
        問題{{ getQuestionRange(props.questionNumber) }}
      </h2>
      <div class="grid gap-2">
        <div v-for="(content, index) in props.contents" :key="index"
             class="grid gap-2 text-gray-700 select-none grid-cols-[2em_1fr]">
          <span class="font-semibold">{{ props.labels[index] }}：</span>
          <p>{{ content }}</p>
        </div>
      </div>
      <div class="flex justify-end text-gray-500 text-xs">
        {{ props.subject }}
      </div>
    </div>
</template>

<script setup lang="ts">

    interface Props {
        questionNumber: number
        contents: string[]
        labels: string[]
        subject: string[]
    }

    const props = defineProps<Props>()

    function getQuestionRange(questionNumber) {
        switch (questionNumber) {
            case 1:
                return "1〜5";
            case 2:
                return "6〜10";
            case 3:
                return "11〜15";
            default:
                return "16〜20";
        }
    }

</script>
