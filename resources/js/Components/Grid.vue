
<template>
    <div>
        <grid-layout :layout.sync="layout"
                     :responsive-layouts="layouts"
                     :col-num="4"
                     :cols="cols"
                     :row-height="50"
                     :is-draggable="draggable"
                     :is-resizable="resizable"
                     :vertical-compact="true"
                     :use-css-transforms="true"
                     :responsive="responsive"
                     @breakpoint-changed="breakpointChangedEvent"
                     :verticalCompact="true"
        >
            <grid-item v-for="item in layout" :key="item.i"
                       :x="item.x"
                       :y="item.y"
                       :w="item.w"
                       :h="item.h"
                       :i="item.i"
                       :max-h="5"
                       :min-h="5"
                       class="GradientBorder"
                       drag-allow-from=".vue-draggable-handle"
                       drag-ignore-from=".no-drag"
            >
       
                <div class="flex justify-center">
                    <div class="block rounded-lg shadow-lg bg-white max-w-sm text-center">
                        <div class="flex py-6 px-6">
                            <span class="mdi mdi-drag-horizontal-variant text-black vue-draggable-handle px-6 mx-4" style="font-size:25pt"></span>
                        </div>
                        <span class="mdi text-nos-600 m-auto absolute top-2" :class="item.icon" style="font-size:35px; margin-left:-18px;"></span>
                        <div class="p-6">
                            <h5 class="text-gray-900 text-xl font-medium mb-2" style="height:28px; width:200px">{{item.title?item.title:""}}</h5>
                            <p class="text-gray-700 text-sm mb-4" style="height:70px; width:200px">
                                {{item.desc?item.desc:""}}
                            </p>
                            <Link :href="route('items.create')">
                                <BreezeButton :type="'button'">
                                    <span>Add Item</span> 
                                </BreezeButton>
                            </Link>
                        </div>
                        <div class="py-3 px-6">

                        </div>
                    </div>
                </div>
            </grid-item>
        </grid-layout>
    </div>
</template>

<script>
import BreezeButton from '@/Components/Button.vue';
import { Link } from '@inertiajs/inertia-vue3';
import { GridLayout, GridItem } from "vue-grid-layout"
let testLayouts = {
    lg: [
        {"x":0,"y":0,"w":1,"h":5,"i":"0", "title":"Users", "desc":"Create and Update Users", "icon":"mdi-account"},
        {"x":2,"y":0,"w":1,"h":5,"i":"1", "title":"Settings", "desc":"General app settings", "icon":"mdi-cogs"},
        {"x":4,"y":0,"w":1,"h":5,"i":"2", "title":"Brands"},
        {"x":6,"y":0,"w":1,"h":5,"i":"3", "title":"Groups"},
        {"x":8,"y":0,"w":1,"h":5,"i":"4", "title":"Series"},
        {"x":8,"y":0,"w":1,"h":5,"i":"5", "title":"Line"},
    ],
};
export default {
    components: {
        GridLayout,
        GridItem,
        BreezeButton, Link

    },
    data() {
        return {
            cols: {
                xl:10,
                lg:6,
                md:4,
                sm:3,
                xs:1,
                xxs:1
            },
            layouts: testLayouts,
            layout: testLayouts["lg"],
            draggable: true,
            resizable: false,
            responsive: true,
        }
    },
    methods: {
        breakpointChangedEvent: function(newBreakpoint, newLayout){
            console.log("BREAKPOINT CHANGED breakpoint=", newBreakpoint, ", layout: ", newLayout );
        },
    }
}
</script>

<style scoped>
.vue-grid-layout {
    background: none;
}
.vue-grid-item:not(.vue-grid-placeholder) {
    border: 4px solid linear-gradient(90deg,#2746a2 0%, #8017ac 80%);

    color:white;
}
.vue-grid-item .resizing {
    opacity: 0.9;
}
.vue-grid-item .static {
    background: #cce;
}
.vue-grid-item .text {
    font-size: 24px;
    text-align: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    height: 100%;
    width: 100%;
}
.vue-grid-item .no-drag {
    height: 100%;
    width: 100%;
}
.vue-grid-item .minMax {
    font-size: 12px;
}
.vue-grid-item .add {
    cursor: move;
}
.vue-draggable-handle {
    position: absolute;
    width: 20px;
    height: 20px;
    top: 0;
    left: 0;
    background-position: bottom right;
    padding: 0 8px 8px 0;
    background-repeat: no-repeat;
    background-origin: content-box;
    box-sizing: border-box;
    cursor: move;
}
.module-border-wrap {
  max-width: 250px;
  padding: 1rem;
  position: relative;
  background: linear-gradient(to right, rgb(60, 85, 199), purple);
  padding: 3px;
}

.module {
  background: #222;
  color: white;
  padding: 2rem;
}
</style>