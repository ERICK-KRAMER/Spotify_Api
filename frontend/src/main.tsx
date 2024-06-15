import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './style.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AppMusicContextProvider } from './context/appMusicContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppMusicContextProvider>
        <Routes>
          <Route path='/' element={<App />} />
        </Routes>
      </AppMusicContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
