import React from 'react';
import { Carousel } from 'react-bootstrap';
import sliderImg_1 from '../../../images/slider-img-1.jpg'
import sliderImg_2 from '../../../images/slider-img-2.jpg'
import sliderImg_3 from '../../../images/slider-img-3.jpg'
import sliderImg_4 from '../../../images/slider-img-4.jpg'
import { useHistory } from 'react-router';
import LearnMore from '../../LearnMore/LearnMore';
const TopBanner = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const history = useHistory();
  return (
    <div className="mt-5 pt-4">
      {/* //Carousel */}
      <Carousel>

        <Carousel.Item interval={5000}>
          <img
            className="d-block slider-img"
            src={sliderImg_2}
            alt="First slide"
          />
          <div className="slider-text">
            <h1>Never Go Out of Style</h1>
            <p className="py-md-4">
              All Authentic Product in one Place | Available now on Shaver Shop
            </p>
            <button
              className="btn btn-warning fw-bold"
              onClick={() => { history.push('/exploremore')}}>
              Shop Now
            </button>
            <LearnMore show={modalShow} onHide={() => setModalShow(false)} />
          </div>
        </Carousel.Item>

        <Carousel.Item interval={5000}>
          <img
            className="d-block slider-img"
            src={sliderImg_3}
            alt="Second slide"
          />

          <div className="slider-text">
            <h1>Mi Beard Trimmer IPX7 Certified Waterproof Body</h1>
            <p className="py-md-4">
              Xiaomi Mi Beard Trimmer goes on sale in Bangladesh today, Priced at BDT 1,199
            </p>
            <button
              className="btn btn-warning fw-bold"
              onClick={() => { history.push('/exploremore')}}>
              Shop Now
            </button>
            <LearnMore show={modalShow} onHide={() => setModalShow(false)} />
          </div>
        </Carousel.Item>

        <Carousel.Item interval={5000}>
          <img
            className="d-block slider-img"
            src={sliderImg_4}
            alt="Third slide"
          />
          <div className="slider-text">
            {/* <h1 className="text-secondary">Keep Your Facial Hair <br/> Looking Resplendent</h1>
              <p className="py-md-4">
               Xiaomi Mi Beard Trimmer goes on sale in Bangladesh today, Priced at BDT 1,199
              </p> */}
            <button
              className="btn btn-warning fw-bold"
              onClick={() => { history.push('/exploremore')}}>
              Shop Now
            </button>
            <LearnMore show={modalShow} onHide={() => setModalShow(false)} />
          </div>
        </Carousel.Item>

        <Carousel.Item interval={5000}>
          <img
            className="d-block slider-img"
            src={sliderImg_1}
            alt="Third slide"
          />
          <div className="slider-text">
            <h1>Keep Your Facial Hair <br /> Looking Resplendent</h1>
            <p className="py-md-4">
              All Authentic Product in one Place | Available now on Shaver Shop
            </p>
            <button
              className="btn btn-warning fw-bold"
              onClick={() => { history.push('/exploremore')}}>
              Shop Now
            </button>
            <LearnMore show={modalShow} onHide={() => setModalShow(false)} />
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default TopBanner;