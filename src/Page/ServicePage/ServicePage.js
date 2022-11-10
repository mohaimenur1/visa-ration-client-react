/** @format */

import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import useTitle from '../../hooks/useTitle';

const ServicePage = () => {
  const services = useLoaderData();
  const [loading, setLoading] = useState(true);
  useTitle('Services');
  if (loading) {
    return (
      <div className='text-center mt-4'>
        <div
          className='spinner-grow text-danger'
          style={{ width: '3rem', height: '3rem' }}
          role='status'
        >
          <span className='visually-hidden'>Loading...</span>
        </div>
      </div>
    );
  }
  return (
    <div className='container'>
      <h2>ServicePage</h2>
      <div className='row g-3'>
        {services.map((service) => {
          return <ServiceCard key={service._id} service={service} />;
        })}
      </div>
    </div>
  );
};

export default ServicePage;
