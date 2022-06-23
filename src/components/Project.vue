<template>
    <div class="bg-grey-300 dark:bg-dark-200 w-full h-fit rounded-t-3xl">
        <div class="flex flex-col md:flex-row items-center justify-between mx-10 py-8">
            <div class="flex items-center gap-2">
                <p class="p-2.5 rounded-full hidden md:block hover:bg-grey-200" > 
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path class="dark:stroke-white"  d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path class="dark:stroke-white"  d="M21 21L16.65 16.65" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </p>
                <input type="text" class="bg-transparent dark:text-white" placeholder="search project or keyword..."/>
            </div>
            <div class="flex items-center justify-center md:justify-evenly">
                <Barge text="All" />
                <Barge text="Recent" />
                <Barge text="Archive" />
                <div class="relative flex justify-between items-center rounded-full w-20 h-10 bg-grey-200 p-1">
                    <div class="absolute w-9 h-9 rounded-full bg-primary-600 dark:right-1"></div>
                    <span @click="disenableDarkMode" class="material-symbols-outlined cursor-pointer md-18 ml-1">light_mode</span>
                    <span @click="enableDarkMode" class="material-symbols-outlined cursor-pointer md-18 mr-1">nightlight</span>
                </div>
            </div>
        </div>
        <div class="md:hidden">
            <VerticalScroll />
        </div>
        <div class="flex mx-2 md:mx-10 flex-col mt-3 justify-between">
            <HorizontalScroll />
            <HorizontalScroll />
            <HorizontalScroll />
            <HorizontalScroll />
            <!-- <HorizontalScroll />
            <HorizontalScroll /> -->
            <!-- <div class=" w-full md:w-pm-80 md:h-screen flex md:flex-row flex-nowrap md:block scrollbar overflow-y-auto overfow-x-hidden">
                <HorizontalScroll />
                <HorizontalScroll />
            </div> -->
        </div>
    </div>
</template>

<script>
import Icon from './Icon'
import Barge from './Barge'
import VerticalScroll from './VerticalScroll.vue'
import HorizontalScroll from './HorizontalScroll.vue'

export default {
    name: 'Project',
    components: {
    Icon,
    Barge,
    VerticalScroll,
    HorizontalScroll
  },
  methods:{
      enableDarkMode(){
          document.documentElement.classList.add('dark')
      },
      disenableDarkMode(){
          document.documentElement.classList.remove('dark')
      }
  }
}
</script>