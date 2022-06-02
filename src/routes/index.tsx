
import React, { useEffect } from 'react';

import {AppRoutes} from './appRoutes';
import {AuthRoutes} from './authRoutes';

import {useAuth} from '../hooks/auth'
import { BrowserRouter } from 'react-router-dom';

export const Routes: React.FC = () => {

  const {user} = useAuth()

  return (
    <BrowserRouter>
    {!user ?
      (
        <AppRoutes />
      ):
      (
        <AuthRoutes/>
  )
       }</BrowserRouter>)
}