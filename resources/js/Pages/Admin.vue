<script setup>
import BreezeAuthenticatedLayout from '@/Layouts/Authenticated.vue';
import BreezeGrid from '@/Components/Grid.vue';
import { Head } from '@inertiajs/inertia-vue3';
</script>

<template>
    <Head title="Admin" />

    <BreezeAuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Admin
            </h2>
        </template>

        <div class="py-12">
            <div class="mx-auto">
                <div id="grid" class="row">
                    <BreezeGrid></BreezeGrid>
                </div>
            </div>
        </div>
    </BreezeAuthenticatedLayout>
</template>
