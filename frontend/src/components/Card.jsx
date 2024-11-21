import React from "react";

const Card = () => {
  return (
    <div>
      <div className="bg-white shadow-md rounded-lg flex p-2">
        <img
          src="src/assets/vehicle.jpg"
          alt="Vehicle image"
          className="w-24 h-24 object-cover rounded-l-lg"
        />
        <div className="p-2 flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-bold">Nome do Veículo</h3>
            <p className="text-gray-600">Descrição do veículo.</p>
          </div>
          <div>
            <div className="flex items-center">
              <span className="text-yellow-500">★★★★☆</span>
              <span className="ml-2 text-gray-600">(4.5)</span>
            </div>
            <div className="text-lg font-bold">R$ 50,00</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
