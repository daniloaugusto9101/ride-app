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

  function handleOnSubmit(event) {
    // console.log("customerId: " + customerId + " origin: " + origin + " destination: " + destination);
    event.preventDefault();
    setSearchCustomerId(customerId);
    setSearOrigin(origin);
    setSearchDestination(destination);
    setIsModal(true);
  }
  return (
    <section className="flex flex-col md:flex-row gap-y-2 gap-x-4  overflow-hidden">
      <div className="w-full md:w-1/4  p-4">
        <form className="flex flex-col gap-4 p-4 border-2 border-gray-100 rounded-lg" onSubmit={handleOnSubmit}>
          <input
            onChange={(event) => {
              setCustomerId(event.target.value);
            }}
            value={customerId}
            type="text"
            placeholder="ID user"
            className="p-2 border border-gray-300 rounded"
          />
          <input
            onChange={(event) => {
              setOrigin(event.target.value);
            }}
            value={origin}
            type="text"
            placeholder="Origem"
            className="p-2 border border-gray-300 rounded"
          />
          <input
            onChange={(event) => {
              setDestination(event.target.value);
            }}
            value={destination}
            type="text"
            placeholder="Destino"
            className="p-2 border border-gray-300 rounded"
          />
          <button type="submit" className="p-2 bg-blue-500 text-white rounded">
            Submit
          </button>
        </form>
      </div>
      <div className="w-full md:w-3/4 flex flex-col md:flex-row py-4">
        <div className={`${isModal ? "block" : "hidden"} w-full md:w-1/2 md:flex-1 p-4  overflow-y-scroll`}>
          <h2>Corridas</h2>
          {/* {rides.options.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))} */}
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
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
