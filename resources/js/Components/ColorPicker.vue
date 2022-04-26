<template>
  <div>
     <color-picker format="hex" v-model:pureColor="pureColor" v-model:gradientColor="gradientColor"/>
  </div>
</template>
<script>
import { ColorPicker } from "vue3-colorpicker";
import "vue3-colorpicker/style.css";
import { ref } from "vue";
import { defineComponent, watch } from 'vue'

export default defineComponent({
    props: ['modelValue'],
    components: { ColorPicker },
    setup(props,context) {

        const pureColor = ref("red");
        const gradientColor = ref("linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 100%)");

        watch(pureColor, function(newValue,oldValue){
            context.emit('update:modelValue', newValue)
        })

        watch(() => props.modelValue, (newValue,oldValue) => {
            if(newValue != null && newValue != ''){
                pureColor.value = newValue
            }else{
                pureColor.value = "red"
            }
            
        });

        return { pureColor, gradientColor }
    }
});
</script>