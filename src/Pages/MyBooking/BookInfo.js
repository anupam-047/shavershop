import React from 'react';

const BookInfo = ({ bookInfo, handleDelete }) => {
  const {productName, date, price, quantity, status } = bookInfo;
  return (
    <div className="row shadow p-4 rounded-3 my-4">
      <div className="col-md-6">
        <div className="row text-start">
          <div className="col-md-7 ">
            <p className="text-secondary mb-2">Product Name</p>
            <h5>{productName}</h5>
          </div>
          <div className="col-md-5">
            <p className="text-secondary mb-2">Date</p>
            <h5>{date}</h5>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="row text-start align-items-center">
          <div className="col-md-3 ">
            <p className="text-secondary mb-2">Price</p>
            <h5>{price}</h5>
          </div>
          <div className="col-md-3 ">
            <p className="text-secondary mb-2">Quantity</p>
            <h5>{quantity}</h5>
          </div>
          <div className="col-md-3 text-center">
            <p className="text-secondary mb-2 text-start">Status</p>
            <h5
              className={
                status === "Rejected"
                  ? "fs-6 bg-danger text-white status-width p-1"
                  : "fs-6 bg-info status-width p-1"
              }
            >
              {status}
            </h5>
          </div>
          <div className="col-md-3">
            {status === "Approved" ? (
              <button
                className="btn btn-danger fw-bold"
                onClick={handleDelete}
                disabled
              >
                Cancel
              </button>
            ) : (
              <button className="btn btn-danger fw-bold" onClick={handleDelete}>
                Cancel
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookInfo;