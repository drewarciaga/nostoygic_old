<script setup>
import { computed } from 'vue';

const emit = defineEmits(['update:checked']);

const props = defineProps({
    checked: {
        type: [Array, Boolean],
        default: false,
    },
    value: {
        default: null,
    },
    color: {
        type: String,
        default: 'primary',
    },
});

const proxyChecked = computed({
    get() {
        return props.checked;
    },

    set(val) {
        emit("update:checked", val);
    },
});
</script>

<template>
    <input v-if="color=='primary'" type="checkbox" :value="value" v-model="proxyChecked"
           class="rounded border-gray-300 text-nos-600 shadow-sm focus:border-nos-300 focus:ring focus:ring-nos-200 focus:ring-opacity-50">
    <input v-if="color=='secondary'" type="checkbox" :value="value" v-model="proxyChecked"
           class="secondary-checkbox rounded border-gray-300 bg-white focus:border-gray-300 focus:ring focus:ring-gray-300 focus:ring-opacity-50">
</template>
<style scoped>
.secondary-checkbox{
    color:#800b41 !important;
}
</style>