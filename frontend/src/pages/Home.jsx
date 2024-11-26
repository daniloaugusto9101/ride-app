// src/pages/Home.js
import React from "react";
import FormComponent from "../components/FormComponent";
import Card from "../components/Card";
import { APIProvider, Map } from "@vis.gl/react-google-maps";

const Home = () => {
  return (
    <section className="flex flex-col md:flex-row gap-y-2 gap-x-4  overflow-hidden">
      <div className="w-full md:w-1/4  p-4">
        <FormComponent />
      </div>
      <div className="w-full md:w-3/4 flex flex-col md:flex-row py-4">
        <div className="w-full md:w-1/2 md:flex-1 p-4  overflow-y-scroll ">
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
