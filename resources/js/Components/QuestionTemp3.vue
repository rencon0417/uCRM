<template>
    <div class="bg-white px-6 py-3 border border-gray-300 rounded-lg shadow-md">

        <!-- 問題番号 -->
        <div class="flex items-center gap-2 my-4">
            <div class="w-1.5 h-6 bg-gradient-to-b from-purple-400 to-blue-400 rounded-full"></div>
            <h2 class="text-base font-bold text-gray-800">
                問題{{ getQuestionRange(props.questionNumber) }}
            </h2>
        </div>

      <div class="grid gap-2">
        <div v-for="(content, index) in props.contents" :key="index"
             class="grid gap-2 text-gray-700 select-none grid-cols-[2em_1fr]">
          <span class="font-semibold">{{ props.labels[index] }}：</span>
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

    interface Props {
        questionNumber: number
        questionTitle: string
        contents: string[]
        labels: string[]
        title: string[]
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
