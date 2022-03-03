<script setup>
defineProps({
    type: {
        type: String,
        default: 'submit',
    },
    link: {
        default: '#',
    },
});
</script>

<template>
    <button class="bg-transparent hover:bg-slate-300 text-white hover:text-gray py-2 px-4 border border-white-500 hover:border-transparent rounded ease-in-out duration-25">
        <slot />
    </button>
</template>