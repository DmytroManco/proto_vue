<template>
  <div class="toast">
    <v-snackbar
      v-model="snackbar"
      :timeout="options.timeout"
      :top="options.top"
      :bottom="options.bottom"
      :right="options.right"
      :left="options.left"
      :color="options.color"
      :multi-line="options.multiline"
      :vertical="options.vertical"
      :absolute="options.absolute"
      @input="modelUpdated"
    >
      <span v-if="$store.state.NotificationStore.toast">
        {{$store.state.NotificationStore.toast.message}}
      </span>
      <v-btn
        dark
        text
        @click="onClose"
      >
        Close
      </v-btn>
    </v-snackbar>
  </div>
</template>

<script lang="ts">

import {
  Component, Vue, Prop,
} from 'vue-property-decorator';
import { DEFAULT_TOAST_OPTIONS } from '@/components/tast/toast.constant';
import { ToastOptions } from '@/interfaces/toast.d';

@Component({
  name: 'dxe-toast',
})
export default class ToastComponent extends Vue {
  @Prop({ default: () => DEFAULT_TOAST_OPTIONS }) options!: ToastOptions;
  @Prop() snackbar!: boolean;

  onClose(): void {
    this.$store.commit('NotificationStore/hideNotification');
  }

  modelUpdated(isShown: boolean): void {
    if (!isShown) {
      this.$store.commit('NotificationStore/hideNotification');
    }
  }
}

</script>

<style scoped lang="scss">
</style>
