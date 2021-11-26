import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Form, Row, Spinner } from "react-bootstrap";
import Destination from '../Product/Product';
import { useHistory } from 'react-router';
const T_destinations = () => {
  const [places, setPlaces] = useState([]);
  const [isSpinner, setIsSpinner] = useState(true)
  const [afterSearch, setAfterSearch] = useState([])
  const history = useHistory();
  useEffect(() => {
    setIsSpinner(true);
    setTimeout(() => {
      setIsSpinner(true);
      axios
        .get("https://protected-retreat-82720.herokuapp.com/products")
        .then((res) => {
          setPlaces(res.data);
          //   console.log(res.data);
          setAfterSearch(res.data);
          setIsSpinner(false);
        });
    }, 1000);
  }
    , [])

  const handleSearch = (e) => {
    // console.log(e.target.value);
    const searchText = e.target.value;
    const searchDestination = places?.filter((place) => place?.productName.toLowerCase().includes(searchText.toLowerCase()));
    setAfterSearch(searchDestination);
  }
  return (
    <div className="product-bg">
      <div className="container pt-5">
        <section>
          <h2 className="fw-bold py-2">FIND YOUR PRODUCT</h2>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="text"
              placeholder="Search Product name...."
              className="w-75 p-3 mx-auto rounded-pill"
              onChange={handleSearch}
            />
          </Form.Group>
        </section>
        {isSpinner ? (
          <Spinner animation="grow" variant="info" />
        ) : (
          <section className="my-4 py-4">
            <Row xs={1} md={2} lg={3} xl={3} className="g-4">
              {afterSearch?.slice(0, 6).map((place) => (
                <Destination key={place?._id} place={place} />
              ))}
            </Row>
          </section>
        )}

        <section >
          <button className="btn btn-warning fw-bold p-2 mb-5 mt-3" onClick={() => {
            history.push('/exploremore')
          }}>Explore More >></button>
        </section>
      </div>
    </div>
  );
};

export default T_destinations;