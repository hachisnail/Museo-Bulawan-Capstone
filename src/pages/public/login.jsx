import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const login = () => {
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
         
        </div>
          
      </div>
      <div className='w-auto z mx-auto pt-36 min-h-screen bg-cover bg-center bg-no-repeat'
       style={{ backgroundImage: "url('./assets/06-AfternoonMealOfTheWorker 1.png')" }}>

      </div>
    </>
  );
};

export default login;