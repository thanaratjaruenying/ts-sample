import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ProvideAuthContext } from '../services/authentication/AuthContext';
import { RouterController } from './route/Router';
import './App.css';
import '../global.module.scss';

export default function routeConfig() {
  return (
    <BrowserRouter>
      <ProvideAuthContext>
        <RouterController />
      </ProvideAuthContext>
    </BrowserRouter>
  );
}
