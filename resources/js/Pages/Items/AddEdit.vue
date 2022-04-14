<script setup>
import BreezeAuthenticatedLayout from '@/Layouts/Authenticated.vue';
import BreezeButton from '@/Components/Button.vue';
import BreezeLoading from '@/Components/Loading.vue';
import { Head, Link, usePage  } from '@inertiajs/inertia-vue3';   
import { getItemSettingsLists } from '../../Composables/Item/useItemSettings.js'
import { ref, reactive, onMounted } from 'vue'
import { createToast } from 'mosha-vue-toastify';
import SelectElement from '@vueform/multiselect'
import Multiselect from '@vueform/multiselect'

const props = defineProps({
  action: String
})

const errors = ref([])
const isLoading = ref(false)
const toast = (message,type) => {
    createToast(message, {
        type: type,
        position: 'top-right',
        timeout: 2000,
        hideProgressBar: 'true',
        showIcon: 'true',
    })
}

const item = reactive({
    name: '',
    profile_image: null,
    model: '',
    display_name: '',
    description: '',
    variant: '',
    type_id: '',
    brand_id: '',
    line_id: '',
    series_id: '',
    scale_id: '',
    grade_id: '',
    wave_id: '',
    group_id: '',
    item_category_id: '',
    bar_code: '',
    image_links: '',
    active: '',
})

const type_list    = ref([])
const brand_list   = ref([])
const line_list    = ref([])
const series_list  = ref([])
const scale_list   = ref([])
const grade_list   = ref([])
const wave_list    = ref([])
const group_list   = ref([])

onMounted(async () => {
    isLoading.value = true

    let res = await getItemSettingsLists()

    type_list.value  = res.data.type_list
    brand_list.value = res.data.brand_list

    isLoading.value = false
});

async function saveForm(){
    errors.value = []
    isLoading.value = true

    let formData = new FormData();
    formData.append('name', item.name);
    formData.append('brand_id', item.brand_id);
    if(item.profile_image !=null){
        formData.append('profile_image', item.profile_image, item.profile_image.name);
    }
    
            
    await axios.post('/items',formData
    ).then(response => {
        //console.log(response)
        resetFields()
        toast('Add Item Successful!', 'success')
        isLoading.value = false
    }).catch(error => {
        if(error.response && error.response.status == 422){
            errors.value = error.response.data.errors
        }
        isLoading.value = false
    });    
}

function resetFields(){
    item.name = ''
    item.brand_id = ''
    item.profile_image = null
}

function onFileSelected(event){
    item.profile_image = event.target.files[0]
}
</script>

<template>
    <Head title="Items" />
    <BreezeLoading :isLoading="isLoading"></BreezeLoading>
    <BreezeAuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                {{ action }} Item
            </h2>
        </template>

        <div class="py-4 text-right">
            <Link :href="route('items.index')">
                <BreezeButton :type="'button'">
                    <span class="mdi mdi-arrow-left-circle"> Back</span> 
                </BreezeButton>
            </Link>
        </div>
        
        <div class="p-4">
            <form id="mainItemForm" ref="mainItemForm" method="post" v-on:submit.prevent="saveForm">
                <div class="flex flex-wrap -mx-2">
                    <div class="my-2 px-2 w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2">
                        <o-field label="Name *"  :variant="errors.name ?'danger':''" :message="errors.name?errors.name.toString():''">
                            <o-input v-model.trim.lazy="item.name"></o-input>
                        </o-field>
                    </div>

                    <div class="my-2 px-2 w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2">
                        <o-field label="Display Name" :variant="errors.display_name ? 'danger':''" :message="errors.display_name?errors.display_name.toString():''">
                            <o-input v-model.trim.lazy="item.display_name"></o-input>
                        </o-field>
                    </div>
                </div>
                <div class="flex flex-wrap -mx-2">
                    <div class="my-2 px-2 w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4">
                        <o-field label="Type" :variant="errors.type_id ? 'danger':''" :message="errors.type_id?errors.type_id.toString():''">
                            <SelectElement
                                v-model="item.type_id"
                                :native="false"
                                :options="type_list"
                                :searchable="true"
                            />
                        </o-field>
                    </div>
                    <div class="my-2 px-2 w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4">
                        <o-field label="Scale" :variant="errors.scale_id ? 'danger':''" :message="errors.scale_id?errors.scale_id.toString():''">
                            <SelectElement
                                v-model="item.scale_id"
                                :native="false"
                                :options="scale_list"
                                :searchable="true"
                            />
                        </o-field>
                    </div>
                    <div class="my-2 px-2 w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4">
                        <o-field label="Grade" :variant="errors.grade_id ? 'danger':''" :message="errors.grade_id?errors.grade_id.toString():''">
                            <SelectElement
                                v-model="item.grade_id"
                                :native="false"
                                :options="scale_list"
                                :searchable="true"
                            />
                        </o-field>
                    </div>
                </div>

                <div class="flex flex-wrap -mx-2">
                    <div class="my-2 px-2 w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4">
                        <o-field label="Brand" :variant="errors.brand_id ? 'danger':''" :message="errors.brand_id?errors.brand_id.toString():''">
                            <SelectElement
                                v-model="item.brand_id"
                                :native="false"
                                :options="brand_list"
                                :searchable="true"
                                ref="brandselector"
                            />
                        </o-field>
                    </div>
                    <div class="my-2 px-2 w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4">
                        <o-field label="Line" :variant="errors.line_id ? 'danger':''" :message="errors.line_id?errors.line_id.toString():''">
                            <SelectElement
                                v-model="item.line_id"
                                :native="false"
                                :options="scale_list"
                                :searchable="true"
                                ref="lineselector"
                            />
                        </o-field>
                    </div>
                    <div class="my-2 px-2 w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4">
                        <o-field label="Series" :variant="errors.series_id ? 'danger':''" :message="errors.series_id?errors.series_id.toString():''">
                            <SelectElement
                                v-model="item.series_id"
                                :native="false"
                                :options="scale_list"
                                :searchable="true"
                            />
                        </o-field>
                    </div>
                    <div class="my-2 px-2 w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4">
                        <o-field label="Group" :variant="errors.group_id ? 'danger':''" :message="errors.group_id?errors.group_id.toString():''">
                            <SelectElement
                                v-model="item.group_id"
                                :native="false"
                                :options="scale_list"
                                :searchable="true"
                            />
                        </o-field>
                    </div>

                    <div class="my-2 px-2 w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4">
                        <o-field class="file" label="Profile Image" ref="profileupload" :variant="errors.profile_image ? 'danger':''" :message="errors.profile_image?errors.profile_image.toString():''">
                            <o-upload v-model="item.profile_image">
                            <o-button tag="a" variant="primary">
                                <span class="mdi mdi-upload">Upload</span>
                            </o-button>
                            </o-upload>
                            <span class="file-name" v-if="item.profile_image">
                            {{ item.profile_image.name }}
                            </span>
                        </o-field>
                    </div>
                </div>
                <div class="flex flex-wrap -mx-2">
                    <div class="my-2 px-2 w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2">
                        <o-field label="Description" :variant="errors.description ? 'danger':''" :message="errors.description?errors.description.toString():''">
                            <o-input maxlength="500" type="textarea" v-model.trim.lazy="item.description"></o-input>
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
    </BreezeAuthenticatedLayout>
</template>