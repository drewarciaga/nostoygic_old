<script setup>
import { Head, Link } from '@inertiajs/inertia-vue3';

</script>
<template>
    <div class="relative top-0 bg-black h-100vh">
        <!-- Sidebar starts -->
        <!-- Remove class [ hidden ] and replace [ sm:flex ] with [ flex ] -->
        <div class="w-56 absolute sm:relative bg-black shadow md:h-full flex-col justify-between hidden lg:flex min-h-screen">
            <div class="px-3">
                <ul class="mt-12">
                    <Link :href="route('dashboard')" class="text-sm ml-2">
                        <li class="flex w-full justify-between text-gray-300 hover:text-gray-500 cursor-pointer items-center">
                            <div class="flex items-center">
                                <span class="mdi mdi-view-dashboard"> Dashboard</span>
                            </div>
                            <div class="py-1 px-3 bg-gray-700 rounded text-gray-500 flex items-center justify-center text-xs">5</div>
                        </li>
                    </Link>
                    <Link :href="route('items.index')" class="text-sm ml-2">
                        <li class="flex w-full justify-between text-gray-300 hover:text-gray-500 cursor-pointer items-center">
                            <span class="mdi mdi-package-variant"> Items</span>
                            <div class="py-1 px-3 bg-gray-700 rounded text-gray-500 flex items-center justify-center text-xs">5</div>
                        </li>
                    </Link>
                    <Link :href="route('admin.index')" class="text-sm ml-2">
                        <li class="flex w-full justify-between text-gray-300 hover:text-gray-500 cursor-pointer items-center">
                            <span class="mdi mdi-card-bulleted-settings"> Admin</span>
                        </li>
                    </Link>
                    
                </ul>
                <!--<div class="flex justify-center mt-48 mb-4 w-full">
                    <div class="relative">
                        <div class="text-gray-500 absolute ml-4 inset-0 m-auto w-4 h-4">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z"></path>
                                <circle cx="10" cy="10" r="7"></circle>
                                <line x1="21" y1="21" x2="15" y2="15"></line>
                            </svg>
                        </div>
                        <input class="bg-gray-700 focus:outline-none rounded w-full text-sm text-gray-500 pl-10 py-2" type="text" placeholder="Search" />
                    </div>
                </div>-->
            </div>
            <!--<div class="px-3 border-t border-gray-700">
                <ul class="w-full flex items-center justify-between bg-gray-800">
                    <li class="cursor-pointer text-white pt-5 pb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bell" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z"></path>
                            <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"></path>
                            <path d="M9 17v1a3 3 0 0 0 6 0v-1"></path>
                        </svg>
                    </li>
                    <li class="cursor-pointer text-white pt-5 pb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-messages" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z"></path>
                            <path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10"></path>
                            <path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2"></path>
                        </svg>
                    </li>
                    <li class="cursor-pointer text-white pt-5 pb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-settings" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z"></path>
                            <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                    </li>
                    <li class="cursor-pointer text-white pt-5 pb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-archive" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z"></path>
                            <rect x="3" y="4" width="18" height="4" rx="2"></rect>
                            <path d="M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-10"></path>
                            <line x1="10" y1="12" x2="14" y2="12"></line>
                        </svg>
                    </li>
                </ul>
            </div>-->
        </div>
        <div class="w-56 z-40 absolute bg-gray-800 shadow md:h-full flex-col justify-between lg:hidden transition duration-150 ease-in-out min-h-screen" id="mobile-nav">
            <div id="openSideBar" class="h-10 w-10 bg-gray-800 absolute right-0 mt-16 -mr-10 flex items-center shadow rounded-tr rounded-br justify-center cursor-pointer" @click="sidebarHandler(true)">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-adjustments" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFFFFF" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <circle cx="6" cy="10" r="2" />
                    <line x1="6" y1="4" x2="6" y2="8" />
                    <line x1="6" y1="12" x2="6" y2="20" />
                    <circle cx="12" cy="16" r="2" />
                    <line x1="12" y1="4" x2="12" y2="14" />
                    <line x1="12" y1="18" x2="12" y2="20" />
                    <circle cx="18" cy="7" r="2" />
                    <line x1="18" y1="4" x2="18" y2="5" />
                    <line x1="18" y1="9" x2="18" y2="20" />
                </svg>
            </div>
            <div id="closeSideBar" class="hidden h-10 w-10 bg-gray-800 absolute right-0 mt-16 -mr-10 flex items-center shadow rounded-tr rounded-br justify-center cursor-pointer text-white" @click="sidebarHandler(false)">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
            </div>
            <div class="px-8">
                <ul class="mt-12">
                    <Link :href="route('dashboard')" class="text-sm ml-2">
                        <li class="flex w-full justify-between text-gray-300 hover:text-gray-500 cursor-pointer items-center">
                            <div class="flex items-center">
                                <span class="mdi mdi-view-dashboard"> Dashboard</span>
                            </div>
                            <div class="py-1 px-3 bg-gray-700 rounded text-gray-500 flex items-center justify-center text-xs">5</div>
                        </li>
                    </Link>
                    <Link :href="route('items.index')" class="text-sm ml-2">
                        <li class="flex w-full justify-between text-gray-300 hover:text-gray-500 cursor-pointer items-center">
                            <span class="mdi mdi-package-variant"> Items</span>
                            <div class="py-1 px-3 bg-gray-700 rounded text-gray-500 flex items-center justify-center text-xs">5</div>
                        </li>
                    </Link>
                    <Link :href="route('admin.index')" class="text-sm ml-2">
                        <li class="flex w-full justify-between text-gray-300 hover:text-gray-500 cursor-pointer items-center">
                            <span class="mdi mdi-card-bulleted-settings"> Admin</span>
                        </li>
                    </Link>

                </ul>
            </div>
           
        </div>
        <!-- Sidebar ends -->

    </div>
</template>

<script>
import { Head, Link } from '@inertiajs/inertia-vue3';
export default {
    name: "LightWithIconsAtBottom",
    data() {
        return {
            moved: true,
        };
    },
    mounted() {
        var sideBar = document.getElementById("mobile-nav");
        if(sideBar){
            sideBar.style.transform = "translateX(-225px)";
        }
        
    },
    methods: {
        sidebarHandler() {
            var sideBar = document.getElementById("mobile-nav");
            if(sideBar){
                sideBar.style.transform = "translateX(-225px)";
                if (this.$data.moved) {
                    sideBar.style.transform = "translateX(0px)";
                    this.$data.moved = false;
                } else {
                    sideBar.style.transform = "translateX(-225px)";
                    this.$data.moved = true;
                }
            }

        },
    },
};
</script>
