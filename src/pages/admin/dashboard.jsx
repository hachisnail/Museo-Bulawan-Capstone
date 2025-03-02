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
     <div className='w-screen h-screen bg-white pt-24'>
     <button 
      onClick={handleLogout} 
      className="px-4 py-2 bg-black text-white font-semibold rounded-lg hover:bg-red-700 transition duration-200"
    >
      Logout
    </button>
    </div>
    </>

  );
};

export default dashboard;