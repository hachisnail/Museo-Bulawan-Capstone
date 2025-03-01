import { useState } from 'react'; 
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const LandingHeader = () => {
  const { isAuthenticated } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    
    <header className="bg-transparent shadow-sm fixed z-50">
      <div className='flex w-auto h-7 bg-[#1C1B19] justify-between px-5'>
        <span className=' text-white text-xs h-fit w-fit my-auto'>Open Daily 9:00am-5:00pm, Monday- Friday, Close During Holidays</span>
        <NavLink to="/login" className='mx-2'>
        <span className='text-white text-xs my-auto cursor-pointer'>
          Login
        </span>
        </NavLink>
      </div>

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
    </header>
  );
};

export default LandingHeader;