import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import {Dashboard} from '../pages/dashboard'
import { OrderList } from '../pages/Adm/OrderList';
import { ShowMenu } from '../pages/showmenu';
import { ShowContact } from '../pages/contact';
import { Signup } from '../pages/signup';
import { Home } from '../pages/home';

export const AdmRoutes: React.FC = () => {
  return (
      <Routes>
        <Route path="/dashboard" element={<OrderList />} />
        <Route path="/menu" element={<ShowMenu />} />
        <Route path="/cadastro" element={<Signup />} />
        <Route path="/contact" element={<ShowContact />} />
        <Route path='/home' element={<Home />} />
        <Route
            path="*"
            element={<Navigate to="/dashboard" replace />}
        />
      </Routes>
  )
}