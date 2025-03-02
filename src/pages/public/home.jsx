import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import LandingNavbar from '../../components/navbar/landingNavbar';


const home = () => {
  const { isAuthenticated } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="w-auto mx-auto pt-7 min-h-screen bg-cover bg-center bg-no-repeat "
      style={{ backgroundImage: "url('./assets/06-AfternoonMealOfTheWorker 1.png')" }}>

        <LandingNavbar />
        
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

              <div className='w-auto h-auto flex flex-col justify-center items-start mt-13 gap-3'>
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


      <div className="w-auto max-h-full mx-auto pt-7 min-h-screen bg-cover bg-center bg-no-repeat overflow-hidden" 
            style={{ backgroundImage: "url('./assets/bghome2.png')" }}>
        <div className="w-auto h-150 mt-35 ml-35 mr-0 flex flex-col items-start">

          <div className="w-auto h-auto flex items-center">
            <h1 className="w-7 h-0.5 bg-[#636363] mr-2"></h1>
            <span className="text-[#636363]">About Museo Bulawan</span>
          </div>

          <div className="w-full h-full flex justify-between items-start mt-8 gap-12">
            <div className="w-1/2 h-auto pt-6">
              <span className="text-4xl leading-snug tracking-wide font-[HinaMincho]">
                <span className="text-5xl font-medium">
                  Museo Bulawan
                </span>, known as the “Golden Museum,” is the leading and the most viewer-friendly community museum that serves as the nerve center for education and communication of the rich cultural, artistic and natural heritage and history of Camarines Norte. It is the ultimate medium for preservation and exhibition of significant objects that strengthen the values of the people and deepen their patriotism and sense of identity.
              </span>

              <div className='w-auto mt-12 flex items-center'>
                <span className='text-xl font-semibold'>Learn More </span>
                  <img src="/assets/arrow-right.png" alt="arrow" className="ml-2 w-8" /> {/* Adjust the width of the image */}
                </div>
              </div>

              <div className="w-1/2 h-full">
                <img src="/assets/dhome2.png" alt="Museo Bulawan" className="w-full h-full" />
              </div>

            </div>
          </div>
      </div>


      <div className="w-auto max-h-full mx-auto pt-7 min-h-screen bg-white overflow-hidden" >

      </div>


    </>
  );
};

export default home;