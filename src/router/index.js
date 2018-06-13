import Vue from 'vue'
import Router from 'vue-router'
import login from '@/views/login'
import index from '@/views/index'
import depPreview from '@/views/depPreview'
import member from '@/views/member'
import project from '@/views/project'
import createProject from '@/views/createProject'
import daily from '@/views/daily'
import dailyAdd from '@/views/dailyAdd'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'defaultLogin',
      component: login
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/index',
      name: 'index',
      component: index,
      redirect:'/depPreview',
      children:[
        {
          path: '/depPreview',
          name: 'depPreview',
          component: depPreview
        },
        {
          path: '/member',
          name: 'member',
          component: member
        },
        {
          path: '/project',
          name: 'project',
          component: project
        },
        {
          path: '/createProject',
          name: 'createProject',
          component: createProject
        },
        {
          path: '/daily',
          name: 'daily',
          component: daily
        },
        {
          path: '/dailyAdd',
          name: 'dailyAdd',
          component: dailyAdd
        }
      ]
    }
  ]
})
