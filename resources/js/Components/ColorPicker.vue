<template>
  <div>
     <color-picker v-model:pureColor="pureColor" v-model:gradientColor="gradientColor"/>
  </div>
</template>
<script>
import { ColorPicker } from "vue3-colorpicker";
import "vue3-colorpicker/style.css";
import { ref } from "vue";
import { defineComponent } from 'vue'

export default defineComponent({
    components: { ColorPicker },
    setup() {
        const pureColor = ref("red");
        const gradientColor = ref("linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 100%)");

        return { pureColor, gradientColor }
    }
});
</script>