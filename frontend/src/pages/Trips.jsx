import React from "react";
import {
  FaIdBadge,
  FaCalendarAlt,
  FaUser,
  FaMapMarkerAlt,
  FaRoute,
  FaClock,
  FaDollarSign,
  FaTruck,
  FaSearch,
} from "react-icons/fa";
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
      <div className="flex flex-col md:flex-row gap-5 p-4 justify-center">
        <div className="relative">
          <input
            onChange={(event) => {
              setCustomerId(event.target.value);
            }}
            value={customerId}
            type="text"
            placeholder="ID user..."
            className="pl-10 pr-4 py-2 border rounded-lg w-full"
            required
          />
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
            <FaSearch />
          </div>
        </div>
        <div className="relative">
          <input
            onChange={(event) => {
              setDriverId(event.target.value);
            }}
            value={driverId}
            type="text"
            placeholder="Driver..."
            className="pl-10 pr-4 py-2 border rounded-lg w-full"
          />
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
            <FaUser />
          </div>
        </div>
        <button
          type="submit"
          className="bg-gray-800 text-white px-4 rounded-md"
        >
          Search
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {data?.rides?.map((trip) => (
          <div
            key={trip.id}
            className="bg-white shadow-lg rounded-t-md border border-gray-200 flex flex-col items-center"
          >
            {/* Imagem principal */}
            <div className="w-full h-40 bg-gray-200 rounded-t-lg">
              <img
                // src="https://via.placeholder.com/300"
                src="https://picsum.photos/seed/landscape1/300/200"
                alt="Trip visual"
                className="w-full h-full object-cover rounded-t-lg"
              />
            </div>

            {/* Detalhes do Card */}
            <div className="w-full text-center p-4">
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                {trip.destination}
              </h3>
              <p className="text-sm text-gray-500 mb-2">
                <FaCalendarAlt className="inline-block mr-2" /> {trip.date}
              </p>
            </div>

            {/* Informações detalhadas */}
            <div className="bg-gray-50 p-4 rounded-b-lg w-full text-left">
              <p className="text-gray-700 mb-2">
                <FaUser className="inline-block mr-2" />
                <strong>Driver:</strong> {trip.driver.name}
              </p>
              <p className="text-gray-700 mb-2">
                <FaMapMarkerAlt className="inline-block mr-2" />
                <strong>Origin:</strong> {trip.origin}
              </p>
              <p className="text-gray-700 mb-2">
                <FaRoute className="inline-block mr-2" />
                <strong>Distance:</strong> {trip.distance}
              </p>
              <p className="text-gray-700 mb-2">
                <FaClock className="inline-block mr-2" />
                <strong>Duration:</strong> {trip.duration}
              </p>
              <p className="text-gray-700">
                <FaDollarSign className="inline-block mr-2" />
                <strong>Value:</strong> {trip.value}
              </p>
            </div>
          </div>
        ))}
      </div>
    </form>
  );
};

export default Trips;
