<template>
  <div class="search">
    <label>
      <input
        class="search__input"
        type="text"
        placeholder="Patient Search">
    </label>
    <button
      class="btn btn-default search__btn">
      Search
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
  name: 'search-component',
})
export default class SearchComponent extends Vue {
  // TODO: Props for custom data and validation, action,
  // functional for serve and client search, connect to Store
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
      outline: none;
      margin: 0 10px;
      padding: 5px 10px;
      border: 1px solid $blue;
      color: $blue;
      border-radius: 10px;
      background: transparent;
      cursor: pointer;
    }
  }
</style>
