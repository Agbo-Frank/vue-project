<template>
    <div class="block w-full h-fit overflow-hidden md:mb-8 h-fit">
        <div class="flex flex-col md:flex-row shrink-0 md:h-full whitespace-nowrap overflow-x-auto scrollbar-hidden">
            <Card2 :header="true"/>
            <Card2 :header="false"/>
            <Card2 :header="false"/>
            <Card2 :header="false"/>
            <Card2 :header="false"/>
            <Card2 :header="false"/>
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
