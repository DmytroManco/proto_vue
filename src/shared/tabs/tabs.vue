<template>
  <div class="tabs" v-if="!!currentTab">
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
      v-bind="currentTab.props"
      v-event-handler="eventHandler">
    </component>
  </div>
</template>

<script lang="ts">
import {
  Vue, Component, Prop,
} from 'vue-property-decorator';
import SearchComponent from '@/shared/search/search-component.vue';
import TestComponent from '@/shared/test-conponents/test.vue';
import { HandleEventDirective } from '@/directives/handle-event.directive';
import VanillaForm from '@/components/form-demo/vanilla-form.vue';
import VuelidateForm from '@/components/form-demo/vuelidate-form.vue';
import VeeValidateForm from '@/components/form-demo/vee-validate-form.vue';
import { Tab } from './tab.d';

// TODO: async load needed component
@Component({
  name: 'tabs',
  components: {
    SearchComponent,
    test: TestComponent,
    VanillaForm,
    VuelidateForm,
    VeeValidateForm,
  },
  directives: {
    eventHandler: HandleEventDirective,
  },
})
export default class TabsComponent extends Vue {
  currentTab: Tab | null = null;

  eventHandler: any = null;

  @Prop() tabs!: Tab[];

  @Prop() events!: string[];

  mounted(): void {
    this.currentTab = this.tabs[0];
    this.eventHandler = {
      events: this.events,
      handler: (event: string, eventData: any) => this.handleEvent(event, eventData),
    };
  }

  handleEvent(event: string, data: any) {
    this.$emit(event, data);
  }
}
</script>

<style scoped>

</style>
