<template>
  <div class="search">
    <label>
      <input
        class="search__input"
        type="text"
        :placeholder="options.placeholder"
        v-model="searchQuery"
      >
    </label>
    <button
      class="btn btn-default search__btn"
      v-if="options.isSearchButton"
      v-on:click="onSearch"
    >
      <slot>Search</slot>
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { SearchActionInterface, SearchInterface } from '@/interfaces/search.d';

@Component({
  name: 'search-component',
})
export default class SearchComponent extends Vue {
  searchQuery = '';

  @Prop() options!: SearchInterface;

  onSearch(): void {
    const action: SearchActionInterface = {
      actionName: this.options.action.actionName,
      query: this.searchQuery,
    };
    this.$emit('search', action);
  }
}

</script>

<style lang="scss" scoped>
  .search {
    display: flex;
    align-items: center;
    &__input {
      padding: 5px 10px;
      border-radius: 3px;
      border: none;
    }
    &__btn {
      margin: 0 10px;
      padding: 5px 10px;
    }
  }
</style>
