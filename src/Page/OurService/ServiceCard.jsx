// ServiceCard.js
import React from "react";
import { Wraper } from "../../components/ComponentsIndex";

const ServiceCard = ({ service }) => {
  return (
    <div className="bg-[#222] rounded-md shadow-lg overflow-hidden transition-transform transform hover:scale-105">
      <Wraper className="rounded-md  object-cover">
        <img
          src={service.imageUrl}
          alt={service.title}
          className="w-[280px] h-[276px] object-contain m-auto pt-5 rounded-md"
        />
      </Wraper>
      <div className="p-5 text-center">
        <h3 className="text-lg font-bold">{service.title}</h3>
        <p className="text-gray-600">{service.description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
