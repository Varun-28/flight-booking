import {
  SET_SORT,
  CLEAR_SORT,
  SET_PRICE_FILTER,
  CLEAR_PRICE_FILTER,
} from "../../utils/constants";

export const setSort = (sortBy) => ({
  type: SET_SORT,
  payload: sortBy,
});

export const clearSort = () => ({
  type: CLEAR_SORT,
});

export const setPriceFilter = (priceRange) => ({
  type: SET_PRICE_FILTER,
  payload: priceRange,
});

export const clearPriceFilter = () => ({
  type: CLEAR_PRICE_FILTER,
});
