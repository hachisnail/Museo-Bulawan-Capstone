import { useState } from 'react'; // Add this import
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const LandingFooter = () => {
  const { isAuthenticated } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
    <div className='w-screen h-70 bg-[#1C1B19] p-10'>
      <div className='w-full h-full flex flex-col'>
        <div className='w-full h-1/3 flex'>
          <img src="./assets/LOGO.png" alt="Museo Bulawan Logo" />
          <span className='w-auto h-auto font-bold text-4xl text-white my-auto ml-2'>MUSEO BULWAN</span>
        </div>
        <div className='w-full h-2/3 flex space-x-2'>
          <div className='w-[40%] h-full'>
            <div className='w-full h-[55%] flex'>
              <span className='text-white text-2xl font-serif my-auto mx-3'>
              Helping us raise awareness regarding Camnortenos identity is crucial, and your support can make a significant difference.
              </span>
            </div>
            <div className='w-full h-[45%]'>
              <span className='w-auto my-auto mx-2 text-white'>
              We gratefully accept donations or just lending of your artifact will greatly help us.
              </span>
            </div>
          </div>
          <div className='w-[30%] h-full'>

          </div>
          <div lassName='w-[30%] h-full'>

          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default LandingFooter;