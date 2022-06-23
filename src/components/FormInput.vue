<template>
    <div class='mt-4'>
        <div class="flex justify-between items-center">
            <p class='font-bold text-base capitalize mb-2 text-primary-500'>{{ name }}</p>
            
            <router-link to="/forget-password" v-if="showPasswordInputField" class="text-xs text-blue-100">forgot password?</router-link>
        </div>
        <input 
        :type="type" 
        class='flex outline-0 w-full py-2 px-3 rounded-lg border-solid border border-primary-300 focus:bg-transparent bg-primary-300' 
        :name="name"/>
    </div>
</template>

<script>
import { useRoute } from 'vue-router';

export default {
    name: 'FormInput',
    props:{
        name: String, 
        type: String
    },
    computed: {
        showPasswordInputField() {
            return useRoute().name === 'login' && this.type === 'password'
        }
    }
}
</script>