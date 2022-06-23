<template>
    <header class="relative flex justify-between w-full px-4  md:px-10 py-4">
        <div class="flex justify-between w-full md:w-3/12">
            <div class="flex justify-between items-center w-full">
                <h3 class="text-xl font-black mr-7 dark:text-white">Logo</h3>
                <Icon>
                    <svg class="hidden md:block" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path class="dark:stroke-white" d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path class="dark:stroke-white" d="M3 9H21" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path class="dark:stroke-white" d="M9 21V9" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg> 
                </Icon>
                <Icon>
                    <svg class="hidden md:block" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path class="dark:stroke-white"  d="M19 9.5C19.0034 10.8199 18.6951 12.1219 18.1 13.3C17.3944 14.7117 16.3098 15.8992 14.9674 16.7293C13.6251 17.5594 12.0782 17.9994 10.5 18C9.18013 18.0034 7.87812 17.6951 6.7 17.1L1 19L2.9 13.3C2.30493 12.1219 1.99656 10.8199 2 9.5C2.00061 7.92176 2.44061 6.37485 3.27072 5.03255C4.10083 3.69025 5.28825 2.60557 6.7 1.9C7.87812 1.30493 9.18013 0.996557 10.5 0.999998H11C13.0843 1.11499 15.053 1.99476 16.5291 3.47086C18.0052 4.94695 18.885 6.91565 19 9V9.5Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </Icon>
                <Icon>
                    <svg class="hidden md:block" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path class="dark:stroke-white"  d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path class="dark:stroke-white"  d="M16 2V6" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path class="dark:stroke-white"  d="M8 2V6" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path class="dark:stroke-white"  d="M3 10H21" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg> 
                </Icon>
                <Icon>
                    <svg class="hidden md:block" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path class="dark:stroke-white"  d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path class="dark:stroke-white"  d="M16 2V6" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path class="dark:stroke-white"  d="M8 2V6" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path class="dark:stroke-white"  d="M3 10H21" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg> 
                </Icon>

                <Icon @click="toggleMenu">
                    <svg class="block md:hidden" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path class="dark:stroke-white"  d="M21 10H3" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path class="dark:stroke-white"  d="M21 6H3" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path class="dark:stroke-white"  d="M21 14H3" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path class="dark:stroke-white"  d="M21 18H3" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </Icon>
            </div>
        </div>
        <div class="hidden md:flex justify-between md:w-3/12"> 
            <div> 
                <Icon>
                    <svg class="hidden md:block"  width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path class="dark:stroke-white"  d="M20 2H4C2.89543 2 2 2.89543 2 4V8C2 9.10457 2.89543 10 4 10H20C21.1046 10 22 9.10457 22 8V4C22 2.89543 21.1046 2 20 2Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path class="dark:stroke-white"  d="M20 14H4C2.89543 14 2 14.8954 2 16V20C2 21.1046 2.89543 22 4 22H20C21.1046 22 22 21.1046 22 20V16C22 14.8954 21.1046 14 20 14Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path class="dark:stroke-white"  d="M6 6H6.01" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path class="dark:stroke-white"  d="M6 18H6.01" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </Icon> 
            </div>
            <div class="hidden md:flex justify-between md:w-4/12">
                <Icon>
                    <svg class="hidden md:block" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path class="dark:stroke-white"  d="M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 6.65685 16.3431 8 18 8Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path class="dark:stroke-white"  d="M6 15C7.65685 15 9 13.6569 9 12C9 10.3431 7.65685 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path class="dark:stroke-white"  d="M18 22C19.6569 22 21 20.6569 21 19C21 17.3431 19.6569 16 18 16C16.3431 16 15 17.3431 15 19C15 20.6569 16.3431 22 18 22Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path class="dark:stroke-white"  d="M8.59 13.51L15.42 17.49" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path class="dark:stroke-white"  d="M15.41 6.51001L8.59 10.49" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </Icon>
                <Icon>
                    <svg class="hidden md:block" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path class="dark:stroke-white"  d="M19 11H5C3.89543 11 3 11.8954 3 13V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V13C21 11.8954 20.1046 11 19 11Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path class="dark:stroke-white"  d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg> 
                </Icon>
            </div>
        </div>
        <div class="hidden md:flex justify-between md:w-2/12">
                <Icon>
                    <svg class="hidden md:block" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path class="dark:stroke-white" d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="black"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path class="dark:stroke-white" d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="black"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg> 
                </Icon>
                <Icon>
                    <svg class="hidden md:block" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path class="dark:stroke-white"  d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="black"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path class="dark:stroke-white"  d="M14 2V8H20" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path class="dark:stroke-white"  d="M16 13H8" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path class="dark:stroke-white"  d="M16 17H8" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path class="dark:stroke-white"  d="M10 9H9H8" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg> 
                </Icon>
                <Icon>
                    <svg class="hidden md:block" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path class="dark:stroke-white"  d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="black"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path class="dark:stroke-white"  d="M14 2V8H20" stroke="black"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path class="dark:stroke-white"  d="M16 13H8" stroke="black"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path class="dark:stroke-white"  d="M16 17H8" stroke="black"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path class="dark:stroke-white"  d="M10 9H9H8" stroke="black"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </Icon>
        </div>

        <div
        class="absolute top-0 left-0 py-8 px-9 bg-white dark:bg-dark-100 w-full z-50"
        :class="{'hidden': isMenuOpen}">
            <i @click="toggleMenu" class="fas fa-times hover:text-error dark:hover:text-error dark:text-white absolute right-7 top-7 font-bold text-2xl "></i>
            <ul class="flex flex-col gap-5">
                <li class="flex items-center gap-4">
                    <Icon>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path class="dark:stroke-white"  d="M20 2H4C2.89543 2 2 2.89543 2 4V8C2 9.10457 2.89543 10 4 10H20C21.1046 10 22 9.10457 22 8V4C22 2.89543 21.1046 2 20 2Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path class="dark:stroke-white"  d="M20 14H4C2.89543 14 2 14.8954 2 16V20C2 21.1046 2.89543 22 4 22H20C21.1046 22 22 21.1046 22 20V16C22 14.8954 21.1046 14 20 14Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path class="dark:stroke-white"  d="M6 6H6.01" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path class="dark:stroke-white"  d="M6 18H6.01" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </Icon>
                    <p class="font-semibold dark:text-white">Menu</p>
                </li>

                <li class="flex items-center gap-4">
                    <Icon>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path class="dark:stroke-white" d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path class="dark:stroke-white" d="M3 9H21" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path class="dark:stroke-white" d="M9 21V9" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg> 
                    </Icon>
                    <p class="font-semibold dark:text-white">Menu</p>
                </li>

                <li class="flex items-center gap-4">
                    <Icon>
                        <svg  width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path class="dark:stroke-white"  d="M19 9.5C19.0034 10.8199 18.6951 12.1219 18.1 13.3C17.3944 14.7117 16.3098 15.8992 14.9674 16.7293C13.6251 17.5594 12.0782 17.9994 10.5 18C9.18013 18.0034 7.87812 17.6951 6.7 17.1L1 19L2.9 13.3C2.30493 12.1219 1.99656 10.8199 2 9.5C2.00061 7.92176 2.44061 6.37485 3.27072 5.03255C4.10083 3.69025 5.28825 2.60557 6.7 1.9C7.87812 1.30493 9.18013 0.996557 10.5 0.999998H11C13.0843 1.11499 15.053 1.99476 16.5291 3.47086C18.0052 4.94695 18.885 6.91565 19 9V9.5Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </Icon>
                    <p class="font-semibold dark:text-white">Chat</p>
                </li>

                <li class="flex items-center gap-4">
                    <Icon>
                        <svg  width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path class="dark:stroke-white"  d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path class="dark:stroke-white"  d="M16 2V6" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path class="dark:stroke-white"  d="M8 2V6" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path class="dark:stroke-white"  d="M3 10H21" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg> 
                    </Icon>
                    <p class="font-semibold dark:text-white">Setting</p>
                </li>

                <li class="flex items-center gap-4">
                    <Icon>
                       <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path class="dark:stroke-white"  d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path class="dark:stroke-white"  d="M16 2V6" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path class="dark:stroke-white"  d="M8 2V6" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path class="dark:stroke-white"  d="M3 10H21" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg> 
                    </Icon>
                    <p class="font-semibold dark:text-white">Share</p>
                </li>
                <!-- <li class="flex items-center gap-4">
                    <Icon>
                       <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path class="dark:stroke-white"  d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path class="dark:stroke-white"  d="M16 2V6" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path class="dark:stroke-white"  d="M8 2V6" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path class="dark:stroke-white"  d="M3 10H21" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg> 
                    </Icon>
                    <p class="font-semibold dark:text-white">Share</p>
                </li>
                <li class="flex items-center gap-4">
                    <Icon>
                       <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path class="dark:stroke-white"  d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path class="dark:stroke-white"  d="M16 2V6" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path class="dark:stroke-white"  d="M8 2V6" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path class="dark:stroke-white"  d="M3 10H21" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg> 
                    </Icon>
                    <p class="font-semibold dark:text-white">Share</p>
                </li> -->
            </ul>
            <p class="text-center font-bold text-error">Logout</p>
        </div>
    </header>
</template>

<script>
import Icon from './Icon.vue'
import Icon1 from './Icon.vue'

export default {
    name: 'Header',
    components: {
        Icon,
        Icon1
    },
    data(){
        return {
            isMenuOpen: true
        }
    },
    methods: {
        toggleMenu(){
            this.isMenuOpen = !this.isMenuOpen
        }
    }
}
</script>

<style scoped>

</style>