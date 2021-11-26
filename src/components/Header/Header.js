import React from 'react';
import { Navbar, Container, Nav, Offcanvas } from "react-bootstrap";
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import logo from '../../images/logo.png'
import Admin from '../Admin/Admin/Admin'
const Header = () => {
  const { user, logOut } = useAuth();

  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="white" fixed="top">
        <Container>
          {/* nav logo */}
          <Navbar.Brand as={Link} to="/">
            <img src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                as={NavLink}
                to="/home"
                activeStyle={{
                  fontWeight: "bold",
                  color: "#3598DB",
                }}
                className="fw-bold mx-3"
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/exploremore"
                activeStyle={{
                  fontWeight: "bold",
                  color: "#3598DB",
                }}
                className="fw-bold mx-3"
              >
                Products
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/myBooking"
                activeStyle={{
                  fontWeight: "bold",
                  color: "#3598DB",
                }}
                className="fw-bold mx-3"
              >
                My Purchase
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/aboutus"
                activeStyle={{
                  fontWeight: "bold",
                  color: "#3598DB",
                }}
                className="fw-bold mx-3"
              >
                About
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/contactus"
                activeStyle={{
                  fontWeight: "bold",
                  color: "#3598DB",
                }}
                className="fw-bold mx-3"
              >
                Contact
              </Nav.Link>
            </Nav>
            {/* user name  */}
            <Nav>
              {user.uid ? (
                <h6 className="mt-3 fw-bold px-2">{user.displayName}</h6>
              ) : (
                <Nav.Link as={Link} to="/register">
                  <button className="btn btn-outline-warning fw-bold text-dark">
                    Register
                  </button>
                </Nav.Link>
              )}
              <div>
                {user.uid && (
                  <img
                    src={user?.photoURL}
                    alt=""
                    className="login-user-img d-none d-lg-block rounded-circle mx-auto"
                  />
                )}
              </div>
              {/* Admin pannel */}
              {user.uid && (
                <div>
                  {" "}
                  <button
                    variant="primary"
                    onClick={handleShow}
                    className=" btn mt-2 fw-bold btn-outline-info text-dark ms-3"
                  >
                    <i className="fas fa-user-cog me-2"></i>Admin
                  </button>
                  <Offcanvas show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton className="border-bottom">
                      <Offcanvas.Title>
                        <h3 className="fw-bold text-info">
                          <i className="fas fa-user-cog mx-3"></i>Admin
                          Dashboard
                        </h3>
                      </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body
                      className="offcanvus_bg"
                    >
                      <Admin></Admin>
                    </Offcanvas.Body>
                  </Offcanvas>
                </div>
              )}
              {/* Logout button */}
              {user.uid && (
                <button className=" btn" onClick={logOut}>
                  <i className="fas fs-5 fa-sign-out-alt"></i>
                </button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;