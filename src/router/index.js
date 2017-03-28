import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes:[
    {
      path: '/',
      redirect: '/hello'
    },
    // {
    //   path: '/readme',
    //   component: resolve => require(['../components/common/Home.vue'], resolve),
    //   children:[
    //     {
    //       path: '/',
    //       component: resolve => require(['../components/page/Readme.vue'], resolve)
    //     }
    //   ]
    // },
    {
      path: '/hello',
      component: resolve => require(['../components/Hello.vue'], resolve)
    },
  ]
})
