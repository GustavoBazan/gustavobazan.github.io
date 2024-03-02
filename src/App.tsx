import Navbar from './components/Navbar.tsx';
import Header from './components/Header.tsx';
import About from './components/About.tsx';
import Projects from './components/Projects.tsx';
import Footer from './components/Footer.tsx';

function App() {

  return (

    <div className='flex flex-col w-screen min-h-screen bg-slate-900 select-none overflow-hidden'>

      <Navbar/>
      <Header/>
      <About/>
      <Projects />
      <Footer/>

    </div>

  )

};

export default App