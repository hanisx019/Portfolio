import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
  return (
    <>
        <div id="font-rem" className="backdrop-blur-sm fixed top-8 left-1/3 transform -translate-x-1/2 w-2/6 h-12 z-20 flex items-center text-white rounded-full border border-gray-200/15 shadow-sm justify-evenly select-none hover:border-purple-900/50 transition-all ease-linear duration-300 text-xs font-normal animate-fade-down ">
        <div onClick={() => navigate('/')} className="cursor-pointer text-white hover:text-purple-400 hover:transition-all ease-linear duration-300 hover:scale-110 tracking-wider">HOME</div>
        <div onClick={() => navigate('/about')} className="cursor-pointer text-white hover:text-purple-400 hover:transition-all ease-linear duration-300 hover:scale-110 tracking-wider">ABOUT</div>
        <div onClick={() => navigate('/projects')} className="cursor-pointer text-white hover:text-purple-400 hover:transition-all ease-linear duration-300 hover:scale-110 tracking-wider">PROJECTS</div>
        <div onClick={() => navigate('/service')} className="cursor-pointer text-white hover:text-purple-400 hover:transition-all ease-linear duration-300 hover:scale-110 tracking-wider">SERVICE</div>
        <div onClick={() => navigate('/contact')} className="cursor-pointer text-white hover:text-purple-400 hover:transition-all ease-linear duration-300 hover:scale-110 tracking-wider">CONTACT</div>
      </div>
    </>
  )
}

export default Navbar

