import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import UserContext from '../../UserContext';

const PrivateRoute = ({children, ...rest}) => {
    let  [user, setUser] = useContext(UserContext)
    console.log(user);
    return (
        <Route
        {...rest}
        render={({ location }) =>
          user.isLoggedIn ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default PrivateRoute;