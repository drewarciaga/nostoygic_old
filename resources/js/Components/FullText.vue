<template>
    
	<div class="flex flex-wrap bg-cover w-full h-full lazy" :data-original="bg" :class="bgColor">

		<div class="m-4 md:m-8 lg:m-12 text-center relative scroll-fade" :class="textColor" >

			<div :class="paddingY">
				<h6 class="mb-10 title text-2xl md:text-4xl lg:text-6xl">{{ caption }}</h6>

				<p class="text-2xl mx-8 md:mx-12 lg:mx-20 text-custom">
					
					{{ message }}

				</p>
				<br/>

				<p class="text-2xl mx-8 md:mx-12 lg:mx-20 text-custom">
					
					{{ message2 }}

				</p>
			</div>

		</div>

	</div>

</template>

<script>
    
export default {
	props: ['bg', 'caption', 'message', 'message2', 'textColor', 'paddingY', 'bgColor'],
};

</script>