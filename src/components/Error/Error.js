import React from 'react';
import { Link } from 'react-router-dom';
import error from '../../images/404-error-page-not-found.jpg'
const Error = () => {
    return (
      <div className="my-5 py-5">
        <img src={error} alt="error" className="img-fluid" />
        <div>
          <Link to="/">
            <button className="btn btn-warning">Back</button>
          </Link>
        </div>
      </div>
    );
};

export default Error;