
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import {Dashboard} from '../pages/dashboard'
import { Home } from '../pages/home';
import { Signup } from '../pages/signup';

export const AuthRoutes: React.FC = () => {
  return (
      <Routes>
        <Route path="/cadastro" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/" element={<Home />} /> */}
        <Route
            path="*"
            element={<Navigate to="/dashboard" replace />}
        />
      </Routes>
  )
}