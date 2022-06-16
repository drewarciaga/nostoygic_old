<!-- fix image min and max size-->
<template>
    <div class="flex flex-wrap -mx-2 overflow-hidden sm:-mx-2 md:-mx-2 lg:-mx-2 xl:-mx-2">

        <div class="my-2 px-2 w-full overflow-hidden sm:my-2 sm:px-2 sm:w-1/2 md:my-2 md:px-2 md:w-1/2 lg:my-2 lg:px-2 lg:w-1/2 xl:my-2 xl:px-2 xl:w-1/2">
            <img v-if="mainImg != null" :src="mainImg" alt="" width="1000" height="667" class="profile_img h-56 sm:h-full w-full object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl">
            <img v-else src="/images/no_image.jpg" alt="" width="1000" height="667" class="profile_img h-56 sm:h-full w-full object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl">
        </div>

        <div class="my-2 px-2 w-full overflow-hidden sm:my-2 sm:px-2 sm:w-1/2 md:my-2 md:px-2 md:w-1/2 lg:my-2 lg:px-2 lg:w-1/2 xl:my-2 xl:px-2 xl:w-1/2">
            <div class="w-full pl-0 p-5">
                <div class="space-y-2">
                    <div class="space-y-4">
                        <h4 class="text-2xl font-semibold text-nos-400">{{ name }}</h4>
                        <p class="text-nos-600">{{ description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
	
	export default {
		props: [ 'mainImg', 'textColor', 'name', 'description'],
	};

</script>
<style scoped>
.profile_img{
    max-height: 450px;
    object-fit: cover;
}
</style>