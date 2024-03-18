import ReactDOM from 'react-dom/client'
import {
  Routes,
  Route,
  HashRouter
} from "react-router-dom";
import './index.css';

import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';

import App from './pages/Main.tsx';
import ReskyVR from './pages/ReskyVR.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <HashRouter>

    <div className='flex flex-col w-screen min-h-screen bg-slate-900 select-none overflow-hidden'>

      <Navbar/>

        <Routes>
          <Route path='/' element={<App/>} />
          <Route path='/reskyvr' element={<ReskyVR/>} />
          <Route path='*' element={<div> Page Not Found </div>} />
        </Routes>

      <Footer/>

    </div>

  </HashRouter>
);