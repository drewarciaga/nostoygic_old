<script setup>
import BreezeAddEdit from '@/Pages/Items/AddEdit.vue';
import BreezeAuthenticatedLayout from '@/Layouts/Authenticated.vue';
import BreezeButton from '@/Components/Button.vue';

import { Head, Link } from '@inertiajs/inertia-vue3';
import { ref, onMounted, defineAsyncComponent } from 'vue'

const isLoading  = ref(false)
const items      = ref([])
const totalItems = ref(0)

const BreezeDataTable = defineAsyncComponent(()=>
    import('@/Components/DataTable.vue')
)

onMounted(async () => {
    isLoading.value = true

    //await new Promise(r=>setTimeout(r,2000))
    //get all items function here

    await loadAsyncData(1,5,'name','asc','')
    isLoading.value = false
});

async function onPageChange(page, perPage, sortField, sortOrder, search){
    isLoading.value = true
    await loadAsyncData(page,perPage,sortField,sortOrder,search)
    isLoading.value = false
}

async function onSort(page, perPage, sortField, sortOrder, search){
    isLoading.value = true
    await loadAsyncData(page,perPage,sortField,sortOrder,search)
    isLoading.value = false
}
/*function onSort(perPage){
    console.log('onSort');
    console.log(perPage);
}

function onPageChange(perPage){
    console.log('onPageChange');
    console.log(perPage);
}*/

async function loadAsyncData(page, perPage, sortField, sortOrder, search){
    await axios.get('/items/getAll',{
        params: {
            page:           page,
            itemsPerPage:   perPage,
            sortBy:         sortField,
            sortDesc:       sortOrder,
            search:         search,
        }
    }).then(response => {
        items.value      = response.data.data
        totalItems.value = response.data.total
    })
}

const columns = ref([
    {
        id:0,
        field: 'id',
        label: 'ID',
        width: '1',
        sortable: false
    },
    {
        id:1,
        field: 'name',
        label: 'Name',
        sortable: true
    },
    {
        id:2,
        field: 'last_name',
        label: 'Last Name',
        sortable: true
    },
    {
        id:3,
        field: 'date',
        label: 'Date',
        position: 'centered',
        sortable: false
    },
    {
        id:4,
        field: 'gender',
        label: 'Gender',
        sortable: false
    }
]);

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
        <div class="py-4">
            <BreezeDataTable
                :columns="columns"
                :modelData="items"
                :isLoading="isLoading"
                @onSort="onSort"
                @onPageChange="onPageChange"
                :total="totalItems"
                :parentSortField="'name'"
                :parentSortOrder="'ASC'"
            >
            </BreezeDataTable>
        </div>
    </BreezeAuthenticatedLayout>
</template>