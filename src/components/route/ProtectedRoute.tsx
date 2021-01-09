import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../../services/authentication/AuthContext';

export default function ProtectedRoute({ children, ...rest }: any) {
  const auth = useAuth();

  return (
    <Route
      exact
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/signin',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
