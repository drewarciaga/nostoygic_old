<script setup>
defineProps({
    title: {
        type: String,
        default: 'submit',
    },
    content: {
        default: '#',
    },
});

function showConfirmDialog(){
    $("#confirmDialog").modal('show');
}

function hideConfirmDialog(){
    $("#confirmDialog").modal('hide');
}

defineExpose({
    showConfirmDialog,
    hideConfirmDialog
});
</script>
<template>
<div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="confirmDialog" tabindex="-1" aria-labelledby="confirmDialogTitle" aria-modal="true" role="dialog">
    <div class="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
        <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                <h5 class="text-xl font-medium leading-normal text-gray-800" id="confirmDialogScrollableLabel">
                    {{ title }}
                </h5>
                <button type="button"
                    class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                    data-bs-dismiss="modal" aria-label="Close">
                </button>
            </div>
            <div class="modal-body relative p-4">
                <p> {{ content }}</p>
            </div>
            <div
                class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                <slot />
            </div>
        </div>
    </div>
</div>
</template>