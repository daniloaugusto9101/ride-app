import React from "react";
import { FaUser, FaSearch } from "react-icons/fa";
import useSearchTrips from "../hooks/useSearchTrips";
import CardItem from "../components/CardItem";

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
          <select
            onChange={(event) => {
              setDriverId(event.target.value);
            }}
            value={driverId}
            type="text"
            placeholder="Driver..."
            className="pl-10 pr-4 py-2 border rounded-lg"
          >
            <option value="" disabled>
              Driver
            </option>
            <option value="1">Homer Simpson</option>
            <option value="2">Dominic Toretto</option>
            <option value="3">James Bond</option>
            <option value="4">All drives</option>
          </select>
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
            <FaUser />
          </div>
        </div>
        <button type="submit" className="bg-gray-800 text-white px-4 rounded-md">
          Filter
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <CardItem data={data} />
      </div>
    </form>
  );
};

export default Trips;
