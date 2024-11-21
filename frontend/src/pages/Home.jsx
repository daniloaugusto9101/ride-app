// src/pages/Home.js
import React from "react";
import FormComponent from "../components/FormComponent";
import Card from "../components/Card";

const Home = () => {
  return (
    <section className="flex flex-col md:flex-row gap-y-2 gap-x-4">
      <div className="w-full md:w-1/4  p-4">
        <FormComponent />
      </div>
      <div className="w-full md:w-3/4 flex flex-col md:flex-row py-4 h-96">
        <div className="w-full md:w-1/2 md:flex-1 p-4  overflow-y-scroll ">
          <h2>Corridas</h2>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="w-full md:w-1/2 md:flex-1">
          <img
            src="src/assets/maps.jpg"
            alt="Maps image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;