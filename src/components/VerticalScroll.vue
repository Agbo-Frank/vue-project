<template>
    <div class="h-screen w-fit px-5 scrollbar overflow-y-auto overfow-x-hidden">
        <Card1 />
        <Card1 />
        <Card1 />
        <Card1 />
        <Card1 />
    </div>
</template>

<script>
import Card1 from './Card1.vue'

export default {
    name:'VerticalScroll',
    components: {
        Card1
    }
}
</script>