import React from 'react';
import ReactDOM from 'react-dom/client';
import StoreHome from './page/store-home';
import GlobalStyle from './global-style';
import { QueryClientProvider, QueryClient } from 'react-query';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <StoreHome/>
      </QueryClientProvider>
  </React.StrictMode>
);
