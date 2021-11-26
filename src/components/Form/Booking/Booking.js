import axios from 'axios';
import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useParams } from 'react-router';
import PurchaseForm from '../BookingForm/PurchaseForm';
const Booking = () => {
  //page scroll
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 100,
      behavior: "smooth",
    });
  }, []);

  const { id } = useParams();
  const [locationDetails, setLocationDetails] = useState({});
  const [isSpinner, setIsSpinner] = useState(true);
  const { image, productName, description, price, sell } = locationDetails;

  //get one
  React.useEffect(() => {
    setIsSpinner(true);
    setTimeout(() => {
      axios(`https://protected-retreat-82720.herokuapp.com/productCollecton/${id}`).then(
        (res) => {
          setLocationDetails(res.data);
          setIsSpinner(false);
        }
      );
    }, 1000);
  }, []);
  console.log(locationDetails);
  return (
    <div className="my-5 py-5 product-bg" >
      <div>
        <h3 className="text-dark text-uppercase">Purchase Product</h3>
      </div>
      {isSpinner ? (
        <Spinner animation="grow" variant="info" className="mt-5" />
      ) : (
        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-7">
              <div className="row p-3 bg-light">
                <div className="col-lg-4 p-3 ">
                  <div>
                    <img
                      src={image}
                      alt={productName}
                      className="img-fluid rounded"
                    />
                  </div>
                </div>
                <div className="col-lg-8 text-start border-bottom">
                  <h5>{productName}</h5>
                  <p className="text-secondary">{description}</p>
                  <h6 className="text-danger">{sell} Item Sell</h6>
                  <h5>Price: {price} BDT</h5>
                </div>
                <h5 className="fw-bold text-end">Total: {price} BDT</h5>
              </div>
            </div>
            <div className="col-lg-5 mt-lg-0 mt-5">
              <PurchaseForm productName={productName} price={price} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Booking;