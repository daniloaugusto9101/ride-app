import React from "react";
import TripsService from "../services/TripsService";

function useSearchTrips(customerId, driverId) {
  const [searchResults, setSearchResults] = React.useState([]);

  React.useEffect(() => {
    if (!customerId) {
      setSearchResults([]);
      return;
    }
    TripsService.searchTrips(customerId, driverId).then((data) => {
      setSearchResults(data);
    });
  }, [customerId, driverId]);

  return searchResults;
}

export default useSearchTrips;
