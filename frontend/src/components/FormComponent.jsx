import React from "react";

const FormComponent = () => {
  return (
    <form className="flex flex-col gap-4 p-4 border-2 border-gray-100 rounded-lg">
      <input
        type="text"
        placeholder="ID user"
        className="p-2 border border-gray-300 rounded"
      />
      <input
        type="text"
        placeholder="Origem"
        className="p-2 border border-gray-300 rounded"
      />
      <input
        type="text"
        placeholder="Destino"
        className="p-2 border border-gray-300 rounded"
      />
      <button type="submit" className="p-2 bg-blue-500 text-white rounded">
        Submit
      </button>
    </form>
  );
};

export default FormComponent;
