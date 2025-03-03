import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import LandingNavbar from '../../components/navbar/landingNavbar';

const NewsAndEvents = () => {
  const { isAuthenticated } = useAuth();
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedMunicipality, setSelectedMunicipality] = useState('');

  const municipalities = [
    'Daet',
    'Basud',
    'Mercedes',
    'Talisay',
    'San Vicente',
    'Labo',
    'Paracale',
    'Jose Panganiban',
    'Capalonga',
    'Sta. Elena',
    'Vinzons',
  ];

  const events = [
    {
      id: 1,
      category: 'Education',
      name: 'Event Name',
      date: 'Month dd, yyyy',
      image: './assets/image1.png',
    },
    {
      id: 2,
      category: 'Exhibition',
      name: 'Event Name',
      date: 'Month dd, yyyy',
      image: './assets/image1.png',
    },
    {
      id: 3,
      category: 'Contest',
      name: 'Event Name',
      date: 'Month dd, yyyy',
      image: './assets/image1.png',

    },
    {
      id: 3,
      category: 'Contest',
      name: 'Event Name',
      date: 'Month dd, yyyy',
      image: './assets/image1.png',
    },
    {
      id: 3,
      category: 'Contest',
      name: 'Event Name',
      date: 'Month dd, yyyy',
      image: './assets/image1.png',
    }
  ];

  return (
    <>
      <div className="w-auto z mx-auto pt-7 min-h-80 bg-white overflow-hidden">
        <LandingNavbar />

        {/* Background Image Section */}
        <div
          className="h-100 mt-3 flex bg-cover bg-center bg-no-repeat relative"
          style={{ backgroundImage: "url('./assets/DSC_0099.png')" }}
        >
          {/* Search Bar */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white shadow-md w-200 flex items-center px-4 py-2 justify-between">
              {/* Keyword Input */}
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Enter keyword"
                  className="border-none outline-none px-2 py-1 w-40"
                />
                <div className="h-10 w-0.5 bg-black mx-2"></div>
              </div>

              {/* Date Picker */}
              <div className="flex items-center">
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="border-none outline-none px-2 py-1"
                />
                <div className="h-10 w-0.5 bg-black mx-2"></div>
              </div>

              {/* Municipality Dropdown */}
              <div className="flex items-center">
                <select
                  value={selectedMunicipality}
                  onChange={(e) => setSelectedMunicipality(e.target.value)}
                  className="border-none outline-none px-2 py-1"
                >
                  <option value="" disabled>
                    Municipality
                  </option>
                  {municipalities.map((municipality, index) => (
                    <option key={index} value={municipality}>
                      {municipality}
                    </option>
                  ))}
                </select>
                <div className="h-10 w-0.5 bg-black mx-2"></div>
              </div>

              {/* Search Button */}
              <button className="bg-black text-white px-15 py-2">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Events Section */}
      <div className="w-auto mx-auto pt-10 min-h-screen bg-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-10">
          {events.map((event) => (
            <div
              key={event.id}
              className="flex flex-col items-center text-center bg-white p-4"
            >
              <img
                src={event.image}
                alt={event.name}
                className="w-full max-w-xs h-auto object-cover rounded-lg"
              />
              <p className="text-red-500 mt-4 uppercase text-sm">{event.category}</p>
              <h3 className="text-2xl font-bold mt-2">{event.name}</h3>
              <p className="text-gray-500 mt-1">{event.date}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default NewsAndEvents;