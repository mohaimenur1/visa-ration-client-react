/** @format */

import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Review from '../../components/Review/Review';
import { AuthContext } from '../../context/UserContext';

const ServiceDetails = () => {
  const details = useLoaderData();
  const { user } = useContext(AuthContext);
  const [reviewData, setReviewData] = useState({});
  // console.log(details);
  const handleReviewSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const textarea = form.textarea.value;

    const review = {
      service: details._id,
      servicename: details.title,
      username: user?.displayName,
      userphoto: user?.photoURL,
      useremail: user?.email,
      textarea,
    };

    fetch('http://localhost:5000/reviews', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged);
        alert('Review Added Successfully');
        form.reset();
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetch(`http://localhost:5000/reviews/${details._id}`)
      .then((res) => res.json())
      .then((data) => setReviewData(data));
  }, [reviewData]);

  return (
    <div className='container mt-4'>
      <h2 className='display-2 text-center'>{details.title}</h2>
      <div className='card'>
        <img src={details?.img} className='card-img-top img-fluid' alt='...' />
        <div className='card-body'>
          <h5 className='card-title'>{details?.title}</h5>
          <p className='card-text'>{details?.description}</p>
          <p className='fw-bold '>Price: {details?.price}</p>
          <a href='#' className='btn btn-primary'>
            Go somewhere
          </a>
        </div>
      </div>
      {/* review box */}
      <div className='review-write-section mt-5'>
        <h2 className='text-center'>Write Some Reviews</h2>
        <form onSubmit={handleReviewSubmit}>
          <div className='mb-3'>
            <textarea
              className='form-control'
              name='textarea'
              id='exampleFormControlTextarea1'
              rows='3'
              placeholder='Write something'
              required
            ></textarea>
          </div>
          <button className='btn btn-primary' type='submit'>
            Add Review
          </button>
        </form>
      </div>
      {/* review cards */}
      {reviewData.length > 0 ? (
        <div className='review-section'>
          <Review reviewData={reviewData} />
        </div>
      ) : (
        <div className='card container mt-4'>
          <h2 className='text-center'>No Review Exist !!!!!</h2>
        </div>
      )}
      {/* //{' '} */}
      {/* <div className='review-section'>
        // <Review reviewData={reviewData} />
        //{' '}
      </div> */}
    </div>
  );
};

export default ServiceDetails;
