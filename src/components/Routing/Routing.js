import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MyBooking from '../../Pages/MyBooking/MyBooking';
import Error from '../Error/Error';
import Booking from '../Form/Booking/Booking';
import Login from '../Form/Login/Login';
import Register from '../Form/Register/Register';
import Header from '../Header/Header';
import Home from '../Home/Home/Home';
import PrivateRoute from '../Private/PrivateRoute';
import Admin from "../Admin/Admin/Admin";
import ManagePurchase from '../Admin/ManagePurchase/ManagePurchase';
import AddNewProduct from '../Admin/AddNewProduct/AddNewProduct';
import Footer from '../Footer/Footer';
import Contact from '../Contact/Contact';
import About from '../About/About';
import ExploreMore from '../../Pages/ExploreMore/ExploreMore';
import ManageProduct from '../Admin/ManageProduct/ManageProduct';
import Extra from '../Extra/Extra';
import AddNewComment from '../Admin/AddNewComment/AddNewComment';
import ManageComment from '../Admin/ManageComment/ManageComment';
import Pay from '../Admin/Pay/Pay';

const Routing = () => {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/exploremore">
            <ExploreMore />
          </Route>
          <Route exact path="/aboutus">
            <About />
          </Route>
          <Route exact path="/contactus">
            <Contact />
          </Route>
          <Route exact path="/admin">
            <Admin />
          </Route>
          <Route exact path="/managepurchase">
            <ManagePurchase />
          </Route>
          <Route exact path="/addnewproduct">
            <AddNewProduct />
          </Route>
          <Route exact path="/addnewcomment">
            <AddNewComment />
          </Route>
          <Route exact path="/Pay">
            <Pay />
          </Route>
          <Route exact path="/managecomment">
            <ManageComment />
          </Route>
          <PrivateRoute exact path="/exploremore">
            <ExploreMore />
          </PrivateRoute>
          <Route exact path="/manageproduct">
            <ManageProduct />
          </Route>
          <PrivateRoute exact path="/myBooking">
            <MyBooking />
          </PrivateRoute>
          <PrivateRoute exact path="/purchaseForm/:id">
            <Booking />
          </PrivateRoute>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
        <Extra />
        <Footer />
      </Router>
    </div>
  );
};

export default Routing;