import { useState } from 'react'; 
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const landingNavbar = () => {
  const { isAuthenticated } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isSpecialRoute = location.pathname === '/news&events' || location.pathname === '/about';

  return (
    <>
      <nav className={`w-[100vw] bg-transparent  ${isSpecialRoute ? 'text-black border-black shadow-white' : 'text-white border-white shadow-black'}`}>
      <div className='flex mx-20 h-28 bg-transparent border-b-2 justify-between'>
            <div className='flex'> 

              <img src="./assets/LOGO.png" alt="" className='max-h-20 my-auto'/>
                
              <div className={`h-20 w-1 my-auto rounded-2xl ml-5 ${isSpecialRoute ? 'bg-black' : 'bg-white'}`}>
              </div>

              <Link to="/" className={`my-auto leading-none text-4xl font-bold ml-2 ${isSpecialRoute ? 'drop-shadow-none' : 'drop-shadow-[1px_1px_0.5px_black]'}`}> 
                  <span>Museo <br />Bulawan</span>
              </Link>
            </div>

            <div className={`my-auto text-3xl font-semibold ${isSpecialRoute ? 'drop-shadow-none' : 'drop-shadow-[1px_1px_0.5px_black]'}`}>
              <NavLink to="/" className='mx-4'>
                Home
              </NavLink>
              
              <NavLink to="/news&events" className='mx-4'>
                News & Events
              </NavLink>

              <NavLink to="/about" className='mx-4'>
                About
              </NavLink>
            </div>

          </div>
        </nav>
    </>
  );
};

export default landingNavbar;