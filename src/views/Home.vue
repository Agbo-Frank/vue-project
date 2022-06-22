<template>
    <div>
        <Header />
        <div class="w-1/2 flex justify-between ml-4 md:ml-10 my-10 text-4xl dark:text-white capitalize">
            <p>Current Project</p>
            <p>31 jun</p>
        </div>
        <div class="w-full h-full">
            <Project />
        </div>
    </div>
</template>

<script>
import Header from '../components/Header'
import Project from '../components/Project'

export default {
  name: 'Home',
  components: {
    Header,
    Project
  }
}

</script>
