import { Link, NavLink, useNavigate  } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useState } from 'react';



const dashboard = () => {
  const { isAuthenticated } = useAuth();
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login'); 
  };

  return (
    <>   
     <div className='w-screen h-screen bg-white pt-24 flex'>
      <div className='bg-amber-400 w-1/2 h-full'>

      </div>
      <div className='bg-black w-1/2 h-full'>

      </div>
    </div>
    </>

  );
};

export default dashboard;