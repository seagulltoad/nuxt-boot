<template>
  <div class="layout">
    <top-header/>
    <nuxt/>
    <top-footer/>
  </div>
</template>

<script>
import TopFooter from '../components/Footer.vue'
import TopHeader from '../components/Header.vue'

export default {
  components: {
    TopFooter,
    TopHeader
  }
}
</script>
