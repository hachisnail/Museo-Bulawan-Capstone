import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useState } from 'react';


const dashboard = () => {
  const { isAuthenticated } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>   
     <div className='w-screen h-screen bg-white'>

    </div>
    </>

  );
};

export default dashboard;