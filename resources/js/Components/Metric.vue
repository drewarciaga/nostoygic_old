<template>
<div class="flex flex-wrap overflow-hidden sm:-mx-2 md:-mx-2 lg:-mx-3 xl:-mx-2">
    <div class="w-full overflow-hidden sm:my-2 sm:px-2 sm:w-1/3 md:my-2 md:px-2 md:w-1/3 lg:my-3 lg:px-3 lg:w-1/4 xl:my-2 xl:px-2 xl:w-1/4"
        v-for="metric in metrics" :key="metric.id"
    >
        <div class="bg-gray-900 border border-gray-800 rounded shadow p-2">
            <div class="flex flex-row items-center">
                <div class="flex-shrink pr-4">
                    <div class="rounded p-3 bg-green-600"><i class="fa fa-wallet fa-2x fa-fw fa-inverse"></i></div>
                </div>
                <div class="flex-1 text-right md:text-center">
                    <h5 class="font-bold uppercase text-gray-400">{{metric.name}}</h5>
                    <h3 class="font-bold text-3xl text-gray-600">$3249 <span class="text-green-500"><i class="fas fa-caret-up"></i></span></h3>
                </div>
            </div>
        </div>
    </div>

</div>
</template>
<script>
export default {
    data() {
        return {
            metrics: [
                {
                    id: 1,
                    name: "X-Men",
                    value: "100",
                },
                {
                    id: 2,
                    name: "ML",
                    value: "200",
                },
            ],
        }
    }
}
</script>