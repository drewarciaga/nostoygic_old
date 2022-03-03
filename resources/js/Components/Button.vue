<script setup>
defineProps({
    type: {
        type: String,
        default: 'submit',
    },
});
</script>

<template>
    <button :type="type" class="inline-flex items-center px-4 py-2 bg-nos-pink-900 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-nos-pink-1000 active:bg-pink-400 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray transition ease-in-out duration-25">
        <slot />
    </button>
</template>
