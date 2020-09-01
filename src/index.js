import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import { StoreProvider } from './store/index';
 
import './index.scss';

ReactDOM.render(
   <StoreProvider>
    <AppRouter />
  </StoreProvider>,
  document.getElementById('root')
); 