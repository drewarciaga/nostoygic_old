<script setup>
import BreezeAddEdit from '@/Pages/Items/AddEdit.vue';
import BreezeAuthenticatedLayout from '@/Layouts/Authenticated.vue';
import BreezeButton from '@/Components/Button.vue';

import { Head, Link } from '@inertiajs/inertia-vue3';
import { ref, onMounted, defineAsyncComponent } from 'vue'

const isLoading = ref(false)

const BreezeDataTable = defineAsyncComponent(()=>
    import('@/Components/DataTable.vue')
)

onMounted(async () => {
    isLoading.value = true

    await new Promise(r=>setTimeout(r,2000))
    //get all items function here


    isLoading.value = false
});



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
            <BreezeDataTable :columns="columns" :modelData="items" :isLoading="isLoading"></BreezeDataTable>
        </div>
    </BreezeAuthenticatedLayout>
</template>
<script>
export default {
    mounted() {
        this.getAllItems()
    },
    data(){
        return {
            loaded: false,
            editBrandId: '',
            errors: [],
            loaded: false,
            items: [],
            itemsPerPageOptions: [5, 10 ,15],
            itemsPerPage: 10,
            search: '',
        }
    },
    methods: {
        getAllItems(){
            this.loaded = false

            axios.get('/items/getAll').then(response => {
                console.log(response.data)
                this.items = response.data
         
                this.loaded = true
            })
        },
    }
}
</script>