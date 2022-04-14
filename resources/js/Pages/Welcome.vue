<script setup>
import { defineAsyncComponent, onMounted } from 'vue'
import { Head, Link } from '@inertiajs/inertia-vue3';

import BreezeFullText from '@/Components/FullText.vue';
import BreezeCard from '@/Components/Card.vue';
import BreezeCard2 from '@/Components/Card2.vue';
import BreezeImgCaption from '@/Components/ImgCaption.vue';
import BreezeMaskedImage from '@/Components/MaskedImage.vue';
import BreezeGallery from '@/Components/Gallery.vue';
import BreezeButton from '@/Components/Button.vue';
import BreezeGlide from '@/Components/Glide.vue';
import { isMobile } from 'mobile-device-detect';
defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
    laravelVersion: String,
    phpVersion: String,
    from_logout: Boolean,
})

/*const BreezeCarousel = defineAsyncComponent({
  loader: () => import('./Components/Carousel.vue'),
  loadingComponent: Loading
})*/
const BreezeCarousel = defineAsyncComponent(()=>
    import('@/Components/Carousel.vue')
)

onMounted(async () => {
    $("div.lazy").lazyload({ 
        effect : "fadeIn"
    });
    $("img.lazy").lazyload({ 
        effect : "fadeIn"
    });
});


</script>

