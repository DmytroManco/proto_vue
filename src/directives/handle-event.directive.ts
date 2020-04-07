import { VNode } from 'vue';

export const HandleEventDirective = {
  // TODO: typing, errors
  bind: (el: HTMLElement, binding: any, vnode: VNode) => {
    // eslint-disable-next-line
    const events: string[] = binding.value.events;

    if (!events) {
      return;
    }

    events.forEach((event) => {
      // eslint-disable-next-line
      vnode.componentInstance?.$on(event, (eventData: any) => {
        binding.value.handler(event, eventData);
      });
    });
  },
};
