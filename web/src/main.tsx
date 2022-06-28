import React, { StrictMode } from 'react';

import App from 'App';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { BookStairsTheme } from 'styles/theme';
import 'locales';

const root = createRoot(document.getElementById('root')!);

// The default entrypoint for our frontend application.
root.render(
  <StrictMode>
    <BrowserRouter>
      <BookStairsTheme>
        <App />
      </BookStairsTheme>
    </BrowserRouter>
  </StrictMode>,
);
