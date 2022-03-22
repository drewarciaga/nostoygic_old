<script setup>
import BreezeAuthenticatedLayout from '@/Layouts/Authenticated.vue';
import { Head } from '@inertiajs/inertia-vue3';
</script>

<template>
    <Head title="Admin" />

    <BreezeAuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Admin
            </h2>
        </template>

        <div class="py-12">
            <div class="mx-auto">
                <div id="grid" class="row">
                    <h4 class="col-12">Grid Example</h4>
                    <div id="gridDemo" class="col">
                        <div class="grid-square">Item 1</div><!--
                    --><div class="grid-square">Item 2</div><!--
                    --><div class="grid-square">Item 3</div><!--
                    --><div class="grid-square">Item 4</div><!--
                    --><div class="grid-square">Item 5</div><!--
                    --><div class="grid-square">Item 6</div><!--
                    --><div class="grid-square">Item 7</div><!--
                    --><div class="grid-square">Item 8</div><!--
                    --><div class="grid-square">Item 9</div><!--
                    --><div class="grid-square">Item 10</div><!--
                    --><div class="grid-square">Item 11</div><!--
                    --><div class="grid-square">Item 12</div><!--
                    --><div class="grid-square">Item 13</div><!--
                    --><div class="grid-square">Item 14</div><!--
                    --><div class="grid-square">Item 15</div><!--
                    --><div class="grid-square">Item 16</div><!--
                    --><div class="grid-square">Item 17</div><!--
                    --><div class="grid-square">Item 18</div><!--
                    --><div class="grid-square">Item 19</div><!--
                    --><div class="grid-square">Item 20</div>
                    </div>
                </div>
            </div>
        </div>
    </BreezeAuthenticatedLayout>
</template>
<style scoped>
    .grid-square{
        width: 100px;
        height: 100px;
        display: inline-block;
        background-color: #fff;
        border: solid 1px rgb(0,0,0,0.2);
        padding: 10px;
        margin: 12px;
    }
</style>
<script>

</script>