<template>
    <Head title="Nostoygic" />

    <!-- START MAIN BANNER -->
    <div class="relative flex items-top justify-center min-h-screen bg-main items-center sm:pt-0">
        <div v-if="canLogin" class="absolute top-0 right-0 px-6 py-4 sm:block z-10">
            <Link v-if="$page.props.auth.user" :href="route('dashboard')" class="text-sm text-white underline">
                Dashboard
            </Link>

            <template v-else>
                <Link :href="route('login')" class="text-sm text-white underline">
                    Log in
                </Link>

                <Link v-if="canRegister" :href="route('register')" class="ml-4 text-sm text-white underline">
                    Register
                </Link>
            </template>
        </div>

        <div class="max-w-90pct mx-auto sm:px-6 lg:px-8 relative h-full">
            <div class="flex justify-center pt-8 sm:justify-start sm:pt-0">

                <h1 class="text-center title-nostoygic" style="line-height:1;">
                    <span class="neonText">NOS</span><span class="neonText2 relative z-10"><br>TOY<br></span><span class="neonText">GIC</span>
                </h1>
            </div>
        </div>
    </div>
    <!-- END MAIN BANNER -->


    <!-- START ABOUT -->
    <div class="parallax-window lazy" data-parallax="scroll" data-image-src="/images/banner.jpg">
        <BreezeFullText 
            caption="Collector's Gallery"
            message="Located on a vibrant pedestrianised market street, Caravan Exmouth Market is a bright and airy space with glazed frontage on two sides and an outside terrace on the market. Serving our signature well-travelled breakfast and all day food and drinks menus, along with our freshly roasted coffee from the Caravan roastery, our style is open, relaxed and friendly. Come down for a coffee with the morning paper, a cocktail and small plates in the evening and anything in between!"
            message2="Located on a vibrant pedestrianised market street, Caravan Exmouth Market is a bright and airy space with glazed frontage on two sides and an outside terrace on the market. Serving our signature well-travelled breakfast and all day food and drinks menus, along with our freshly roasted coffee from the Caravan roastery, our style is open, relaxed and friendly. Come down for a coffee with the morning paper, a cocktail and small plates in the evening and anything in between!"
            textColor="text-white"
        >
        </BreezeFullText>
        <div class="flex flex-wrap bg-dark">
            <div class="sm:w-full lg:w-1/2 p-8">
            <BreezeCard2 
                caption="Intro"
                message="Located on a vibrant pedestrianised market street, Caravan Exmouth Market is a bright and airy space with glazed frontage on two sides and an outside terrace on the market."
                textColor="text-white"
                bg="/images/cards/card.jpg"
            >
            </BreezeCard2>
            </div>
                    <div class="sm:w-full lg:w-1/2 p-8">
            <BreezeCard2 
                caption="Intro"
                message="Located on a vibrant pedestrianised market street, Caravan Exmouth Market is a bright and airy space with glazed frontage on two sides and an outside terrace on the market."
                textColor="text-white"
                bg="/images/cards/card2.jpg"
            >
            </BreezeCard2>
            </div>
        </div>
    </div>
    <!-- END ABOUT -->



    <!-- START ABOUT -->
    <div class="parallax-window lazy" data-parallax="scroll" data-image-src="/images/banner2.jpg">
        <BreezeFullText 
            caption="Happy Toy Hunting"
            message="Located on a vibrant pedestrianised market street, Caravan Exmouth Market is a bright and airy space with glazed frontage on two sides and an outside terrace on the market. Serving our signature well-travelled breakfast and all day food and drinks menus, along with our freshly roasted coffee from the Caravan roastery, our style is open, relaxed and friendly. Come down for a coffee with the morning paper, a cocktail and small plates in the evening and anything in between!"
            message2="Located on a vibrant pedestrianised market street, Caravan Exmouth Market is a bright and airy space with glazed frontage on two sides and an outside terrace on the market. Serving our signature well-travelled breakfast and all day food and drinks menus, along with our freshly roasted coffee from the Caravan roastery, our style is open, relaxed and friendly. Come down for a coffee with the morning paper, a cocktail and small plates in the evening and anything in between!"
            textColor="text-white"
        >
        </BreezeFullText>
    </div>
    <!-- END ABOUT -->

    <!-- START ??? -->
    <!-- START CAROUSEL -->
    <div class="flex flex-wrap bg-dark">
        <div class="sm:w-full lg:w-2/3">
            <BreezeCarousel></BreezeCarousel>
        </div>
        <div class=" sm:w-full lg:w-1/3 flex">
            <BreezeCard 
                title="R9T"
                message="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."
                hashtag1="ironmacchina"
                hashtag2="ironmacchinaph"
                hashtag3="bmw"
                hashtag4="r9t"
                textColor="text-white"
                >
            </BreezeCard>
        </div>
    </div>
    <!-- END CAROUSEL -->
    <!-- END ??? -->

    <!-- START ??? -->
    <div class="parallax-window lazy" data-parallax="scroll" data-image-src="/images/banner3.jpg">
        <BreezeFullText 
            caption="TOY PHOTOGRAPHY"
            textColor="text-white"
            paddingY="py-16"
            neon="neonText3"
        >
        </BreezeFullText>
    </div>
    <!-- END ??? -->

    <!-- MARVEL LEGENDS ??? -->
    <BreezeFullText 
        caption="MARVEL LEGENDS"
        message="Located on a vibrant pedestrianised market street, Caravan Exmouth Market is a bright and airy space with glazed frontage on two sides and an outside terrace on the market. Serving our signature well-travelled breakfast and all day food and drinks menus, along with our freshly roasted coffee from the Caravan roastery, our style is open, relaxed and friendly. Come down for a coffee with the morning paper, a cocktail and small plates in the evening and anything in between!"
        message2="Located on a vibrant pedestrianised market street, Caravan Exmouth Market is a bright and airy space with glazed frontage on two sides and an outside terrace on the market. Serving our signature well-travelled breakfast and all day food and drinks menus, along with our freshly roasted coffee from the Caravan roastery, our style is open, relaxed and friendly. Come down for a coffee with the morning paper, a cocktail and small plates in the evening and anything in between!"
        textColor="text-white"
        bgColor="bg-dark"
    >
    </BreezeFullText>
    <div class="flex flex-wrap bg-dark py-5">
        <BreezeGlide
            bg="/images/swiper/1.jpg"
            bg2="/images/swiper/2.jpg"
            bg3="/images/swiper/3.jpg"
            bg4="/images/swiper/4.jpg"
            bg5="/images/swiper/5.jpg"
            bg6="/images/swiper/6.jpg"
        ></BreezeGlide>
    </div>
    <div class="hidden md:flex flex-wrap bg-dark" v-if="!isMobile">
        <div class="sm:w-full lg:w-1/2 h-screen my-8">
            <BreezeMaskedImage
                mask='mask-svg'
                maskImg="'/images/mask/x-men.svg'"
                bg="/images/x-men/x-men-1.jpg"
                bgSize="bg-contain"
            >
            </BreezeMaskedImage>
        </div>
        <div class=" sm:w-full lg:w-1/2 h-screen my-8">
            <BreezeFullText 
                caption="X-Men Fans!"
                message="Serving our signature well-travelled breakfast and all day food and drinks menus, along with our freshly roasted coffee from the Caravan roastery, our style is open, relaxed and friendly. Come down for a coffee with the morning paper, a cocktail and small plates in the evening and anything in between!"
                textColor="text-white"
                paddingY="py-10"
            >
            </BreezeFullText>
        </div>
    </div>
    <!-- END MARVEL LEGENDS ??? -->

    <!-- START GALLERY ??? -->
    <div class="flex flex-wrap bg-dark py-5">
        <BreezeGallery
            :items="[
                { img: '/images/x-men/rogue.jpg', title: 'BMW', subtitle: 'Oldskool Design' },
                { img: '/images/x-men/rogue.jpg', title: 'BMW', subtitle: 'Oldskool Design' },
                { img: '/images/x-men/rogue.jpg', title: 'BMW', subtitle: 'Oldskool Design' },
                { img: '/images/x-men/rogue.jpg', title: 'BMW', subtitle: 'Oldskool Design' },
                { img: '/images/x-men/rogue.jpg', title: 'BMW', subtitle: 'Oldskool Design' },
                { img: '/images/x-men/rogue.jpg', title: 'BMW', subtitle: 'Oldskool Design' }
            ]"
        >

        </BreezeGallery>

        <div class="py-5 m-auto">
            <BreezeButton :type="'button'">VIEW MORE</BreezeButton>
        </div>
    </div>
    <!-- END GALLERY ??? -->
