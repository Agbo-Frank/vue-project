<template>
    <button :type="type" 
        class="capitalize text-center py-2 {'bg-primary-500 text-white' : dark } rounded-lg text-xs ${large ? 'w-48' : 'w-32'}  my-4">
            {{ name }}
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
    }
}
</script>