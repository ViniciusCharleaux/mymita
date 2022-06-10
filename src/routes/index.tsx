
import React, { useEffect } from 'react';

import {AppRoutes} from './appRoutes';
import {AuthRoutes} from './authRoutes';
import {AdmRoutes} from './admRoutes'

import {useAuth} from '../hooks/auth'
import { BrowserRouter } from 'react-router-dom';

export const Routes: React.FC = () => {

  const {user} = useAuth()


    if(!user){
      return(
        <BrowserRouter>
          <AppRoutes/>
        
        </BrowserRouter>
      )
    }else{

      if(user.Privilegio === "0"){
        return (
          <BrowserRouter>
            <AuthRoutes/>
          </BrowserRouter>
        )
        
      }else{
        return(
          <BrowserRouter>
            <AdmRoutes/>
          </BrowserRouter>
        )
          
      }
    }

  }
