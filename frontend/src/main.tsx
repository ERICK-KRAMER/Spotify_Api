import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './style.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppMusicContextProvider } from './context/appMusicContext.tsx';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppMusicContextProvider>
        <QueryClientProvider client={client}>
          <Routes>
            <Route path='/' element={<App />} />
          </Routes>
        </QueryClientProvider>
      </AppMusicContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
