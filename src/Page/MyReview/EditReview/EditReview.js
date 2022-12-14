/** @format */

import React from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useTitle from "../../../hooks/useTitle";

const EditReview = () => {
  const reviewData = useLoaderData();
  useTitle("Edit Review");
  const { servicename, username, textarea, _id } = reviewData;
  console.log(reviewData);
  const [review, setReview] = useState(reviewData);
  const notify = () => toast("Review Updated Successfully!");

  const handleUpdateReview = (e) => {
    e.preventDefault();
    fetch(
      `https://b6a11-service-review-server-side-mohaimenur1.vercel.app/review/${_id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(review),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          notify();
          //   e.target.reset();
        }
      });
  };

  const handleInputChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newReviewText = { ...review };
    newReviewText[field] = value;
    setReview(newReviewText);
  };

  return (
    <div className="container mt-4 card">
      <ToastContainer />
      <h2 className="text-center">update review</h2>
      <h3 className="text-center">Service Name: {servicename}</h3>
      <h3 className="text-center">Username: {username}</h3>
      <form onSubmit={handleUpdateReview}>
        <textarea
          onChange={handleInputChange}
          className="form-control mt-3 mb-3"
          name="textarea"
          rows="3"
          defaultValue={textarea}
        ></textarea>
        <button type="submit" className="btn btn-primary mb-3">
          Update Review
        </button>
      </form>
    </div>
  );
};

export default EditReview;
