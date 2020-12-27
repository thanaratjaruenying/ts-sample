import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useAuth } from '../../services/authentication/AuthContext';

import './Signin.scss';

export default function Signin() {
  const auth = useAuth();
  const history = useHistory();
  const location = useLocation();

  const { from }: any = location.state || { from: { pathname: '/' } };
  const signin = () => {
    auth.signin(() => {
      history.replace(from);
    });
  };

  return (
    <div className='signinContainer'>

      <p>Sign in</p>

      <div>
        <span>Don't have an account?&nbsp;</span>
        <Link to='/signup'>Register</Link>
      </div>
      <button className='signinButton' onClick={signin}>
        Sign in
      </button>
    </div>
  );
}
