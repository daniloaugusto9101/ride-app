import React from "react";
import useSearchTrips from "../hooks/useSearchTrips";

const Trips = () => {
  const [customerId, setCustomerId] = React.useState("");
  const [driverId, setDriverId] = React.useState("");
  const [searchCustomerId, setSearchCustomerId] = React.useState("");
  const [searDriverId, setSearDriverId] = React.useState("");
  const data = useSearchTrips(searchCustomerId, searDriverId);

  function handleOnSubmit(event) {
    event.preventDefault();
    setSearchCustomerId(customerId);
    setSearDriverId(driverId);
    setCustomerId("");
    setDriverId("");
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
              value={customerId}
              type="text"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">
            Driver:
            <select
              onChange={(event) => {
                setDriverId(event.target.value);
              }}
              value={driverId}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="">All</option>
              <option value="1">1John Doe</option>
              <option value="2">2Jane Smith</option>
              <option value="3">3Jane Smith</option>
              <option value="4">4Jane Smith</option>
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
              <strong>ID:</strong> {trip.id}
            </p>
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
