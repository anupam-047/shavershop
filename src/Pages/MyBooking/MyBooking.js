import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import swal from 'sweetalert';
import useAuth from '../../Hooks/useAuth';
import BookInfo from './BookInfo';
const MyBooking = () => {
//page scroll
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 100,
      behavior: "smooth",
    });
  }, []);

    const { user } = useAuth();
    const [allBookingInfo, setAllBookingInfo] = useState([]);
    React.useEffect(() => {
      axios
        .get(
          `https://protected-retreat-82720.herokuapp.com/purchaseInfo/${user?.email}`
        )
        .then((res) => {
          setAllBookingInfo(res.data);
        });
    }, [user?.email]);
      
    const handleDelete = (id) => {
        swal({
          title: "Are you sure?",
          text: "Once deleted, you will not be able to recover this !",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        }).then((willDelete => {
            if (willDelete) {
                axios
                    .delete(
                        `https://protected-retreat-82720.herokuapp.com/purchaseDelete/${id}`
                    )
                    .then((res) => {
                        if (res.data.deletedCount === 1) {
                            toast.success("Tour Purchase Cancel successfully!");
                            const restBooking = allBookingInfo.filter(
                                (booking) => booking._id !== id
                            );
                            setAllBookingInfo(restBooking);
                        }
                    });
            } else {
                swal("Your ticket is safe!");
            }
        }))
        
    }
    return (
      <div  className="my-5 pt-5 product-bg ">
        <section>
          <div className="container pb-5">
            <h1 className="text-info pt-4">My Total Purchase Item: {allBookingInfo.length}</h1>
            <div className=" my-4 bg-light">
              {allBookingInfo.map((bookInfo) => (
                <BookInfo
                  key={bookInfo._id}
                  bookInfo={bookInfo}
                  handleDelete={() => handleDelete(bookInfo._id)}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    );
};

export default MyBooking;