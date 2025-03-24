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

  const [approveVisit, setApproveVisit] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState(null);


  const handleRowClick = () => {
    // Example modal data (you'll replace this with actual dynamic data)
    setModalData({
      fromFirstName: 'Juan',
      fromLastName: 'Dela Cruz',
      email: 'juandlacruz@gmail.com',
      phone: '09786734766',
      address: 'Ofelia Street, Barangay 2, Daet, Camarines Norte',
      purpose: 'School Field Trip',
      organization: 'Juan dela Cruz Elementary School',
      dateSent: '02-19-2024',
      artifactTitle: "My Great Grandfather's Bolo during World War 2",
      artifactDescription:
        'The Bolo is Still intact, there is a little rust near the handle on the scabbard is already missing.',
      artifactAcquisition:
        'It was given to me by my father and it is passed through generations so it is like a family helium.',
      artifactInfo: 'The Blade is a little bit loose so you must be careful about it.',
      artifactStory:
        'The artifact is used by my grandfather on the WWII and during a unit practice. U.S. Army’s 1st Filipino Infantry Regiment.',
      reasonForDonating:
        'I think that I can’t preserve the artifact and I also think that it should be placed where everyone could see and admire it.',
      artifactImages: ['image1.jpg', 'image2.jpg'], // Replace with actual paths
      relatedArtifactImages: ['related-image.jpg'],
      documentation: 'CertificateofAuthenticity.pdf',
    });
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setModalData(null);
  };

  const [showConfirmModal, setShowConfirmModal] = useState(false);

  // Function to open confirmation modal
  const handleSend = () => {
    setShowConfirmModal(true);
  };

  // Confirm sending response
  const confirmSendYes = () => {
    alert('Form sent successfully!');
    setShowModal(false);
    setShowConfirmModal(false);
  };

  // Cancel sending response
  const confirmSendNo = () => {
    setShowConfirmModal(false);
  };
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
                      <div
                        className='grid grid-cols-7 gap-3 bg-white w-full h-12 outline outline-black outline-1 rounded-md px-7 text-base cursor-pointer'
                        onClick={handleRowClick}
                      >
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

        {showModal && modalData && (
          <div
            className='fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm'
            onClick={handleCloseModal}
          >
            <div
              className='relative bg-gray-100 rounded-md shadow-lg p-6 w-[650px] h-[80vh] flex flex-col'
              onClick={(e) => e.stopPropagation()}
            >
              {/* FIXED CLOSE BUTTON */}
              <button
                className='absolute top-3 right-3 text-gray-600 text-lg font-bold cursor-pointer z-50'
                onClick={handleCloseModal}
              >
                X
              </button>

              {/* Scrollable content container */}
              <div className='overflow-y-auto flex-1 pr-2'>
                <div className='text-right text-sm text-blue-500'>{modalData.dateSent}</div>

                <h2 className='text-3xl font-semibold mb-6'>Donation Form</h2>

                {/* Information Section */}
                <div className='border border-gray-300 rounded-md p-4 bg-white mb-6'>
                  <h3 className='font-bold mb-4 text-lg'>Information</h3>

                  <div className='flex mb-4'>
                    <div className='font-semibold w-[50px]'>From:</div>
                    <div className='flex flex-1 flex-wrap justify-evenly'>
                      <div className='text-center'>
                        <span className='text-blue-500'>{modalData.fromFirstName || 'N/A'}</span>
                        <div className='text-xs text-gray-500'>First Name</div>
                      </div>
                      <div className='text-center'>
                        <span className='text-blue-500'>{modalData.fromMiddleName || 'N/A'}</span>
                        <div className='text-xs text-gray-500'>Middle Name</div>
                      </div>
                      <div className='text-center'>
                        <span className='text-blue-500'>{modalData.fromLastName || 'N/A'}</span>
                        <div className='text-xs text-gray-500'>Last Name</div>
                      </div>
                      <div className='text-center'>
                        <span className='text-blue-500'>{modalData.suffix || 'N/A'}</span>
                        <div className='text-xs text-gray-500'>Suffix</div>
                      </div>
                    </div>
                  </div>

                  <p>
                    <strong>Email:</strong>{' '}
                    <span className='text-blue-500'>{modalData.email}</span>
                  </p>
                  <p>
                    <strong>Phone Number:</strong>{' '}
                    <span className='text-blue-500'>{modalData.phone}</span>
                  </p>
                  <p>
                    <strong>Address:</strong>{' '}
                    <span className='text-blue-500'>{modalData.address}</span>
                  </p>
                  <p>
                    <strong>Purpose of Visit:</strong>{' '}
                    <span className='text-blue-500'>{modalData.purpose}</span>
                  </p>
                  <p>
                    <strong>Organization:</strong>{' '}
                    <span className='text-blue-500'>{modalData.organization}</span>
                  </p>
                </div>

                {/* Artifact Section */}
                <div className='border border-gray-300 rounded-md p-4 bg-white mb-6'>
                  <h3 className='font-bold mb-4 text-lg'>About the Artifact</h3>

                  <p>
                    <strong>Title:</strong>{' '}
                    <span className='text-blue-500'>{modalData.artifactTitle}</span>
                  </p>
                  <p>
                    <strong>Description:</strong>{' '}
                    <span className='text-blue-500'>{modalData.artifactDescription}</span>
                  </p>
                  <p>
                    <strong>Acquisition:</strong>{' '}
                    <span className='text-blue-500'>{modalData.artifactAcquisition}</span>
                  </p>
                  <p>
                    <strong>Information:</strong>{' '}
                    <span className='text-blue-500'>{modalData.artifactInfo}</span>
                  </p>
                  <p>
                    <strong>Story:</strong>{' '}
                    <span className='text-blue-500'>{modalData.artifactStory}</span>
                  </p>
                  <p>
                    <strong>Reason for Donating:</strong>{' '}
                    <span className='text-blue-500'>{modalData.reasonForDonating}</span>
                  </p>

                  <div className='mt-4'>
                    <strong>Artifact Images:</strong>
                    <div className='flex flex-wrap gap-2 mt-2'>
                      {modalData.artifactImages.map((img, idx) => (
                        <img
                          key={idx}
                          src={img}
                          alt='artifact'
                          className='w-32 h-32 object-cover rounded-md'
                        />
                      ))}
                    </div>
                  </div>

                  <div className='mt-4'>
                    <strong>Documentation:</strong>
                    <a href={modalData.documentation} className='text-red-500 underline ml-2'>
                      {modalData.documentation}
                    </a>
                  </div>

                  <div className='mt-4'>
                    <strong>Related Images:</strong>
                    <div className='flex flex-wrap gap-2 mt-2'>
                      {modalData.relatedArtifactImages.map((img, idx) => (
                        <img
                          key={idx}
                          src={img}
                          alt='related artifact'
                          className='w-32 h-32 object-cover rounded-md'
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <hr className='my-4' />

                {/* Respond Section */}
                <h3 className='text-lg font-bold mb-2'>Respond</h3>
                <div className='mb-4'>
                  <span className='font-semibold mr-2'>Approve Visit?</span>
                  <label
                    className={`border px-4 py-1 mr-2 rounded inline-flex items-center cursor-pointer ${approveVisit === 'yes' ? 'bg-green-100 border-green-400' : 'hover:bg-gray-200'
                      }`}
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
                    className={`border px-4 py-1 rounded inline-flex items-center cursor-pointer ${approveVisit === 'no' ? 'bg-red-100 border-red-400' : 'hover:bg-gray-200'
                      }`}
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
          </div>
        )}
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
      </div>
    </>
  );
};

export default Donations;