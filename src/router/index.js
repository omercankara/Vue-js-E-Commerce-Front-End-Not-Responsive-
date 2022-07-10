import { createRouter, createWebHistory } from 'vue-router'
import urundetay from "../views/urunDetay.vue"
import coksatanlar from "../views/overSelling.vue"
import banner from "../components/bannerComp.vue"
import footerComp from "../components/footerComp.vue"
import basket from "../views/basketComp.vue" 


import home from "../views/homeComp.vue"

const routes = [
  
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path:'/sepet',
    name:'sepet',
    component:basket
  },
  {
    path:'/urundetay/:id',
    name:'urundetay',
    component:urundetay
  },

  {
    path: '/coksatanlar',
    name: 'coksatanlar',
    component: coksatanlar
  },
  {
    path: '/banner',
    name: 'banner',
    component: banner
  },

  {
    path: '/footer',
    name: 'footer',
    component: footerComp
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.afterEach(()=>{
  window.scrollTo(0,0);
})

export default router
