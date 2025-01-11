export const getPriceRange = (flights) => {
    const prices = flights.map((flight) => flight.farepr);
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);
    return { minPrice, maxPrice };
  };
  