<template>
  <div>
    <navbar />
    <router-view></router-view>
     <footerComp />
  </div>

</template>

<script>
import navbar from "../src/components/header/navbarComp.vue"
import footerComp from "../src/components/footerComp.vue"

export default {
  components: {
    navbar,
    footerComp
  },


  mounted() {

  }
}
</script>