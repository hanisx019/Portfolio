
import { Route, Routes } from 'react-router-dom';
import Home from './pages/HomePage';
import About from './pages/AboutPage';
import Projects from './pages/ProjectsPage';
import Contact from './pages/ContactPage';
// import SplashCursor from './animation/SplashCursor'
// import TargetCursor from './animation/TargetCursor';
import { useNavigate } from 'react-router-dom';

const App = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* <SplashCursor 
        DENSITY_DISSIPATION={1.5}
        VELOCITY_DISSIPATION={1}
        PRESSURE={0.1}
        CURL={3}
        SPLAT_RADIUS={0.2}
        SPLAT_FORCE={1000}
        COLOR_UPDATE_SPEED={10}
        SHADING={true}
        RAINBOW_MODE={false}
        COLOR="#A855F7"
      /> */}
      {/* <TargetCursor 
        spinDuration={2}
        hideDefaultCursor
        parallaxOn
        hoverDuration={0.2}
      /> */}


      <div id="font-rem" className="backdrop-blur-sm fixed top-8 left-1/3 transform -translate-x-1/2 w-2/6 h-12 z-20 flex items-center text-white rounded-full border border-gray-200/15 shadow-sm justify-evenly select-none hover:border-purple-900/50 transition-all ease-linear duration-300 text-xs font-normal animate-fade-down ">

        <div onClick={() => navigate('/')} className="cursor-pointer text-white hover:text-purple-400 hover:transition-all ease-linear duration-300 hover:scale-110 tracking-wider">HOME</div>
        <div onClick={() => navigate('/about')} className="cursor-pointer text-white hover:text-purple-400 hover:transition-all ease-linear duration-300 hover:scale-110 tracking-wider">ABOUT</div>
        <div onClick={() => navigate('/projects')} className="cursor-pointer text-white hover:text-purple-400 hover:transition-all ease-linear duration-300 hover:scale-110 tracking-wider">PROJECTS</div>
        <div onClick={() => navigate('/service')} className="cursor-pointer text-white hover:text-purple-400 hover:transition-all ease-linear duration-300 hover:scale-110 tracking-wider">SERVICE</div>
        <div onClick={() => navigate('/contact')} className="cursor-pointer text-white hover:text-purple-400 hover:transition-all ease-linear duration-300 hover:scale-110 tracking-wider">CONTACT</div>
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
    
  )
}

export default App