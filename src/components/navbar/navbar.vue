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
          <router-link :to="{name: item.name}" exact>
            {{item.title}}
          </router-link>
        </li>
      </ul>
    </nav>
    <div class="navbar__search search">
      <search-component
        :options="searchOptions"
        v-on:search="searchAction">
      </search-component>
    </div>
  </div>
</template>

<script lang="ts">

import {
  Component, Prop, Vue,
} from 'vue-property-decorator';
import { NavItemI } from '@/interfaces/navitem.d';
import SearchComponent from '@/shared/search/search-component.vue';
import { PATIENT_SEARCH_CONSTANT } from '@/constants/search.constants';
import { SearchActionInterface, SearchInterface } from '@/interfaces/search.d';
import { ROUTES_NAMES } from '@/constants/routes.constant';

@Component({
  name: 'navbar',
  components: { SearchComponent },
})
export default class Navbar extends Vue {
  @Prop() private navItems!: NavItemI[];

  searchOptions: SearchInterface;

  constructor() {
    super();
    this.searchOptions = PATIENT_SEARCH_CONSTANT;
  }

  async searchAction(action: SearchActionInterface) {
    if (ROUTES_NAMES.Home !== this.$route.name) {
      await this.$router.push({ name: ROUTES_NAMES.Home });
    }

    await this.$store.dispatch(action.actionName, action.query);
  }
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
