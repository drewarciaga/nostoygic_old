<script setup>
defineProps({
    type: {
        type: String,
        default: 'submit',
    },
    color: {
        type: String,
        default: 'primary',
    },
});
</script>

<template>
    <button v-if="color=='primary'" :type="type" class="inline-flex items-center px-4 py-2 bg-nos-pink-1000 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-nos-pink-1000 active:bg-pink-400 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray transition ease-in-out duration-25">
        <slot />
    </button>
    <button v-else-if="color=='secondary'" :type="type" class="inline-flex items-center px-4 py-2 bg-nos-turtoise-900 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-nos-turtoise-1000 active:bg-turtoise-400 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray transition ease-in-out duration-25">
        <slot />
    </button>
</template>
