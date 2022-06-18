<template>
    <div class="block w-full h-pm-100 overflow-hidden mb-8 h-fit">
        <div class="flex shrink-0 h-full whitespace-nowrap overflow-x-auto scrollbar-hidden">
            <Card2 />
            <Card2 />
            <Card2 />
            <Card2 />
            <Card2 />
            <Card2 />
        </div>
    </div>
</template>

<script>
import Card2 from './Card2.vue'
export default {
    name: 'HorizontalScroll',
    components: {
        Card2
    }
}
</script>
