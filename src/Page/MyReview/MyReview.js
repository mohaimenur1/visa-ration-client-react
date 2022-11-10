/** @format */

import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/UserContext";
import ReviewRow from "./ReviewRow/ReviewRow";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useTitle from "../../hooks/useTitle";

const MyReview = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  useTitle("My Reviews");

  const notify = () => toast("Delete Successfully");

  useEffect(() => {
    fetch(
      `https://b6a11-service-review-server-side-mohaimenur1.vercel.app/reviews?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [user?.email]);

  const handleDelete = (id) => {
    const proced = window.confirm(
      "Are you sure, you want to delete this review?"
    );
    if (proced) {
      fetch(
        `https://b6a11-service-review-server-side-mohaimenur1.vercel.app/reviews/${id}`,
        {
          method: "DELETE",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            notify();
            // ;
            const remaining = reviews.filter((rev) => rev._id !== id);
            setReviews(remaining);
          }
        });
    }
  };

  return (
    <div>
      <ToastContainer />

      {reviews.length > 0 ? (
        <>
          <h2 className="text-center mt-3">
            You Have {reviews.length} Reviews
          </h2>
          <div className="review-table container mt-5">
            <table className="table align-middle mb-0 bg-white">
              <thead className="bg-light">
                <tr>
                  <th>Services</th>
                  <th>User</th>
                  <th>Review</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {reviews.map((review) => {
                  return (
                    <ReviewRow
                      key={review._id}
                      review={review}
                      handleDelete={handleDelete}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <h2 className="text-center">No reviews were added</h2>
      )}
      {/* // <div className='review-table container mt-5'>
      //   <table className='table align-middle mb-0 bg-white'>
      //     <thead className='bg-light'>
      //       <tr>
      //         <th>Services</th>
      //         <th>User</th>
      //         <th>Review</th>
      //         <th>Actions</th>
      //       </tr>
      //     </thead>
      //     <tbody>
      //       {reviews.map((review) => {
      //         return (
      //           <ReviewRow
      //             key={review._id}
      //             review={review}
      //             handleDelete={handleDelete}
      //           />
      //         );
      //       })}
      //     </tbody>
      //   </table>
      // </div> */}
    </div>
  );
};

export default MyReview;
