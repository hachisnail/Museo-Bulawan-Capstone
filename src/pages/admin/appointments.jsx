import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useState, useEffect } from 'react';
import AdminNavbar from '../../components/navbar/adminNavbar';

const appointments = () => {
  const { isAuthenticated } = useAuth();
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // NEW STATES FOR THE MODAL
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState(null);

  // NEW STATES FOR THE CONFIRMATION POP-UP
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  // Function to open the main info modal
  const handleRowClick = () => {
    setModalData({
      fromFirstName: 'Juan',
      fromLastName: 'Dela Cruz',
      email: 'juandlacruz@gmail.com',
      phone: '09786734766',
      address: 'Ofelia Street, Barangay 2, Daet, Camarines Norte',
      purpose: 'School Field Trip',
      organization: 'Juan dela Cruz Elementary School',
      populationCount: 10,
      preferredDate: 'August 25',
      preferredTime: '10:30-11:59',
      notes:
        'Good morning, may chance parin pong magbago ang bilang namin at may mga nagpapahabol po na gusto sumamang mga estudyante.',
      dateSent: '02-19-2024',
    });
    setShowModal(true);
  };

  // Function to close the main info modal
  const handleCloseModal = () => {
    setShowModal(false);
    setModalData(null);
  };

  // Step 1: Open the new confirmation modal instead of using window.confirm
  const handleSend = () => {
    setShowConfirmModal(true);
  };

  // Step 2: When user clicks "Yes" in the confirmation pop-up
  const confirmSendYes = () => {
    alert('Form sent successfully!');
    setShowModal(false);
    setShowConfirmModal(false);
  };

  // Step 3: When user clicks "No" or outside of the confirmation modal
  const confirmSendNo = () => {
    setShowConfirmModal(false);
  };

  const [approveVisit, setApproveVisit] = useState('');

  useEffect(() => {
    const tabs = document.querySelectorAll('.tab-button');
    const contents = document.querySelectorAll('.tab-content');

    tabs.forEach((tab) => {
      tab.addEventListener('click', function () {
        tabs.forEach((t) => {
          t.classList.remove('text-black', 'opacity-100');
          t.classList.add('text-gray-500', 'opacity-70');
        });

        contents.forEach((content) => content.classList.add('hidden'));

        this.classList.remove('text-gray-500', 'opacity-70');
        this.classList.add('text-black', 'opacity-100');

        const tabId = this.getAttribute('data-tab');
        document.getElementById(tabId).classList.remove('hidden');
      });
    });

    document.querySelectorAll('.dropdownButton').forEach(function (dropdownButton) {
      dropdownButton.addEventListener('click', function () {
        const dropdownMenu = this.nextElementSibling;
        dropdownMenu.classList.toggle('hidden');
      });
    });

    document.querySelectorAll('.dropdownMenu').forEach(function (dropdownMenu) {
      dropdownMenu.addEventListener('click', function (event) {
        if (event.target && event.target.matches('div')) {
          const selectedStatus = event.target.dataset.status;
          const dropdownButton = this.previousElementSibling;
          dropdownButton.innerHTML = `${selectedStatus.charAt(0).toUpperCase() + selectedStatus.slice(1)} <i class="fas fa-chevron-down ml-2"></i>`;
          this.classList.add('hidden');
        }
      });
    });

    window.addEventListener('click', function (event) {
      if (!event.target.closest('.relative')) {
        document.querySelectorAll('.dropdownMenu').forEach(function (menu) {
          menu.classList.add('hidden');
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
                      <div
                        className='cursor-pointer tab-button text-black opacity-100 hover:opacity-80'
                        data-tab='forms'
                      >
                        <span>Forms</span>
                      </div>
                      <div
                        className='cursor-pointer tab-button text-gray-500 opacity-70 hover:text-black hover:opacity-100'
                        data-tab='attendance'
                      >
                        <span>Attendance</span>
                      </div>
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
                    <div className='flex flex-col gap-4 px-1 mt-3'>
                      <div
                        className='grid grid-cols-7 gap-3 bg-white w-full h-12 outline outline-black outline-1 rounded-md px-7 text-base cursor-pointer'
                        onClick={handleRowClick}
                      >
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
                      <div className='grid grid-cols-6 gap-3 bg-white w-full h-12 outline outline-black outline-1 rounded-md px-7 text-base'>
                        <div className='flex justify-center items-center'>02-22-2025</div>
                        <div className='flex justify-center items-center'>John Doe</div>
                        <div className='flex justify-center items-center'>Present</div>
                        <div className='flex justify-center items-center'>09:00 AM</div>
                        <div className='flex justify-center items-center'>05:00 PM</div>
                        <div className='flex justify-center items-center'>N/A</div>
                      </div>
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
        </div>
      </div>

      {/* MAIN INFO MODAL */}
      {showModal && modalData && (
        <div
          className='fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm'
          onClick={handleCloseModal}
        >
          <div
            className='relative bg-gray-100 rounded-md shadow-lg pt-15 p-6 w-[600px]'
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className='absolute top-3 right-3 text-gray-600 text-lg font-bold cursor-pointer'
              onClick={handleCloseModal}
            >
              X
            </button>

            <div className='text-right text-sm text-gray-700 mb-4'>{modalData.dateSent}</div>

            <div className='border border-gray-300 rounded-md p-4 bg-white'>
              <div className='flex text-black mb-4'>
                <div className='font-semibold w-[50px]'>From:</div>
                <div className='flex flex-1 flex-wrap justify-evenly'>
                  <div className='text-center'>
                    <span>{modalData.fromFirstName || 'N/A'}</span>
                    <div className='text-xs text-gray-500'>First Name</div>
                  </div>
                  <div className='text-center'>
                    <span>{modalData.fromMiddleName || 'N/A'}</span>
                    <div className='text-xs text-gray-500'>Middle Name</div>
                  </div>
                  <div className='text-center'>
                    <span>{modalData.fromLastName || 'N/A'}</span>
                    <div className='text-xs text-gray-500'>Last Name</div>
                  </div>
                  <div className='text-center'>
                    <span>{modalData.suffix || 'N/A'}</span>
                    <div className='text-xs text-gray-500'>Suffix</div>
                  </div>
                </div>
              </div>

              <p className='mb-2'>
                <span className='font-semibold'>Email:</span> {modalData.email}
              </p>
              <p className='mb-2'>
                <span className='font-semibold'>Phone Number:</span> {modalData.phone}
              </p>
              <p className='mb-2'>
                <span className='font-semibold'>Address:</span> {modalData.address}
              </p>
              <p className='mb-2'>
                <span className='font-semibold'>Purpose of Visit:</span> {modalData.purpose}
              </p>
              <p className='mb-2'>
                <span className='font-semibold'>Organization:</span> {modalData.organization}
              </p>
              <p className='mb-2'>
                <span className='font-semibold'>Population Count:</span> {modalData.populationCount}
              </p>
              <p className='mb-2'>
                <span className='font-semibold'>Preferred Date:</span> {modalData.preferredDate}
              </p>
              <p className='mb-2'>
                <span className='font-semibold'>Preferred Time:</span> {modalData.preferredTime}
              </p>
              <p className='mb-2'>
                <span className='font-semibold'>Notes:</span> {modalData.notes}
              </p>
            </div>

            <hr className='my-4' />

            <h3 className='text-lg font-bold mb-2'>Respond</h3>
            <div className='mb-4'>
              <span className='font-semibold mr-2'>Approve Visit?</span>
              <label
                className={`border px-4 py-1 mr-2 rounded inline-flex items-center cursor-pointer
          ${approveVisit === 'yes' ? 'bg-green-100 border-green-400' : 'hover:bg-gray-200'}
        `}
              >
                <input
                  type='radio'
                  name='approveVisit'
                  value='yes'
                  className='hidden'
                  checked={approveVisit === 'yes'}
                  onChange={() => setApproveVisit('yes')}
                />
                <span>Yes</span>
              </label>
              <label
                className={`border px-4 py-1 rounded inline-flex items-center cursor-pointer
          ${approveVisit === 'no' ? 'bg-red-100 border-red-400' : 'hover:bg-gray-200'}
        `}
              >
                <input
                  type='radio'
                  name='approveVisit'
                  value='no'
                  className='hidden'
                  checked={approveVisit === 'no'}
                  onChange={() => setApproveVisit('no')}
                />
                <span>No</span>
              </label>
            </div>

            <label className='block mb-2 font-semibold'>Leave a message</label>
            <textarea
              className='w-full h-24 p-2 border border-gray-400 rounded'
              defaultValue='The only available date is December 12, 2024'
            />
            <p className='text-sm text-gray-500 mt-1'>
              This will automatically send to {modalData.email}
            </p>

            <div className='text-right mt-4'>
              <button
                className='bg-[#9C7744] text-white px-5 py-2 rounded hover:opacity-90'
                onClick={handleSend}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CONFIRMATION MODAL */}
      {showConfirmModal && (
        <div
          className='fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm'
          onClick={confirmSendNo}
        >
          <div
            className='relative bg-gray-100 rounded-md shadow-lg p-6 w-[400px]'
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className='absolute top-3 right-3 text-gray-600 text-lg font-bold cursor-pointer'
              onClick={confirmSendNo}
            >
              X
            </button>
            <div className='text-center'>
              <h2 className='text-lg font-bold mb-4'>Confirm Action</h2>
              <p className='mb-6'>
                Are you sure you want to send this response?
              </p>
              <div className='flex justify-center gap-4'>
                <button
                  className='bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600'
                  onClick={confirmSendYes}
                >
                  Yes
                </button>
                <button
                  className='bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600'
                  onClick={confirmSendNo}
                >
                  No
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default appointments;