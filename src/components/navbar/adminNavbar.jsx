import { useState, useEffect } from 'react'; 
import { Link, NavLink, useNavigate  } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Cookies from 'js-cookie';

const adminNavbar = () => {
  const { isAuthenticated } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { logout } = useAuth(); 
  const navigate = useNavigate();


  const linkClasses = "w-full flex flex-row justify-start bg-[#1C1B19] items-center gap-3 rounded-2xl pl-2 h-[60px] cursor-pointer";
  const activeClasses = "bg-white text-black"; 
  
  const handleLogout = () => {
    Cookies.remove('authToken');
    logout();
    navigate('/');
  };


  return (
    <>
      <div className=' bg-[#1C1B19] h-full w-full flex flex-col justify-between'>
          <div className='h-auto w-full font-hind-kochi text-2xl font-bold flex flex-col gap-y-4'>
            <NavLink to="/admin/dashboard" className={({ isActive }) => `${linkClasses} ${isActive ? activeClasses : "text-white"}`}>
                {({ isActive }) => (
                <>
                <img src="/assets/dashboard_icon.png" alt="dashboard" className={`h-auto w-[40px] filter brightness-1 ${isActive ? "invert-1" : "invert"}`} />
                <span>Dashboard</span></>)}
            </NavLink>

            <NavLink to="/admin/donations" className={({ isActive }) => `${linkClasses} ${isActive ? activeClasses : "text-white"}`}>
                {({ isActive }) => (
                    <>
                    <img src="/assets/donation.png" alt="donation" className={`h-auto w-[40px] filter brightness-1 ${isActive ? "invert-1" : "invert"}`} />
                    <span>Donation</span></>)}
            </NavLink>

            <NavLink to="/admin/artifacts" className={({ isActive }) => `${linkClasses} ${isActive ? activeClasses : "text-white"}`}>
                {({ isActive }) => (
                    <>
                    <img src="/assets/artifact.png" alt="donation" className={`h-auto w-[40px] filter brightness-1 ${isActive ? "invert-1" : "invert"}`} />
                    <span>Artifact</span></>)}
            </NavLink>

            <NavLink to="/admin/appointments" className={({ isActive }) => `${linkClasses} ${isActive ? activeClasses : "text-white"}`}>
                {({ isActive }) => (
                    <>
                    <img src="/assets/appointment.png" alt="donation" className={`h-auto w-[40px] filter brightness-1 ${isActive ? "invert-1" : "invert"}`} />
                    <span>Appointment</span></>)}
            </NavLink>

            <NavLink to="/admin/articles" className={({ isActive }) => `${linkClasses} ${isActive ? activeClasses : "text-white"}`}>
                {({ isActive }) => (
                    <>
                    <img src="/assets/article.png" alt="donation" className={`h-auto w-[40px] filter brightness-1 ${isActive ? "invert-1" : "invert"}`} />
                    <span>Article</span></>)}
            </NavLink>


          </div>

          <button onClick={handleLogout} className="font-hind-kochi text-2xl font-bold w-full flex flex-row justify-center items-center gap-3 text-white cursor-pointer hover:bg-red-900 transition p-3 rounded-2xl">
            <img src="/assets/logout.png" alt="logout" className="h-auto w-[40px]"></img>
            <span>Logout</span>
            </button>
        </div>
    </>
  );
};

export default adminNavbar;