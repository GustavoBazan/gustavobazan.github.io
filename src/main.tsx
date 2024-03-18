import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';

import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';

import App from './pages/Main.tsx';
import ReskyVR from './pages/ReskyVR.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/reskyvr",
    element: <ReskyVR/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

    <div className='flex flex-col w-screen min-h-screen bg-slate-900 select-none overflow-hidden'>

      <Navbar/>
      <RouterProvider router={router} />
      <Footer/>

    </div>
  </React.StrictMode>,
);