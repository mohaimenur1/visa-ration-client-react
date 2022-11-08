/** @format */

import React from 'react';

const HomePage = () => {
  return (
    <div>
      <div className='banner'></div>
      <div className='two-sections container'>
        <div className='row'>
          <div className='list-group col-lg-6'>
            <button
              type='button'
              className='list-group-item list-group-item-action active'
              aria-current='true'
            >
              The current button
            </button>
            <button
              type='button'
              className='list-group-item list-group-item-action'
            >
              A second button item
            </button>
            <button
              type='button'
              className='list-group-item list-group-item-action'
            >
              A third button item
            </button>
            <button
              type='button'
              className='list-group-item list-group-item-action'
            >
              A fourth button item
            </button>
            <button
              type='button'
              className='list-group-item list-group-item-action'
              disabled
            >
              A disabled button item
            </button>
          </div>
          <div class='col-lg-6'>
            <div class='h-100 p-5 bg-light border rounded-3'>
              <h2>Get a better Service</h2>
              <p>
                Providing a good quality of support . And trying to improve for
                your outcome . Please feel free to come here and get your
                Services.
              </p>
              <button class='btn btn-outline-secondary' type='button'>
                Example button
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
