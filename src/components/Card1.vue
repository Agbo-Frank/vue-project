<template>
    <div class="w-52 h-52 rounded-2xl bg-grey-100 px-3.5 py-4 mb-8">
        <div class="w-full flex justify-between">
            <div class=" w-5/12">
                <div class="grid grid-cols-2 auto-rows-auto gap-1 w-full">
                    <img src="../assets/figmaicon.png" />
                    <img src="../assets/figmaicon.png" />
                    <img src="../assets/figmaicon.png" />
                    <img src="../assets/figmaicon.png" />
                </div>
                <p class="text-dark-200">Glass store iApp/21</p>
            </div>
            <div class="flex flex-col items-between text-dark-200 h-full">
                <p class="font-medium text-xs ml-auto">details</p>
                <p class="text-xs">Sprint #2 up jul 2</p>
            </div>
        </div>
    </div>
</template>

<script>
    import Figmaicon from '../assets/figmaicon.png'
    export default {
        name: 'Card1'
    }
</script>