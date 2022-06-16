<template>
<div class="flex flex-wrap overflow-hidden sm:-mx-2 md:-mx-2 lg:-mx-3 xl:-mx-2">
    <div class="w-full overflow-hidden sm:my-2 sm:px-2 sm:w-1/3 md:my-2 md:px-2 md:w-1/3 lg:my-3 lg:px-3 lg:w-1/4 xl:my-2 xl:px-2 xl:w-1/4"
        v-for="metric in metrics" :key="metric.name"
    >
        <div class="bg-gray-900 border border-gray-800 shadow-gray-200 rounded-xl p-4">
            <div class="flex flex-row items-center">
                <div class="flex-shrink pr-4">
                    <div class="inline-flex flex-shrink-0 justify-center items-center w-12 h-12 text-white bg-gradient-to-br from-nos-pink-900 to-purple-700 rounded-lg shadow-md">
                        <i class="text-lg" :class="[metric.icon]" aria-hidden="true"></i>
                    </div>
                </div>
                <div class="flex-1 text-right md:text-center">
                    <h5 class="text-sm font-bold uppercase text-gray-400">{{metric.name}}</h5>
                    <h3 class="text-2xl font-bold text-gray-600">{{metric.value}}</h3>
                </div>
            </div>
        </div>
    </div>



</div>
</template>
<script>
export default {
    props: ['metrics'],
}
</script>