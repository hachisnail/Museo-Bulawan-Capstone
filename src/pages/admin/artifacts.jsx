import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useState, useEffect } from 'react';
import AdminNavbar from '../../components/navbar/adminNavbar';

const artifacts = () => {
  const { isAuthenticated } = useAuth();
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Mirror the script logic from artifact.html:
  useEffect(() => {
    const tabs = document.querySelectorAll(".tab-button");
    const contents = document.querySelectorAll(".tab-content");

    tabs.forEach(tab => {
      tab.addEventListener("click", function () {
        // Remove active styling from all tabs
        tabs.forEach(t => {
          t.classList.remove("text-black", "opacity-100");
          t.classList.add("text-gray-500", "opacity-70");
        });

        // Hide all content sections
        contents.forEach(content => content.classList.add("hidden"));

        // Activate the clicked tab
        this.classList.remove("text-gray-500", "opacity-70");
        this.classList.add("text-black", "opacity-100");

        // Show the corresponding content
        const tabId = this.getAttribute("data-tab");
        document.getElementById(tabId).classList.remove("hidden");
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
          {/* REPLACE ONLY this content area with artifact.html content */}
          <div className='w-full h-full'>

            {/* Start of artifact content from artifact.html (converted to JSX) */}
            <div className="w-full h-auto flex justify-between items-center">
              <div className="text-[40px] font-bold">
                <span>Artifact</span>
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

            <div className="h-[90%] w-full pt-3">
              <div className="w-full h-full flex flex-col pl-7">

                {/* Stats row */}
                <div className="w-full h-[20%] grid grid-cols-5 gap-14 font-bold text-white">
                  <div className="bg-[#1C1B19] rounded-lg flex flex-col py-4 px-7">
                    <div><span>Total Artifacts</span></div>
                    <div className="flex items-center h-full">
                      <span className="text-5xl">271</span>
                    </div>
                    <div><span>January 8, 2025</span></div>
                  </div>

                  <div className="bg-[#1C1B19] rounded-lg flex flex-col py-4 px-7">
                    <div><span>Acquired</span></div>
                    <div className="flex items-center h-full">
                      <span className="text-5xl">271</span>
                    </div>
                    <div><span>January 8, 2025</span></div>
                  </div>

                  <div className="bg-[#1C1B19] rounded-lg flex flex-col py-4 px-7">
                    <div><span>Borrowing</span></div>
                    <div className="flex items-center h-full">
                      <span className="text-5xl">271</span>
                    </div>
                    <div><span>January 8, 2025</span></div>
                  </div>

                  <div className="bg-[#1C1B19] rounded-lg flex flex-col py-4 px-7">
                    <div><span>Unfinished Edit</span></div>
                    <div className="flex items-center h-full">
                      <span className="text-5xl">271</span>
                    </div>
                    <div><span>January 8, 2025</span></div>
                  </div>

                  <div className="bg-[#1C1B19] rounded-lg flex flex-col py-4 px-7">
                    <div><span>On Display</span></div>
                    <div className="flex items-center h-full">
                      <span className="text-5xl">271</span>
                    </div>
                    <div><span>January 8, 2025</span></div>
                  </div>
                </div>

                {/* Tabs */}
                <div className="w-full h-[15%] flex flex-col mb-4">
                  <div className="w-full h-full flex items-center justify-between pl-10 pt-7">
                    <div className="w-[30%] h-full flex justify-between items-center font-bold text-sm">
                      {/* Artifacts Tab */}
                      <div
                        className="cursor-pointer tab-button text-black opacity-100 hover:opacity-80"
                        data-tab="artifacts"
                      >
                        <span>Artifacts</span>
                      </div>

                      {/* Transfer Status Tab */}
                      <div
                        className="cursor-pointer tab-button text-gray-500 opacity-70 hover:text-black hover:opacity-100"
                        data-tab="acquired"
                      >
                        <span>Acquired</span>
                      </div>

                      {/* Borrowing Tab */}
                      <div
                        className="cursor-pointer tab-button text-gray-500 opacity-70 hover:text-black hover:opacity-100"
                        data-tab="borrowing"
                      >
                        <span>Borrowing</span>
                      </div>

                      {/* Display Tab */}
                      <div
                        className="cursor-pointer tab-button text-gray-500 opacity-70 hover:text-black hover:opacity-100"
                        data-tab="display"
                      >
                        <span>Display</span>
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

                {/* Tab Contents */}
                {/* Artifacts */}
                <div id="artifacts" className="tab-content h-[60%] w-full">
                  <div className="grid grid-cols-6 gap-3 font-bold text-sm opacity-95 h-[5%] px-8">
                    <div className="flex justify-center">Date</div>
                    <div className="flex justify-center col-span-2">Title</div>
                    <div className="flex justify-center">Type</div>
                    <div className="flex justify-center">Display Status</div>
                    <div className="flex justify-center">Updated</div>
                  </div>

                  <div className="w-full h-[95%] overflow-y-auto max-h-[420px]">
                    {/* Example row */}
                    <div className="flex flex-col gap-4 px-1 mt-3">
                      <div className="grid grid-cols-6 gap-3 bg-white w-full h-12 outline outline-black outline-1 rounded-md px-7 text-base">
                        <div className="flex justify-center items-center">02-19-2024</div>
                        <div className="flex justify-center items-center col-span-2">
                          Statue of a Great Grandfather
                        </div>
                        <div className="flex justify-center items-center">Lending</div>
                        <div className="flex justify-center items-center px-12">
                          <div className="w-full bg-[#9C7744] flex justify-center items-center text-white outline outline-1 outline-black rounded-sm">
                            Posted
                          </div>
                        </div>
                        <div className="flex justify-center items-center">02-19-2024</div>
                      </div>
                      {/* Add more rows as needed */}
                    </div>
                  </div>
                </div>

                {/* Acquired */}
                <div id="acquired" className="tab-content hidden h-[60%] w-full">
                  acquired
                </div>

                {/* Borrowing */}
                <div id="borrowing" className="tab-content hidden h-[60%] w-full">
                  borrow
                </div>

                {/* Display */}
                <div id="display" className="tab-content hidden h-[60%] w-full">
                  display
                </div>
              </div>
            </div>
            {/* End of artifact content */}
          </div>
        </div>
      </div>
    </>
  );
};

export default artifacts;