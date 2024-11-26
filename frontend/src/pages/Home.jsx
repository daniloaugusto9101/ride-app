// src/pages/Home.js
import React from "react";
import FormComponent from "../components/FormComponent";
import Card from "../components/Card";
import { APIProvider, Map } from "@vis.gl/react-google-maps";
import useSearchRides from "../hooks/useSearchRides";
import useSearchRideConfirm from "../hooks/useSearchRideConfirm";

const Home = () => {
  const [customerId, setCustomerId] = React.useState("");
  const [origin, setOrigin] = React.useState("");
  const [destination, setDestination] = React.useState("");
  const [isModal, setIsModal] = React.useState(false);
  const [objRide, setObjRide] = React.useState("");

  const [searchCustomerId, setSearchCustomerId] = React.useState("");
  const [searOrigin, setSearOrigin] = React.useState("");
  const [searchDestination, setSearchDestination] = React.useState("");
  const data = useSearchRides(searchCustomerId, searOrigin, searchDestination);
  const rideConfirm = useSearchRideConfirm(objRide);

  function handleOnSubmit(event) {
    event.preventDefault();
    setSearchCustomerId(customerId);
    setSearOrigin(origin);
    setSearchDestination(destination);
    setIsModal(true);
  }

  function handleClick(idDriver, nameDriver, priceDriver) {
    const rideConfirm = {
      customer_id: customerId,
      origin: origin,
      destination: origin,
      distance: data.distance,
      duration: data.duration,
      driver: {
        id: idDriver,
        name: nameDriver,
      },
      value: priceDriver,
    };
    setObjRide(rideConfirm);
  }
  return (
    <section className="flex flex-col md:flex-row gap-y-2 overflow-hidden flex-grow">
      <div className="w-full md:w-1/4  p-4 ">
        <form className="flex flex-col gap-4 p-4 border-2 border-gray-100 rounded-lg" onSubmit={handleOnSubmit}>
          <input
            onChange={(event) => {
              setCustomerId(event.target.value);
            }}
            value={customerId}
            type="text"
            placeholder="ID user"
            className="p-2 border border-gray-300 rounded"
            required
          />
          <input
            onChange={(event) => {
              setOrigin(event.target.value);
            }}
            value={origin}
            type="text"
            placeholder="Origem"
            className="p-2 border border-gray-300 rounded"
            required
          />
          <select
            onChange={(event) => {
              setDestination(event.target.value);
            }}
            value={destination}
            className="p-2 border border-gray-300 rounded"
            required
          >
            <option value="" disabled>
              Select Distance
            </option>
            <option value="1">1km</option>
            <option value="2">2km</option>
            <option value="3">5km</option>
          </select>
          <button type="submit" className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900">
            Submit
          </button>
        </form>
      </div>
      <div className="w-full md:w-3/4 flex flex-col md:flex-row p-4 ">
        <div className={`${isModal ? "block" : "hidden"} w-full md:w-1/2 md:flex-1 px-2 overflow-y-scroll`}>
          {data?.options?.map((ride) => {
            const value = ride.value * data.distance;
            const toFloat = parseFloat(value);
            const price = toFloat.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

            return (
              <div key={ride.id} className=" shadow-md rounded-lg flex mb-2">
                <div className="w-1/4 bg-gray-200">
                  <img src="https://picsum.photos/id/111/300" alt="Vehicle image" className="w-full h-full object-cover rounded-l-lg" />
                </div>
                <div className="w-3/4 p-2 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm font-bold">{ride.name}</h3>
                  </div>
                  <div>
                    <p className="text-gray-600">{ride.vehicle}</p>
                    <p className="text-gray-600">"{ride.description}"</p>
                  </div>
                  <div>
                    <div className="flex items-center">
                      <span className="text-yellow-500">★★★★☆</span>
                      <span className="ml-2 text-gray-600">({ride.review.rating})</span>
                    </div>
                    <div className="text-lg font-bold flex justify-between">
                      <p>{price}</p>
                      <button onClick={() => handleClick(ride.id, ride.name, value)} type="submit" className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded">
                        Confirm
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="w-full md:w-1/2 md:flex-1">
          <APIProvider apiKey={"AIzaSyC4cYuZ4ACSgOR271JbUnH7uZ4PZezyyN4"}>
            <Map
              style={{}}
              defaultCenter={{
                lat: -23.180706670183632,
                lng: -45.869060730219715,
              }}
              defaultZoom={10}
              gestureHandling={"greedy"}
              disableDefaultUI={true}
            />
          </APIProvider>
        </div>
      </div>
    </section>
  );
};

export default Home;
