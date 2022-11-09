/** @format */

import React, { useContext } from 'react';
import { AuthContext } from '../../context/UserContext';

const MyReview = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h2>my review page</h2>
    </div>
  );
};

export default MyReview;
