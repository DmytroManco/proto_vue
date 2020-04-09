<template>
  <div class="forms">
    <h3>Form Examples: </h3>
    <tabs-component :tabs="tabs"></tabs-component>
  </div>
</template>

<script lang="ts">

import { Vue, Component } from 'vue-property-decorator';
import { Tab } from '@/shared/tabs/tab.d';
import TabsComponent from '@/shared/tabs/tabs.vue';

@Component({
  name: 'Home',
  components: {
    TabsComponent,
  },
})
export default class FormView extends Vue {
  tabs: Tab[] = [
    {
      title: 'Custom',
      component: 'vanilla-form',
    },
    {
      title: 'Vuelidate',
      component: 'vuelidate-form',
    },
    {
      title: 'Vee Validate',
      component: 'vee-validate-form',
    },
  ];
}
</script>

<style lang="scss">
  .forms {
    margin: 10px;
  }
</style>
