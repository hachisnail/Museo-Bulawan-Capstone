import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const LandingHeader = () => {
  const { isAuthenticated } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);

  // Function to handle scroll behavior
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setIsScrolled(currentScrollY > 50); // Show links if scrolled, hide if at the top
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`w-full fixed z-50 transition-all duration-300 ${isScrolled ? 'bg-[#1C1B19] shadow-lg' : 'bg-transparent shadow-none'}`}
    >
      <div className="flex w-auto h-7 justify-between px-5">
        <span className="text-white text-xs h-fit w-fit my-auto">
          Open Daily 9:00am-5:00pm, Monday-Friday, Closed During Holidays
        </span>
        <div className="w-auto">
          {/* Initially hidden, only visible when scrolled */}
          {isScrolled && (
            <>
              <NavLink to="/" className="mx-2">
                <span className="text-white text-xs my-auto cursor-pointer">Home</span>
              </NavLink>
              <NavLink to="/news&events" className="mx-2">
                <span className="text-white text-xs my-auto cursor-pointer">News & Events</span>
              </NavLink>
              <NavLink to="/about" className="mx-2">
                <span className="text-white text-xs my-auto cursor-pointer">About</span>
              </NavLink>
            </>
          )}
          <NavLink to="/login" className="mx-2">
            <span className="text-white text-xs my-auto cursor-pointer">Login</span>
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default LandingHeader;
