import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useState } from 'react';
import AdminNavbar from '../../components/navbar/adminNavbar';
import React from 'react';
import { Doughnut, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const { isAuthenticated } = useAuth();
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [search, setSearch] = useState("");

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  // Donut chart data and options
  const data = {
    labels: ['Present Visitors', 'Remaining'],
    datasets: [
      {
        data: [80, 20],
        backgroundColor: ['#4d3a23', '#d1c5b1'],
        borderWidth: 0
      }
    ]
  };

  const options = {
    cutout: '70%',
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        enabled: false
      }
    }
  };

  // Bar chart data and options for Appointment Rate
  const appointmentData = {
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ],
    datasets: [
      {
        label: 'Appointment Rate',
        data: [25, 20, 15, 40, 28, 35, 12, 24, 20, 8, 15, 30],
        backgroundColor: '#4d3a23', // Dark brown bars
        barPercentage: 0.5,
        borderRadius: 4
      }
    ]
  };

  const appointmentOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false
        },
        ticks: {
          color: 'black'
        }
      },
      y: {
        grid: {
          color: '#e2e2e2'
        },
        ticks: {
          color: 'black',
          stepSize: 5
        },
        beginAtZero: true,
        suggestedMax: 45 // so the tallest bar sits below 40 if needed
      }
    },
    plugins: {
      legend: {
        display: false
      }
    }
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

          <div className="h-full w-full pt-3">
            <div className="w-full h-full flex flex-grow-0 justify-between gap-6">
              <div className="w-[45%] h-full flex flex-col gap-6">
                {/* First Part */}
                <div className="w-full flex-1 flex flex-row gap-4">
                  <div className="h-full w-[60%] bg-[#FFFFFF] flex flex-col justify-start items-start py-2 shadow-lg shadow-gray-400">
                    <div className="w-full h-1/6 font-hind-kochi">
                      <div className="w-full h-[60%] text-[1.6rem] font-semibold pl-3">
                        Expected Visitors
                      </div>
                      <div className="w-full h-[40%] text-[1rem] text-[#6C6C6C] font-medium pl-5">
                        1603
                      </div>
                    </div>

                    {/* Donut Chart */}
                    <div className="w-full h-5/6 flex items-center justify-center relative">
                      <div className="absolute flex flex-col items-center text-center">
                        <div className="text-[5.5rem] font-bold text-[#4d3a23]">80%</div>
                        <div className="text-[1.5rem] text-[#4d3a23]">Present Visitors</div>
                      </div>
                      <Doughnut data={data} options={options} />
                    </div>
                  </div>

                  <div className="h-full w-[50%] flex flex-col gap-4 ">
                    <div className="h-[50%] w-full bg-[#1C1B19] shadow-lg shadow-gray-400 pt-4 pb-6 px-4">
                      <div className="w-full h-full flex flex-col justify-start items-center">
                        <div className="w-full h-4/5 flex justify-start items-center gap-x-3 font-hind-kochi ">
                          <div className="h-full w-[55%] flex flex-col justify-center items-center text-white font-bold text-center">
                            <span className="w-full h-1/3 text-2xl flex items-center justify-center">Present</span>
                            <span className="w-full h-2/3 text-5xl flex items-center justify-center">1520</span>
                          </div>
                          <div className="h-full w-[60%] flex items-end justify-start pb-2 text-[#D5FFCB]">
                            <span className="w-full font-bold flex items-center gap-1 text-lg">
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
                        <div className="w-full h-4/5 flex justify-start items-center gap-x-3 font-hind-kochi ">
                          <div className="h-full w-[55%] flex flex-col justify-center items-center text-white font-bold text-center">
                            <span className="w-full h-1/3 text-2xl flex items-center justify-center">Absent</span>
                            <span className="w-full h-2/3 text-5xl flex items-center justify-center">83</span>
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
                      <div className="w-full h-full flex flex-col justify-start items-start p-4 text-white">
                        <div className="w-full h-1/5 flex items-center justify-start text-base font-semibold">Present</div>
                        <div className="w-full h-4/5 flex items-center justify-center text-6xl pb-5 font-bold">593</div>
                      </div>
                    </div>
                    <div className="h-[50%] w-full bg-[#1C1B19] rounded-lg shadow-lg shadow-gray-400">
                      <div className="w-full h-full flex flex-col justify-start items-start p-4 text-white">
                        <div className="w-full h-1/5 flex items-center justify-start text-base font-semibold">Approved Visits</div>
                        <div className="w-full h-4/5 flex items-center justify-center text-6xl pb-5 font-bold">593</div>
                      </div>
                    </div>
                  </div>

                  <div className="w-[45%] h-full flex flex-col gap-5 ">
                    <div className="h-[50%] w-full pt-9">
                      <div className="h-full w-full bg-[#EFEEDE] shadow-xl shadow-gray-400 rounded-lg flex flex-row justify-center items-center">
                        <div className="w-[45%] h-full flex flex-col justify-start items-center font-bold">
                          <div className="w-full h-2/5 pl-4 ">
                            <span className="text-base w-full h-full flex justify-start items-center">Today</span>
                          </div>
                          <div className="w-full h-4/5">
                            <span className="text-[40px] w-full h-full flex justify-center items-start pb-6">423</span>
                          </div>
                        </div>
                        <div className="w-[60%] h-full">
                          <div className="h-full w-full pt-4 pb-2 px-2">
                            <div className="bg-black w-full h-full rounded-lg flex flex-col justify-center items-center text-[#EAC39C] px-2 font-semibold">
                              <div className="w-full h-1/4">
                                <span className="text-sm">This Month</span>
                              </div>
                              <div className="w-full h-3/4 flex items-center justify-center">
                                <span className="text-5xl pb-3">54</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="h-[50%] w-full pt-9">
                      <div className="h-full w-full bg-[#EFEEDE] shadow-xl shadow-gray-400 rounded-lg flex flex-row justify-center items-center">
                        <div className="w-[45%] h-full flex flex-col justify-start items-center font-bold">
                          <div className="w-full h-2/5 pl-4 ">
                            <span className="text-base w-full h-full flex justify-start items-center">Today</span>
                          </div>
                          <div className="w-full h-4/5">
                            <span className="text-[40px] w-full h-full flex justify-center items-start pb-6">423</span>
                          </div>
                        </div>
                        <div className="w-[60%] h-full">
                          <div className="h-full w-full pt-4 pb-2 px-2">
                            <div className="bg-black w-full h-full rounded-lg flex flex-col justify-center items-center text-[#EAC39C] px-2 font-semibold">
                              <div className="w-full h-1/4">
                                <span className="text-sm">This Month</span>
                              </div>
                              <div className="w-full h-3/4 flex items-center justify-center">
                                <span className="text-5xl pb-3">54</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-[50%] h-full bg-[#1C1B19] rounded-lg ml-3 shadow-lg shadow-gray-400">
                    <div className="w-full h-[15%] flex items-center justify-between px-7 font-bold text-lg">
                      <span className="text-white">Quota</span>
                      <span className="text-[#EAC39C]">68%</span>
                    </div>
                    <div className="w-full h-[85%] px-5 pt-2 pb-4">
                      {/* Outer container */}
                      <div className="relative w-full h-full bg-white rounded-lg flex flex-col justify-start items-start overflow-hidden">
                        {/* “1000” label at the top */}
                        <div className="w-full h-[32%] p-2 z-10">
                          <span>1000</span>
                        </div>

                        {/* Animated wave container */}
                        <div className="relative w-full h-[68%] text-white flex items-center justify-center z-10 font-bold text-3xl">
                          {/* The number floats above the wave */}
                          <span className="absolute">680</span>

                          {/* SVG “wave” takes the entire bottom area */}
                          <svg
                            className="absolute top-0 left-0 w-full h-full"
                            viewBox="0 0 500 150"
                            preserveAspectRatio="none"
                          >
                            <path
                              fill="#0066FF"
                              d="M0,30 C150,0 350,60 500,30 L500,150 L0,150 Z"
                            >
                              {/* Animate the wave path back and forth */}
                              <animate
                                attributeName="d"
                                dur="4s"
                                repeatCount="indefinite"
                                values="
              M0,30 C150,0 350,60 500,30 L500,150 L0,150 Z;
              M0,20 C150,40 350,-20 500,20 L500,150 L0,150 Z;
              M0,30 C150,0 350,60 500,30 L500,150 L0,150 Z
            "
                              />
                            </path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-[55%] h-full flex flex-col gap-6">
                {/* Third Part */}
                <div className="w-full h-full flex-1 bg-[#1C1B19] px-6 shadow-lg shadow-gray-400">
                  <div className="w-full h-[15%] flex justify-start items-center pl-4 pt-2">
                    <span className="font-bold text-3xl text-white">Appointment Rate</span>
                  </div>

                  {/* Bar Chart */}
                  <div className="w-full h-[80%] bg-white rounded-lg mt-1 flex items-center justify-center p-2">
                    <div className="w-full h-full">
                      <Bar data={appointmentData} options={appointmentOptions} />
                    </div>
                  </div>
                </div>

                {/* Fourth Part */}
                <div className="w-full flex-1 flex flex-row gap-10">
                  <div className="w-[50%] h-full bg-white shadow-lg shadow-gray-400 flex flex-col justify-start items-center">
                    <div className="w-full h-1/6 flex flex-col justify-start items-center px-7">
                      <div className="w-full h-full flex flex-row justify-between items-end text-2xl px-4">
                        <span>Pending Queries</span>
                        <i className="fas fa-arrow-down text-black"></i>
                      </div>
                      <h1 className="bg-black h-[3px] mx-9 w-full"></h1>
                    </div>
                    {/* CUSTOM TABLE */}
                  </div>

                  <div className="w-[50%] h-full flex flex-col gap-5 pb-2">
                    <div className="w-full h-[30%] flex justify-start items-center">
                      <span className="font-bold text-6xl">Walk-ins</span>
                    </div>
                    {/* APPOINTMENT */}
                    <button className="w-full h-[40%] bg-white rounded-lg outline outline-black outline-4 flex items-center justify-between px-8 shadow-lg shadow-gray-400">
                      <span className="font-bold text-5xl">Appointment</span>
                      <div className="w-9 h-9 bg-white outline outline-black rounded-md outline-4 flex items-center justify-center">
                        <i className="fas fa-plus text-black text-3xl"></i>
                      </div>
                    </button>
                    {/* DONATION */}
                    <button className="w-full h-[40%] bg-white rounded-lg outline outline-black outline-4 flex items-center justify-between px-8 shadow-lg shadow-gray-400">
                      <span className="font-bold text-5xl">Donation</span>
                      <div className="w-9 h-9 bg-white outline outline-black rounded-md outline-4 flex items-center justify-center">
                        <i className="fas fa-plus text-black text-3xl"></i>
                      </div>
                    </button>
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