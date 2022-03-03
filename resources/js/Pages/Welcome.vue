<script setup>
import { Head, Link } from '@inertiajs/inertia-vue3';
import BreezeCarousel from '@/Components/Carousel.vue';
import BreezeFullText from '@/Components/FullText.vue';
import BreezeCard from '@/Components/Card.vue';
import BreezeImgCaption from '@/Components/ImgCaption.vue';
import BreezeMaskedImage from '@/Components/MaskedImage.vue';
import BreezeGallery from '@/Components/Gallery.vue';
import BreezeButton from '@/Components/Button.vue';
import BreezeButton2 from '@/Components/Button2.vue';
import { isMobile } from 'mobile-device-detect';
defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
    laravelVersion: String,
    phpVersion: String,
})
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

    <!-- START Intro -->
    <div class="relative flex items-top justify-center min-h-screen bg-nos-blue dark:bg-gray-900 sm:items-center sm:pt-0">
        <BreezeFullText 
            caption="Intro"
            message="Located on a vibrant pedestrianised market street, Caravan Exmouth Market is a bright and airy space with glazed frontage on two sides and an outside terrace on the market. Serving our signature well-travelled breakfast and all day food and drinks menus, along with our freshly roasted coffee from the Caravan roastery, our style is open, relaxed and friendly. Come down for a coffee with the morning paper, a cocktail and small plates in the evening and anything in between!"
            message2="Located on a vibrant pedestrianised market street, Caravan Exmouth Market is a bright and airy space with glazed frontage on two sides and an outside terrace on the market. Serving our signature well-travelled breakfast and all day food and drinks menus, along with our freshly roasted coffee from the Caravan roastery, our style is open, relaxed and friendly. Come down for a coffee with the morning paper, a cocktail and small plates in the evening and anything in between!"
            textColor="text-white"
        >
        </BreezeFullText>
    </div>
    <!-- START Intro -->

    <!-- START ABOUT -->
    <div class="parallax-window lazy" data-parallax="scroll" data-image-src="/images/banner.jpg">
            <BreezeFullText 
                caption="Happy Hunting"
                message="Located on a vibrant pedestrianised market street, Caravan Exmouth Market is a bright and airy space with glazed frontage on two sides and an outside terrace on the market. Serving our signature well-travelled breakfast and all day food and drinks menus, along with our freshly roasted coffee from the Caravan roastery, our style is open, relaxed and friendly. Come down for a coffee with the morning paper, a cocktail and small plates in the evening and anything in between!"
                message2="Located on a vibrant pedestrianised market street, Caravan Exmouth Market is a bright and airy space with glazed frontage on two sides and an outside terrace on the market. Serving our signature well-travelled breakfast and all day food and drinks menus, along with our freshly roasted coffee from the Caravan roastery, our style is open, relaxed and friendly. Come down for a coffee with the morning paper, a cocktail and small plates in the evening and anything in between!"
                textColor="text-white"
            >
        </BreezeFullText>
    </div>
    <!-- END ABOUT -->

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
                >
            </BreezeCard>
        </div>
    </div>
    <!-- END CAROUSEL -->

    <!-- START ABOUT -->
    <div class="parallax-window lazy" data-parallax="scroll" data-image-src="/images/banner2.jpg">
        <BreezeFullText 
            caption="ABOUT US"
            message="Located on a vibrant pedestrianised market street, Caravan Exmouth Market is a bright and airy space with glazed frontage on two sides and an outside terrace on the market. Serving our signature well-travelled breakfast and all day food and drinks menus, along with our freshly roasted coffee from the Caravan roastery, our style is open, relaxed and friendly. Come down for a coffee with the morning paper, a cocktail and small plates in the evening and anything in between!"
            message2="Located on a vibrant pedestrianised market street, Caravan Exmouth Market is a bright and airy space with glazed frontage on two sides and an outside terrace on the market. Serving our signature well-travelled breakfast and all day food and drinks menus, along with our freshly roasted coffee from the Caravan roastery, our style is open, relaxed and friendly. Come down for a coffee with the morning paper, a cocktail and small plates in the evening and anything in between!"
            textColor="text-white"
        >
        </BreezeFullText>
    </div>
    <!-- END ABOUT -->

    <!-- START ??? -->
    <div class="flex flex-wrap bg-dark">
        <div class="sm:w-full lg:w-1/2 h-screen">
            <BreezeImgCaption
                bg="/images/x-men/phoenix2.jpg"
                caption="Our Team"
                message="we started this when we were watching porn hub">
            </BreezeImgCaption>
        </div>
        <div class=" sm:w-full lg:w-1/2 h-screen">
            <BreezeImgCaption
                bg="/images/x-men/rogue.jpg"
                >
            </BreezeImgCaption>
        </div>
    </div>
    <!-- END ??? -->

    <!-- START ??? -->
    <div class="parallax-window lazy" data-parallax="scroll" data-image-src="/images/banner3.jpg">
        <BreezeFullText 
            caption="TOY PHOTOGRAPHY"
            textColor="text-white"
            paddingY="py-16"
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
            <BreezeButton :type="button">VIEW MORE</BreezeButton>
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
