import React from 'react';
import { NavLink } from "react-router-dom";

const Admin = () => {

    return (
      <div>
        <ul className="list-unstyled fs-5">
          <li>
            <NavLink
              to="/managepurchase"
              activeStyle={{
                color: "black",
              }}
              className=" text-decoration-none"
            >
              <p className=" py-3 fw-bold fs-6">
                <i className="fas fa-tasks me-2"></i>Manage All Purchase
              </p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Pay"
              activeStyle={{
                color: "black",
              }}
              className=" text-decoration-none"
            >
              <p className=" py-3 fw-bold fs-6">
                <i className="fas fa-tasks me-2"></i>My Pay
              </p>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/addnewproduct"
              activeStyle={{
                color: "black",
              }}
              className=" text-decoration-none"
            >
              {" "}
              <p className=" py-3 fw-bold fs-6">
                <i className="fas fa-plus me-2"></i>Add a New Product
              </p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/manageproduct"
              activeStyle={{
                color: "black",
              }}
              className=" text-decoration-none"
            >
              {" "}
              <p className=" py-3 fw-bold fs-6">
                <i className="fas fa-cog me-2"></i>Manage Product
              </p>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/addnewcomment"
              activeStyle={{
                color: "black",
              }}
              className=" text-decoration-none"
            >
              {" "}
              <p className=" py-3 fw-bold fs-6">
                <i className="fas fa-plus me-2"></i>Add New Comment
              </p>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/managecomment"
              activeStyle={{
                color: "black",
              }}
              className=" text-decoration-none"
            >
              {" "}
              <p className=" py-3 fw-bold fs-6">
                <i className="fas fa-cog me-2"></i>Manage Comment
              </p>
            </NavLink>
          </li>


        </ul>
      </div>
    );
};

export default Admin;