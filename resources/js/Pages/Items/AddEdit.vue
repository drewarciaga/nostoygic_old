<script setup>
import BreezeAuthenticatedLayout from '@/Layouts/Authenticated.vue';
import BreezeButton from '@/Components/Button.vue';
import BreezeCheckbox from '@/Components/Checkbox.vue';
import BreezeLoading from '@/Components/Loading.vue';
import { Head, Link } from '@inertiajs/inertia-vue3';   
import { ref, onMounted, watch } from 'vue'
import SelectElement from '@vueform/multiselect'
import Multiselect from '@vueform/multiselect'
import useItem from '../../Composables/Item/useItem.js'
import useBrand from '../../Composables/Item/useBrand.js'
import useGrade from '../../Composables/Item/useGrade.js'
import useGroup from '../../Composables/Item/useGroup.js'
import useLine from '../../Composables/Item/useLine.js'
import useMaterial from '../../Composables/Item/useMaterial.js'
import useScale from '../../Composables/Item/useScale.js'
import useSeries from '../../Composables/Item/useSeries.js'
import useType from '../../Composables/Item/useType.js'
import useWave from '../../Composables/Item/useWave.js'

import useToast from '../../Composables/useToast.js'

const { toast } = useToast()
const isLoading = ref(false)

const { item, errors,
        storeItem, updateItem, resetFields, getItem
      } = useItem()

const { brand_list, getBrandList }       = useBrand()
const { grade_list, getGradeList }       = useGrade()
const { group_list, getGroupList }       = useGroup()
const { line_list, getLineList }         = useLine()
const { material_list, getMaterialList } = useMaterial()
const { scale_list, getScaleList }       = useScale()
const { series_list, getSeriesList }     = useSeries()
const { type_list, getTypeList }         = useType()
const { wave_list, getWaveList }         = useWave()

const props = defineProps({
    action: {
        default: 'Add'
    },
    item_id: {
        default: null
    }
})

onMounted(async () => {
    isLoading.value = true
    await getBrandList()
    //await getGradeList()
    await getGroupList()
    await getLineList()
    await getScaleList()
    await getSeriesList()
    await getTypeList()
    await getMaterialList()
    //await getWaveList()
    if(props.action == 'Edit'){
        await getItem(props.item_id)
    }
    isLoading.value = false
});

const lineselector = ref(null)
const gundamLines = ['gunpla']
const showGrade = ref(false)
watch(item, async function(newValue, oldValue) {
    showGrade.value = false
    if(typeof lineselector.value.internalValue.label != 'undefined' && lineselector.value.internalValue.label != null){
        if(gundamLines.includes(lineselector.value.internalValue.label.toLowerCase())){
            showGrade.value = true
            await getGradeList()
        }
    }
})

async function saveForm(){
    isLoading.value = true
    if(props.action == 'Add'){
        await storeItem()
    }else if(props.action == 'Edit'){
        await updateItem(props.item_id)
    }
    
    if(errors.value.length == 0){
        toast(props.action + ' Item Successful!', 'success')
        $('.btn_back').trigger('click');
    }else{
        toast(props.action + ' Item Failed!', 'danger')
    }

    isLoading.value = false
}

