/** @format */

import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import useTitle from '../../hooks/useTitle';

const ServicePage = () => {
  const services = useLoaderData();
  useTitle('Services');
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
