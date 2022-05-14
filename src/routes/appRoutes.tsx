import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import {Home} from '../pages/home'
import {Signup} from '../pages/signup'

export const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Signup />} />
        {/* <Route
            path="*"
            element={<Navigate to="/" replace />}
        /> */}
      </Routes>
    </BrowserRouter>
  )
}