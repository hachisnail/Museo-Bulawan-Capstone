import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useState, useEffect } from 'react';
import AdminNavbar from '../../components/navbar/adminNavbar';

const appointments = () => {
  const { isAuthenticated } = useAuth();
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Transferred scripts (converted for React useEffect)
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
        document.getElementById(tabId).classList.remove("hidden");
      });
    });

    document.querySelectorAll('.dropdownButton').forEach(function (dropdownButton) {
      dropdownButton.addEventListener("click", function () {
        const dropdownMenu = this.nextElementSibling;
        dropdownMenu.classList.toggle("hidden");
      });
    });

    document.querySelectorAll('.dropdownMenu').forEach(function (dropdownMenu) {
      dropdownMenu.addEventListener("click", function (event) {
        if (event.target && event.target.matches("div")) {
          const selectedStatus = event.target.dataset.status;
          const dropdownButton = this.previousElementSibling;
          dropdownButton.innerHTML = `${selectedStatus.charAt(0).toUpperCase() + selectedStatus.slice(1)} <i class="fas fa-chevron-down ml-2"></i>`;
          this.classList.add("hidden");
        }
      });
    });

    // Close dropdown if clicking outside of the dropdown area
    window.addEventListener("click", function (event) {
      if (!event.target.closest('.relative')) {
        document.querySelectorAll('.dropdownMenu').forEach(function (menu) {
          menu.classList.add("hidden");
        });
      }
    });
  }, []);

  return (
    <>
      <div className='w-full h-screen bg-white pt-24 flex'>
        <div className='bg-[#1C1B19] w-1/6 h-full py-20 px-10'>
          <AdminNavbar />
        </div>

        <div className='w-5/6 h-full flex justify-center p-10'>

          {/* Inserted Appointment Content */}
          <div className='w-full h-full flex flex-col justify-start items-start'>

            <div className='w-full h-auto flex justify-between items-center '>
              <div className='text-[40px] font-bold'>
                <span>Appointments</span>
              </div>
              <div className='relative'>
                <input
                  type='text'
                  placeholder='Enter Keyword'
                  className='pl-4 pr-10 py-2 w-64 text-black border border-black rounded-lg shadow-sm outline-none'
                />
                <i className='fa-solid fa-magnifying-glass absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer'></i>
              </div>
            </div>

            <div className='h-[90%] w-full pt-3'>
              <div className='w-full h-full flex flex-col 0 pl-7'>
                <div className='w-full h-[20%] grid grid-cols-5 gap-14 font-bold text-white'>

                  {/* TOTAL Appointments */}
                  <div className='bg-[#1C1B19] rounded-lg flex flex-col py-4 px-7'>
                    <div className='w-full h-1/5'>
                      <span>Total Appointments</span>
                    </div>
                    <div className='w-full h-3/5 flex items-center'>
                      <span className='text-5xl'>271</span>
                    </div>
                    <div className='w-full h-1/5'>
                      <span>January 8, 2025</span>
                    </div>
                  </div>

                  {/* Approved */}
                  <div className='bg-[#1C1B19] rounded-lg flex flex-col py-4 px-7'>
                    <div className='w-full h-1/5'>
                      <span>Approved</span>
                    </div>
                    <div className='w-full h-3/5 flex items-center'>
                      <span className='text-5xl'>271</span>
                    </div>
                    <div className='w-full h-1/5'>
                      <span>January 8, 2025</span>
                    </div>
                  </div>

                  {/* Rejected */}
                  <div className='bg-[#1C1B19] rounded-lg flex flex-col py-4 px-7'>
                    <div className='w-full h-1/5'>
                      <span>Rejected</span>
                    </div>
                    <div className='w-full h-3/5 flex items-center'>
                      <span className='text-5xl'>271</span>
                    </div>
                    <div className='w-full h-1/5'>
                      <span>January 8, 2025</span>
                    </div>
                  </div>

                  {/* Expected Visitors */}
                  <div className='bg-[#1C1B19] rounded-lg flex flex-col py-4 px-7'>
                    <div className='w-full h-1/5'>
                      <span>Expected Visitors</span>
                    </div>
                    <div className='w-full h-3/5 flex items-center'>
                      <span className='text-5xl'>271</span>
                    </div>
                    <div className='w-full h-1/5'>
                      <span>January 8, 2025</span>
                    </div>
                  </div>

                  {/* Present */}
                  <div className='bg-[#1C1B19] rounded-lg flex flex-col py-4 px-7'>
                    <div className='w-full h-1/5'>
                      <span>Present</span>
                    </div>
                    <div className='w-full h-3/5 flex items-center'>
                      <span className='text-5xl'>2721</span>
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

                      {/* Attendance Tab */}
                      <div
                        className='cursor-pointer tab-button text-gray-500 opacity-70 hover:text-black hover:opacity-100'
                        data-tab='attendance'
                      >
                        <span>Attendance</span>
                      </div>

                      {/* Visitors Records Tab */}
                      <div
                        className='cursor-pointer tab-button text-gray-500 opacity-70 hover:text-black hover:opacity-100'
                        data-tab='visitors-records'
                      >
                        <span>Visitors Records</span>
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
                    <div className='flex justify-center'>Senders Name</div>
                    <div className='flex justify-center'>Preferred Time</div>
                    <div className='flex justify-center'>Preferred Date</div>
                    <div className='flex justify-center'>Visitor Count</div>
                    <div className='flex justify-center'>Status</div>
                    <div className='flex justify-center'>Updated</div>
                  </div>
                  <div className='w-full h-[95%] overflow-y-auto max-h-[420px]'>
                    {/* SCROLLABLE DATA */}
                    <div className='flex flex-col gap-4 px-1 mt-3'>
                      {/* Row 1 */}
                      <div className='grid grid-cols-7 gap-3 bg-white w-full h-12 outline outline-black outline-1 rounded-md px-7 text-base'>
                        <div className='flex justify-center items-center'>02-19-2024</div>
                        <div className='flex justify-center items-center'>Olivia Harper</div>
                        <div className='flex justify-center items-center'>02:30-03:59</div>
                        <div className='flex justify-center items-center'>August 25, 2024</div>
                        <div className='flex justify-center items-center'>10</div>
                        <div className='flex justify-center items-center px-9'>
                          <div className='w-full bg-[#9C7744] flex justify-center items-center text-white outline outline-1 outline-black rounded-sm'>
                            Confirmed
                          </div>
                        </div>
                        <div className='flex justify-center items-center'>02-19-2024</div>
                      </div>
                      {/* Row 2 */}
                      {/* Add more rows dynamically */}
                    </div>
                  </div>
                </div>

                {/* ATTENDANCE TAB CONTENT */}
                <div id='attendance' className='tab-content hidden h-[60%] w-full'>
                  <div className='grid grid-cols-6 gap-3 font-bold text-sm opacity-95 h-[5%] px-8'>
                    <div className='flex justify-center items-center'>Date</div>
                    <div className='flex justify-center items-center'>Name</div>
                    <div className='flex justify-center items-center'>Status</div>
                    <div className='flex justify-center items-center'>Time In</div>
                    <div className='flex justify-center items-center'>Time Out</div>
                    <div className='flex justify-center items-center'>Remarks</div>
                  </div>
                  <div className='w-full h-[95%] overflow-y-auto max-h-[420px]'>
                    <div className='flex flex-col gap-4 px-1 mt-3'>
                      {/* Row 1 */}
                      <div className='grid grid-cols-6 gap-3 bg-white w-full h-12 outline outline-black outline-1 rounded-md px-7 text-base'>
                        <div className='flex justify-center items-center'>02-22-2025</div>
                        <div className='flex justify-center items-center'>John Doe</div>
                        <div className='flex justify-center items-center'>Present</div>
                        <div className='flex justify-center items-center'>09:00 AM</div>
                        <div className='flex justify-center items-center'>05:00 PM</div>
                        <div className='flex justify-center items-center'>N/A</div>
                      </div>
                      {/* Add more rows as needed */}
                    </div>
                  </div>
                </div>

                {/* VISITORS TAB CONTENT */}
                <div id='visitors-records' className='tab-content hidden h-[60%] w-full'>
                  visitors records
                </div>

              </div>
            </div>

          </div>
          {/* End of Inserted Appointment Content */}

        </div>
      </div>
    </>
  );
};

export default appointments;