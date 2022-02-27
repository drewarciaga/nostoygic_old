<template>
    <div
        class="container flex items-center justify-center h-screen m-auto mb-12 bg-fixed bg-center bg-cover" :class="[mask, bgSize]" :style="[bgStyle, maskImgStyle]"
        >
    </div>
</template>

<script>
    
export default {
	props: ['bg', 'mask', 'maskImg', 'bgSize'],
    computed: {
        bgStyle () {
            return  'background-image: url(' +this.bg+');'
        },
        maskImgStyle () {
            return  'mask-image: url(' +this.maskImg+');'
        }
    }
};

</script>

<style scoped>
	
	.mtop-70 {
		margin-top: 70%;
	}
    .bg-contain{
        background-size: contain !important;
        background-repeat: no-repeat;
        background-position: initial;
    }
    .bg-cover{
        background-repeat: no-repeat;
        background-position: initial;
    }

</style>