import React from 'react';
import { useAuth } from '../../services/authentication/AuthContext';
import { useHistory, useLocation, Link } from 'react-router-dom';
import styles from './Signup.module.scss';

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
    <div>
      <div>
        <div className={styles.signupContainer}>
          <div className={styles.signupChild}>
            <div className={styles.signupTitle}>
              <p>Sign up</p>
            </div>
            <div className={styles.inputSignupPage}>
              <p>Email</p>
              <input type='text' />
            </div>
            <div className={styles.inputSignupPage}>
              <p>Password</p>
              <input type='text' />
            </div>
            <div className={styles.inputSignupPage}>
              <p>Confirm password</p>
              <input type='text' />
            </div>
            <div className={styles.signupBottom}>
              <div className={styles.child}>
                <button className={styles.cancelButton} onClick={() => history.push('/')}>
                  Cancel
                </button>
                <button className={styles.signupButton} onClick={signin}>
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
