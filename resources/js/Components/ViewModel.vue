<script setup>
import BreezCard3 from '@/Components/Card3.vue';
import BreezeLoading from '@/Components/Loading.vue';
import BreezeSkeletonCard3 from '@/Components/SkeletonCard3.vue';
import { onMounted, watch } from 'vue'
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

defineExpose({
    showViewModel,
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
                        <BreezCard3 :mainImg="modelData.image_url" :name="modelData.name" :description="modelData.description"></BreezCard3>
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