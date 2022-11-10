/** @format */

import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/UserContext';
import ReviewRow from './ReviewRow/ReviewRow';

const MyReview = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [user?.email]);
  return (
    <div>
      <h2 className='text-center mt-3'>You have {reviews.length} reviews</h2>
      <div className='review-table container mt-5'>
        <table className='table align-middle mb-0 bg-white'>
          <thead className='bg-light'>
            <tr>
              <th>Services</th>
              <th>User</th>
              <th>Review</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((review) => {
              return <ReviewRow key={review._id} review={review} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyReview;
