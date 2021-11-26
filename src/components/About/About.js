import axios from 'axios';
import React, { useState } from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';
import useAuth from '../../Hooks/useAuth';
import aboutPhoto from "../../images/about.jpg";
import ClientWords from '../../Pages/ClientWords/ClientWords';
const About = () => {
  //page scroll
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 100,
      behavior: "smooth",
    });
  }, []);

  const [cmnt, setCmnt] = useState("");
  const [rating, setRating] = useState("");
  const { user } = useAuth();
  const Comment = (e) => setCmnt(e.target.value);
  const handleRating = (e) => setRating(e.target.value);
  const data = { comment: cmnt, rating: rating, img: user?.photoURL };
  //post comment
  const handleComment = (e) => {
    e.preventDefault();
    if (cmnt === "") {
      return toast("Please!!Write something to submit comments!");
    } else {
      axios
        .post("https://protected-retreat-82720.herokuapp.com/comment", data)
        .then((res) => {
          if (res.data.insertedId) {
            toast.success("Comment created successfully!");
            e.target.reset();
          }
        });
    }
  };
  return (
    <div
      className="mt-5 pt-5 "
      style={{ backgroundColor: "#ededed" }}
    >
      <section>
        <div className="container pb-5">
          <h1 className="text-info p-4">About Us</h1>
          <div className="row align-items-center ">
            <div className="col-md-6">
              <img src={aboutPhoto} alt="" className=" img-fluid rounded" />
            </div>
            <div className="col-md-6">
              <p className="text-secondary text-start">
                ShaverShop is the largest one-stop shopping destination in Bangladesh. Launched in 2016, the online store offers the widest range of products in categories ranging from electronics to household appliances, latest smart phones, Camera, Computing & accessories fashion, health equipment and makeup.
              </p>
              <p className="text-secondary text-start">
                ShaverShop believes in “Delivering Happiness” with an excellent customer experience thus provides the most efficient delivery service through own logistics so that customers get a hassle-free product delivery at their doorstep. We help our local and international vendors as well as 200 brands serving thousands of consumers from all over Bangladesh. We also offer free returns and various payment methods including Cash on delivery, Online Payments, Card on delivery and bKash with all of our products.
              </p>
            </div>
          </div>
        </div>
      </section>
      <ClientWords />
      <section
        className="mt-5 py-5"
        style={{
          backgroundColor: "#ddd"
        }}
      >
        <div className="container text-start fw-bold">
          <h5 className="fw-bold text-start mb-4">
            Join The Review Loyalty Program & Be Rewarded
          </h5>
          <form onSubmit={handleComment}>
            <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Your Comment</Form.Label>
                <Form.Control as="textarea" rows={3} 
                placeholder="Submit Your Comment"
                onChange={Comment} />
              </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>Ratings</Form.Label>
              <Form.Control
                type="text"
                placeholder="Submit Your Ratings 1-5"
                onChange={handleRating}
              />
            </Form.Group>

            <button className="btn btn-warning my-5 fw-bold">
              Submit Comment
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default About;