import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Form, Spinner, Table } from 'react-bootstrap';
import { toast } from 'react-toastify';
import swal from 'sweetalert';
const ManagePurchase = () => {
  //page scroll
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 100,
      behavior: "smooth",
    });
  }, []);

  const [bookingData, setBookingData] = useState([]);
  const [statusChng, setStatusChng] = useState("");
  const [isSpinner, setIsSpinner] = useState(true);
  useEffect(() => {
    setIsSpinner(true);
    setTimeout(() => {
      axios
        .get("https://protected-retreat-82720.herokuapp.com/purchaseInfo")
        .then((res) => {
          setBookingData(res.data);
          setIsSpinner(false);
        });
    }, 1000);
  }, []);

  const handleOptionChng = (e) => {
    const updateStatus = e.target.value;
    const newData = { ...bookingData };
    newData.status = updateStatus;
    setStatusChng(newData);
  };
  const handletoOp = (id) => {
    // console.log(statusChng, id);
    axios
      .put(`https://protected-retreat-82720.herokuapp.com/status/${id}`, statusChng)
      .then((res) => {
        console.log(res.data);
        if (res.data.matchedCount === 1) {
          toast.success("Status change successfully!");
        } else {
          toast.error("Something went wrong!");
        }
      });
  };

  //delete booking

  const handleDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this !",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(`https://protected-retreat-82720.herokuapp.com/purchaseDelete/${id}`)
          .then((res) => {
            if (res.data.deletedCount === 1) {
              toast.success("User Tour booking cancel successfully!");
              const restBooking = bookingData.filter(
                (booking) => booking._id !== id
              );
              setBookingData(restBooking);
            }
          });
      } else {
        swal("user ticket is safe!");
      }
    });
  };
  return (
    <div className="my-5 pt-5 product-bg pb-5">
      <div className="container">
        <div className="py-4">
        <h2 className="text-info text-start py-4">
          <i className="fas fa-cog me-2 text-info"></i>Manage All Purchase
        </h2>
        </div>
        {/* table   */}
        {isSpinner ? (
          <Spinner animation="grow" variant="info" />
        ) : (
          <Table striped bordered hover className="text-start" responsive="sm">
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Client Name</th>
                <th>Email</th>
                <th>Date</th>
                <th>Quantity</th>
                <th>Status</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>

            {bookingData.map((bData) => (
              <tbody key={bData?._id}>
                <tr>
                  <td>{bData?.productName}</td>
                  <td>{bData?.name}</td>
                  <td>{bData?.email}</td>
                  <td>{bData?.date}</td>
                  <td>{bData?.quantity}</td>
                  <td className="d-flex justify-content-around">
                    <Form.Select
                      aria-label="Default select example"
                      className="w-75"
                      onChange={handleOptionChng}
                    >
                      <option>{bData?.status}</option>
                      <option value="Approved">Approved</option>
                      <option value="Rejected">Rejected</option>
                      <option value="Pending">Pending</option>
                    </Form.Select>
                    <button
                      onClick={() => handletoOp(bData?._id)}
                      className="btn"
                    >
                      <i className="fas fa-edit"></i>
                    </button>
                  </td>
                  <td className="text-center text-danger trash">
                    <p onClick={() => handleDelete(bData?._id)}>
                      <i className="fas fa-trash"></i>
                    </p>
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

export default ManagePurchase;