import React from "react";
import TripsService from "../services/TripsService";

function useSearchRideConfirm(object) {
  const [searchResults, setSearchResults] = React.useState([]);
  React.useEffect(() => {
    if (!object) {
      setSearchResults([]);
      return;
    }
    TripsService.searchRideConfirm(object).then((data) => {
      setSearchResults(data);
    });
  }, [object]);
  return searchResults;
}

export default useSearchRideConfirm;
