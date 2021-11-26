import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import useAuth from '../../../Hooks/useAuth';

const PurchaseForm = ({ productName, price }) => {
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();


  const onSubmit = (data) => {
    data["email"] = user?.email || "";
    data["name"] = user?.displayName || "";
    data["productName"] = productName || "";
    data["price"] = price || "";
    data["status"] = "Pending";
    //post on the database
    axios
      .post("https://protected-retreat-82720.herokuapp.com/purchaseInfo", data)
      .then((response) => {
        if (response.data.insertedId) {
          toast.success(
            "Submitted successfully Your information! Wait for confirm your product"
          );
        } else {
          toast.error(
            "Something went wrong! Again Submit your information!"
          );
        }
        reset();
      });
    console.log(data);
  };


  return (
    <div className="p-3 bg-light">
      <h5 className="fw-bold">Purchase Details</h5>
      <form onSubmit={handleSubmit(onSubmit)} className="booking-form shadow p-3 rounded-3">
        <input
          {...register("name")}
          value={user?.displayName || ""}
          placeholder="Name"
        />
        <input
          {...register("email")}
          type="email"
          value={user?.email || ""}
          placeholder="Email"

        />
        <input {...register("productName")} value={productName || ""} placeholder="Product Name" />
        <input {...register("telephone")} placeholder="Telephone" required />
        <input {...register("date")} type="date" required />
        <textarea
          {...register("address")}
          placeholder="Address"
        />
        <input
          {...register("quantity")}
          type="number"
          placeholder="Quantity"
        />

        <div>
          <button className="btn btn-warning my-3 fw-bold">Submit to Purchase</button>
        </div>
      </form>
    </div>
  );
};

export default PurchaseForm;