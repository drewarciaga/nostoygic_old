<script setup>
import BreezeAuthenticatedLayout from '@/Layouts/Authenticated.vue';
import BreezeButton from '@/Components/Button.vue';
import { Head, Link, usePage  } from '@inertiajs/inertia-vue3';
</script>

<template>
    <Head title="Items" />
    <o-loading :full-page="true" :active.sync="isLoading" :can-cancel="false"></o-loading>
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
                            <o-input v-model.trim.lazy="name"></o-input>
                        </o-field>
                    </div>

                    <div class="my-2 px-2 w-full sm:w-full md:w-full lg:w-1/2 xl:w-1/2">
                        <o-field label="Display Name" :variant="errors.display_name ? 'danger':''" :message="errors.display_name?errors.display_name.toString():''">
                            <o-input v-model.trim.lazy="display_name"></o-input>
                        </o-field>
                    </div>
                </div>
                <div class="flex flex-wrap -mx-2">
                    <div class="my-2 px-2 w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4">
                        <o-field label="Type" :variant="errors.type_id ? 'danger':''" :message="errors.type_id?errors.type_id.toString():''">
                            <SelectElement
                                v-model="type_id"
                                :native="false"
                                :options="scale_list"
                                :searchable="true"
                            />
                        </o-field>
                    </div>
                    <div class="my-2 px-2 w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4">
                        <o-field label="Scale" :variant="errors.scale_id ? 'danger':''" :message="errors.scale_id?errors.scale_id.toString():''">
                            <SelectElement
                                v-model="scale_id"
                                :native="false"
                                :options="scale_list"
                                :searchable="true"
                            />
                        </o-field>
                    </div>
                    <div class="my-2 px-2 w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4">
                        <o-field label="Grade" :variant="errors.grade_id ? 'danger':''" :message="errors.grade_id?errors.grade_id.toString():''">
                            <SelectElement
                                v-model="grade_id"
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
                                v-model="brand_id"
                                :native="false"
                                :options="scale_list"
                                :searchable="true"
                            />
                        </o-field>
                    </div>
                    <div class="my-2 px-2 w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4">
                        <o-field label="Line" :variant="errors.line_id ? 'danger':''" :message="errors.line_id?errors.line_id.toString():''">
                            <SelectElement
                                v-model="line_id"
                                :native="false"
                                :options="scale_list"
                                :searchable="true"
                            />
                        </o-field>
                    </div>
                    <div class="my-2 px-2 w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4">
                        <o-field label="Series" :variant="errors.series_id ? 'danger':''" :message="errors.series_id?errors.series_id.toString():''">
                            <SelectElement
                                v-model="series_id"
                                :native="false"
                                :options="scale_list"
                                :searchable="true"
                            />
                        </o-field>
                    </div>
                    <div class="my-2 px-2 w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4">
                        <o-field label="Group" :variant="errors.group_id ? 'danger':''" :message="errors.group_id?errors.group_id.toString():''">
                            <SelectElement
                                v-model="group_id"
                                :native="false"
                                :options="scale_list"
                                :searchable="true"
                            />
                        </o-field>
                    </div>

                    <div class="my-2 px-2 w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4">
                        <o-field class="file" label="Profile Image" :variant="errors.profile_image ? 'danger':''" :message="errors.profile_image?errors.profile_image.toString():''">
                            <o-upload v-model="profile_image">
                            <o-button tag="a" variant="primary">
                                <span class="mdi mdi-upload">Upload</span>
                            </o-button>
                            </o-upload>
                            <span class="file-name" v-if="profile_image">
                            {{ profile_image.name }}
                            </span>
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
<script>
import SelectElement from '@vueform/multiselect'
import Multiselect from '@vueform/multiselect'

export default {
    components: { SelectElement, Multiselect },
    props: {
        action: String,
    },
    data() {
        return {
            errors: [],
            isLoading: false,
            name: '',
            model: '',
            display_name: '',
            description: '',
            variant: '',
            scale_id: '',
            grade_id: '',
            type_id: '',
            brand_id: '',
            line_id: '',
            series_id: '',
            group_id: '',
            wave_id: '',
            item_category_id: '',
            bar_code: '',
            image_links: '',
            active: '',
            profile_image: null,

            scale_list: [
                {value: '1', label: 'Wolverine'},
                {value: '2', label: 'Cyclops'},
                {value: '3', label: 'Jean Grey'},
                {value: '4', label: 'Professor X'},
            ],

        }
    },

    methods:{
        saveForm(){
            this.errors = []
            this.isLoading = true

            let formData = new FormData();
            formData.append('name', this.name);
            if(this.profile_image !=null){
                formData.append('profile_image', this.profile_image, this.profile_image.name);
            }
            
            axios.post('/items',formData
            ).then(response => {
                //console.log(response)
                this.resetFields()
                this.success(response.data.message)
                this.isLoading = false
            }).catch(error => {
                if(error.response && error.response.status == 422){
                    this.errors = error.response.data.errors
                }
                this.isLoading = false
            });
        },
        resetFields(){
            this.$refs.mainItemForm.reset();
        },
        success() {
            this.$moshaToast(this.action + ' Item Successful', {
                type: 'success',
                position: 'top-right',
                timeout: 2000,
                hideProgressBar: 'true',
                showIcon: 'true',
            })
        },
        onFileSelected(event){
            this.profile_image = event.target.files[0]
        },
    },

    /*setup() {
        const pageeAction = this.action

        return { pageeAction };
    },*/

};

</script>