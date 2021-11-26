import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const Product = ({ place }) => {
    const { productName, rating, sell, price, description, image ,_id } = place;
    return (
      <div>
        <Col>
          <Card>
            <Card.Img
              variant="top"
              src={image}
              className="productdisplay-img position-relative"
            />
            <h6 className="position-absolute top-0 bg-info p-2 rounded">
            BDT {price}
            </h6>
            <Card.Body className="text-start">
              <div>
                <Card.Title>{productName}</Card.Title>
              </div>
              <Card.Text className="text-secondary">
                {description.slice(0, 100)}
              </Card.Text>
              <div className="d-flex justify-content-between">
                <Rating
                  className="text-warning"
                  initialRating={rating}
                  fullSymbol="fas fa-star"
                  emptySymbol="far fa-star"
                  readonly
                />
                <div>
                  <h6> {sell} Review</h6>
                </div>
              </div>
              <div className="text-center">
                <Link to={`/purchaseForm/${_id}`}>
                  {" "}
                  <button className="btn btn-info mt-4 fw-bold">
                    <i className="fas fa-shopping-cart me-2"></i>Buy Now
                  </button>
                </Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </div>
    );
};

export default Product;