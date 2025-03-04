import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useState, useEffect } from 'react';
import AdminNavbar from '../../components/navbar/adminNavbar';

const Donations = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Attach tab + dropdown behavior in a single function
  useEffect(() => {
    function initDomInteractions() {
      // TAB LOGIC
      const tabs = document.querySelectorAll('.tab-button');
      const contents = document.querySelectorAll('.tab-content');

      tabs.forEach((tab) => {
        tab.addEventListener('click', function () {
          // Remove active styling from all tabs
          tabs.forEach((t) => {
            t.classList.remove('text-black', 'opacity-100');
            t.classList.add('text-gray-500', 'opacity-70');
          });
          // Hide all content sections
          contents.forEach((content) => content.classList.add('hidden'));

          // Activate the clicked tab
          this.classList.remove('text-gray-500', 'opacity-70');
          this.classList.add('text-black', 'opacity-100');

          // Show the corresponding content
          const tabId = this.getAttribute('data-tab');
          const target = document.getElementById(tabId);
          if (target) {
            target.classList.remove('hidden');
          }
        });
      });

      // DROPDOWN LOGIC
      const dropdownButtons = document.querySelectorAll('.dropdownButton');
      dropdownButtons.forEach((button) => {
        button.addEventListener('click', function () {
          const dropdownMenu = this.nextElementSibling;
          if (dropdownMenu) {
            dropdownMenu.classList.toggle('hidden');
          }
        });
      });

      const dropdownMenus = document.querySelectorAll('.dropdownMenu');
      dropdownMenus.forEach((menu) => {
        menu.addEventListener('click', function (event) {
          if (event.target && event.target.matches('div')) {
            const selectedStatus = event.target.dataset.status;
            const dropdownButton = this.previousElementSibling;
            if (dropdownButton) {
              // Update button text
              dropdownButton.innerHTML = `${selectedStatus.charAt(0).toUpperCase() + selectedStatus.slice(1)
                } <i class="fas fa-chevron-down ml-2"></i>`;
            }
            // Hide the menu
            this.classList.add('hidden');
          }
        });
      });

      // CLOSE DROPDOWN WHEN CLICKING OUTSIDE
      window.addEventListener('click', function (event) {
        // If the click is outside any element with class .relative
        if (!event.target.closest('.relative')) {
          dropdownMenus.forEach((menu) => {
            menu.classList.add('hidden');
          });
        }
      });
    }

    // Initialize the interactions after the DOM is rendered
    initDomInteractions();

    // Optional cleanup if needed
    return () => {
      // You can remove event listeners here if desired
    };
  }, []);

  // JSX layout remains the same; only the "script" replaced by our single function
  return (
    <>

      <div className='w-full h-screen bg-white pt-24 flex'>
        <div className='bg-[#1C1B19] w-1/6 h-full py-20 px-10'>
          <AdminNavbar />
        </div>

        <div className='w-5/6 h-full flex justify-center p-10'>
          {/* DONATION CONTENT INSERTED HERE */}
          <div className='w-full h-full'>
            {/* Header Area */}
            <div className='w-full h-auto flex justify-between items-center'>
              <div className='text-[40px] font-bold'>
                <span>Donations</span>
              </div>
              <div className='relative'>
                <input
                  type='text'
                  placeholder='Enter Keyword'
                  className='pl-4 pr-10 py-2 w-64 text-black border border-black rounded-lg shadow-sm outline-none'
                />
                <i className='fa-solid fa-magnifying-glass absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer' />
              </div>
            </div>

            <div className='h-[90%] w-full pt-3'>
              <div className='w-full h-full flex flex-col 0 pl-7'>
                <div className='w-full h-[20%] grid grid-cols-5 gap-14 font-bold text-white'>
                  {/* TOTAL FORMS */}
                  <div className='bg-[#1C1B19] rounded-lg flex flex-col py-4 px-7'>
                    <div className='w-full h-1/5'>
                      <span>Total Forms</span>
                    </div>
                    <div className='w-full h-3/5 flex items-center'>
                      <span className='text-5xl'>271</span>
                    </div>
                    <div className='w-full h-1/5'>
                      <span>January 8, 2025</span>
                    </div>
                  </div>

                  {/* ACCEPTED FORMS */}
                  <div className='bg-[#1C1B19] rounded-lg flex flex-col py-4 px-7'>
                    <div className='w-full h-1/5'>
                      <span>Accepted Forms</span>
                    </div>
                    <div className='w-full h-3/5 flex items-center'>
                      <span className='text-5xl'>271</span>
                    </div>
                    <div className='w-full h-1/5'>
                      <span>January 8, 2025</span>
                    </div>
                  </div>

                  {/* REJECTED FORMS */}
                  <div className='bg-[#1C1B19] rounded-lg flex flex-col py-4 px-7'>
                    <div className='w-full h-1/5'>
                      <span>Rejected Forms</span>
                    </div>
                    <div className='w-full h-3/5 flex items-center'>
                      <span className='text-5xl'>271</span>
                    </div>
                    <div className='w-full h-1/5'>
                      <span>January 8, 2025</span>
                    </div>
                  </div>

                  {/* DONATION FORMS */}
                  <div className='bg-[#1C1B19] rounded-lg flex flex-col py-4 px-7'>
                    <div className='w-full h-1/5'>
                      <span>Donation Forms</span>
                    </div>
                    <div className='w-full h-3/5 flex items-center'>
                      <span className='text-5xl'>271</span>
                    </div>
                    <div className='w-full h-1/5'>
                      <span>January 8, 2025</span>
                    </div>
                  </div>

                  {/* LENDING FORMS */}
                  <div className='bg-[#1C1B19] rounded-lg flex flex-col py-4 px-7'>
                    <div className='w-full h-1/5'>
                      <span>Lending Forms</span>
                    </div>
                    <div className='w-full h-3/5 flex items-center'>
                      <span className='text-5xl'>271</span>
                    </div>
                    <div className='w-full h-1/5'>
                      <span>January 8, 2025</span>
                    </div>
                  </div>
                </div>

                <div className='w-full h-[15%] flex flex-col mb-4'>
                  <div className='w-full h-full flex items-center justify-between pl-10 pt-7'>
                    <div className='w-[30%] h-full flex justify-between items-center font-bold text-sm'>
                      {/* Active Form Tab */}
                      <div
                        className='cursor-pointer tab-button text-black opacity-100 hover:opacity-80'
                        data-tab='forms'
                      >
                        <span>Forms</span>
                      </div>

                      {/* Transfer Status Tab */}
                      <div
                        className='cursor-pointer tab-button text-gray-500 opacity-70 hover:text-black hover:opacity-100'
                        data-tab='transfer-status'
                      >
                        <span>Transfer Status</span>
                      </div>

                      {/* Donators Records Tab */}
                      <div
                        className='cursor-pointer tab-button text-gray-500 opacity-70 hover:text-black hover:opacity-100'
                        data-tab='donators-records'
                      >
                        <span>Donators Records</span>
                      </div>
                    </div>

                    <div className='relative inline-block'>
                      <select className='block appearance-none bg-white border border-gray-300 text-gray-700 py-2 px-2 pr-8 rounded-xl leading-tight focus:outline-none focus:border-black'>
                        <option value='date'>Sort: Date</option>
                        <option value='name'>Sort: Name</option>
                        <option value='title'>Sort: Title</option>
                        <option value='status'>Sort: Status</option>
                        <option value='transfer_status'>Sort: Transfer Status</option>
                        <option value='updated'>Sort: Updated</option>
                      </select>
                      <div className='absolute inset-y-0 right-3 flex items-center pointer-events-none'>
                        <i className='fas fa-chevron-down text-black'></i>
                      </div>
                    </div>
                  </div>
                  <h1 className='bg-black h-[1px]'></h1>
                </div>

                {/* FORMS TAB CONTENT */}
                <div id='forms' className='tab-content h-[60%] w-full'>
                  <div className='grid grid-cols-7 gap-3 font-bold text-sm opacity-95 h-[5%] px-8'>
                    <div className='flex justify-center'>Date</div>
                    <div className='flex justify-center'>Name of Donor/Lender</div>
                    <div className='flex justify-center col-span-2'>Title</div>
                    <div className='flex justify-center'>Status</div>
                    <div className='flex justify-center'>Transfer Status</div>
                    <div className='flex justify-center'>Updated</div>
                  </div>
                  <div className='w-full h-[95%] overflow-y-auto max-h-[420px]'>
                    {/* Example row */}
                    <div className='flex flex-col gap-4 px-1 mt-3'>
                      <div className='grid grid-cols-7 gap-3 bg-white w-full h-12 outline outline-black outline-1 rounded-md px-7 text-base'>
                        <div className='flex justify-center items-center'>02-19-2024</div>
                        <div className='flex justify-center items-center'>Olivia Harper</div>
                        <div className='flex justify-center items-center col-span-2'>
                          Statue of a Great Grandfather
                        </div>
                        <div className='flex justify-center items-center px-9'>
                          <div className='w-full bg-[#9C7744] flex justify-center items-center text-white outline outline-1 outline-black rounded-sm'>
                            Accepted
                          </div>
                        </div>
                        <div className='flex justify-center items-center px-9'>
                          <div className='w-full bg-[#66DE78] flex justify-center items-center text-white outline outline-1 outline-black rounded-sm'>
                            Acquired
                          </div>
                        </div>
                        <div className='flex justify-center items-center'>02-19-2024</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* TRANSFER STATUS TAB CONTENT */}
                <div id='transfer-status' className='tab-content hidden h-[60%] w-full'>
                  <div className='grid grid-cols-7 gap-3 font-bold text-sm opacity-95 h-[5%] px-8'>
                    <div className='flex justify-center'>Date</div>
                    <div className='flex justify-center'>Name of Donor/Lender</div>
                    <div className='flex justify-center col-span-2'>Title</div>
                    <div className='flex justify-center'>Status</div>
                    <div className='flex justify-center'>Transfer Status</div>
                    <div className='flex justify-center'>Updated</div>
                  </div>
                  <div className='w-full h-[95%] overflow-y-auto max-h-[420px]'>
                    <div className='flex flex-col gap-4 px-1 mt-3'>
                      <div className='grid grid-cols-7 gap-3 bg-white w-full h-12 outline outline-black outline-1 rounded-md px-7 text-base'>
                        <div className='flex justify-center items-center'>02-19-2024</div>
                        <div className='flex justify-center items-center'>Olivia Harper</div>
                        <div className='flex justify-center items-center col-span-2'>
                          Statue of a Great Grandfather
                        </div>
                        <div className='flex justify-center items-center px-9'>
                          <div className='w-full bg-[#9C7744] flex justify-center items-center text-white outline outline-1 outline-black rounded-sm'>
                            Accepted
                          </div>
                        </div>
                        <div className='flex justify-center items-center px-9'>
                          <div className='relative w-full bg-[#66DE78] flex justify-center items-center text-white outline outline-1 outline-black rounded-sm'>
                            {/* Dropdown Button */}
                            <button className='dropdownButton flex items-center'>
                              Acquired
                              <i className='fas fa-chevron-down ml-2'></i>
                            </button>
                            {/* Dropdown Menu */}
                            <div className='dropdownMenu absolute hidden bg-white text-black border border-gray-300 rounded-sm w-full mt-24 z-10'>
                              <div className='p-2 hover:bg-gray-200 cursor-pointer' data-status='acquired'>
                                Acquired
                              </div>
                              <div className='p-2 hover:bg-gray-200 cursor-pointer' data-status='rejected'>
                                Rejected
                              </div>
                              <div className='p-2 hover:bg-gray-200 cursor-pointer' data-status='pending'>
                                Pending
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='flex justify-center items-center'>02-19-2024</div>
                      </div>

                      {/* Another row */}
                      <div className='grid grid-cols-7 gap-3 bg-white w-full h-12 outline outline-black outline-1 rounded-md px-7 text-base'>
                        <div className='flex justify-center items-center'>02-20-2024</div>
                        <div className='flex justify-center items-center'>John Doe</div>
                        <div className='flex justify-center items-center col-span-2'>Ancient Vase</div>
                        <div className='flex justify-center items-center px-9'>
                          <div className='w-full bg-[#9C7744] flex justify-center items-center text-white outline outline-1 outline-black rounded-sm'>
                            Accepted
                          </div>
                        </div>
                        <div className='flex justify-center items-center px-9'>
                          <div className='relative w-full bg-[#66DE78] flex justify-center items-center text-white outline outline-1 outline-black rounded-sm'>
                            {/* Dropdown Button */}
                            <button className='dropdownButton flex items-center'>
                              Acquired
                              <i className='fas fa-chevron-down ml-2'></i>
                            </button>
                            {/* Dropdown Menu */}
                            <div className='dropdownMenu absolute hidden bg-white text-black border border-gray-300 rounded-sm w-full mt-24 z-10'>
                              <div className='p-2 hover:bg-gray-200 cursor-pointer' data-status='acquired'>
                                Acquired
                              </div>
                              <div className='p-2 hover:bg-gray-200 cursor-pointer' data-status='rejected'>
                                Rejected
                              </div>
                              <div className='p-2 hover:bg-gray-200 cursor-pointer' data-status='pending'>
                                Pending
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='flex justify-center items-center'>02-20-2024</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* DONATORS TAB CONTENT */}
                <div id='donators-records' className='tab-content hidden h-[60%] w-full'>
                  <div className='grid grid-cols-6 gap-3 font-bold text-sm opacity-95 h-[5%] px-8'>
                    <div className='flex justify-center'>Name of Donor/Lender</div>
                    <div className='flex justify-center col-span-2'>List of Artifacts</div>
                    <div className='flex justify-center'>Amount of Artifacts</div>
                    <div className='flex justify-center'>Last Item</div>
                    <div className='flex justify-center'>Last Updated</div>
                  </div>
                  <div className='w-full h-[95%] overflow-y-auto max-h-[420px]'>
                    <div className='flex flex-col gap-4 px-1 mt-3'>
                      <div className='grid grid-cols-6 gap-3 bg-white w-full h-12 outline outline-black outline-1 rounded-md px-7 text-base'>
                        <div className='flex justify-center items-center'>Olivia Harper</div>
                        <div className='flex justify-center items-center col-span-2'>
                          Ancient Pottery, Bronze Coins
                        </div>
                        <div className='flex justify-center items-center'>5</div>
                        <div className='flex justify-center items-center'>Bronze Coins</div>
                        <div className='flex justify-center items-center'>02-19-2024</div>
                      </div>
                      <div className='grid grid-cols-6 gap-3 bg-white w-full h-12 outline outline-black outline-1 rounded-md px-7 text-base'>
                        <div className='flex justify-center items-center'>Liam Johnson</div>
                        <div className='flex justify-center items-center col-span-2'>
                          Medieval Sword, Ancient Scroll
                        </div>
                        <div className='flex justify-center items-center'>2</div>
                        <div className='flex justify-center items-center'>Ancient Scroll</div>
                        <div className='flex justify-center items-center'>02-20-2024</div>
                      </div>
                      {/* Additional rows here */}
                    </div>
                  </div>
                </div>
                {/* END TAB CONTENT */}
              </div>
            </div>
          </div>
          {/* END OF DONATION CONTENT */}
        </div>
      </div>
    </>
  );
};

export default Donations;