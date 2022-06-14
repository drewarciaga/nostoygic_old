<script setup>
import BreezeAuthenticatedLayout from '@/Layouts/Authenticated.vue';
import BreezeButton from '@/Components/Button.vue';
import BreezeLoading from '@/Components/Loading.vue';
import { Head, Link, usePage  } from '@inertiajs/inertia-vue3';   
import { ref, reactive, onMounted, watch } from 'vue'
import { createToast } from 'mosha-vue-toastify';
import SelectElement from '@vueform/multiselect'
import Multiselect from '@vueform/multiselect'
import useUser from '../../Composables/User/useUser.js'


import useToast from '../../Composables/useToast.js'

const { toast } = useToast()
const isLoading = ref(false)

const { user, errors,
        storeUser, updateUser, resetFields, getUser
      } = useUser()

const props = defineProps({
    action: {
        default: 'Add'
    },
    user_id: {
        default: null
    }
})

onMounted(async () => {
    isLoading.value = true

    if(props.action == 'Edit'){
        await getUser(props.user_id)
    }
    isLoading.value = false
});

async function saveForm(){
    isLoading.value = true
    if(props.action == 'Add'){
        await storeUser()
    }else if(props.action == 'Edit'){
        await updateUser(props.user_id)
    }
    
    if(errors.value.length == 0){
        toast(props.action + ' User Successful!', 'success')
    }else{
        toast(props.action + ' User Failed!', 'danger')
    }

    isLoading.value = false
}

function onFileSelected(event){
    user.profile_url = event.target.files[0]
}
</script>

<template>
    <Head title="Users" />
    <BreezeLoading :isLoading="isLoading"></BreezeLoading>
    <BreezeAuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                {{ action }} User
            </h2>
        </template>
        <div class="p-4 text-right">
            <Link :href="route('users.index')">
                <BreezeButton :type="'button'">
                    <span class="mdi mdi-arrow-left-circle"> Back</span> 
                </BreezeButton>
            </Link>
        </div>
        
        <div class="p-4">
            <form id="mainUserForm" ref="mainUserForm" method="post" v-on:submit.prevent="saveForm">
                <div class="flex flex-wrap -mx-2">
                    <div class="my-2 px-2 w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4">
                        <o-field label="First Name *"  :variant="errors.first_name ?'danger':''" :message="errors.first_name?errors.first_name.toString():''">
                            <o-input v-model.trim.lazy="user.first_name"></o-input>
                        </o-field>
                    </div>

                    <div class="my-2 px-2 w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4">
                        <o-field label="Last Name *" :variant="errors.last_name ? 'danger':''" :message="errors.last_name?errors.last_name.toString():''">
                            <o-input v-model.trim.lazy="user.last_name"></o-input>
                        </o-field>
                    </div>

                    <div class="my-2 px-2 w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4">
                        <o-field label="Middle Name" :variant="errors.middle_name ? 'danger':''" :message="errors.middle_name?errors.middle_name.toString():''">
                            <o-input v-model.trim.lazy="user.middle_name"></o-input>
                        </o-field>
                    </div>
                </div>

                <div class="flex flex-wrap -mx-2">
                    <div class="my-2 px-2 w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2">
                        <o-field label="Remarks" :variant="errors.remarks ? 'danger':''" :message="errors.remarks?errors.remarks.toString():''">
                            <o-input maxlength="2000" type="textarea" v-model.trim.lazy="user.remarks"></o-input>
                        </o-field>
                    </div>
                </div>

                <div class="flex flex-wrap -mx-2">
                    <div class="my-2 px-2 w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4">
                        <o-field label="First Name *"  :variant="errors.first_name ?'danger':''" :message="errors.first_name?errors.first_name.toString():''">
                            <o-input v-model.trim.lazy="user.first_name"></o-input>
                        </o-field>
                    </div>

                    <div class="my-2 px-2 w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4">
                        <o-field label="Last Name *" :variant="errors.last_name ? 'danger':''" :message="errors.last_name?errors.last_name.toString():''">
                            <o-input v-model.trim.lazy="user.last_name"></o-input>
                        </o-field>
                    </div>

                    <div class="my-2 px-2 w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4">
                        <o-field label="Middle Name" :variant="errors.middle_name ? 'danger':''" :message="errors.middle_name?errors.middle_name.toString():''">
                            <o-input v-model.trim.lazy="user.middle_name"></o-input>
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