export type Place = {
  id: string;
  address_name: string;
  category_name: string;
  phone: string;
  place_name: string;
  place_url: string;
  road_address_name: string;
  x: string;
  y: string;
};

export type Pagination = {
  current: number;
  first: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  last: number;
  perPage: number;
  totalCount: number;
  nextPage: () => void;
  prevPage: () => void;
};
