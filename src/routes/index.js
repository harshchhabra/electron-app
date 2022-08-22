import React from 'react'
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';
import {
  Dashboard,
  LeadsList,
  CustomersList,
  AddLeads
} from './loadable-routes';

function MainRoutes() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace={true} />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/leads" element={<LeadsList />} />
        <Route path="/leads/add" element={<AddLeads />} />
        <Route path="/customers" element={<CustomersList />} />
      </Routes>
    </HashRouter>
  );
}

export default MainRoutes;
