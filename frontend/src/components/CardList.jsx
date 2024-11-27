import React from "react";
import { FaCalendarAlt, FaUser, FaMapMarkerAlt, FaRoute, FaClock, FaDollarSign } from "react-icons/fa";

const CardList = ({ trip }) => {
  return (
    <div className="bg-white shadow-lg rounded-t-md border border-gray-200 flex flex-col items-center">
      <div className="w-full h-40 bg-gray-200 rounded-t-lg">
        <img src="https://picsum.photos/seed/landscape1/300/200" alt="Trip visual" className="w-full h-full object-cover rounded-t-lg" />
      </div>
      <div className="w-full text-center p-4">
        <h3 className="text-lg font-bold text-gray-800 mb-2">{trip.destination}</h3>
        <p className="text-sm text-gray-500 mb-2">
          <FaCalendarAlt className="inline-block mr-2" /> {trip.date}
        </p>
      </div>
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
  );
};

export default CardList;
