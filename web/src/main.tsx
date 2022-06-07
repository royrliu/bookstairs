import React, { StrictMode, Suspense } from 'react';

import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Suspense fallback={<p>Loading...</p>}>{useRoutes([])}</Suspense>
    </Router>
  </StrictMode>,
);