function onFileSelected(event){
    item.profile_url = event.target.files[0]
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
        <div class="p-4 text-right lg:text-left">
            <Link :href="route('itemSettings')" class="mr-2">
                <BreezeButton :type="'button'">
                    <span class="mdi mdi-billboard"> Item Settings</span> 
                </BreezeButton>
            </Link>
            <Link :href="route('items.index')" class="float-right">
                <BreezeButton :type="'button'">
                    <span class="mdi mdi-arrow-left-circle btn_back"> Back</span> 
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
                        <o-field label="Scale" :variant="errors.scale_id ? 'danger':''" :message="errors.scale_id?errors.scale_id.toString():''">
                            <SelectElement
                                v-model="item.scale_id"
                                :native="false"
                                :options="scale_list"
                                :searchable="true"
                            />
                        </o-field>
                    </div>
                    <div class="my-2 px-2 w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4" v-if="showGrade">
                        <o-field label="Grade" :variant="errors.grade_id ? 'danger':''" :message="errors.grade_id?errors.grade_id.toString():''">
                            <SelectElement
                                v-model="item.grade_id"
                                :native="false"
                                :options="grade_list"
                                :searchable="true"
                            />
                        </o-field>
                    </div>
                </div>

                <div class="flex flex-wrap -mx-2">
                    <div class="my-2 px-2 w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4">
                        <o-field label="Line" :variant="errors.line_id ? 'danger':''" :message="errors.line_id?errors.line_id.toString():''">
                            <SelectElement
                                v-model="item.line_id"
                                :native="false"
                                :options="line_list"
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
                                :options="series_list"
                                :searchable="true"
                            />
                        </o-field>
                    </div>
                    <div class="my-2 px-2 w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4">
                        <o-field label="Group" :variant="errors.group_id ? 'danger':''" :message="errors.group_id?errors.group_id.toString():''">
                            <SelectElement
                                v-model="item.group_id"
                                :native="false"
                                :options="group_list"
                                :searchable="true"
                            />
                        </o-field>
                    </div>
                    <div class="my-2 px-2 w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4">
                        <o-field label="Wave" :variant="errors.wave_id ? 'danger':''" :message="errors.wave_id?errors.wave_id.toString():''">
                            <SelectElement
                                v-model="item.wave_id"
                                :native="false"
                                :options="wave_list"
                                :searchable="true"
                                ref="waveselector"
                            />
                        </o-field>
                    </div>
                </div>

                <div class="flex flex-wrap -mx-2">
                    <div class="my-2 px-2 w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2">
                        <o-field label="Description" :variant="errors.description ? 'danger':''" :message="errors.description?errors.description.toString():''">
                            <o-input maxlength="2000" type="textarea" v-model.trim.lazy="item.description"></o-input>
                        </o-field>
                    </div>
                </div>

                <div class="flex flex-wrap -mx-2">
                    <div class="my-2 px-2 w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4">
                        <o-field class="file" label="Profile Image" ref="profileupload" :variant="errors.profile_url ? 'danger':''" :message="errors.profile_url?errors.profile_url.toString():''">
                            <o-upload v-model="item.profile_url">
                                <o-button tag="a" variant="primary">
                                    <span class="mdi mdi-upload">Upload</span>
                                </o-button>
                            </o-upload>
                            <span class="file-name" v-if="item.profile_url">
                                {{ item.profile_url.name }}
                            </span>
                        </o-field>
                        <o-field label="Delete Profile Image?" v-if="item.profile_img != null">
                            <BreezeCheckbox v-model:checked="item.delete_profile_url" color="secondary" />
                        </o-field>
                    </div>

                    <div class="my-2 px-2 w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4">
                            <o-field label="Release Date">
                                <o-datepicker ref="release_datepicker" expanded placeholder="Select a date" type="month"> </o-datepicker>
                            <o-button @click="$refs.release_datepicker.toggle()" icon-left="calendar" type="primary" />
                        </o-field>
                    </div>
                </div>

                <div class="flex flex-wrap -mx-2">
                    <div class="my-2 px-2 w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4">
                        <o-field label="Item Size"  :variant="errors.item_size ?'danger':''" :message="errors.item_size?errors.item_size.toString():''">
                            <o-input v-model.trim.lazy="item.item_size"></o-input>
                        </o-field>
                    </div>
                    <div class="my-2 px-2 w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4">
                        <o-field label="Item Weight"  :variant="errors.item_weight ?'danger':''" :message="errors.item_weight?errors.item_weight.toString():''">
                            <o-input v-model.trim.lazy="item.item_weight"></o-input>
                        </o-field>
                    </div>
                    <div class="my-2 px-2 w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2">
                        <o-field label="Item Material" :variant="errors.item_material_ids ? 'danger':''" :message="errors.item_material_ids?errors.item_material_ids.toString():''">
                            <Multiselect
                                v-model="item.item_material_ids"
                                mode="tags"
                                :close-on-select="false"
                                :searchable="true"
                                :create-option="true"
                                :options="material_list"
                            />
                        </o-field>
                    </div>
                </div>

                <div class="flex flex-wrap -mx-2">
                    <div class="my-2 px-2 w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2">
                        <o-field label="Remarks" :variant="errors.remarks ? 'danger':''" :message="errors.remarks?errors.remarks.toString():''">
                            <o-input maxlength="2000" type="textarea" v-model.trim.lazy="item.remarks" :hasCounter="true"></o-input>
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