import { Link, NavLink, useNavigate  } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useState } from 'react';



const artifacts = () => {
  const { isAuthenticated } = useAuth();
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);



  return (
    <>   
     <div className='w-screen h-screen bg-white pt-24'>
     <span> artifacts </span>

    </div>
    </>

  );
};

export default artifacts;