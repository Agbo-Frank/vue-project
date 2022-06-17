<template>
    <div class="h-screen px-5 w-fit scrollbar overflow-y-auto">
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