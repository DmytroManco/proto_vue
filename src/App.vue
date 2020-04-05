<template>
  <div id="app">
    <navbar :navItems="routes"></navbar>
    <router-view/>
  </div>
</template>

<style lang="scss">
  body {
    margin: 0;
    box-sizing: border-box;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';
import Navbar from '@/components/navbar/navbar.vue';
import { NAV_ROUTES } from '@/constants/routes.constant';

  @Component({
    components: {
      Navbar,
    },
  })
export default class App extends Vue {
  public routes = NAV_ROUTES;
}
</script>
