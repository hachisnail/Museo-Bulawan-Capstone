import { Link, NavLink, useNavigate  } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useState } from 'react';
import AdminNavbar from '../../components/navbar/adminNavbar';


const artifacts = () => {
  const { isAuthenticated } = useAuth();
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);



  return (
    <>   
     <div className='w-full h-screen bg-white pt-24 flex'>
      <div className='bg-[#1C1B19] w-1/6 h-full py-20 px-10'>
        
        <AdminNavbar />
        
      </div>


      <div className='w-5/6 h-full flex justify-center p-4'>
        
      <div className='w-full h-full'>
          <span className='text-4xl'>ARTIFACT CONTENT HERE <br /></span>
          <span className='text-2xl'>Details</span>
        </div>

      </div>
    </div>
    </>

  );
};

export default artifacts;