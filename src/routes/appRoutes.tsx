import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Dashboard } from '../pages/dashboard';

import {Home} from '../pages/home'
import {Signup} from '../pages/signup'
import {Order} from '../pages/order'

export const AppRoutes: React.FC = () => {
  return (
      <Routes>
        <Route path="/cadastro" element={<Signup />} />
        <Route path="/" element={<Home />} />
        <Route path="/pedido" element={<Order />} />

        <Route
            path="*"
            element={<Navigate to="/" replace />}
        />
      </Routes>
  )
}