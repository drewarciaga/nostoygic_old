<script setup>
import BreezeAuthenticatedLayout from '@/Layouts/Authenticated.vue';

import BreezeButton from '@/Components/Button.vue';
import { Head, Link } from '@inertiajs/inertia-vue3';
import { defineAsyncComponent, ref } from 'vue'

const BreezeItemBrand = defineAsyncComponent(()=>
    import('@/SubPages/Items/ItemBrand.vue')
)
const BreezeItemGrade = defineAsyncComponent(()=>
    import('@/SubPages/Items/ItemGrade.vue')
)
const BreezeItemGroup = defineAsyncComponent(()=>
    import('@/SubPages/Items/ItemGroup.vue')
)
const BreezeItemLine = defineAsyncComponent(()=>
    import('@/SubPages/Items/ItemLine.vue')
)
const BreezeItemMaterial = defineAsyncComponent(()=>
    import('@/SubPages/Items/ItemMaterial.vue')
)
const BreezeItemScale = defineAsyncComponent(()=>
    import('@/SubPages/Items/ItemScale.vue')
)
const BreezeItemSeries = defineAsyncComponent(()=>
    import('@/SubPages/Items/ItemSeries.vue')
)
const BreezeItemType = defineAsyncComponent(()=>
    import('@/SubPages/Items/ItemType.vue')
)
const BreezeItemWave = defineAsyncComponent(()=>
    import('@/SubPages/Items/ItemWave.vue')
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
                    <span  v-if="activeTab=='types'">
                        <BreezeItemType></BreezeItemType>
                    </span>
                </o-tab-item>
                <o-tab-item label="Brands" :value="'brands'">
                    <span  v-if="activeTab=='brands'">
                        <BreezeItemBrand></BreezeItemBrand>
                    </span>
                </o-tab-item>
                <o-tab-item label="Lines" :value="'lines'">
                    <span  v-if="activeTab=='lines'">
                        <BreezeItemLine></BreezeItemLine>
                    </span>
                </o-tab-item>
                <o-tab-item label="Materials" :value="'materials'">
                    <span  v-if="activeTab=='materials'">
                        <BreezeItemMaterial></BreezeItemMaterial>
                    </span>
                </o-tab-item>
                <o-tab-item label="Scales" :value="'scales'">
                    <span  v-if="activeTab=='scales'">
                        <BreezeItemScale></BreezeItemScale>
                    </span>
                </o-tab-item>
                <o-tab-item label="Series" :value="'series'">
                    <span  v-if="activeTab=='series'">
                        <BreezeItemSeries></BreezeItemSeries>
                    </span>
                </o-tab-item>
                <o-tab-item label="Groups" :value="'groups'">
                    <span  v-if="activeTab=='groups'">
                        <BreezeItemGroup></BreezeItemGroup>
                    </span>
                </o-tab-item>
                <o-tab-item label="Grades" :value="'grades'">
                    <span  v-if="activeTab=='grades'">
                        <BreezeItemGrade></BreezeItemGrade>
                    </span>
                </o-tab-item>
                <o-tab-item label="Waves" :value="'waves'">
                    <span  v-if="activeTab=='waves'">
                        <BreezeItemWave></BreezeItemWave>
                    </span>
                </o-tab-item>
            </o-tabs>
        </section>
           

    </BreezeAuthenticatedLayout>
</template>
