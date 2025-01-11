import flightData from "../../data/flights.json";
import { getPriceRange } from "../../utils/dataProcessing";
import AI from "/assets/AI.png";
import UK from "/assets/UK.png";
import {
  SET_SORT,
  CLEAR_SORT,
  SET_PRICE_FILTER,
  CLEAR_PRICE_FILTER,
} from "../../utils/constants";

const flightGroup = flightData?.data?.flights[0];
const airlineMapping = flightGroup?.results?.aldet;
const flights = flightGroup?.results?.j;
const filters = flightGroup?.results?.f[0];
const airlineLogoMapping = {
  UK: UK,
  AI: AI,
};

const { pr } = filters;
const { min, max } = pr
  ? { min: pr.minPrice, max: pr.maxPrice }
  : getPriceRange(flights);

const initialState = {
  flights: flights,
  filteredFlights: flights,
  priceRange: { min, max },
  fixedrange: {minFixedPrice: min, maxFixedPrice: max},
  sortBy: "price",
  sortOrder: "asc",
  miscellaneousData: { airlineMapping, airlineLogoMapping },
};

const flightReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SORT: {
      let sortOrder =
        state.sortBy === action.payload && state.sortOrder === "asc"
          ? "desc"
          : "asc";

      const sortedFlights = [...state.filteredFlights].sort((a, b) => {
        let comparison = 0;

        if (action.payload === "price") {
          comparison = a.farepr - b.farepr;
        } else if (action.payload === "duration") {
          comparison = a.tt[0] - b.tt[0];
        } else if (action.payload === "departure") {
          comparison =
            new Date(`1970-01-01T${a.dt}`) - new Date(`1970-01-01T${b.dt}`);
        } else if (action.payload === "arrival") {
          comparison =
            new Date(`1970-01-01T${a.at}`) - new Date(`1970-01-01T${b.at}`);
        }

        return sortOrder === "asc" ? comparison : -comparison;
      });

      return {
        ...state,
        filteredFlights: sortedFlights,
        sortBy: action.payload,
        sortOrder,
      };
    }

    case CLEAR_SORT:
      return {
        ...state,
        sortBy: "price",
        filteredFlights: [...state.flights].sort((a, b) => a.farepr - b.farepr),
      };

    case SET_PRICE_FILTER: {
      const { minPrice, maxPrice } = action.payload;
      const filteredFlights = state.flights.filter(
        (flight) => flight.farepr >= minPrice && flight.farepr <= maxPrice
      );
      return {
        ...state,
        filteredFlights,
        priceRange: { min: minPrice, max: maxPrice },
      };
    }

    case CLEAR_PRICE_FILTER: {
      return {
        ...state,
        filteredFlights: state.flights,
        priceRange: {
          min: initialState.priceRange.min,
          max: initialState.priceRange.max,
        },
      };
    }

    default:
      return state;
  }
};

export default flightReducer;
