// src/pages/Home.js
import React from "react";
import FormComponent from "../components/FormComponent";
import Card from "../components/Card";
import { APIProvider, Map } from "@vis.gl/react-google-maps";
import useSearchRides from "../hooks/useSearchRIdes";

const Home = () => {
  const [customerId, setCustomerId] = React.useState("");
  const [origin, setOrigin] = React.useState("");
  const [destination, setDestination] = React.useState("");
  const [isModal, setIsModal] = React.useState(false);

  const [searchCustomerId, setSearchCustomerId] = React.useState("");
  const [searOrigin, setSearOrigin] = React.useState("");
  const [searchDestination, setSearchDestination] = React.useState("");
  const data = useSearchRides(searchCustomerId, searOrigin, searchDestination);
  if (data) {
    console.log(data);
  }

  function handleOnSubmit(event) {
    // console.log("customerId: " + customerId + " origin: " + origin + " destination: " + destination);
    event.preventDefault();
    setSearchCustomerId(customerId);
    setSearOrigin(origin);
    setSearchDestination(destination);
    setIsModal(true);
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
          <input
            onChange={(event) => {
              setDestination(event.target.value);
            }}
            value={destination}
            type="text"
            placeholder="Destino"
            className="p-2 border border-gray-300 rounded"
            required
          />
          <button type="submit" className="p-2 bg-blue-500 text-white rounded">
            Submit
          </button>
        </form>
      </div>
      <div className="w-full md:w-3/4 flex flex-col md:flex-row p-4 ">
        <div className={`${isModal ? "block" : "hidden"} w-full md:w-1/2 md:flex-1 px-2 overflow-y-scroll`}>
          {data?.options?.map((ride) => {
            return (
              <div key={ride.id} className=" shadow-md rounded-lg flex mb-2">
                <div className="w-1/4">
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
                    <div className="text-lg font-bold">R$ 50,00</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="w-full md:w-1/2 md:flex-1">
          {/* <img
            src="src/assets/maps.jpg"
            alt="Maps image"
            className="w-full h-full object-cover"
          /> */}
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
