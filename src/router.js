import { createRouter, createWebHistory } from "vue-router"
import Login from './views/Login.vue'
import Home from './views/Home.vue'
import Register from './views/Register.vue'
import ForgetPassword from './views/ForgetPassword.vue'

const routes = [
    { 
      path: '/', 
      component: Home 
    },
    { 
      path: '/login', 
      name: 'login',
      component: Login 
    },
    { 
      path: '/register', 
      name: 'register',
      component: Register
    },
    { 
      path: '/forget-password', 
      component: ForgetPassword
    },
  ]
  
const router = createRouter({
history: createWebHistory(process.env.BASE_URL),
base: __dirname,
routes,
})

export default router