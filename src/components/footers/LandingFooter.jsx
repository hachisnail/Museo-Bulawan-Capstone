import { useState } from 'react'; // Add this import
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const LandingFooter = () => {
  const { isAuthenticated } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
    <div className='w-screen h-80 bg-[#1C1B19] p-10'>
        <div className='w-full h-full flex flex-col'>
            <div className='h-auto w-full flex flex-col gap-3'>
              <div className='h-full w-full flex items-start justify-start gap-2 pl-4'>
                <div className='w-auto h-9 flex gap-2 items-center'>
                  <NavLink to="/">
                  <span  className='text-white text-xl'>Home</span>
                  </NavLink>
                  <div className='h-full w-0.5 bg-white'></div>
                </div>
                <div className='w-auto h-9 flex gap-2 items-center'>
                  <NavLink to="/news&events">
                  <span className='text-white text-xl'>News & Events</span>
                  </NavLink>
                  <div className='h-full w-0.5 bg-white'></div>
                </div>
                <div className='w-auto h-9 flex gap-2 items-center'>
                  <NavLink to="/about">
                  <span  className='text-white text-xl'>About us</span>
                  </NavLink>
                </div>
              </div>
              <div className='w-full h-0.5 bg-white'></div>
            </div>
           
            <div className='h-full'>
              s
            </div>
        </div>
    </div>
    </>
  );
};

export default LandingFooter;