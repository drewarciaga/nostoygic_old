<script setup>
defineProps({
    isLoading: {
        type: Boolean,
        default: false,
    },
});
</script>
<template>
    <o-loading :full-page="true" :active.sync="isLoading" :can-cancel="false"></o-loading>
</template>