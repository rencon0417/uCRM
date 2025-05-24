<script setup lang="ts">
interface Props {
  title: string
  description: string
}
const props = defineProps<Props>()
</script>

<template>
  <div class="max-w-4xl mx-auto bg-gradient-to-r from-purple-50 via-white to-purple-50 p-8 rounded-xl shadow-md relative overflow-hidden">
    <!-- 装飾丸 -->
    <div class="absolute top-0 right-0 w-24 h-24 bg-purple-100 rounded-full opacity-30 -mt-12 -mr-12"></div>
    <div class="absolute bottom-0 left-0 w-16 h-16 bg-blue-100 rounded-full opacity-20 -mb-8 -ml-8"></div>

    <div class="relative z-10">
      <div class="flex items-center gap-3 mb-3">
        <div class="w-1.5 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
        <h1 class="text-3xl font-extrabold text-gray-800 leading-tight">{{ props.title }}</h1>
      </div>
      <p class="text-gray-600 text-base mt-2">{{ props.description }}</p>
    </div>
  </div>
</template>
