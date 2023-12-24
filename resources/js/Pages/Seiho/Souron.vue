<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head} from '@inertiajs/vue3';

</script>

<template>
<Head title="生命保険総論" />
  <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                生命保険総論
            </h2>
        </template>



        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-6 text-gray-900">

                        <section class="text-gray-600 body-font">
                            <div class="container px-5 py-24 mx-auto">
                                <div class="flex flex-col text-center w-full mb-20">
                                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">生命保険総論</h1>
                                <p class="lg:w-2/3 mx-auto leading-relaxed text-base">生命保険の基本的な仕組みや歴史についての幅広い知識が問われる科目</p>
                                </div>


                                <div class="flex flex-wrap -m-2">

                                <!-- 2022年度 フォームA -->
                                <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                                    <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                    <div class="flex-grow">
                                        <h2 class="text-gray-900 title-font font-medium">2022年度 フォームA</h2>
                                    </div>
                                    </div>
                                </div>
                                <!-- 2022年度 フォームB -->
                                <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                                    <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                    <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80">
                                    <div class="flex-grow">
                                        <h2 class="text-gray-900 title-font font-medium">2022年度 フォームB</h2>
                                    </div>
                                    </div>
                                </div>
                                <!-- 2022年度 フォームC -->
                                <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                                    <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                    <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80">
                                    <div class="flex-grow">
                                        <h2 class="text-gray-900 title-font font-medium">2022年度 フォームC</h2>
                                    </div>
                                    </div>
                                </div>

                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>




 </AuthenticatedLayout>
</template>
