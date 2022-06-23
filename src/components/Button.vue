<template>
    <button :type="type"
    class="capitalize text-center py-2 rounded-lg text-xs my-4 w-32" 
        :class="{'bg-primary-500 text-white' : dark, 'w-48': large }">
            {{ name }}
            {{guy}}
    </button>
</template>

<script>
export default {
    name: 'Button',
    props:{
        name: String,
        dark: Boolean,
        large: Boolean,
        type: String
    },
    computed: {
        guy(){
            console.log(this.name, this.dark, this.large, this.type)
        }
    }
}
</script>