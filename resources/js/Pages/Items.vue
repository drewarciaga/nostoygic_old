<script setup>
import BreezeAddEdit from '@/Pages/Items/AddEdit.vue';
import BreezeAuthenticatedLayout from '@/Layouts/Authenticated.vue';
import BreezeButton from '@/Components/Button.vue';
import { Head, Link } from '@inertiajs/inertia-vue3';
</script>

<template>
    <Head title="Items" />

    <BreezeAuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Items
            </h2>
        </template>

        <div class="py-4 text-right lg:text-left">
            <Link :href="route('items.create')">
                <BreezeButton :type="'button'">
                    <span class="mdi mdi-plus-circle"> Add Item</span> 
                </BreezeButton>
            </Link>
        </div>
        
        <!--<div class="py-12">
            <div class="mx-auto">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-6 bg-white border-b border-gray-200">
                        You're logged in!
                    </div>
                </div>
            </div>
        </div>-->
    </BreezeAuthenticatedLayout>
</template>
