import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const home = () => {
  const { isAuthenticated } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="w-auto z mx-auto pt-7 min-h-screen bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: "url('./assets/06-AfternoonMealOfTheWorker 1.png')" }}>
      <nav className=" w-[100vw] bg-transparent">
        <div className='flex mx-20 h-28 bg-transparent  border-b-2 border-white justify-between'>
          <div className='flex'> 

            <img src="./assets/LOGO.png" alt="" className='max-h-20 my-auto'/>

            <div className='h-20 w-1 my-auto rounded-2xl bg-white ml-5'>
            </div>

            <Link to="/" className='my-auto leading-6 text-3xl font-bold ml-2 text-white'> 
                <span>Museo <br />Bulawan</span>
            </Link>
          </div>

          <div className='my-auto text-2xl font-semibold shadow-black w-auto text-white'>
            <NavLink to="/" className='mx-2'>
              Home
            </NavLink>
            
            <NavLink to="/news&events" className='mx-2'>
              News & Events
            </NavLink>

            <NavLink to="/about" className='mx-2'>
              About
            </NavLink>
          </div>

        </div>
      </nav>
      <div className='mx-5 w-auto flex '>
      <div className="w-16 h-full flex flex-col items-center gap-y-56 mt-56">

        <div className='h-60 md:max-h-100 lg:h-90 w-full flex flex-col justify-between items-center text-white'>
          <a href="https://www.facebook.com/museobulawancn" target="_blank" rel="noopener noreferrer" >
            <div className="-rotate-90 w-auto h-auto whitespace-nowrap flex items-center text-xl font-medium">
              <i class="fa-solid fa-circle text-sm mr-2" ></i>
              <i className="fa-brands fa-square-facebook mr-2"></i> 
              <span>Museo Bulawan</span>
            </div>
          </a>
          <div className="-rotate-90 w-auto h-auto">
            <span>museobulawanofficial</span>
          </div>
        </div>
      </div>



        
          <div className="w-full h-fit ">
        <span className="text-5xl font-bold text-[#DAB765] leading-[200%] drop-shadow-[3px_3px_0px_black] ">
          WELCOME TO
          </span>

        </div>
        <div className='w-16 h-auto'>
s
          </div>
        </div>
          
      </div>
      <div className='w-auto z mx-auto pt-36 min-h-screen bg-cover bg-center bg-no-repeat'
       style={{ backgroundImage: "url('./assets/06-AfternoonMealOfTheWorker 1.png')" }}>

      </div>
    </>
  );
};

export default home;