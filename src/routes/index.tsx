
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import {Home} from '../pages/home'
import {Signup} from '../pages/signup'

export const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  )
}