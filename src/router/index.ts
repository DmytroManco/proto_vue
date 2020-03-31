import Vue from 'vue';
import VueRouter from 'vue-router';
import { ROUTES_NAMES } from '@/constants/routes.constant';
import Home from '../views/Home.vue';
import PatientInfo from '../components/patient/patient-info.vue';
import AddProcedure from '../components/patient/patient-add-procedure.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: ROUTES_NAMES.Home,
    component: Home,
  },
  {
    path: '/patients',
    name: ROUTES_NAMES.Patients,
    component: () => import('../views/Patients.vue'),
  },
  {
    path: '/patient/:id',
    component: () => import('../views/Patient.vue'),
    children: [
      {
        path: '',
        component: PatientInfo,
        name: ROUTES_NAMES.PatientInfo,
      },
      {
        path: 'procedure',
        name: ROUTES_NAMES.AddProcedure,
        component: AddProcedure,
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
