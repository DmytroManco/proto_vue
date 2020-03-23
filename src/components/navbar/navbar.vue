<template>
  <div class="navbar">
    <div class="navbar__logo log">DXE</div>
    <nav class="navbar__nav nav">
      <ul>
        <li
          v-for="(item, index) in navItems"
          :key="index"
        >
          <router-link :to="item.path">
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
</style>
