import React from 'react';
import ReactDOM from 'react-dom/client';
import Page from './Page';

import 'bootstrap/scss/bootstrap.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>
);