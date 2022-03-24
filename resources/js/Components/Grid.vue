<template>
    <div>
        <grid-layout :layout.sync="layout"
                     :responsive-layouts="layouts"
                     :col-num="4"
                     :cols="4"
                     :row-height="55"
                     :is-draggable="draggable"
                     :is-resizable="resizable"
                     :vertical-compact="true"
                     :use-css-transforms="true"
                     :responsive="responsive"
                     @breakpoint-changed="breakpointChangedEvent"
        >
            <grid-item v-for="item in layout" :key="item.i"
                       :x="item.x"
                       :y="item.y"
                       :w="item.w"
                       :h="item.h"
                       :i="item.i"
                       :max-h="55"
                       :min-h="55"
                       class="GradientBorder"
            >
               <div class="module-border-wrap"><div class="module">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero pariatur corporis quaerat voluptatum eos tempora temporibus nisi voluptates sed, exercitationem sequi dolore culpa incidunt accusamus, quasi unde reprehenderit ea molestias.
</div></div>
            </grid-item>
        </grid-layout>
    </div>
</template>

<script>
import { GridLayout, GridItem } from "vue-grid-layout"
let testLayouts = {
    lg: [
        {"x":0,"y":0,"w":1,"h":6,"i":"0", "title":"Users"},
        {"x":2,"y":0,"w":1,"h":6,"i":"1", "title":"Settings"},
        {"x":4,"y":0,"w":1,"h":6,"i":"2", "title":"Brands"},
        {"x":6,"y":0,"w":1,"h":6,"i":"3", "title":"Groups"},
        {"x":8,"y":0,"w":1,"h":6,"i":"4", "title":"Series"},
        {"x":8,"y":0,"w":1,"h":6,"i":"5", "title":"Lines"},
    ],
};
export default {
    components: {
        GridLayout,
        GridItem
    },
    data() {
        return {
            layouts: testLayouts,
            layout: testLayouts["lg"],
            draggable: true,
            resizable: true,
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
    cursor: pointer;
}
.vue-draggable-handle {
    position: absolute;
    width: 20px;
    height: 20px;
    top: 0;
    left: 0;
    background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'><circle cx='5' cy='5' r='5' fill='#999999'/></svg>") no-repeat;
    background-position: bottom right;
    padding: 0 8px 8px 0;
    background-repeat: no-repeat;
    background-origin: content-box;
    box-sizing: border-box;
    cursor: pointer;
}
.module-border-wrap {
  max-width: 250px;
  padding: 1rem;
  position: relative;
  background: linear-gradient(to right, red, purple);
  padding: 3px;
}

.module {
  background: #222;
  color: white;
  padding: 2rem;
}
</style>