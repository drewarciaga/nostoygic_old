<script setup>
import BreezeAuthenticatedLayout from '@/Layouts/Authenticated.vue';
import BreezeButton from '@/Components/Button.vue';
import BreezeDataTable2 from '@/Components/DataTable2.vue';
import BreezeLoading from '@/Components/Loading.vue';
import BreezeMetric from '@/Components/Metric.vue';
import { Head, Link } from '@inertiajs/inertia-vue3';
import { ref, reactive, onMounted, defineAsyncComponent } from 'vue'
import { createToast } from 'mosha-vue-toastify';

const BreezeColorPicker = defineAsyncComponent(()=>
    import('@/Components/ColorPicker.vue')
)

const columns = ref([
    { id:0, field: 'id',   label: 'ID',     sortable: true, width: '1', },
    { id:1, field: 'name', label: 'Name',   sortable: true },
    { id:2, field: 'id',   label: 'Action', sortable: false },
]);

const toast = (message,type) => {
    createToast(message, {
        type: type,
        position: 'top-right',
        timeout: 2000,
        hideProgressBar: 'true',
        showIcon: 'true',
    })
}

const action = ref('')
const errors = ref([])
const isLoading = ref(false)

const brands      = ref([])
const totalBrands = ref(0)

const brand = reactive({
    name: '',
    brand_logo: null,
    description: '',
    tags: [],
    color: '',
    active: '1',
})

onMounted(async () => {
    isLoading.value = true

    await getAllBrands()

    isLoading.value = false
});

function changeAction(selectedAction){
    action.value = selectedAction
}

async function getAllBrands(){
    await axios.get('/brands/getAll').then(response => {
        brands.value      = response.data.data
        totalBrands.value = response.data.total
    })
}

async function saveForm(){
    errors.value = []
    isLoading.value = true

    let formData = new FormData();
    formData.append('name', brand.name);
    formData.append('description', brand.description);

    if(brand.brand_logo !=null){
        formData.append('brand_logo', brand.brand_logo, brand.brand_logo.name);
    }

    formData.append('color', brand.color);
    formData.append('active', brand.active);
    formData.append('tags', brand.tags);

    axios.post('/brands',formData
    ).then(response => {
        //console.log(response)
        resetFields()
        toast('Add Brand Successful!', 'success')
        $("#brandAddEditModal").modal('hide');
        getAllBrands()
        isLoading.value = false

    }).catch(error => {
        if(error.response && error.response.status == 422){
            errors.value = error.response.data.errors
        }
        isLoading.value = false
    });
}

function resetFields(){
    brand.name = ''
    brand.description = ''
    brand.brand_logo = null
    brand.active = '1'
}

function onFileSelected(event){
    brand.brand_logo = event.target.files[0]
}
</script>

<template>
    <BreezeLoading :isLoading="isLoading"></BreezeLoading>
    <BreezeMetric></BreezeMetric>
        
    <div class="py-4 text-right lg:text-left">

        <BreezeButton :type="'button'" data-bs-toggle="modal" data-bs-target="#brandAddEditModal" @click="changeAction('Add')">
            <span class="mdi mdi-plus-circle"> Add Brand</span> 
        </BreezeButton>

    </div>
    <div class="py-4">
        <BreezeDataTable2
            :columns="columns"
            :modelData="brands"
            :isLoading="isLoading"
            :total="totalBrands"
        >
        </BreezeDataTable2>
    </div>

    <div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="brandAddEditModal" tabindex="-1" aria-labelledby="brandAddEditModalLabel" aria-modal="true" role="dialog">
        <BreezeLoading :isLoading="isLoading"></BreezeLoading>
        <div class="modal-dialog modal-lg relative w-auto pointer-events-none">
            <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-dark-blue bg-clip-padding rounded-md outline-none text-current ">
                <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                    <h5 class="text-xl font-medium leading-normal text-white" id="brandAddEditModalLabel">
                     {{ action }} Brand
                    </h5>
                    <button type="button"
                    class="btn-close-modal"
                    data-bs-dismiss="modal"><span class="mdi mdi-close-circle"></span></button>
                </div>
                <div class="modal-body relative p-4">
                    <form id="mainBrandForm" ref="mainBrandForm" method="post" v-on:submit.prevent="saveForm">
                        <div class="flex flex-wrap -mx-2">
                            <div class="my-2 px-2 w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2">
                                <o-field label="Name *"  :variant="errors.name ?'danger':''" :message="errors.name?errors.name.toString():''">
                                    <o-input v-model.trim.lazy="brand.name"></o-input>
                                </o-field>
                    
                                <o-field label="Description" :variant="errors.description ? 'danger':''" :message="errors.description?errors.description.toString():''">
                                    <o-input maxlength="500" type="textarea" v-model.trim.lazy="brand.description"></o-input>
                                </o-field>
                            </div>

                            <div class="my-2 px-2 w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2">

                                <o-field class="file" label="Brand logo" ref="logoUpload" :variant="errors.brand_logo ? 'danger':''" :message="errors.brand_logo?errors.brand_logo.toString():''">
                                    <o-upload v-model="brand.brand_logo" accept="image/*">
                                        <o-button tag="a" variant="primary">
                                            <span class="mdi mdi-upload">Upload</span>
                                        </o-button>
                                    </o-upload>
                                    <span class="file-name" v-if="brand.brand_logo">
                                    {{ brand.brand_logo.name }}
                                    </span>
                                </o-field>
                
                                <o-field label="Color" >
                                    <BreezeColorPicker v-model="brand.color"></BreezeColorPicker>
                                </o-field>

                                <o-field class="py-4">
                                    <o-switch v-model="brand.active" true-value="1" false-value="0">
                                        Active
                                    </o-switch>
                                </o-field>
                             
                            </div>
                        </div>
                        <div class="flex flex-wrap -mx-2">
                            <div class="my-2 px-2 w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2">
                                <o-field label="Add some items">
                                    <o-inputitems v-model="brand.tags" icon="tag" placeholder="Add an item" aria-close-label="Delete this item"> </o-inputitems>
                                </o-field>
                            </div>
                        </div>
                        
                        
                        <div class="">
                            <div class="block text-right py-4">
                                <BreezeButton :type="'submit'" :color="'secondary'">
                                    Submit
                                </BreezeButton>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>