<template>
<div class="justify-center m-auto" style="max-width:720px;">
    <div class="block p-6 rounded-lg shadow-lg bg-black md:flex flex-wrap" :class="[bgColor, textColor]">
        <div class=" sm:w-full lg:w-1/2">
            <h5 class="text-xl leading-tight font-medium mb-2">{{ caption }}</h5>
            <p class="text-base mb-4">
            {{ message }}
            </p>
            <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
        </div>
        <div class=" sm:w-full lg:w-1/2">
            <div class="block lazy bg-contain bg-no-repeat h-full w-full card2-image" :data-original="bg"></div>
        </div>
    </div>
</div>
</template>

<script>
export default {
	props: ['bg', 'caption', 'message', 'message2', 'textColor', 'paddingY', 'bgColor'],
};
</script>
<style scoped>
.card2-image{
    background-position: right !important;
    background-color: black;
}
</style>