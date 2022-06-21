<template>
    <p @click="setActive" :class="['p-2.5 rounded-full hidden md:block hover:bg-grey-200', {'bg-primary': isColor }]" > 
        <slot />
    </p>
</template>

<script>

export default {
  name: 'Icon',
  props: {
    bgcolor: String,
  },
  data() {
    return {
        isColor: false
    }
  },
  methods: {
      setActive(){
          this.isColor = !this.isColor
      }
  }
}
</script>