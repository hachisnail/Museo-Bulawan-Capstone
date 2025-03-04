import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useState, useEffect } from 'react';
import AdminNavbar from '../../components/navbar/adminNavbar';

const Articles = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Transferred script from article.html into a React useEffect
  useEffect(() => {
    const tabs = document.querySelectorAll(".tab-button");
    const contents = document.querySelectorAll(".tab-content");

    tabs.forEach((tab) => {
      tab.addEventListener("click", function () {
        // Remove active styling from all tabs
        tabs.forEach((t) => {
          t.classList.remove("text-black", "opacity-100");
          t.classList.add("text-gray-500", "opacity-70");
        });

        // Hide all content sections
        contents.forEach((content) => content.classList.add("hidden"));

        // Activate the clicked tab
        this.classList.remove("text-gray-500", "opacity-70");
        this.classList.add("text-black", "opacity-100");

        // Show the corresponding content
        const tabId = this.getAttribute("data-tab");
        document.getElementById(tabId)?.classList.remove("hidden");
      });
    });
  }, []);

  return (
    <>
      <div className='w-full h-screen bg-white pt-24 flex'>
        <div className='bg-[#1C1B19] w-1/6 h-full py-20 px-10'>
          <AdminNavbar />
        </div>

        <div className='w-5/6 h-full flex justify-center p-10'>
          {/* Inserted the converted HTML here */}
          <div className='w-full h-full'>

            {/* Top row: Title + Search */}
            <div className="w-full h-auto flex justify-between items-center">
              <div className="text-[40px] font-bold">
                <span>Article</span>
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter Keyword"
                  className="pl-4 pr-10 py-2 w-64 text-black border border-black rounded-lg shadow-sm outline-none"
                />
                <i className="fa-solid fa-magnifying-glass absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"></i>
              </div>
            </div>

            {/* Main content area */}
            <div className="h-[90%] w-full pt-3">
              <div className="w-full h-full flex flex-col 0 pl-7">
                <div className="w-full h-[20%] flex flex-row justify-between items-center gap-14 font-bold text-white">
                  {/* Total Articles box */}
                  <div className="bg-[#1C1B19] rounded-lg flex flex-col py-4 px-7 w-[231px] h-full">
                    <div className="w-full h-1/5">
                      <span>Total Articles</span>
                    </div>
                    <div className="w-full h-3/5 flex items-center">
                      <span className="text-5xl">255</span>
                    </div>
                    <div className="w-full h-1/5">
                      <span>January 8, 2025</span>
                    </div>
                  </div>

                  {/* Add Article Button */}
                  <div className="bg-[#F8D6B3] rounded-lg flex flex-row h-[50px] w-[185px] outline outline-1 outline-black px-5 gap-4 text-[#4B4B4B] cursor-pointer group hover:bg-[#f1b07c] active:outline-2 active:outline-[#4B4B4B]">
                    <div className="w-1/3 py-1 flex justify-center items-center group-hover:bg-[#f1b07c]">
                      <div className="w-[25px] h-[25px] bg-[#F8D6B3] rounded-full outline outline-4 outline-[#4B4B4B] flex justify-center items-center group-hover:bg-[#f1b07c]">
                        <span className="font-bold text-3xl">+</span>
                      </div>
                    </div>
                    <div className="w-full flex justify-center items-center">
                      <span className="text-lg">Add Article</span>
                    </div>
                  </div>
                </div>

                {/* Tabs / Sorting options */}
                <div className="w-full h-[15%] flex flex-col mb-4">
                  <div className="w-full h-full flex items-center justify-between pl-10 pt-7">
                    <div className="w-[30%] h-full flex justify-between items-center font-bold text-sm">
                      <div
                        className="cursor-pointer tab-button text-black opacity-100 hover:opacity-80"
                        data-tab="article"
                      >
                        <span>Article</span>
                      </div>
                    </div>
                    <div className="relative inline-block">
                      <select className="block appearance-none bg-white border border-gray-300 text-gray-700 py-2 px-2 pr-8 rounded-xl leading-tight focus:outline-none focus:border-black">
                        <option value="date">Sort: Date</option>
                        <option value="name">Sort: Name</option>
                        <option value="title">Sort: Title</option>
                        <option value="status">Sort: Status</option>
                        <option value="transfer_status">Sort: Transfer Status</option>
                        <option value="updated">Sort: Updated</option>
                      </select>
                      <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                        <i className="fas fa-chevron-down text-black"></i>
                      </div>
                    </div>
                  </div>
                  <h1 className="bg-black h-[1px]"></h1>
                </div>

                {/* Table or list of articles */}
                <div id="artifacts" className="tab-content h-[60%] w-full">
                  <div className="grid grid-cols-4 gap-3 font-bold text-sm opacity-95 h-[5%] px-8">
                    <div className="flex justify-center">Date</div>
                    <div className="flex justify-center">Title</div>
                    <div className="flex justify-center">Author</div>
                    <div className="flex justify-center">Updated</div>
                  </div>

                  <div className="w-full h-[95%] overflow-y-auto max-h-[420px]">
                    {/* Example Row */}
                    <div className="flex flex-col gap-4 px-1 mt-3">
                      <div className="grid grid-cols-4 gap-3 bg-white w-full h-12 outline outline-black outline-1 rounded-md px-7 text-base">
                        <div className="flex justify-center items-center">02-19-2024</div>
                        <div className="flex justify-center items-center">Perlas ng silanganan</div>
                        <div className="flex justify-center items-center">Olivia Harper</div>
                        <div className="flex justify-center items-center">02-19-2024</div>
                      </div>
                      {/* Add more rows here if needed */}
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

export default Articles;