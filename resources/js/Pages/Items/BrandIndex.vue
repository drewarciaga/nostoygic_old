<script setup>
//import BreezeAddEdit from '@/Pages/Brands/AddEdit.vue';
import BreezeAuthenticatedLayout from '@/Layouts/Authenticated.vue';
import BreezeButton from '@/Components/Button.vue';
import BreezeMetric from '@/Components/Metric.vue';
import { Head, Link } from '@inertiajs/inertia-vue3';
import { ref, onMounted, defineAsyncComponent } from 'vue'

const isLoading  = ref(false)
const brands      = ref([])
const totalBrands = ref(0)

const BreezeDataTable2 = defineAsyncComponent(()=>
    import('@/Components/DataTable2.vue')
)
const BreezeLoading = defineAsyncComponent(()=>
    import('@/Components/Loading.vue')
)

onMounted(async () => {
    isLoading.value = true

    await getAllBrands()

    isLoading.value = false
});

async function getAllBrands(){
    await axios.get('/brands/getAll').then(response => {
        brands.value      = response.data.data
        totalBrands.value = response.data.total
    })
}

const columns = ref([
    {
        id:0,
        field: 'id',
        label: 'ID',
        width: '1',
        sortable: true
    },
    {
        id:1,
        field: 'name',
        label: 'Name',
        sortable: true
    },
    {
        id:2,
        field: 'id',
        label: 'Action',
        sortable: false
    },
]);

</script>

<template>
    <BreezeLoading :isLoading="isLoading"></BreezeLoading>
    <BreezeMetric></BreezeMetric>
        
    <div class="py-4 text-right lg:text-left">

        <BreezeButton :type="'button'" data-bs-toggle="modal" data-bs-target="#brandAddEditModal" @click="this.action = 'Add'">
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
                    {{ this.action }} Brand
                    </h5>
                    <button type="button"
                    class="btn-close-modal"
                    data-bs-dismiss="modal"><span class="mdi mdi-close-circle"></span></button>
                </div>
                <div class="modal-body relative p-4">
                    <form id="mainItemForm" ref="mainItemForm" method="post" v-on:submit.prevent="saveForm">
                        <div class="flex flex-wrap -mx-2">
                            <div class="my-2 px-2 w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2">
                                <o-field label="Name *"  :variant="errors.name ?'danger':''" :message="errors.name?errors.name.toString():''">
                                    <o-input v-model.trim.lazy="name"></o-input>
                                </o-field>
                            </div>
                        </div>
                        <div class="flex flex-wrap -mx-2">
                            <div class="my-2 px-2 w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2">
                                <o-field label="Description" :variant="errors.description ? 'danger':''" :message="errors.description?errors.description.toString():''">
                                    <o-input maxlength="500" type="textarea" v-model.trim.lazy="description"></o-input>
                                </o-field>
                            </div>
                        </div>

                        <div class="my-2 px-2 w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2">
                            <o-field class="file" label="Brand logo" ref="logoUpload" :variant="errors.brand_logo ? 'danger':''" :message="errors.brand_logo?errors.brand_logo.toString():''">
                                <o-upload v-model="brand_logo">
                                <o-button tag="a" variant="primary">
                                    <span class="mdi mdi-upload">Upload</span>
                                </o-button>
                                </o-upload>
                                <span class="file-name" v-if="brand_logo">
                                {{ brand_logo.name }}
                                </span>
                            </o-field>
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
<script>

export default {
    data() {
        return {
            errors: [],
            name: '',
            description: '',
            action: '',
            brand_logo: null,
        }
    },
    methods:{
        saveForm(){
            this.errors = []
            this.isLoading = true

            let formData = new FormData();
            formData.append('name', this.name);
            formData.append('description', this.description);
            if(this.brand_logo !=null){
                formData.append('brand_logo', this.brand_logo, this.brand_logo.name);
            }
            //formData.append('brand_id', this.brand_id);
            
            axios.post('/brands',formData
            ).then(response => {
                //console.log(response)
                this.resetFields()
                this.success(response.data.message)
                $("#brandAddEditModal").modal('hide');
                this.getAllBrands()
                this.isLoading = false

            }).catch(error => {
                if(error.response && error.response.status == 422){
                    this.errors = error.response.data.errors
                }
                this.isLoading = false
            });
        },
        resetFields(){
            this.brand_logo = null
            this.name = ''
            this.description =  ''
            
            //this.$refs.mainItemForm.reset();
            
        },
        success() {
            this.$moshaToast(this.action + ' Brand Successful', {
                type: 'success',
                position: 'top-right',
                timeout: 2000,
                hideProgressBar: 'true',
                showIcon: 'true',
            })
        },
        onFileSelected(event){
            this.brand_logo = event.target.files[0]
        },
    },


};

</script>