import React, { useState } from 'react';
import { Spinner, Table } from 'react-bootstrap';
import axios from 'axios';
import swal from "sweetalert";
import { toast } from "react-toastify";
const ManageProduct = () => {
  //page scroll
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 100,
      behavior: "smooth",
    });
  }, []);

  const [isSpinner, setIsSpinner] = useState(true);
  const [datas, setDatas] = React.useState([]);
  React.useEffect(() => {
    setIsSpinner(true);
    setTimeout(() => {
      axios.get("https://protected-retreat-82720.herokuapp.com/products").then((res) => {
        setDatas(res.data);
        setIsSpinner(false);
      });
    }, 1000);
  }, []);
  const handleDataDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this !",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(`https://protected-retreat-82720.herokuapp.com/dataDelete/${id}`)
          .then((res) => {
            if (res.data.deletedCount === 1) {
              toast.success("Data deleted successfully!");
              const restBooking = datas.filter((booking) => booking._id !== id);
              setDatas(restBooking);
            }
          });
      } else {
        swal("Your Data is safe!");
      }
    });
  };
  return (
    <div className="my-5 py-5 product-bg">
      <div className="container">
        <h2 className="text-info text-start py-4">
          <i className="fas fa-cog me-2 text-info"></i>Manage Product
        </h2>
        {isSpinner ? (
          <Spinner animation="grow" variant="info" />
        ) : (
          <Table striped bordered hover>
            <thead className="text-start">
              <tr>
                <th>Product Name</th>
                <th>Price</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            {datas.map((dt) => (
              <tbody key={dt?._id} className="text-start">
                <tr>
                  <td>{dt?.productName}</td>
                  <td>{dt?.price} BDT</td>
                  <td className="text-center">
                    <button
                      className="btn"
                      onClick={() => handleDataDelete(dt?._id)}
                    >
                      <i className="fas fa-trash-alt text-danger"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
          </Table>
        )}
      </div>
    </div>
  );
};

export default ManageProduct;