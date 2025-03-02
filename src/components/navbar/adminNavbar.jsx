import { useState } from 'react'; 
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const adminNavbar = () => {
  const { isAuthenticated } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isSpecialRoute = location.pathname === '/news&events' || location.pathname === '/about';

  return (
    <>
      
    </>
  );
};

export default adminiNavbar;