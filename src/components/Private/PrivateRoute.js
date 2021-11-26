import React from 'react';
import useAuth from '../../Hooks/useAuth'
import {Spinner } from "react-bootstrap";
import {
  Route,
  Redirect,
} from "react-router-dom";
const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    if (isLoading) {
        return <Spinner animation="grow" variant="warning" />;
    }
  return (
    <div>
      <Route
        {...rest}
        render={({ location }) =>
          user.uid ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location },
              }}
            />
          )
        }
      />
    </div>
  );
};

export default PrivateRoute;