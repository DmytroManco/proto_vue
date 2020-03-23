<template>
  <div class="navbar">
    <div class="navbar__logo log">DXE</div>
    <nav class="navbar__nav nav">
      <ul>
        <li
          class="nav__item"
          v-for="(item, index) in navItems"
          :key="index"
        >
          <router-link :to="item.path" exact>
            {{item.title}}
          </router-link>
        </li>
      </ul>
    </nav>
    <div class="navbar__search search">
      Search Component
    </div>
  </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';
import { NavItem } from '@/interfaces/navitem.d';

@Component({
  name: 'navbar',
})
export default class Navbar extends Vue {
  @Prop() private navItems!: NavItem[];
}

</script>

<style scoped lang="scss">
  .navbar {
    display: flex;
    justify-content: stretch;
    align-items: center;
    padding: 0 15px;
    background: $lightBlue;
  }
  .navbar__nav {
    flex: 3;
    ul {
      list-style: none;
    }
    .nav__item {
      display: inline-block;
      margin: 0 15px;
      a {
        text-decoration: none;
        color: $gray;
      }
      a.router-link-active {
        color: $black;
      }
    }
  }
  .navbar__search {
    flex: 2;
  }
</style>
