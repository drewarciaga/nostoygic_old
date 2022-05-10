<script setup>
import BreezeAuthenticatedLayout from '@/Layouts/Authenticated.vue';
import BreezeButton from '@/Components/Button.vue';
import BreezeCheckbox from '@/Components/Checkbox.vue';
import BreezeDataTable2 from '@/Components/DataTable2.vue';
import BreezeLoading from '@/Components/Loading.vue';
import BreezeMetric from '@/Components/Metric.vue';
import { Head, Link } from '@inertiajs/inertia-vue3';
import { ref, reactive, onMounted, defineAsyncComponent } from 'vue'
const BreezeColorPicker = defineAsyncComponent(()=>
    import('@/Components/ColorPicker.vue')
)

const BreezeViewModel = defineAsyncComponent(()=>
    import('@/Components/ViewModel.vue')
)

const BreezeConfirmDialog = defineAsyncComponent(()=>
    import('@/Components/ConfirmDialog.vue')
)

import useSeries from '../../Composables/Item/useSeries.js'
import useToast from '../../Composables/useToast.js'

const { toast } = useToast()
const { series, series_array, totalSeries, columns, errors,
        getSeries, getAllSeries, storeSeries, updateSeries, deleteSeries, resetFields
      } = useSeries()

const action         = ref('')
const isLoading      = ref(false)
const isLoadingView  = ref(false)
const viewModelRef   = ref()
const deletemodelRef = ref()
const model_id       = ref()

onMounted(async () => {
    isLoading.value = true
    await getAllSeries()
    isLoading.value = false
});

function changeAction(selectedAction){
    action.value = selectedAction
    errors.value = []
    resetFields()
}

async function viewModel(id){
    changeAction('View')
    isLoadingView.value = true
    await getSeries(id)
    viewModelRef.value.showViewModel()
    isLoadingView.value = false
}

async function editModel(id){
    changeAction('Edit')
    isLoadingView.value = true
    await getSeries(id)
    $("#seriesAddEditModal").modal('show');

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
    await deleteSeries(model_id.value)
    model_id.value = ''
    deletemodelRef.value.hideConfirmDialog()
    if(errors.value.length > 0){
        toast(action.value + ' Series Failed! : ' + errors.value, 'danger', 5000 )
    }else{
        toast(action.value + ' Series Successful!', 'success')
        await getAllSeries()
    }
    isLoadingView.value = false
}

async function saveForm(){
    isLoading.value = true

    if(action.value == 'Add'){
        await storeSeries()
    }else if(action.value == 'Edit'){
        await updateSeries(series.id)
    }

    if(errors.value.length == 0){
        toast(action.value + ' Series Successful!', 'success')
        await getAllSeries()
        $("#seriesAddEditModal").modal('hide');
    }

    isLoading.value = false
}

function onFileSelected(event){
    series.image_url = event.target.files[0]
}
</script>

<template>
    <BreezeLoading :isLoading="isLoading"></BreezeLoading>
    <BreezeMetric></BreezeMetric>
        
    <div class="py-4 text-right lg:text-left">

        <BreezeButton :type="'button'" data-bs-toggle="modal" data-bs-target="#seriesAddEditModal" @click="changeAction('Add')">
            <span class="mdi mdi-plus-circle"> Add Series</span> 
        </BreezeButton>

    </div>
    <div class="py-4">
        <BreezeDataTable2
            :columns="columns"
            :modelData="series_array"
            :isLoading="isLoading"
            :total="totalSeries"
            @viewModel="viewModel"
            @editModel="editModel"
            @deleteModel="showDeleteModel"
        >
        </BreezeDataTable2>
    </div>

    <div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="seriesAddEditModal" tabindex="-1" aria-labelledby="seriesAddEditModalLabel" aria-modal="true" role="dialog">
        <BreezeLoading :isLoading="isLoading"></BreezeLoading>
        <div class="modal-dialog modal-lg relative w-auto pointer-events-none">
            <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-dark-blue bg-clip-padding rounded-md outline-none text-current ">
                <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                    <h5 class="text-xl font-medium leading-normal text-white" id="seriesAddEditModalLabel">
                     {{ action }} Series
                    </h5>
                    <button type="button"
                    class="btn-close-modal"
                    data-bs-dismiss="modal"><span class="mdi mdi-close-circle"></span></button>
                </div>
                <div class="modal-body relative p-4">
                    <form id="mainSeriesForm" ref="mainSeriesForm" method="post" v-on:submit.prevent="saveForm">
                        <div class="flex flex-wrap -mx-2">
                            <div class="my-2 px-2 w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2">
                                <o-field label="Name *"  :variant="errors.name ?'danger':''" :message="errors.name?errors.name.toString():''">
                                    <o-input v-model.trim.lazy="series.name"></o-input>
                                </o-field>
                    
                                <o-field label="Description" :variant="errors.description ? 'danger':''" :message="errors.description?errors.description.toString():''">
                                    <o-input maxlength="1000" type="textarea" v-model.trim.lazy="series.description"></o-input>
                                </o-field>
                            </div>

                            <div class="my-2 px-2 w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2">

                                <o-field class="file" label="Series logo" ref="logoUpload" :variant="errors.image_url ? 'danger':''" :message="errors.image_url?errors.image_url.toString():''">
                                    <o-upload v-model="series.image_url" accept="image/*">
                                        <o-button tag="a" variant="primary">
                                            <span class="mdi mdi-upload">Upload</span>
                                        </o-button>
                                    </o-upload>
                                    <span class="file-name" v-if="series.image_url">
                                        {{ series.image_url.name }}
                                    </span>
                                </o-field>

                                <o-field label="Delete Series Logo?" v-if="series.main_img != null">
                                    <BreezeCheckbox v-model:checked="series.delete_series_logo" color="secondary" />
                                </o-field>

                                <o-field label="Color" >
                                    <BreezeColorPicker v-model="series.color"></BreezeColorPicker>
                                </o-field>

                                <o-field class="py-4">
                                    <o-switch v-model="series.active" true-value="1" false-value="0">
                                        Active
                                    </o-switch>
                                </o-field>
                             
                            </div>
                        </div>
                        <div class="flex flex-wrap -mx-2">
                            <div class="my-2 px-2 w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2">
                                <o-field label="Add some items">
                                    <o-inputitems v-model="series.tags" icon="tag" placeholder="Add an item" aria-close-label="Delete this item"> </o-inputitems>
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

    <BreezeViewModel :model="'Series'" :isLoading="isLoadingView" :modelData="series" ref="viewModelRef"></BreezeViewModel>
    <BreezeConfirmDialog title="Delete Series" content="Are you sure you want to delete Series?" ref="deletemodelRef">
        <BreezeButton :type="'button'" @click="closeConfirmDialog" class="mx-1">
            Cancel
        </BreezeButton>
        <BreezeButton :type="'button'" @click="deleteModel" class="mx-1" color="danger">
            Delete
        </BreezeButton>
    </BreezeConfirmDialog>
</template>