import { createRouter, createWebHistory } from 'vue-router'
import Home from "../pages/Home.vue"
import Series from "../pages/Series.vue"
import Films from "../pages/Films.vue"
import Favorites from "../pages/Favorites.vue"



const routes = [
    {
        path:'/',component: Home
        
    },{
        path: '/Filmes', component:Films
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router