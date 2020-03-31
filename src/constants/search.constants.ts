import { SearchInterface } from '@/interfaces/search.d';

export const PATIENT_SEARCH_CONSTANT: SearchInterface = {
  serverSideSearch: true,
  placeholder: 'Patient Search',
  isSearchButton: true,
  searchButtonText: 'Search',
  action: {
    actionName: 'patientsServerSearch',
    query: '',
  },
};
