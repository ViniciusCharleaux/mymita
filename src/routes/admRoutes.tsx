import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import {Dashboard} from '../pages/dashboard'
import { OrderList } from '../pages/Adm/OrderList';
import { ShowMenu } from '../pages/showmenu';
import { ShowContact } from '../pages/contact';

export const AdmRoutes: React.FC = () => {
  return (
      <Routes>
        <Route path="/dashboard" element={<OrderList />} />
        <Route path="/menu" element={<ShowMenu />} />
        
        <Route path="/contact" element={<ShowContact />} />
        {/* <Route path="/" element={<Home />} /> */}
        <Route
            path="*"
            element={<Navigate to="/dashboard" replace />}
        />
      </Routes>
  )
}