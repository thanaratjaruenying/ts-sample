import loadable from '@loadable/component';
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import GlobalModalContext from '../globalModal/GlobalModalContext';

const NavBar = loadable(() => import('../navBar/NavBar'));
const Signin = loadable(() => import('../authentication/Signin'));
const Signup = loadable(() => import('../authentication/Signup'));
const Home = loadable(() => import('../../pages/home/Home'));
const Payment = loadable(() => import('../../pages/payment/Payment'));
const Report = loadable(() => import('../../pages/report/Report'));
const Support = loadable(() => import('../../pages/support/Support'));
const DownloadSDK = loadable(() => import('../../pages/downloadSDK/DownloadSDK'));

export function RouterController() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home} />

        <ProtectedRoute path='/report'>
          <Report />
        </ProtectedRoute>

        <ProtectedRoute path='/payment'>
          <Payment />
        </ProtectedRoute>

        <ProtectedRoute path='/download-sdk'>
          <DownloadSDK />
        </ProtectedRoute>

        <ProtectedRoute path='/support'>
          <Support />
        </ProtectedRoute>

        <Route path='/signin' component={Signin} />
        <Route path='/signup' component={Signup} />

        <Route>
          <Redirect to='/' />
        </Route>
      </Switch>
    </>
  );
}
