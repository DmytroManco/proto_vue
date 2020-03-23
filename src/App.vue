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

import Navbar from '@/components/navbar/navbar.vue';
import { Component, Prop, Vue } from 'vue-property-decorator';
import RouteConstants from '@/constants/routes.constant';

@Component({
  components: {
    Navbar,
  },
})
export default class App extends Vue {
  public routes = RouteConstants.NAV_ROUTES;
}
</script>
