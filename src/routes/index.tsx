
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import {Home} from '../pages/Home'
import {Login} from '../pages/Login'
import {Signup} from '../pages/SignUp'

export const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/cadastro" element={<Signup />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}