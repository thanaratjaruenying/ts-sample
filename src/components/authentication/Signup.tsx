import React from 'react';
import { useAuth } from '../../services/authentication/AuthContext';
import { useHistory, useLocation, Link } from 'react-router-dom';
import './Signup.scss';

export default function Signup() {
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
    <div className='signupContainer'>
      <button className='cancelButton' onClick={() => history.push('/')}>
        Cancel
                </button>
      <button className='signupButton' onClick={signin}>
        Sign up
                </button>
    </div>
  );
}
