
import { Route, Routes } from 'react-router-dom';
import Home from './pages/HomePage';
import About from './pages/AboutPage';
import Projects from './pages/ProjectsPage';
import Contact from './pages/ContactPage';
import Navbar from './components/Navbar';
// import SplashCursor from './animation/SplashCursor'
// import TargetCursor from './animation/TargetCursor';


const App = () => {
  

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

      <Navbar/>
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