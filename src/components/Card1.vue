<template>
    <div 
        class="flex flex-col shrink-0 w-56 bg-grey-300 h-fit py-3 mr-12 whitespace-normal"
        :class="{' md:sticky md:left-0 pr-5 md:pr-2 dark:bg-dark-200': header}">
        <div class="dark:text-white">
            <p 
            class="text-xs ">Top Priority</p>
            <p class="font-bold hidden my-5">My To-do list to finish before july</p>
        </div>
        <ol class="w-full h-56 rounded-3xl bg-grey-200 ring ring-grey-400 px-5 divide-y divide-dark-100 dark:divide-white"
        :class="{'bg-grey-100': header}">
            <!-- <li class="flex gap-2 self-start items-center dark:text-white py-4">
                <p class="rounded-lg self-start border border-solid border-black dark:border-white py-2 px-2 item text-xs">1</p>
                <div>
                    <p class="font-bold text-sm">Create a waireframe </p>
                    <p class="text-xs capitalize">tody</p>
                </div>
            </li>
            <li class="flex gap-2 self-start items-center dark:text-white py-4">
                <p class="rounded-lg self-start border border-solid border-black dark:border-white py-2 px-2 item text-xs">2</p>
                <div>
                    <p class="font-bold text-sm">Create a waireframe </p>
                    <p class="text-xs capitalize">tody</p>
                </div>
            </li>
            <li class="flex gap-2 self-start items-center dark:text-white py-4">
                <p class="rounded-lg self-start border border-solid border-black dark:border-white py-2 px-2 item text-xs">3</p>
                <div>
                    <p class="font-bold text-sm">Create a waireframe </p>
                    <p class="text-xs capitalize">tody</p>
                </div>
            </li> -->
        </ol>
    </div>
</template>

<script>
    import Figmaicon from '../assets/figmaicon.png'
    export default {
        name: 'Card1'
    }
</script>