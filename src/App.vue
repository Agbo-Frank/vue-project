<template>
  <Header />
  <div class="w-full h-full">
    <Project />
  </div>
</template>

<script>
import Header from './components/Header'
import Project from './components/Project'

export default {
  name: 'App',
  components: {
    Header,
    Project
  }
}

</script>

<style>

</style>
