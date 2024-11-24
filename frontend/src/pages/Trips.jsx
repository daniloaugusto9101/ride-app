import React from "react";
import useSearchTrips from "../hooks/useSearchTrips";

const Trips = () => {
  const [customerId, setCustomerId] = React.useState();
  const [searchCustomerId, setSearchCustomerId] = React.useState();
  const data = useSearchTrips(searchCustomerId, "666");

  function handleOnSubmit(event) {
    event.preventDefault();
    setSearchCustomerId(customerId);
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <div className="p-4">
        <div className="mb-4">
          <label className="block text-gray-700">
            User ID:
            <input
              onChange={(event) => {
                setCustomerId(event.target.value);
              }}
              type="text"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">
            Driver:
            <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
              <option value="all">All</option>
              <option value="John Doe">John Doe</option>
              <option value="Jane Smith">Jane Smith</option>
            </select>
          </label>
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
          Apply Filter
        </button>

        {data?.rides?.map((trip) => (
          <div
            key={trip.id}
            className=" bg-white shadow-md rounded-lg p-4 mb-4"
          >
            <p className="text-gray-700">
              <strong>Date and Time:</strong> {trip.date}
            </p>
            <p className="text-gray-700">
              <strong>Driver:</strong> {trip.driver.name}
            </p>
            <p className="text-gray-700">
              <strong>Origin:</strong> {trip.origin}
            </p>
            <p className="text-gray-700">
              <strong>Destination:</strong> {trip.destination}
            </p>
            <p className="text-gray-700">
              <strong>Distance:</strong> {trip.distance}
            </p>
            <p className="text-gray-700">
              <strong>Duration:</strong> {trip.duration}
            </p>
            <p className="text-gray-700">
              <strong>Value:</strong> {trip.value}
            </p>
          </div>
        ))}
      </div>
    </form>
  );
};

export default Trips;