</template>
<style scoped>
    .bg-gray-100 {
        background-color: #f7fafc;
        background-color: rgba(247, 250, 252, var(--tw-bg-opacity));
    }

    .border-gray-200 {
        border-color: #edf2f7;
        border-color: rgba(237, 242, 247, var(--tw-border-opacity));
    }

    .text-gray-400 {
        color: #cbd5e0;
        color: rgba(203, 213, 224, var(--tw-text-opacity));
    }

    .text-gray-500 {
        color: #a0aec0;
        color: rgba(160, 174, 192, var(--tw-text-opacity));
    }

    .text-gray-600 {
        color: #718096;
        color: rgba(113, 128, 150, var(--tw-text-opacity));
    }

    .text-gray-700 {
        color: #4a5568;
        color: rgba(74, 85, 104, var(--tw-text-opacity));
    }

    .text-gray-900 {
        color: #1a202c;
        color: rgba(26, 32, 44, var(--tw-text-opacity));
    }

    @media (prefers-color-scheme: dark) {
        .dark\:bg-gray-800 {
            background-color: #2d3748;
            background-color: rgba(45, 55, 72, var(--tw-bg-opacity));
        }

        .dark\:bg-gray-900 {
            background-color: #1a202c;
            background-color: rgba(26, 32, 44, var(--tw-bg-opacity));
        }

        .dark\:border-gray-700 {
            border-color: #4a5568;
            border-color: rgba(74, 85, 104, var(--tw-border-opacity));
        }

        .dark\:text-white {
            color: #fff;
            color: rgba(255, 255, 255, var(--tw-text-opacity));
        }

        .dark\:text-gray-400 {
            color: #cbd5e0;
            color: rgba(203, 213, 224, var(--tw-text-opacity));
        }
    }
</style>
<script>
export default {
    /*mounted() {

        if(this.from_logout){ //refresh page if from logout
            if (localStorage.getItem('reloaded')) {
                localStorage.removeItem('reloaded');
            } else {
                localStorage.setItem('reloaded', '1');
                location.reload();
            }
        }

    },*/
    unmounted() {
        localStorage.removeItem('reloaded');
    },
}
</script>
