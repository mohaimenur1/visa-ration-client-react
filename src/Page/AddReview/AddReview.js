/** @format */

import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useTitle from "../../hooks/useTitle";

const AddReview = () => {
  const notify = () => toast("Service Successfully Added.");
  useTitle("Add Review");
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("this is submit");

    const title = e.target.title.value;
    const price = e.target.price.value;
    const description = e.target.description.value;
    const img = e.target.img.value;

    // console.log(title, price, description, img);

    const service = {
      title,
      price,
      description,
      img,
    };

    console.log(service);

    // const title = e.target.title.value;
    // const price = e.target.price.value;
    // const description = e.target.description.value;
    // const img = e.target.img.value;

    // const form = e.target;
    // const title = form.title.value;
    // const price = form.price.value;
    // const description = form.description.value;
    // const img = form.img.value;

    // const service = {
    //   title,
    //   price,
    //   description,
    //   img,
    // };

    // console.log(service);

    fetch(
      "https://b6a11-service-review-server-side-mohaimenur1.vercel.app/services",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(service),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged);
        console.log(data);
        notify();
        e.target.reset();
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="container">
      <ToastContainer />
      <h2 className="text-center mt-4 mb-4">Adding Service</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            name="title"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Title"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            name="price"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="price"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            name="description"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="description"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            name="img"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="img"
          />
        </div>
        <button type="submit" className="btn btn-primary btn-block mb-4">
          Add Service
        </button>
      </form>
    </div>
  );
};

export default AddReview;
