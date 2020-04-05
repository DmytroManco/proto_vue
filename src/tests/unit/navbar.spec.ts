import { shallowMount, Wrapper, RouterLinkStub } from '@vue/test-utils';


import Navbar from '@/components/navbar/navbar.vue';
import { ROUTES_NAMES, NAV_ROUTES } from '@/constants/routes.constant';
import { SearchActionInterface } from '@/interfaces/search.d';
import { $route, $router, $store } from '@/tests/mocks/ut-moks';

describe('navbar.vue', () => {
  let wrapper: Wrapper<any>;
  let action: SearchActionInterface;
  beforeEach(() => {
    wrapper = shallowMount(Navbar, {
      propsData: { navItems: NAV_ROUTES },
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
      expect(wrapper.vm.$router.push)
        .toHaveBeenCalledWith({ name: ROUTES_NAMES.Home });
    });

    it('should dispatch search action', async () => {
      await wrapper.vm.search(action);
      expect(wrapper.vm.$store.dispatch).toHaveBeenCalledWith(action.actionName, '');
    });
  });
});
