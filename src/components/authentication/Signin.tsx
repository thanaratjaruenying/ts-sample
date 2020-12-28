import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useAuth } from '../../services/authentication/AuthContext';

import styles from './Signin.module.scss';

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
    <div>
      <div>
        <div className={styles.signinContainer}>
          <div className={styles.signinChild}>
            <div className={styles.signinTitle}>
              <p>Sign in</p>
            </div>
            <div className={styles.inputSigninPage}>
              <p>Email</p>
              <input type='text' />
            </div>
            <div className={styles.inputSigninPage}>
              <p>Password</p>
              <input type='text' />
            </div>
            <div className={styles.forgotLink}>
              <Link to='/forget-password'>Forgot password</Link>
            </div>
            <div className={styles.signinBottom}>
              <div className={styles.child}>
                <div>
                  <span>Don't have an account?&nbsp;</span>
                  <Link to='/signup'>Register</Link>
                </div>
                <button className={styles.signinButton} onClick={signin}>
                  Sign in
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
