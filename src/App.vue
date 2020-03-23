<template>
  <div id="app">
    <navbar :navItems="routes"></navbar>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
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

@Component({
  components: {
    Navbar,
  },
})
export default class App extends Vue {
  public routes = [
    { title: 'Home', path: '/' },
    { title: 'About', path: 'about' },
  ];
}
</script>
