// Services.js
import React from "react";
import ServiceCard from "./ServiceCard";
import {
  ourservice1,
  ourservice2,
  ourservice3,
  ourservice4,
} from "../../components/Img/ImportedImage";
import { Heading, Wraper } from "../../components/ComponentsIndex";
import { Link } from "react-router-dom";

const Services = () => {
  // Sample service data (replace this with your actual data or API fetch)
  const services = [
    {
      id: 1,
      title: "Makeup",
      imageUrl: ourservice1,
    },
    {
      id: 2,
      title: "Hair Makeover",
      imageUrl: ourservice2,
    },
    {
      id: 3,
      title: "Manicure",
      imageUrl: ourservice3,
    },
    {
      id: 4,
      title: "Pedicure",
      imageUrl: ourservice4,
    },
  ];

  return (
    <Wraper className="bg-[#2F2F2F] w-full">
      <div className="container mx-auto p-4 ">
        <Heading className="text-[28px] md:text-[55px] text-custom-yellow  font-normal text-center md:text-left">
          Our Services
        </Heading>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <Heading className="text-[18px] text-custom-yellow  font-normal text-center md:text-center my-10">
          <Link>View All</Link>
        </Heading>
      </div>
    </Wraper>
  );
};

export default Services;
