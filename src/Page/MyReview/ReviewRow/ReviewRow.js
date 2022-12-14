/** @format */

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ReviewRow = ({ review, handleDelete }) => {
  const { _id, service, servicename, textarea, useremail, username } = review;
  const [reviewService, setReviewService] = useState({});

  useEffect(() => {
    fetch(
      `https://b6a11-service-review-server-side-mohaimenur1.vercel.app/services/${service}`
    )
      .then((res) => res.json())
      .then((data) => setReviewService(data));
  }, [service]);

  return (
    <>
      <tr>
        <td>
          <div className="d-flex align-items-center">
            <img
              src={reviewService.img}
              alt=""
              style={{ width: "45px", height: "45px" }}
              className="rounded-circle"
            />
            <div className="ms-3">
              <p className="fw-bold mb-1">{servicename}</p>
              {/* <p className='text-muted mb-0'>john.doe@gmail.com</p> */}
            </div>
          </div>
        </td>
        <td>
          <p className="fw-normal mb-1">{username}</p>
          <p className="text-muted mb-0">{useremail}</p>
        </td>

        <td>{textarea}</td>
        <td>
          <Link
            to={`/editreview/${_id}`}
            type="button"
            className="btn btn-link btn-sm btn-rounded"
          >
            <i className="fa fa-pencil-square-o"></i>
          </Link>
          <button
            onClick={() => handleDelete(_id)}
            type="button"
            className="btn btn-link btn-sm btn-rounded"
          >
            <i className="fa fa-trash"></i>
          </button>
        </td>
      </tr>
    </>
  );
};

export default ReviewRow;
