<script setup lang="ts">

  interface Props {
    title: string
    description: string
  }
  const props = defineProps<Props>()

</script>
<template>
    <div class="max-w-4xl mx-auto bg-purple-200 p-6 rounded-lg shadow-lg">
        <h1 class="text-2xl font-bold mb-2">{{ props.title }}</h1>
        <p class="text-gray-600">{{ props.description }}</p>
    </div>
</template>


