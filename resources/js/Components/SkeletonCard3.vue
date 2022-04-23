<template>
    <div class="flex flex-wrap -mx-2 overflow-hidden sm:-mx-2 md:-mx-2 lg:-mx-2 xl:-mx-2">

        <div class="my-2 px-2 w-full overflow-hidden sm:my-2 sm:px-2 sm:w-1/2 md:my-2 md:px-2 md:w-1/2 lg:my-2 lg:px-2 lg:w-1/2 xl:my-2 xl:px-2 xl:w-1/2">
            <o-skeleton width="100%" :animated="true" style="height:200px;"></o-skeleton>
        </div>

        <div class="my-2 px-2 w-full overflow-hidden sm:my-2 sm:px-2 sm:w-1/2 md:my-2 md:px-2 md:w-1/2 lg:my-2 lg:px-2 lg:w-1/2 xl:my-2 xl:px-2 xl:w-1/2">
            <o-skeleton width="40%" :animated="true"></o-skeleton>
            <o-skeleton width="40%" :animated="true"></o-skeleton>
            <o-skeleton width="80%" :animated="true"></o-skeleton>
            <o-skeleton width="100%" :animated="true"></o-skeleton>
            <o-skeleton width="100%" :animated="true"></o-skeleton>
        </div>
    </div>
</template>
<style scoped>
.o-sklt{
    display: grid !important;
    height: 40px;
}
</style>