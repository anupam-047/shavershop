import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
const AddNewComment = () => {
  //page scroll
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 100,
      behavior: "smooth",
    });
  }, []);

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    data["rating"] = parseFloat(data["rating"]);
    axios
      .post("https://protected-retreat-82720.herokuapp.com/comment", data)
      .then((res) => {
        if (res.data.insertedId) {
          toast.success("Data Inserted Successfully!");
          reset();
        }
      });
  };

  return (
    <div className="my-5 pt-5 mb-5 product-bg">
      <div className="container pb-4">
        <div>
          <h2 className="text-info text-start py-4">
            <i className="fas fa-cog me-2 text-info"></i>ADD New Comment
          </h2>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="shadow p-5 rounded-3 bg-light"
        >
          <div className="row">
            <div className="col-md-6 d-flex flex-column booking-form">
              <textarea
                {...register("comment")}
                placeholder="Description"
              />
              <input {...register("rating")} type="text" placeholder="Rate" />
            </div>
            <div className="col-md-6 d-flex flex-column booking-form">
              <input {...register("img")} placeholder="Image url" />
 
            </div>
            <div>
              <button className="btn btn-warning my-5 fw-bold">
                Add New Comment
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewComment;