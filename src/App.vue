<template>
  <top-navbar></top-navbar>
  <main>
      <router-view></router-view>        
  </main>
</template>

<script>
import "./css/shared.css";
import { ref } from "vue";
import TopNavbar from "./components/layout/TopNavbar.vue"

export default {
  name: 'App',
  components: {
    TopNavbar
  },
  setup(){
    const isAuth = ref(false);
    return {
      isAuth
    }
  }
}
</script>

<style scoped>
main {
    background-color: var(--color-default-light);        
}
</style>