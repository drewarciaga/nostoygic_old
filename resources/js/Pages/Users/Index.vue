<script setup>
import BreezeAuthenticatedLayout from '@/Layouts/Authenticated.vue';
import BreezeButton from '@/Components/Button.vue';
import BreezeDataTable from '@/Components/DataTable.vue';
import BreezeMetric from '@/Components/Metric.vue';
import BreezeSearch from '@/Components/Search.vue';
import { Head, Link } from '@inertiajs/inertia-vue3';
import { ref, reactive, onMounted, defineAsyncComponent } from 'vue'
import useUser from '../../Composables/User/useUser.js'
import useToast from '../../Composables/useToast.js'

const BreezeViewProfile = defineAsyncComponent(()=>
    import('@/Components/ViewProfile.vue')
)

const BreezeConfirmDialog = defineAsyncComponent(()=>
    import('@/Components/ConfirmDialog.vue')
)

const { toast } = useToast()
const { user, users, totalUsers, columns, errors,
        resetFields, getAllUsers, getUser, deleteUser
      } = useUser()
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

    await getAllUsers(1,5,'last_name','asc','')
    metric.name = 'Users'
    metric.value = totalUsers
    metric.icon = 'mdi mdi-account'
    metrics.value.push(metric)

    isLoading.value = false
});

async function onPageChange(page, perPage, sortField, sortOrder, search){
    isLoading.value = true
    await getAllUsers(page,perPage,sortField,sortOrder,currentSearch.value)
    isLoading.value = false
}

async function onSort(page, perPage, sortField, sortOrder, search){
    isLoading.value = true
    await getAllUsers(page,perPage,sortField,sortOrder,currentSearch.value)
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
    await getUser(id)
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
    await deleteUser(model_id.value)
    model_id.value = ''
    deletemodelRef.value.hideConfirmDialog()
    if(errors.value.length > 0){
        toast(action.value + ' User Failed! : ' + errors.value, 'danger', 5000 )
    }else{
        toast(action.value + ' User Successful!', 'success')
        await getAllUsers()
    }
    isLoadingView.value = false
}

async function searchTable(search_input){
    if(search_input.value.toString().trim != ''){
        currentSearch.value = search_input.value
        await getAllUsers(1,5,'last_name','asc',search_input.value)
    }else{
        await getAllUsers(1,5,'last_name','asc','')
    }
}
</script>

<template>
    <Head title="Users" />

    <BreezeAuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Users
            </h2>
        </template>

        <BreezeMetric :metrics="metrics"></BreezeMetric>
           
        <div class="flex flex-wrap -mx-1 overflow-hidden sm:-mx-1 md:-mx-1 lg:-mx-1 xl:-mx-1">

            <div class="my-1 px-1 w-full overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-1 md:px-1 md:w-1/2 lg:my-1 lg:px-1 lg:w-1/2 xl:my-1 xl:px-1 xl:w-1/2">
                <Link :href="route('users.create')">
                    <BreezeButton :type="'button'">
                        <span class="mdi mdi-plus-circle"> Add User</span> 
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
                :modelData="users"
                :isLoading="isLoading"
                @onSort="onSort"
                @onPageChange="onPageChange"
                :total="totalUsers"
                :parentSortField="'last_name'"
                :parentSortOrder="'ASC'"
                @viewModel="viewModel"
                @deleteModel="showDeleteModel"
                :routeName="'users'"
            >
            </BreezeDataTable>
        </div>
    </BreezeAuthenticatedLayout>
    <BreezeViewProfile :model="'User'" :isLoading="isLoadingView" :modelData="user" ref="viewModelRef"></BreezeViewProfile>
    <BreezeConfirmDialog title="Delete User" content="Are you sure you want to delete User?" ref="deletemodelRef">
        <BreezeButton :type="'button'" @click="closeConfirmDialog" class="mx-1">
            Cancel
        </BreezeButton>
        <BreezeButton :type="'button'" @click="deleteModel" class="mx-1" color="danger">
            Delete
        </BreezeButton>
    </BreezeConfirmDialog>
</template>