
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import {Home} from '../pages/home'
import {Intro} from '../pages/intro'

export const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Intro />} />
      </Routes>
    </BrowserRouter>
  )
}