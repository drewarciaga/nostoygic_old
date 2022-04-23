<script setup>
import BreezeAuthenticatedLayout from '@/Layouts/Authenticated.vue';

import BreezeButton from '@/Components/Button.vue';
import { Head, Link } from '@inertiajs/inertia-vue3';
import { defineAsyncComponent, ref } from 'vue'

const BreezeItemBrand = defineAsyncComponent(()=>
    import('@/Pages/Items/ItemBrand.vue')
)

const activeTab = ref('types')
</script>

<template>
    <Head title="Items" />

    <BreezeAuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Item Settings
            </h2>
        </template>

        <div class="px-2 text-right">
            <Link :href="route('admin.index')">
                <BreezeButton :type="'button'">
                    <span class="mdi mdi-arrow-left-circle"> Back to Admin</span> 
                </BreezeButton>
            </Link>
        </div>

        <section class="p-2">
            <o-tabs type="toggle" v-model="activeTab">
                <o-tab-item label="Types" :value="'types'">
                    aaasdadssdWhat light is light, if Silvia be not seen? <br />
                    What joy is joy, if Silvia be not by— <br />
                    Unless it be to think that she is by <br />
                    And feed upon the shadow of perfection? <br />
                    Except I be by Silvia in the night, <br />
                    There is no music in the nightingale.
                </o-tab-item>
                <o-tab-item label="Brands" :value="'brands'">
                    <span  v-if="activeTab=='brands'">
                        <BreezeItemBrand></BreezeItemBrand>
                    </span>
                   
                </o-tab-item>

            </o-tabs>
        </section>
           

    </BreezeAuthenticatedLayout>
</template>
