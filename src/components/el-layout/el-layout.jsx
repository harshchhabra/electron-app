import React from 'react';
import ELSidebar from '../el-sidebar';
import './el-layout.scss';

function ELLayout({ children }) {
  return (
    <div className="el-layout">
      <ELSidebar />
      <nav className="relative el-header bg-gray-800 grid grid-cols-4 py-6">
        <div className="col-start-4 px-6 sm:px-6 flex justify-between">
          <div className="text-sm text-white">03</div>
        </div>
      </nav>
      <div className="container mx-auto mt-6">{children}</div>
    </div>
  );
}

export default ELLayout;
