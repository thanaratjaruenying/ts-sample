import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { ProvideAuthContext } from '../services/authentication/AuthContext';
import { RouterController } from './route/Router';
import './App.scss';
import '../global.color.scss';

export default function routeConfig() {
  return (
    <ProvideAuthContext>
      <BrowserRouter>
        <RouterController />
      </BrowserRouter>
    </ProvideAuthContext>

  );
}
