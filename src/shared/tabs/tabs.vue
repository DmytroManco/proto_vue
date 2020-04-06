<template>
  <div class="tabs">
    <button
      v-for="tab in tabs"
      v-bind:class="['tab-button', { active: currentTab.title === tab.title }]"
      v-bind:key="tab.title"
      @click="currentTab = tab"
    >
      {{tab.title}}
    </button>

    <component
      v-bind:is="currentTab.component"
      v-bind="currentTab.props">
    </component>
  </div>
</template>

<script lang="ts">
import {
  Vue, Component, Prop,
} from 'vue-property-decorator';
import SearchComponent from '@/shared/search/search-component.vue';
import TestComponent from '@/shared/test-conponents/test.vue';
import { Tab } from './tab.d';

@Component({
  name: 'tabs',
  components: {
    SearchComponent,
    test: TestComponent,
  },
})
export default class TabsComponent extends Vue {
  currentTab!: Tab | null;

  @Prop() tabs!: Tab[];

  constructor() {
    super();
    this.currentTab = this.tabs ? this.tabs[0] : null;
  }

  mounted(): void {
    this.currentTab = this.tabs[0];
  }
}
</script>

<style scoped>

</style>
