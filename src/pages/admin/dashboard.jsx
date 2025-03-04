import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useState } from 'react';
import AdminNavbar from '../../components/navbar/adminNavbar';

const Dashboard = () => {
  const { isAuthenticated } = useAuth();
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [search, setSearch] = useState(""); // 🔥 Fixed: Added state for search

  const handleLogout = () => {
    logout();
    navigate('/login'); 
  };

  return (
    <>   
      <div className="w-full h-screen bg-white pt-24 flex">
        {/* Sidebar */}
        <div className="bg-[#1C1B19] w-1/6 h-full py-20 px-10">
          <AdminNavbar />
        </div>

        {/* Main Content */}
        <div className="w-5/6 h-full flex justify-center p-10 flex-col">
         
            {/* Dashboard Header */}
            <div className="w-full h-auto flex justify-between items-center">
              <div className="text-[40px] font-bold">
                <span>Dashboard</span>
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter Keyword"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-4 pr-10 py-2 w-64 text-black border border-black rounded-lg shadow-sm outline-none"
                />
                <i className="fa-solid fa-magnifying-glass absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"></i>
              </div>
            </div>
          

          <div className='h-full w-full pt-3'>
              <div className='w-full h-full  flex flex-grow-0 justify-between gap-6'>
              <div className="w-[45%] h-full flex flex-col gap-6">
                        {/* First Part */}
                        <div className="w-full flex-1 flex flex-row gap-4 ">
                          <div className="h-full w-[60%] bg-[#FFFFFF] flex flex-col justify-start items-start py-2 shadow-lg shadow-gray-400">

                            <div className="w-full h-1/6 font-hind-kochi">
                                <div className="w-full h-[60%] text-[1.6rem] font-semibold pl-3">Expected Visitors</div>
                                <div className="w-full h-[40%] text-[1rem] text-[#6C6C6C] font-medium pl-5">1603</div>
                            </div>

                            {/* BILOG REACT JS */}
                            <div className="w-full h-5/6 flex items-center justify-center">
                               <span> 80% </span>
                              
                            </div>
                          </div>
                          <div className="h-full w-[50%] flex flex-col gap-4 ">
                            <div className="h-[50%] w-full bg-[#1C1B19] shadow-lg shadow-gray-400 pt-4 pb-6 px-4">

                                <div className="w-full h-full flex flex-col justify-start items-center">

                                    <div className="w-full h-4/5  flex justify-start items-center gap-x-3 font-hind-kochi ">

                                        <div className="h-full w-[55%] flex flex-col justify-center items-center text-white font-bold text-center">
                                            <span className="w-full h-1/3 text-2xl flex items-center justify-center">Present</span>
                                            <span className="w-full h-2/3 text-5xl flex items-center justify-center">1520</span>
                                        </div>
                                        <div className="h-full w-[60%] flex items-end justify-start pb-2 text-[#D5FFCB]">
                                            <span className="w-full  font-bold flex items-center gap-1 text-lg">
                                                +2.3%  
                                                <i className="fas fa-arrow-up text-base"></i>
                                            </span>
                                        </div>
                                        

                                    </div>

                                    <div className="w-full h-1/5 text-[#EAC39C] font-bold flex items-center justify-center">
                                       <span className="w-full flex items-center justify-start pl-1">Compared to last month (1486)</span>
                                    </div>

                                </div>
                                
                            </div>
                            <div className="h-[50%] w-full bg-[#1C1B19] shadow-lg shadow-gray-400 pt-4 pb-6 px-4">

                                <div className="w-full h-full flex flex-col justify-start items-center">

                                    <div className="w-full h-4/5  flex justify-start items-center gap-x-3 font-hind-kochi ">

                                        <div className="h-full w-[55%] flex flex-col justify-center items-center text-white font-bold text-center">
                                            <span className="w-full h-1/3 text-2xl flex items-center justify-center">Absent</span>
                                            <span className="w-full h-2/3 text-5xl flex items-center justify-center">83 </span>
                                        </div>
                                        <div className="h-full w-[60%] flex items-end justify-start pb-2 text-[#FF3A3A] ">
                                            <span className="w-full font-bold flex items-center gap-1 text-lg">
                                                +3.164%  
                                                <i className="fas fa-arrow-up text-base"></i>
                                            </span>
                                        </div>
                                        

                                    </div>

                                    <div className="w-full h-1/5 text-[#EAC39C] font-bold flex items-center justify-center">
                                       <span className="w-full flex items-center justify-start pl-1">Compared to last month (80)</span>
                                    </div>

                                </div>
                                
                            </div>
                          </div>
                        </div>
                      
                        {/* Second Part */}
                        <div className="w-full flex-1 flex flex-row gap-3">
                          <div className="w-[35%] h-full flex flex-col gap-5 ">
                            <div className="h-[50%] w-full bg-[#1C1B19] rounded-lg shadow-lg shadow-gray-400">
                                <div className="w-full h-full flex flex-col justify-start items-start p-4 text-white ">
                                    <div className="w-full h-1/5 flex items-center justify-start text-base font-semibold">Present</div>
                                    <div className="w-full h-4/5 flex items-center justify-center text-6xl pb-5 font-bold">593</div>
                                </div>
                            </div>
                            <div className="h-[50%] w-full bg-[#1C1B19] rounded-lg shadow-lg shadow-gray-400">
                                <div className="w-full h-full flex flex-col justify-start items-start p-4 text-white ">
                                    <div className="w-full h-1/5 flex items-center justify-start text-base font-semibold">Approved Visits</div>
                                    <div className="w-full h-4/5 flex items-center justify-center text-6xl pb-5 font-bold">593</div>
                                </div>
                            </div>
                          </div>

                          <div className="w-[45%] h-full flex flex-col gap-5 ">
                            <div className="h-[50%] w-full pt-9 ">
                                <div className="h-full w-full bg-[#EFEEDE] shadow-xl shadow-gray-400 rounded-lg flex flex-row justify-center items-center">
                                    <div className="w-[45%] h-full flex flex-col justify-start items-center font-bold">
                                        <div className="w-full h-2/5 pl-4 "><span className="text-base w-full h-full flex justify-start items-center">Today</span></div>
                                        <div className="w-full h-4/5"><span className="text-[40px] w-full h-full flex justify-center items-start pb-6">423</span></div>
                                    </div>
                                    <div className="w-[60%] h-full">
                                        <div className="h-full w-full pt-4 pb-2 px-2">
                                            <div className="bg-black w-full h-full rounded-lg flex flex-col justify-center items-center text-[#EAC39C] px-2 font-semibold">
                                                <div className="w-full h-1/4"><span className="text-sm">This Month</span></div>
                                                <div className="w-full h-3/4 flex items-center justify-center"><span className="text-5xl pb-3">54</span></div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    
                                </div>
                            </div>

                            <div className="h-[50%] w-full pt-9 ">
                                <div className="h-full w-full bg-[#EFEEDE] shadow-xl shadow-gray-400 rounded-lg flex flex-row justify-center items-center">
                                    <div className="w-[45%] h-full flex flex-col justify-start items-center font-bold">
                                        <div className="w-full h-2/5 pl-4 "><span className="text-base w-full h-full flex justify-start items-center">Today</span></div>
                                        <div className="w-full h-4/5"><span className="text-[40px] w-full h-full flex justify-center items-start pb-6">423</span></div>
                                    </div>
                                    <div className="w-[60%] h-full">
                                        <div className="h-full w-full pt-4 pb-2 px-2">
                                            <div className="bg-black w-full h-full rounded-lg flex flex-col justify-center items-center text-[#EAC39C] px-2 font-semibold">
                                                <div className="w-full h-1/4"><span className="text-sm">This Month</span></div>
                                                <div className="w-full h-3/4 flex items-center justify-center"><span className="text-5xl pb-3">54</span></div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    
                                </div>
                            </div>
                          </div>

                          <div className="w-[50%] h-full bg-[#1C1B19] rounded-lg ml-3  shadow-lg shadow-gray-400">
                            <div className="w-full h-[15%] flex items-center justify-between px-7 font-bold text-lg">
                                <span className="text-white">Quota</span>
                                <span className="text-[#EAC39C]">68%</span>
                            </div>
                            <div className="w-full h-[85%] px-5 pt-2 pb-4">
                                <div className="w-full h-full bg-white rounded-lg flex-col justify-start items-start">
                                    <div className="w-full h-[32%]"><span class="p-2">1000</span></div>
                                    <div className="w-full h-[68%] bg-[#0066FF]"><span class="p-2 text-white">680</span></div>
                                </div>
                            </div>
                          </div>
                        </div>
                      </div>

              </div>
            

          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
