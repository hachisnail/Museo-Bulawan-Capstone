import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import LandingNavbar from '../../components/navbar/landingNavbar';

const about = () => {
  const { isAuthenticated } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="w-auto z mx-auto pt-7 min-h-80 bg-white overflow-hidden">

      <LandingNavbar />

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