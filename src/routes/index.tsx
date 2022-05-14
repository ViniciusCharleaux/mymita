
import React, { useEffect } from 'react';

import {AppRoutes} from './appRoutes';
import {AuthRoutes} from './authRoutes';

import {useAuth} from '../hooks/auth'

export const Routes: React.FC = () => {

  const {user, updateLogin} = useAuth()

  useEffect(() => {
    updateLogin()
  },[])


  return (
    !user ?
      (
        <AppRoutes />
      ):
      (
        <AuthRoutes/>
      )
  )
}