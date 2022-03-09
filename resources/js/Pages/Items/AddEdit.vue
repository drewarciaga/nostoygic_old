<script setup>
import BreezeAuthenticatedLayout from '@/Layouts/Authenticated.vue';
import BreezeButton from '@/Components/Button.vue';
import { Head, Link, usePage  } from '@inertiajs/inertia-vue3';

</script>

<template>
    <Head title="Items" />

    <BreezeAuthenticatedLayout>
        <div class="py-4 text-right">
            <Link :href="route('items.index')">
                <BreezeButton :type="'button'">
                    <span class="mdi mdi-arrow-left-circle"> Back</span> 
                </BreezeButton>
            </Link>
        </div>
        <div class="p-4">
            <form id="mainItemForm" method="post" v-on:submit.prevent="saveForm">
                <div class="flex flex-wrap -mx-2 overflow-hidden">
                    <div class="my-2 px-2 w-full overflow-hidden sm:w-full md:w-full lg:w-1/2 xl:w-1/2">
                        <o-field label="Name *"  :variant="errors.name ?'danger':''" :message="errors.name?errors.name.toString():''">
                            <o-input v-model.trim.lazy="name"></o-input>
                        </o-field>
                    </div>

                    <div class="my-2 px-2 w-full overflow-hidden sm:w-full md:w-full lg:w-1/2 xl:w-1/2">
                        <o-field label="Display Name" :variant="errors.display_name ? 'danger':''" :message="errors.display_name?errors.display_name.toString():''">
                            <o-input v-model.trim.lazy="display_name"></o-input>
                        </o-field>
                    </div>
                </div>

                <div class="row">
                    <hr>
                    <div class="block text-right py-2">
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


export default {
    data() {
        return {
            errors: [],
            name: '',
            display_name: ''
        }
    },

    methods:{
        saveForm(){
            this.errors = []

            axios.post('/items',{
                name: this.name,
                display_name: this.display_name
            }).then(response => {
                //console.log(response)
                this.resetFields()
                this.success()
            }).catch(error => {
                if(error.response && error.response.status == 422){
                    this.errors = error.response.data.errors
                }
            });
        },
        resetFields(){
            this.name = ''
            this.display_name = ''
        },
        success() {
            this.$moshaToast(usePage().props.value.action + ' Item Successful', {
                type: 'success',
                position: 'top-right',
                timeout: 2000,
                hideProgressBar: 'true',
                showIcon: 'true',
            })
        },
    },

    setup() {
        const pageeAction = usePage().props.value.action

        return { pageeAction };
    },

};

</script>