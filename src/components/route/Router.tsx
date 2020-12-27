import loadable from '@loadable/component';
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import NavBar from '../navBar/NavBar';
import Signin from '../authentication/Signin';
import Signup from '../authentication/Signup';
import ProtectedRoute from './ProtectedRoute';
import GlobalModalContext from '../globalModal/GlobalModalContext';

const Home = loadable(() => import('../../pages/home/Home'));
const MyGames = loadable(() => import('../../pages/myGames/MyGames'));
const AddGame = loadable(() => import('../../pages/myGames/AddGame'));
const AdObject = loadable(() => import('../../pages/adObject/AdObject'));
const AddAdObject = loadable(() => import('../../pages/adObject/AddAdObject'));
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

        <ProtectedRoute path='/my-games/:type'>
          <GlobalModalContext>
            <AddGame />
          </GlobalModalContext>
        </ProtectedRoute>

        <ProtectedRoute path='/my-games'>
          <MyGames />
        </ProtectedRoute>

        {/* <ProtectedRoute path='/ad-object'>
          <AdObject />
        </ProtectedRoute> */}
        <Route exact path='/ad-object/:type' component={AddAdObject} />
        <Route exact path='/ad-object' component={AdObject} />

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
