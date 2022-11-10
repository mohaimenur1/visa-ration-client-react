/** @format */

import React from 'react';
import { Link } from 'react-router-dom';
import Air from './img/air.png';
import File from './img/files.png';
import viva from './img/viva.png';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import HomeCard from '../../components/HomeCard/HomeCard';
import useTitle from '../../hooks/useTitle';

const HomePage = () => {
  const services = useLoaderData();
  useTitle('Home Page');
  return (
    <div>
      <div className='banner container'>
        <div
          id='carouselExampleCaptions'
          className='carousel slide'
          data-bs-ride='false'
        >
          <div className='carousel-indicators'>
            <button
              type='button'
              data-bs-target='#carouselExampleCaptions'
              data-bs-slide-to='0'
              className='active'
              aria-current='true'
              aria-label='Slide 1'
            ></button>
            <button
              type='button'
              data-bs-target='#carouselExampleCaptions'
              data-bs-slide-to='1'
              aria-label='Slide 2'
            ></button>
            <button
              type='button'
              data-bs-target='#carouselExampleCaptions'
              data-bs-slide-to='2'
              aria-label='Slide 3'
            ></button>
          </div>
          <div className='carousel-inner'>
            <div className='carousel-item active'>
              <img src={Air} className='d-block h-75 img-fluid' alt='...' />
              <div className='carousel-caption d-none d-md-block'>
                <h1>Flight Booking?</h1>
                <p>I am here to collect Flight ticket with best price.</p>
              </div>
            </div>
            <div className='carousel-item'>
              <img src={File} className='d-block h-75 img-fluid' alt='...' />
              <div className='carousel-caption d-none d-md-block'>
                <h1>Unable to prepare Files?</h1>
                <p>
                  No worries Files are organised correctly and maintain with
                  best support.
                </p>
              </div>
            </div>
            <div className='carousel-item'>
              <img src={viva} className='d-block h-75 img-fluid' alt='...' />
              <div className='carousel-caption d-none d-md-block'>
                <h1>Scared about facing embassy</h1>
                <p>
                  I will give you some tips to get ride of all your fears and
                  face embassy like a boss.
                </p>
              </div>
            </div>
          </div>
          <button
            className='carousel-control-prev'
            type='button'
            data-bs-target='#carouselExampleCaptions'
            data-bs-slide='prev'
          >
            <span
              className='carousel-control-prev-icon'
              aria-hidden='true'
            ></span>
            <span className='visually-hidden'>Previous</span>
          </button>
          <button
            className='carousel-control-next'
            type='button'
            data-bs-target='#carouselExampleCaptions'
            data-bs-slide='next'
          >
            <span
              className='carousel-control-next-icon'
              aria-hidden='true'
            ></span>
            <span className='visually-hidden'>Next</span>
          </button>
        </div>
      </div>
      <div className='two-sections container mt-5'>
        <div className='row'>
          <div className='list-group col-lg-6'>
            <button
              type='button'
              className='list-group-item list-group-item-action active'
              aria-current='true'
            >
              File Ready?
            </button>
            <button
              type='button'
              className='list-group-item list-group-item-action'
            >
              Passport Varified
            </button>
            <button
              type='button'
              className='list-group-item list-group-item-action'
            >
              embassy Facing
            </button>
            <button
              type='button'
              className='list-group-item list-group-item-action'
            >
              Police Varification
            </button>
            <button
              type='button'
              className='list-group-item list-group-item-action'
              disabled
            >
              Flight Booking
            </button>
            <button
              type='button'
              className='list-group-item list-group-item-action'
              disabled
            >
              Expert
            </button>
          </div>
          <div className='col-lg-6'>
            <div className='h-100 p-5 bg-light border rounded-3'>
              <h1>Get a better Service</h1>
              <p>
                Providing a good quality of support . And trying to improve for
                your outcome . Please feel free to come here and get your
                Services.
              </p>
              <Link
                to='/service'
                className='btn btn-outline-secondary'
                type='button'
              >
                Go to Services
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* service card */}
      <div className='container mt-3'>
        <div className='row g-4'>
          {services.map((service) => {
            return <HomeCard key={service._id} service={service} />;
          })}
        </div>
      </div>
      <div className='text-center mt-3 mb-3'>
        <Link to='/service' className='btn btn-primary'>
          See All
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
