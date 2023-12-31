import React from 'react';
import ReactDOM from 'react-dom/client';
import StoreHome from './page/store-home';
import GlobalStyle from './global-style';
import { QueryClientProvider, QueryClient } from 'react-query';
import { Provider } from 'react-redux';
import store from './store';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <GlobalStyle />
        <StoreHome />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode >
);
