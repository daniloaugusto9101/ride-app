import React from "react";
import TripsService from "../services/TripsService";

function useFetchTrips(customerId, driverId) {
  const [trips, settrips] = React.useState(null);

  React.useEffect(() => {
    TripsService.getTrips(customerId, driverId)
      .then((tripsData) => {
        settrips(tripsData);
      })
      .catch((error) => console.error(error));
  }, []);

  return trips;
}

export default useFetchTrips;
