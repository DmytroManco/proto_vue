<template>
  <div class="patients">
    <h1>This is a Patients page</h1>
    <tabs :tabs="tabs"></tabs>
  </div>
</template>
<script lang="ts">

import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import Tabs from '@/shared/tabs/tabs.vue';
import { PATIENT_SEARCH_CONSTANT } from '@/constants/search.constants';

@Component({
  components: { Tabs },
})
export default class Patients extends Vue {
  // TODO: play around dynamic components
  tabs = [
    {
      title: 'Tab1',
      component: 'test',
      props: {
        title: 'Amazing Title',
      },
    },
    {
      title: 'Tab2',
      component: 'search-component',
      props: {
        options: PATIENT_SEARCH_CONSTANT,
      },
    },
  ];
}
</script>
