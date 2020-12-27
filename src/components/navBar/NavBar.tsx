import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';

import { useAuth } from '../../services/authentication/AuthContext';
import './NavBar.scss';

const logo = require('../../resources/svg/logo.svg');
const personOutline = require('../../resources/svg/personOutline.svg');

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
    return pathname.includes(path) ? 'activatedLink' : '';
  };

  return (
    <header className='navbar'>
      <div className='leftContainer'>
        <img onClick={() => history.replace('/')} src={logo} alt='logo' />
        <Link className={isActivated('/my-games')} to='/my-games'>
          My games
        </Link>
        <Link className={isActivated('/ad-object')} to='/ad-object'>
          Ad object
        </Link>
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
      <div className='rightContainer'>
        {auth.user ? (
          <>
            <button onClick={logOut}>
              Log out
              </button>
            <div
              className='profile'
            >
              {/* <img src={personOutline} alt='person' /> */}
              <span>First Lastname</span>
            </div>
          </>
        ) : (
            <Link className='profile' to='/signin'>
              <div>Log in</div>
            </Link>
          )}
      </div>
    </header>
  );
}
