/** @format */

import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ReviewCard from '../ReviewCard/ReviewCard';

const Review = ({ reviewData }) => {
  console.log(reviewData);
  // const reviews = useLoaderData();
  // console.log(reviews);
  return (
    <div>
      <h2 className='text-center mt-4'>Reviews</h2>
      {/* <section className='p-4 p-md-5 text-center text-lg-start shadow-1-strong rounded'>
        <div className='row d-flex justify-content-center'>
          <div className='col-md-10'>
            <div className='card'>
              <div className='card-body m-3'>
                <div className='row'>
                  <div className='col-lg-4 d-flex justify-content-center align-items-center mb-4 mb-lg-0'>
                    <img
                      src='https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20%2810%29.webp'
                      className='rounded-circle img-fluid shadow-1'
                      alt='woman avatar'
                    />
                  </div>
                  <div className='col-lg-8'>
                    <p className='text-muted fw-light mb-4'>
                      {reviews.textarea}
                    </p>
                    <p className='fw-bold lead mb-2'>
                      <strong>{reviews.username}</strong>
                    </p>
                    <p className='fw-bold text-muted mb-0'>Product manager</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <div className='review-card'>
        {reviewData.map((review) => {
          console.log(review);
          return (
            <div>
              <ReviewCard key={review._id} review={review} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Review;
