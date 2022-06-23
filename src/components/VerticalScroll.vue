<template>
    <div class="block w-full h-fit overflow-hidden md:mb-8 h-fit">
        <div class="flex flex-row shrink-0 md:h-full whitespace-nowrap overflow-x-auto scrollbar-hidden">
            <Card1/>
            <Card1 />
            <Card1 />
            <Card1 />
            <Card1 />
            <Card1 />
        </div>
    </div>
</template>

<script>
import Card1 from './Card1.vue'
import Card11 from './Card1.vue'

export default {
    name:'VerticalScroll',
    components: {
    Card1,
    Card11
}
}
</script>