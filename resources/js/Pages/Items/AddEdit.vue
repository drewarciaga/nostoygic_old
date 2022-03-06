<script setup>
import BreezeAuthenticatedLayout from '@/Layouts/Authenticated.vue';
import BreezeButton from '@/Components/Button.vue';
import { Head, Link, usePage  } from '@inertiajs/inertia-vue3';
</script>

<template>
    <Head title="Items" />

    <BreezeAuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                {{ $page.props.action }} Item
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
            <div class="flex flex-wrap -mx-2 overflow-hidden">

                <div class="my-2 px-2 w-full overflow-hidden sm:w-full md:w-full lg:w-1/2 xl:w-1/2">
                    <o-field label="Name">
                        <o-input></o-input>
                    </o-field>
                </div>

                <div class="my-2 px-2 w-full overflow-hidden sm:w-full md:w-full lg:w-1/2 xl:w-1/2">
                    <o-field label="Display Name">
                        <o-input></o-input>
                    </o-field>
                </div>

                <div class="my-2 px-2 w-full overflow-hidden sm:w-full md:w-full lg:w-1/2 xl:w-1/2">
                    <o-field label="Error" variant="danger" message="This field is required">
                        <o-input placeholder="Error"></o-input>
                    </o-field>
                </div>

            </div>
            <form>
                <o-field label="Name">
                    <o-input></o-input>
                </o-field>

                <div class="block text-right py-2">
                    <BreezeButton :type="'button'">
                        Submit
                    </BreezeButton>
                </div>

            </form>
        </div>
    
    </BreezeAuthenticatedLayout>
</template>
<script>


export default {
    setup() {
        const pageeAction = usePage().props.value.action

        return { pageeAction };
    },

};

</script>