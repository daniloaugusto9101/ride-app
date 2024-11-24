import React from "react";
import useFetchTrips from "../hooks/useFetchTrips";

const trips = [
  {
    date: "2023-10-01 10:00",
    driver: "John Doe",
    origin: "Location A",
    destination: "Location B",
    distance: "10 km",
    time: "15 mins",
    value: "$20",
  },
  {
    date: "2023-10-02 12:00",
    driver: "Jane Smith",
    origin: "Location C",
    destination: "Location D",
    distance: "20 km",
    time: "30 mins",
    value: "$40",
  },
];

const Trips = () => {
  const data = useFetchTrips(555, 666);
  if (data?.rides) {
    console.log(data.rides);
  }
  return (
    <div className="p-4">
      <div className="mb-4">
        <label className="block text-gray-700">
          User ID:
          <input
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
      <button className="bg-blue-500 text-white p-2 rounded-md">
        Apply Filter
      </button>

      {data?.rides.map((trip) => (
        <div key={trip.id} className=" bg-white shadow-md rounded-lg p-4 mb-4">
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
          {/* <p className="text-gray-700">
              <strong>Time:</strong> {trip.time}
            </p> */}
          <p className="text-gray-700">
            <strong>Value:</strong> {trip.value}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Trips;
