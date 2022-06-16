<script setup>
import BreezeAuthenticatedLayout from '@/Layouts/Authenticated.vue';
import BreezeButton from '@/Components/Button.vue';
import BreezeCheckbox from '@/Components/Checkbox.vue';
import BreezeLoading from '@/Components/Loading.vue';
import { Head, Link  } from '@inertiajs/inertia-vue3';   
import { ref, onMounted } from 'vue'
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
        $('.btn_back').trigger('click');
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
                    <span class="mdi mdi-arrow-left-circle btn_back"> Back</span> 
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
                    <div class="my-2 px-2 w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4">
                        <o-field label="Email *"  :variant="errors.email ?'danger':''" :message="errors.email?errors.email.toString():''">
                            <o-input v-model.trim.lazy="user.email"></o-input>
                        </o-field>
                    </div>

                    <div class="my-2 px-2 w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4">
                        <o-field label="Mobile No." :variant="errors.mobile_no ? 'danger':''" :message="errors.mobile_no?errors.mobile_no.toString():''">
                            <o-input v-model.trim.lazy="user.mobile_no"></o-input>
                        </o-field>
                    </div>
                </div>

                <div class="flex flex-wrap -mx-2">
                    <div class="my-2 px-2 w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4">
                        <o-field label="Username *"  :variant="errors.username ?'danger':''" :message="errors.username?errors.username.toString():''">
                            <o-input v-model.trim.lazy="user.username"></o-input>
                        </o-field>
                    </div>

                    <div class="my-2 px-2 w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4">
                        <o-field label="Password" :variant="errors.password ? 'danger':''" :message="errors.password?errors.password.toString():''">
                            <o-input type="password" v-model.trim.lazy="user.password" password-reveal> </o-input>
                        </o-field>
                    </div>

                    <div class="my-2 px-2 w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4">
                        <o-field label="Confirm Password" :variant="errors.password_confirmation ? 'danger':''" :message="errors.password_confirmation?errors.password_confirmation.toString():''">
                            <o-input type="password" v-model.trim.lazy="user.password_confirmation" password-reveal> </o-input>
                        </o-field>
                    </div>
                </div>

                <div class="flex flex-wrap -mx-2">
                    <div class="my-2 px-2 w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4">
                        <o-field class="file" label="Profile Image" ref="profileupload" :variant="errors.profile_url ? 'danger':''" :message="errors.profile_url?errors.profile_url.toString():''">
                            <o-upload v-model="user.profile_url">
                                <o-button tag="a" variant="primary">
                                    <span class="mdi mdi-upload">Upload</span>
                                </o-button>
                            </o-upload>
                            <span class="file-name" v-if="user.profile_url">
                                {{ user.profile_url.name }}
                            </span>
                        </o-field>
                        <o-field label="Delete Profile Image?" v-if="user.profile_img != null">
                            <BreezeCheckbox v-model:checked="user.delete_profile_img" color="secondary" />
                        </o-field>
                    </div>
                </div>

                <div class="flex flex-wrap -mx-2">
                    <div class="my-2 px-2 w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2">
                        <o-field label="Remarks" :variant="errors.remarks ? 'danger':''" :message="errors.remarks?errors.remarks.toString():''">
                            <o-input maxlength="2000" type="textarea" v-model.trim.lazy="user.remarks" :hasCounter="true"></o-input>
                        </o-field>
                    </div>
                </div>

                <div v-if="action == 'Edit'" class="flex flex-wrap -mx-1 overflow-hidden sm:-mx-1 md:-mx-1 lg:-mx-1 xl:-mx-1">
                    <div class="my-1 px-1 w-1/3 overflow-hidden sm:my-1 sm:px-1 sm:w-1/3 md:my-1 md:px-1 md:w-1/6 lg:my-1 lg:px-1 lg:w-1/6 xl:my-1 xl:px-1 xl:w-1/6">
                        <o-field class="py-4">
                            <o-switch v-model="user.active" true-value="1" false-value="0">
                                Active
                            </o-switch>
                        </o-field>
                    </div>

                    <div class="my-1 px-1 w-1/3 overflow-hidden sm:my-1 sm:px-1 sm:w-1/3 md:my-1 md:px-1 md:w-1/6 lg:my-1 lg:px-1 lg:w-1/6 xl:my-1 xl:px-1 xl:w-1/6">
                        <o-field class="py-4">
                            <o-switch v-model="user.locked" true-value="1" false-value="0">
                                Locked
                            </o-switch>
                        </o-field>
                    </div>

                    <div class="my-1 px-1 w-1/3 overflow-hidden sm:my-1 sm:px-1 sm:w-1/3 md:my-1 md:px-1 md:w-1/6 lg:my-1 lg:px-1 lg:w-1/6 xl:my-1 xl:px-1 xl:w-1/6">
                        <!-- Column Content -->
                    </div>

                    <div class="my-1 px-1 w-1/3 overflow-hidden sm:my-1 sm:px-1 sm:w-1/3 md:my-1 md:px-1 md:w-1/6 lg:my-1 lg:px-1 lg:w-1/6 xl:my-1 xl:px-1 xl:w-1/6">
                        <!-- Column Content -->
                    </div>

                    <div class="my-1 px-1 w-1/3 overflow-hidden sm:my-1 sm:px-1 sm:w-1/3 md:my-1 md:px-1 md:w-1/6 lg:my-1 lg:px-1 lg:w-1/6 xl:my-1 xl:px-1 xl:w-1/6">
                        <!-- Column Content -->
                    </div>

                    <div class="my-1 px-1 w-1/3 overflow-hidden sm:my-1 sm:px-1 sm:w-1/3 md:my-1 md:px-1 md:w-1/6 lg:my-1 lg:px-1 lg:w-1/6 xl:my-1 xl:px-1 xl:w-1/6">
                        <!-- Column Content -->
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