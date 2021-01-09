import loadable from '@loadable/component';
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import GlobalModalContext from '../globalModal/GlobalModalContext';

const NavBar = loadable(() => import('../navBar/NavBar'));
const Signin = loadable(() => import('../authentication/Signin'));
const Signup = loadable(() => import('../authentication/Signup'));
const Home = loadable(() => import('../../pages/home/Home'));

export function RouterController() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home} />

        <Route path='/signin' component={Signin} />
        <Route path='/signup' component={Signup} />

        <Route>
          <Redirect to='/' />
        </Route>
      </Switch>
    </>
  );
}
