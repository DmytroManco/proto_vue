<template>
  <div id="app">
    <navbar :navItems="routes"></navbar>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
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
