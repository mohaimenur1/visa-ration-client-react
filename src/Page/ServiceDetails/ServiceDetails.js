import React from "react";
import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const details = useLoaderData();
  //   console.log(details);
  return (
    <div className="container mt-4">
      <h2 className="display-2 text-center">{details.title}</h2>
      <div className="card">
        <img src={details?.img} className="card-img-top img-fluid" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{details?.title}</h5>
          <p className="card-text">{details?.description}</p>
          <p className="fw-bold ">Price: {details?.price}</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
