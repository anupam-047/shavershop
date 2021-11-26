import React from 'react';
import brand1 from "../../images/brand-1.jpg";
import brand2 from "../../images/brand-2.jpg";
import brand3 from "../../images/brand-3.jpg";
import brand4 from "../../images/brand-4.jpg";
import brand5 from "../../images/brand-5.jpg";
const Extra = () => {
    return (
      <div>
        <div className="container">
        <h2 className="fw-bold py-2">OUR TOP BRANDS</h2>
          <div className="d-flex flex-column flex-md-row justify-content-around my-5 py-md-5">
            <div>
              <img src={brand1} alt="brand" className="mb-4 mb-md-0" />
            </div>
            <div>
              <img src={brand2} alt="brand" className="mb-4 mb-md-0 d-md-block d-none" />
            </div>
            <div>
              <img src={brand3} alt="brand" className="mb-4 mb-md-0" />
            </div>
            <div>
              <img src={brand4} alt="brand" className="mb-4 mb-md-0" />
            </div>
            <div>
              <img src={brand5} alt="brand" className=" d-md-block d-none" />
            </div>
          </div>
        </div>
      </div>
    );
};

export default Extra;