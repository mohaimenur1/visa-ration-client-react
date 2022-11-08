import React from "react";
import { Link } from "react-router-dom";
import ReactReadMoreReadLess from "react-read-more-read-less";

const HomeCard = ({ service }) => {
  return (
    <div className="col-lg-4">
      <div className="card">
        <img src={service.img} className="card-img-top img-fluid" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{service.title}</h5>
          <p>
            <ReactReadMoreReadLess
              charLimit={100}
              readMoreText={""}
              readLessText={""}
              //   readMoreClassName="read-more-less--more"
              //   readLessClassName="read-more-less--less"
            >
              {service.description}
            </ReactReadMoreReadLess>
          </p>
          {/* <p className="card-text">{service.description}</p> */}
          <Link className="btn btn-primary">Details</Link>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
