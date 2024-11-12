import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import CountriesSearch from '../pages/countriesSearch';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/countries" element={<CountriesSearch />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
