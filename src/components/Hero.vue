<template>
    <div className="flex w-screen h-screen">
        <div className="hidden md:flex justify-center items-center h-full w-5/12 bg-primary-300">
            <img src="../assets/image-bg.png" />
        </div>
        <div className="flex justify-center items-center w-full md:w-7/12 h-full relative">
            <slot />
        </div>
    </div>
</template>

<script>

export default {
  name: 'Hero'
}
</script>