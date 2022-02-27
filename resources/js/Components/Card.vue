<template>
	<div class="w-full bg-dark py-5 content-center m-auto carbon">
		<div class="max-w-sm rounded overflow-hidden m-auto scroll-fade">
		  
		  <div class="px-6 py-4">
		    <div class="text-6xl mb-2">{{ title }}</div>
		    <p class="text-3xl text-base text-custom">
		      {{ message }}
		    </p>
		  </div>
		  <div class="px-6 py-4">
		    <span v-if="hashtag1" class="py-1 text-sm font-semibold text-havelock mr-2">#{{ hashtag1 }}</span>
		    <span v-if="hashtag2" class="py-1 text-sm font-semibold text-havelock mr-2">#{{ hashtag2 }}</span>
		    <span v-if="hashtag3" class="py-1 text-sm font-semibold text-havelock mr-2">#{{ hashtag3 }}</span>
		    <span v-if="hashtag4" class="py-1 text-sm font-semibold text-havelock mr-2">#{{ hashtag4 }}</span>
		    <span v-if="hashtag5" class="py-1 text-sm font-semibold text-havelock mr-2">#{{ hashtag5 }}</span>
		    <span v-if="hashtag6" class="py-1 text-sm font-semibold text-havelock ">#{{ hashtag6 }}</span>
		  </div>
		</div>
	</div>

</template>

<script>
	
	export default {
		props: [ 'bike', 'title', 'message', 'hashtag1', 'hashtag2', 'hashtag3', 'hashtag4', 'hashtag5', 'hashtag6'],

	};

</script>