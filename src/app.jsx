import React, { Suspense } from 'react';
import MainRoutes from './routes';

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MainRoutes />
    </Suspense>
  );
}

export default App
