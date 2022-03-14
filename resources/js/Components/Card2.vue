<template>
<div class="justify-center">
    <div class="block p-6 rounded-lg shadow-lg bg-dark w-full lazy bg-cover" :data-original="bg" :class="[bgColor, textColor]">
        <div class=" sm:w-full lg:w-1/2">
            <h5 class="text-xl leading-tight font-medium mb-2">{{ caption }}</h5>
            <p class="text-base mb-4">
            {{ message }}
            </p>
            <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
        </div>
        <div class=" sm:w-full lg:w-1/2">

        </div>
    </div>
</div>
</template>

<script>
export default {
	props: ['bg', 'caption', 'message', 'message2', 'textColor', 'paddingY', 'bgColor'],
};
</script>