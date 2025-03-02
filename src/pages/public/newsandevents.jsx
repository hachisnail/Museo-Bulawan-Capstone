import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import LandingNavbar from '../../components/navbar/landingNavbar';

const newsandevents = () => {
  const { isAuthenticated } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="w-auto z mx-auto pt-7 min-h-80 bg-white overflow-hidden">

      <LandingNavbar />

      <div className='h-100 mt-3 flex  bg-cover bg-center bg-no-repeat' 
      style={{ backgroundImage: "url('./assets/DSC_0099.png')" }}>
         
        </div>
          
      </div>

      <div className='w-auto  mx-auto pt-36 min-h-screen bg-white'>

      </div>
    </>
  );
};

export default newsandevents;