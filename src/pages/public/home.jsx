import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const home = () => {
  const { isAuthenticated } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="w-auto mx-auto pt-7 min-h-screen bg-cover bg-center bg-no-repeat "
      style={{ backgroundImage: "url('./assets/06-AfternoonMealOfTheWorker 1.png')" }}>
      <nav className=" w-[100vw] bg-transparent">
        <div className='flex mx-20 h-28 bg-transparent  border-b-2 border-white justify-between'>
          <div className='flex'> 

            <img src="./assets/LOGO.png" alt="" className='max-h-20 my-auto'/>

            <div className='h-20 w-1 my-auto rounded-2xl bg-white ml-5'>
            </div>

            <Link to="/" className='my-auto leading-none text-4xl font-bold ml-2 text-white'> 
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
      <div className='mx-5 w-auto flex h-full '>
        <div className="w-16 h-100 flex flex-col items-center gap-y-56 justify-center mt-56">
          <div className='lg:h-60 2xl:h-100 w-full flex flex-col justify-between items-center text-white'>
            <a href="https://www.facebook.com/museobulawancn" target="_blank" rel="noopener noreferrer" className='-rotate-90'>
              <div className=" w-auto h-auto whitespace-nowrap flex items-center text-xl font-medium">
                <i className="fa-solid fa-circle text-sm mr-2"></i>
                <i className="fa-brands fa-square-facebook mr-2"></i> 
                <span>Museo Bulawan</span>
              </div>
            </a>
            
            <a href="https://www.instagram.com/museobulawanofficial/" target="_blank" rel="noopener noreferrer" className='-rotate-90'>
              <div className=" w-auto h-auto whitespace-nowrap flex items-center text-xl font-medium">
                <i className="fa-solid fa-circle text-sm mr-2"></i>
                <i className="fa-brands fa-instagram mr-2"></i> 
                <span>museobulawanofficial</span>
              </div>
            </a>
          </div>
        </div>




        
          <div className="w-full h-fit px-6 flex flex-col gap-0 leading-none pt-16">
              <span className="text-5xl font-bold text-[#DAB765]  drop-shadow-[3px_3px_0px_black] ">
              WELCOME TO
              </span>
              <span className='text-9xl font-bold text-white drop-shadow-[3px_3px_0px_black] -mt-3'>
                MUSEO
              </span>
              <span className='text-9xl font-bold text-white drop-shadow-[3px_3px_0px_black] -mt-6 '>
                BULAWAN
              </span>

              {/* BUTTONS */}
              <div className='w-auto h-auto flex justify-start items-center gap-12 mt-12'>
                {/* Learn More Button */}
                <button className="w-48 h-16 bg-white flex items-center justify-center text-2xl font-medium text-black transition duration-300 hover:shadow-lg cursor-pointer outline-3 outline-white">
                  Learn More
                </button>

                {/* Book A Visit Button */}
                <button className="w-48 h-16 bg-transparent flex items-center justify-center outline-3 outline-white text-2xl font-medium text-white transition duration-300 hover:bg-white hover:text-black cursor-pointer">
                  BOOK A VISIT
                </button>
              </div>

              <div className='w-auto h-auto flex flex-col justify-center items-start mt-12 gap-3'>
                <div className="w-auto h-auto text-white flex items-start gap-2">
                  <i className="fas fa-clock text-xl relative mt-1.5 mr-2"></i>
                  <div>
                    <span className="block text-xl font-bold">Museum Hours</span>
                    <span className="text-md font-normal leading-tight">Open Daily 9:00am-5:00pm, Monday-Friday,</span>
                  </div>
                </div>

                <div className="w-auto h-auto text-white flex items-start gap-2">
                  <i className="fa-solid fa-location-dot text-xl relative mt-1 mr-2"></i>
                  <div>
                    <span className="block text-xl font-bold">Museum Location</span>
                    <span className="text-md font-normal leading-tight">Camarines Norte Provincial Capitol Grounds, Daet Philippines</span>
                  </div>
                </div>
              </div>
          </div>

          


          <div className="w-16 h-100 flex flex-col items-center gap-y-56 justify-center mt-56">
          <div className='lg:h-60 2xl:h-100 w-full flex flex-col justify-between items-center text-white'>
            <a href="https://www.tiktok.com/@museobulawan" target="_blank" rel="noopener noreferrer" className='rotate-90'>
              <div className=" w-auto h-auto whitespace-nowrap flex items-center text-xl font-medium">
              
                <i className="fa-solid fa-circle text-sm mr-2"></i>
                <i className="fa-brands fa-tiktok mr-2"></i>
                <span>museobulawan</span>
              </div>
            </a>

              

            <a href="https://www.youtube.com/@museobulawanofficial" target="_blank" rel="noopener noreferrer" className='rotate-90'>
              <div className=" w-auto h-auto whitespace-nowrap flex items-center text-xl font-medium">
             
                <i className="fa-solid fa-circle text-sm mr-2"></i>
                <i className="fa-brands fa-youtube mr-2"></i>
                <span>Museo Bulawan (Abel C. Icatlo)</span>
              </div>
            </a>
          </div>
        </div>
        </div>
          
      </div>
      <div className="w-auto z mx-auto pt-7 min-h-screen bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: "url('./assets/bghome2.png')" }}>

      </div>
    </>
  );
};

export default home;