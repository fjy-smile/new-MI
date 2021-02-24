import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import miShop from '../views/mi-shop.vue'

Vue.use(Router)

export default new Router({
  mode:"history",
  routes:[
    {
      path:'/',
      name:'Home',
      component: Home
    },{
      path:'/miShop',
      name:'miShop',
      component: miShop
    }
  ]
})
