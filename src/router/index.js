import Vue from 'vue'
import Router from 'vue-router'
import Hero from '@/components/Hero'
import Contact from '../components/Contact'
import Portfolio from '../components/Portfolio'
import Services from '../components/Services'
// import Skill from '../components/Skill'
// import Work from '../components/Work'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hero',
      component: Hero,
      children: [
        {
          path: 'contact',
          name: 'Contact',
          component: Contact
        },
        {
          path: 'portfolio',
          name: 'Portfolio',
          component: Portfolio
        },
        {
          path: 'services',
          name: 'Services',
          component: Services
        }
      ]
    }
  ],
  mode: 'history'
})
