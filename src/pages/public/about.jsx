import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const about = () => {
  const { isAuthenticated } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="w-auto z mx-auto pt-7 min-h-80 bg-white overflow-hidden">
      <nav className=" w-[100vw] bg-transparent">
        <div className='flex mx-20 h-28 bg-transparent  border-b-2 border-black justify-between'>
          <div className='flex'> 

            <img src="./assets/LOGO.png" alt="" className='max-h-20 my-auto'/>

            <div className='h-20 w-1 my-auto rounded-2xl bg-black ml-5'>
            </div>

            <Link to="/" className='my-auto leading-6 text-3xl font-bold ml-2 text-black'> 
                <span>Museo <br />Bulawan</span>
            </Link>
          </div>

          <div className='my-auto text-2xl font-semibold shadow-black w-auto text-black'>
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
      <div className='h-100 mt-3 flex  bg-cover bg-center bg-no-repeat' 
      style={{ backgroundImage: "url('./assets/440832115_947772303495782_6010038099693171993_n.png')" }}>
         
        </div>
          
      </div>

      <div className='w-auto  mx-auto pt-36 min-h-screen bg-white'>

      </div>
    </>
  );
};

export default about;