export interface SearchActionInterface {
  actionName: string;
  query: string;
}

export interface SearchInterface {
  serverSideSearch: boolean;
  placeholder: string;
  action: SearchActionInterface;
  autocomplete?: boolean;
  minQueryLength?: number;
  isSearchButton?: boolean;
  searchButtonText?: string;
}
