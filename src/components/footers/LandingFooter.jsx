import { useState } from 'react'; // Add this import
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const LandingFooter = () => {
  const { isAuthenticated } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
    <div className='w-screen h-50 bg-amber-300'>

    </div>
    </>
  );
};

export default LandingFooter;