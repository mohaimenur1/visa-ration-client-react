/** @format */

import React from 'react';

const Blog = () => {
  return (
    <div className='container'>
      <div className='row g-4'>
        {/* first */}
        <div className='col-lg-6'>
          <div className='card bg-dark text-white'>
            <img
              src='https://techgeekbuzz.com/media/post_images/uploads/2021/11/SQL-vs-NoSQL.jpg'
              className='card-img img-fluid h-100'
              alt='Stony Beach'
            />
            <div className='p-4'>
              <h5 className='card-title'>Difference between SQL and NoSQL?</h5>
              <p className='card-text fw-bold'>Sql</p>
              <div className='card-text'>
                <li>Relational Database management system</li>
                <li>Vertically Scalable</li>
                <li>Fixed or predifined Schema</li>
                <li>Not suitable fro hierarchical data storage</li>
              </div>
              <p className='card-text'>NOsql</p>
              <div className='card-text'>
                <li>Distributed Database management system</li>
                <li>Horizontally Scalable</li>
                <li>Dynamic Schema</li>
                <li>Best suitable for hierarchical data storage</li>
              </div>
            </div>
          </div>
        </div>
        {/* second */}
        <div className='col-lg-6'>
          <div className='card bg-dark text-white'>
            <img
              src='https://jwt.io/img/logo-asset.svg'
              className='card-img img-fluid h-100'
              alt='Stony Beach'
            />
            <div className='p-4'>
              <h5 className='card-title'>What is JWT, and how does it work?</h5>
              <p className='card-text fw-bold'>Sql</p>
              <div className='card-text'>
                JWT, or JSON Web Token, is an open standard used to share
                security information between two parties — a client and a
                server. Each JWT contains encoded JSON objects, including a set
                of claims. JWTs are signed using a cryptographic algorithm to
                ensure that the claims cannot be altered after the token is
                issued.
              </div>
              <p className='card-text fw-bold'>Works</p>
              <div className='card-text'>
                JWTs differ from other web tokens in that they contain a set of
                claims. Claims are used to transmit information between two
                parties. What these claims are depends on the use case at hand.
                For example, a claim may assert who issued the token, how long
                it is valid for, or what permissions the client has been
                granted. A JWT is a string made up of three parts, separated by
                dots (.), and serialized using base64. In the most common
                serialization format, compact serialization, the JWT looks
                something like this: xxxxx.yyyyy.zzzzz.
              </div>
            </div>
          </div>
        </div>
        {/* third */}
        <div className='col-lg-6'>
          <div className='card bg-dark text-white'>
            <img
              src='https://static.javatpoint.com/javascriptpages/images/javascript-vs-nodejs.png'
              className='card-img img-fluid h-100'
              alt='Stony Beach'
            />
            <div className='p-4'>
              <h5 className='card-title'>
                What is the difference between javascript and NodeJS?
              </h5>
              <p className='card-text fw-bold'>javascript</p>
              <div className='card-text'>
                <li>
                  Javascript is a programming language that is used for writing
                  scripts on the website.{' '}
                </li>
                <li>It is basically used on the client-side.</li>
                <li>
                  Javascript is capable enough to add HTML and play with the
                  DOM.{' '}
                </li>
                <li>Javascript is used in frontend development.</li>
              </div>
              <p className='card-text fw-bold'>nodeJs</p>
              <div className='card-text'>
                <li>
                  We can run Javascript outside the browser with the help of
                  NodeJS.{' '}
                </li>
                <li>It is mostly used on the server-side.</li>
                <li>Nodejs does not have capability to add HTML tags.</li>
                <li>Nodejs is used in server-side development.</li>
              </div>
            </div>
          </div>
        </div>
        {/* fourth */}
        <div className='col-lg-6'>
          <div className='card bg-dark text-white'>
            <img
              src='https://www.infowindtech.com/wp-content/uploads/2022/04/Node.js-Architecture-1024x575.jpg'
              className='card-img img-fluid h-100'
              alt='Stony Beach'
            />
            <div className='p-4'>
              <h5 className='card-title'>
                How does NodeJS handle multiple requests at the same time?
              </h5>

              <div className='card-text'>
                NodeJS receives multiple client requests and places them into
                EventQueue. NodeJS is built with the concept of event-driven
                architecture. NodeJS has its own EventLoop which is an infinite
                loop that receives requests and processes them. EventLoop is the
                listener for the EventQueue. If NodeJS can process the request
                without I/O blocking then the event loop would itself process
                the request and sends the response back to the client by itself.
                But, it is possible to process multiple requests parallelly
                using the NodeJS cluster module or worker_threads module.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
