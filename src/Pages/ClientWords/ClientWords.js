import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Rating from 'react-rating';
import carouselbackground from "../../images/background-banner.png";
import cmnt_p from "../../images/customer-2.png";
import axios from 'axios';
const ClientWords = () => {
const [comments,setComments]=useState([])
    useEffect(() => {
        axios
          .get("https://protected-retreat-82720.herokuapp.com/comments")
          .then((res) => setComments(res.data));
    },[])

    return (
      <div className="product-bg">
        <div className="fw-bold text-uppercase p-5">
          <h2 className="fw-bold py-2">Our Clients Review</h2>
        </div>
        <Carousel className="carousel-control mx-auto mb-5 pb-5">
          {comments.map((comment) => (
            <Carousel.Item interval={2000} key={ comment?._id}>
              <img
                className="d-block slider-img-2"
                src={carouselbackground}
                alt="First slide"
              />
              <div className="slider-text-2">
                 <img
                  src={comment?.img || cmnt_p}
                  alt=""
                  className="rounded-circle border review-img"
                />
                <div>
                  {" "}
                  <p className="p-4">{comment.comment.slice(0,90)+"..."}</p>
                  <Rating
                  className="text-warning"
                  initialRating={comment?.rating}
                  fullSymbol="fas fa-star"
                  emptySymbol="far fa-star"
                  readonly
                />
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    );
};

export default ClientWords;