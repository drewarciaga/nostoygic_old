<script setup>
import BreezeSkeletonCard3 from '@/Components/SkeletonCard3.vue';

defineProps({
    model: {
        type: String,
        default: ''
    },
    isLoading: {
        type: Boolean,
        default: false
    },
    modelData:{
        default: {}
    }
});

function showViewModel(){
    $("#viewModel").modal('show');
}

function hideViewModel(){
    $("#viewModel").modal('hide');
}

defineExpose({
    showViewModel,
    hideViewModel
});

</script>
<template>
    <div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="viewModel" tabindex="-1" aria-labelledby="viewModelLabel" aria-modal="true" role="dialog">
        <div class="modal-dialog modal-lg relative w-auto pointer-events-none">
            <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-dark-blue bg-clip-padding rounded-md outline-none text-current ">
                <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                    <h5 class="text-xl font-medium leading-normal text-white" id="viewModelLabel">
                        View {{ model }}
                    </h5>
                    <button type="button"
                    class="btn-close-modal"
                    data-bs-dismiss="modal"><span class="mdi mdi-close-circle"></span></button>
                </div>
                <section v-if="!isLoading">
                    <div class="modal-body relative p-4">
                        <div class="flex flex-wrap -mx-2 overflow-hidden sm:-mx-2 md:-mx-2 lg:-mx-2 xl:-mx-2">

                            <div class="my-2 px-2 w-full overflow-hidden sm:my-2 sm:px-2 sm:w-1/2 md:my-2 md:px-2 md:w-1/2 lg:my-2 lg:px-2 lg:w-1/2 xl:my-2 xl:px-2 xl:w-1/2">
                                <img v-if="modelData.profile_img != null" :src="modelData.profile_img" alt="" width="700" height="400" class="profile_img h-56 sm:h-full w-full object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl">
                                <img v-else src="/images/no_image.jpg" alt="" width="700" height="400" class="profile_img h-56 sm:h-full w-full object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl">
                            </div>

                            <div class="my-2 px-2 w-full overflow-hidden sm:my-2 sm:px-2 sm:w-1/2 md:my-2 md:px-2 md:w-1/2 lg:my-2 lg:px-2 lg:w-1/2 xl:my-2 xl:px-2 xl:w-1/2">
                                <div class="w-full pl-0 p-5">
                                    <div class="space-y-2">
                                        <div class="space-y-4">
                                            <h4 class="text-2xl font-semibold text-nos-400">{{ modelData.full_name }}</h4>
                                            <o-field label="USERNAME" class="model_name">
                                                <h4 class="text-lg font-semibold text-nos-400">{{ modelData.username }}</h4>
                                            </o-field>
                                            <o-field label="EMAIL" class="model_name">
                                                <h4 class="text-lg font-semibold text-nos-400">{{ modelData.email }}</h4>
                                            </o-field>
                                            <o-field label="STATUS" class="model_name">
                                                <h4 class="text-lg font-semibold text-nos-400">{{ (modelData.active==1)?'active':'deactivated' }}</h4>
                                            </o-field>
                                            <o-field label="LOCKED" class="model_name">
                                                <h4 class="text-lg font-semibold text-nos-400">{{ (modelData.locked==1)?'yes':'no' }}</h4>
                                            </o-field>
                                            <o-field label="REMARKS" class="model_name">
                                                <h4 class="text-lg font-semibold text-nos-400">{{ modelData.remarks }}</h4>
                                            </o-field>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
             
                    </div>
                </section>
                <section v-else>
                    <div class="p-4">
                        <BreezeSkeletonCard3></BreezeSkeletonCard3>
                    </div>
                    
                </section>
            </div>
        </div>
    </div>
</template>
<style scoped>
.profile_img{
    max-height: 400px;
    object-fit: cover;
}
</style>