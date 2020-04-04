import { shallowMount, Wrapper } from '@vue/test-utils';
import { RouterLinkStub } from '@vue/test-utils';

import Navbar from '@/components/navbar/navbar.vue';
import RouteConstants from '@/constants/routes.constant';
import { SearchActionInterface } from '@/interfaces/search';
import { $route, $router, $store } from "@/tests/mocks/ut-moks";

describe('navbar.vue', () => {
  let wrapper: Wrapper<any>;
  let action: SearchActionInterface;
  beforeEach(() => {
    wrapper = shallowMount(Navbar, {
      propsData: { navItems: RouteConstants.NAV_ROUTES},
      stubs: {
        RouterLink: RouterLinkStub,
      },
      mocks: {
        $route,
        $router,
        $store,
      },
    });
    action = {
      actionName: 'patientsServerSearch',
      query: '',
    };
  });

  describe('#search', () => {
    it('should redirect on home Route', () => {
      wrapper.vm.search(action);
      expect(wrapper.vm.$router.push).toHaveBeenCalledWith({ name: RouteConstants.ROUTES_NAMES.Home });
    });

    it('should dispatch search action', async () => {
      await wrapper.vm.search(action);
      expect(wrapper.vm.$store.dispatch).toHaveBeenCalledWith(action.actionName, '');
    });
  });
});
