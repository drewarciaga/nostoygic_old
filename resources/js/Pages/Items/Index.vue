<script setup>
import BreezeAuthenticatedLayout from '@/Layouts/Authenticated.vue';
import BreezeButton from '@/Components/Button.vue';
import BreezeDataTable from '@/Components/DataTable.vue';
import BreezeMetric from '@/Components/Metric.vue';
import BreezeSearch from '@/Components/Search.vue';
import { Head, Link } from '@inertiajs/inertia-vue3';
import { ref, reactive, onMounted, defineAsyncComponent } from 'vue'
import useItem from '../../Composables/Item/useItem.js'
import useToast from '../../Composables/useToast.js'

const BreezeViewItem = defineAsyncComponent(()=>
    import('@/Components/ViewItem.vue')
)

const BreezeConfirmDialog = defineAsyncComponent(()=>
    import('@/Components/ConfirmDialog.vue')
)

const { toast } = useToast()
const { item, items, totalItems, columns, errors,
        resetFields, getAllItems, getItem, deleteItem,
      } = useItem()
const action         = ref('')
const isLoading      = ref(false)
const isLoadingView  = ref(false)
const metrics        = ref([])
const viewModelRef   = ref()
const deletemodelRef = ref()
const currentSearch  = ref('')
const model_id       = ref()

const metric = reactive({
    name: '',
    value: '',
})

onMounted(async () => {
    isLoading.value = true

    await getAllItems(1,5,'name','asc','')
    metric.name = 'Items'
    metric.value = totalItems
    metric.icon = 'mdi mdi-package-variant'
    metrics.value.push(metric)

    isLoading.value = false
});

async function onPageChange(page, perPage, sortField, sortOrder, search){
    isLoading.value = true
    await getAllItems(page,perPage,sortField,sortOrder,currentSearch.value)
    isLoading.value = false
}

async function onSort(page, perPage, sortField, sortOrder, search){
    isLoading.value = true
    await getAllItems(page,perPage,sortField,sortOrder,currentSearch.value)
    isLoading.value = false
}

function changeAction(selectedAction){
    action.value = selectedAction
    errors.value = []
    resetFields()
}

async function viewModel(id){
    changeAction('View')
    isLoadingView.value = true
    await getItem(id)
    viewModelRef.value.showViewModel()
    isLoadingView.value = false
}



async function showDeleteModel(id){
    model_id.value = id
    deletemodelRef.value.showConfirmDialog()
}

async function closeConfirmDialog(){
    model_id.value = ''
    deletemodelRef.value.hideConfirmDialog()
}

async function deleteModel(){
    changeAction('Delete')
    isLoadingView.value = true
    await deleteItem(model_id.value)
    model_id.value = ''
    deletemodelRef.value.hideConfirmDialog()
    if(errors.value.length > 0){
        toast(action.value + ' Item Failed! : ' + errors.value, 'danger', 5000 )
    }else{
        toast(action.value + ' Item Successful!', 'success')
        await getAllItems()
    }
    isLoadingView.value = false
}

async function searchTable(search_input){
    if(search_input.value.toString().trim != ''){
        currentSearch.value = search_input.value
        await getAllItems(1,5,'name','asc',search_input.value)
    }else{
        await getAllItems(1,5,'name','asc','')
    }
}
</script>

<template>
    <Head title="Items" />

    <BreezeAuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Items
            </h2>
        </template>

        <BreezeMetric :metrics="metrics"></BreezeMetric>
           
        <div class="flex flex-wrap -mx-1 overflow-hidden sm:-mx-1 md:-mx-1 lg:-mx-1 xl:-mx-1">

            <div class="my-1 px-1 w-full overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-1 md:px-1 md:w-1/2 lg:my-1 lg:px-1 lg:w-1/2 xl:my-1 xl:px-1 xl:w-1/2">
                <Link :href="route('items.create')">
                    <BreezeButton :type="'button'">
                        <span class="mdi mdi-plus-circle"> Add Item</span> 
                    </BreezeButton>
                </Link>
            </div>

            <div class="my-1 px-1 w-full overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-1 md:px-1 md:w-1/2 lg:my-1 lg:px-1 lg:w-1/2 xl:my-1 xl:px-1 xl:w-1/2">
                <div class="sm:float-none md:float-right lg:float-right">
                    <BreezeSearch @search="searchTable" :currentSearch="currentSearch"></BreezeSearch>
                </div>
            </div>
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
                @viewModel="viewModel"
                @deleteModel="showDeleteModel"
                :routeName="'items'"
            >
            </BreezeDataTable>
        </div>
    </BreezeAuthenticatedLayout>
    <BreezeViewItem :model="'Item'" :isLoading="isLoadingView" :modelData="item" ref="viewModelRef"></BreezeViewItem>
    <BreezeConfirmDialog title="Delete Item" content="Are you sure you want to delete Item?" ref="deletemodelRef">
        <BreezeButton :type="'button'" @click="closeConfirmDialog" class="mx-1">
            Cancel
        </BreezeButton>
        <BreezeButton :type="'button'" @click="deleteModel" class="mx-1" color="danger">
            Delete
        </BreezeButton>
    </BreezeConfirmDialog>
</template>