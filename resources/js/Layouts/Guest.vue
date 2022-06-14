<script setup>
import BreezeApplicationLogo from '@/Components/ApplicationLogo.vue';
import { Link } from '@inertiajs/inertia-vue3';

defineProps({
    type: {
        type: String,
        default: '',
    },
});
</script>

<template>
    <div class="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-nos-blue">
        <div>
            <Link href="/">
                <BreezeApplicationLogo class="w-20 h-20 fill-current text-gray-500" />
            </Link>
        </div>

        <div v-if="type=='register'" class="w-90pct sm:w-90pct lg:w-full sm:max-w-xl mt-6 px-6 py-4 bg-nos-900 shadow-4xl shadow-cyan-500/50 overflow-hidden sm:rounded-lg">
            <slot />
        </div>
        <div v-else class="w-90pct sm:w-90pct lg:w-full sm:max-w-md mt-6 px-6 py-4 bg-nos-900 shadow-4xl shadow-cyan-500/50 overflow-hidden sm:rounded-lg">
            <slot />
        </div>
    </div>
</template>