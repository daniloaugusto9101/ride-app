import React from "react";
import TripsService from "../services/TripsService";

function useSearchRides(customerId, origin, destination) {
  const [searchResults, setSearchResults] = React.useState([]);

  React.useEffect(() => {
    if (!customerId || !origin || !destination) {
      setSearchResults([]);
      return;
    }
    TripsService.searchRides(customerId, origin, destination).then((data) => {
      setSearchResults(data);
    });
  }, [customerId, origin, destination]);

  return searchResults;
}

export default useSearchRides;
