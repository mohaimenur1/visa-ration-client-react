/** @format */

import React from "react";
import { useLoaderData } from "react-router-dom";
import ServiceCard from "../../components/ServiceCard/ServiceCard";

const ServicePage = () => {
  const services = useLoaderData();
  return (
    <div className="container">
      <h2>ServicePage</h2>
      <div className="row g-3">
        {services.map((service) => {
          return <ServiceCard key={service._id} service={service} />;
        })}
      </div>
    </div>
  );
};

export default ServicePage;
