import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ProvideAuthContext } from '../services/authentication/AuthContext';
import { RouterController } from './route/Router';
import './App.css';
import '../global.module.scss';

export default function routeConfig() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <ProvideAuthContext>
        <RouterController />
      </ProvideAuthContext>
    </BrowserRouter>
  );
}
