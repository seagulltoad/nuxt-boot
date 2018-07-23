import Vue from 'vue'
import TopHeader from '../components/Header.vue'

const components = { TopHeader }

Object.keys(components).forEach(key => {
  Vue.component(key, components[key])
})
