import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';

import { useAuth } from '../../services/authentication/AuthContext';
import styles from './NavBar.module.scss';

export default function NavBar() {
  const history = useHistory();
  const { pathname } = useLocation();
  const auth = useAuth();

  const logOut = () => {
    auth.signout(() => {
      history.replace('/');
    });
  };
  const isActivated = (path: string) => {
    return pathname.includes(path) ? styles.activatedLink : '';
  };

  return (
    <header className={styles.navbar}>
      <div className={styles.leftContainer}>
        <DeleteIcon onClick={() => history.replace('/')} />
        <Link className={isActivated('/report')} to='/report'>
          Report
        </Link>
        <Link className={isActivated('/payment')} to='/payment'>
          Payment
        </Link>
        <Link className={isActivated('/download-sdk')} to='/download-sdk'>
          Download SDK
        </Link>
        <Link className={isActivated('/support')} to='/support'>
          Support
        </Link>
      </div>
      <div className={styles.rightContainer}>
        {auth.user ? (
          <>
            <button color='primary' onClick={logOut}>
              Log out
            </button>
            <div className={styles.profile} >
              <span>First Lastname</span>
            </div>
          </>
        ) : (
            <Link className={styles.profile} to='/signin'>
              <div>Log in</div>
            </Link>
          )}
      </div>
    </header>
  );
}
