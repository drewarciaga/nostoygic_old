<script setup>
import BreezeButton from '@/Components/Button.vue';
import BreezeCheckbox from '@/Components/Checkbox.vue';
import BreezeDataTable2 from '@/Components/DataTable2.vue';
import BreezeLoading from '@/Components/Loading.vue';
import BreezeSearch from '@/Components/Search.vue';
import { ref, onMounted, defineAsyncComponent } from 'vue'
const BreezeColorPicker = defineAsyncComponent(()=>
    import('@/Components/ColorPicker.vue')
)

const BreezeViewModel = defineAsyncComponent(()=>
    import('@/Components/ViewModel.vue')
)

const BreezeConfirmDialog = defineAsyncComponent(()=>
    import('@/Components/ConfirmDialog.vue')
)

import useWave from '../../Composables/Item/useWave.js'
import useToast from '../../Composables/useToast.js'

const { toast } = useToast()
const { wave, waves, totalWaves, columns, errors,
        getWave, getAllWaves, storeWave, updateWave, deleteWave, resetFields
      } = useWave()

const action         = ref('')
const isLoading      = ref(false)
const isLoadingView  = ref(false)
const viewModelRef   = ref()
const deletemodelRef = ref()
const model_id       = ref()

onMounted(async () => {
    isLoading.value = true
    await getAllWaves()
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
    await getWave(id)
    viewModelRef.value.showViewModel()
    isLoadingView.value = false
}

async function editModel(id){
    changeAction('Edit')
    isLoadingView.value = true
    await getWave(id)
    $("#waveAddEditModal").modal('show');

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
    await deleteWave(model_id.value)
    model_id.value = ''
    deletemodelRef.value.hideConfirmDialog()
    if(errors.value.length > 0){
        toast(action.value + ' Wave Failed! : ' + errors.value, 'danger', 5000 )
    }else{
        toast(action.value + ' Wave Successful!', 'success')
        await getAllWaves()
    }
    isLoadingView.value = false
}

async function saveForm(){
    isLoading.value = true

    if(action.value == 'Add'){
        await storeWave()
    }else if(action.value == 'Edit'){
        await updateWave(wave.id)
    }

    if(errors.value.length == 0){
        toast(action.value + ' Wave Successful!', 'success')
        await getAllWaves()
        $("#waveAddEditModal").modal('hide');
    }

    isLoading.value = false
}

function onFileSelected(event){
    wave.image_url = event.target.files[0]
}

async function searchTable(search_input){
    if(search_input.value.toString().trim != ''){
        await getAllWaves(search_input.value)
    }else{
        await getAllWaves()
    }
}
</script>

<template>
    <!--<BreezeMetric></BreezeMetric>-->
        
    <div class="flex flex-wrap -mx-1 overflow-hidden sm:-mx-1 md:-mx-1 lg:-mx-1 xl:-mx-1">

        <div class="my-1 px-1 w-full overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-1 md:px-1 md:w-1/2 lg:my-1 lg:px-1 lg:w-1/2 xl:my-1 xl:px-1 xl:w-1/2">
            <BreezeButton :type="'button'" data-bs-toggle="modal" data-bs-target="#waveAddEditModal" @click="changeAction('Add')">
                <span class="mdi mdi-plus-circle"> Add Wave</span> 
            </BreezeButton>
        </div>

        <div class="my-1 px-1 w-full overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-1 md:px-1 md:w-1/2 lg:my-1 lg:px-1 lg:w-1/2 xl:my-1 xl:px-1 xl:w-1/2">
            <div class="sm:float-none md:float-right lg:float-right">
                <BreezeSearch @search="searchTable"></BreezeSearch>
            </div>
        </div>

    </div>
    <div class="py-4">
        <BreezeDataTable2
            :columns="columns"
            :modelData="waves"
            :isLoading="isLoading"
            :total="totalWaves"
            @viewModel="viewModel"
            @editModel="editModel"
            @deleteModel="showDeleteModel"
        >
        </BreezeDataTable2>
    </div>

    <div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="waveAddEditModal" tabindex="-1" aria-labelledby="waveAddEditModalLabel" aria-modal="true" role="dialog">
        <BreezeLoading :isLoading="isLoading"></BreezeLoading>
        <div class="modal-dialog modal-lg relative w-auto pointer-events-none">
            <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-dark-blue bg-clip-padding rounded-md outline-none text-current ">
                <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                    <h5 class="text-xl font-medium leading-normal text-white" id="waveAddEditModalLabel">
                     {{ action }} Wave
                    </h5>
                    <button type="button"
                    class="btn-close-modal"
                    data-bs-dismiss="modal"><span class="mdi mdi-close-circle"></span></button>
                </div>
                <div class="modal-body relative p-4">
                    <form id="mainWaveForm" ref="mainWaveForm" method="post" v-on:submit.prevent="saveForm">
                        <div class="flex flex-wrap -mx-2">
                            <div class="my-2 px-2 w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2">
                                <o-field label="Name *"  :variant="errors.name ?'danger':''" :message="errors.name?errors.name.toString():''">
                                    <o-input v-model.trim.lazy="wave.name"></o-input>
                                </o-field>
                    
                                <o-field label="Description" :variant="errors.description ? 'danger':''" :message="errors.description?errors.description.toString():''">
                                    <o-input maxlength="2000" type="textarea" v-model.trim.lazy="wave.description"></o-input>
                                </o-field>
                            </div>

                            <div class="my-2 px-2 w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2">

                                <o-field class="file" label="Wave logo" ref="logoUpload" :variant="errors.image_url ? 'danger':''" :message="errors.image_url?errors.image_url.toString():''">
                                    <o-upload v-model="wave.image_url" accept="image/*">
                                        <o-button tag="a" variant="primary">
                                            <span class="mdi mdi-upload">Upload</span>
                                        </o-button>
                                    </o-upload>
                                    <span class="file-name" v-if="wave.image_url">
                                        {{ wave.image_url.name }}
                                    </span>
                                </o-field>

                                <o-field label="Delete Wave Logo?" v-if="wave.main_img != null">
                                    <BreezeCheckbox v-model:checked="wave.delete_wave_logo" color="secondary" />
                                </o-field>

                                <o-field label="Color" >
                                    <BreezeColorPicker v-model="wave.color"></BreezeColorPicker>
                                </o-field>

                                <o-field class="py-4">
                                    <o-switch v-model="wave.active" true-value="1" false-value="0">
                                        Active
                                    </o-switch>
                                </o-field>
                             
                            </div>
                        </div>
                        <div class="flex flex-wrap -mx-2">
                            <div class="my-2 px-2 w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2">
                                <o-field label="Add some items">
                                    <o-inputitems v-model="wave.tags" icon="tag" placeholder="Add an item" aria-close-label="Delete this item"> </o-inputitems>
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

    <BreezeViewModel :model="'Wave'" :isLoading="isLoadingView" :modelData="wave" ref="viewModelRef"></BreezeViewModel>
    <BreezeConfirmDialog title="Delete Wave" content="Are you sure you want to delete Wave?" ref="deletemodelRef">
        <BreezeButton :type="'button'" @click="closeConfirmDialog" class="mx-1">
            Cancel
        </BreezeButton>
        <BreezeButton :type="'button'" @click="deleteModel" class="mx-1" color="danger">
            Delete
        </BreezeButton>
    </BreezeConfirmDialog>
</template>