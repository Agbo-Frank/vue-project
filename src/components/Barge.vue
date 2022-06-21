<template>
    <p @click="setActive" :class="['px-3 sm:px-4 py-1.5 rounded-full mr-2 md:mr-9 hover:bg-primary bg-grey-200 cursor-pointer dark:text-white', {'bgcolor': isColor}]" > 
        {{ text }}
    </p>
</template>

<script>

export default {
  name: 'Barge',
  props: {
    text: String,
  },
//   methods: {
//       setActive(){
//           this.isColor = !this.isColor
//       }
//   }
}
</script>