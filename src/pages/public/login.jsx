import { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import LandingNavbar from '../../components/navbar/landingNavbar';
import Cookies from 'js-cookie';

const mockApiCall = (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === 'admin@example.com' && password === 'admin123') {
        resolve({ token: 'mock-secure-token' });
      } else {
        reject(new Error('Invalid credentials'));
      }
    }, 1000);
  });
};

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const storedToken = Cookies.get('authToken');
    if (storedToken) {
      login();
      navigate('/admin/dashboard');
    }
  }, [login, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    setIsLoading(true);
    
    try {
      const response = await mockApiCall(email, password);
      login();
      Cookies.set('authToken', response.token, { expires: 7 }); // Store token for 7 days
      navigate('/admin/dashboard');
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-auto z mx-auto pt-7 min-h-screen bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: "url('./assets/06-AfternoonMealOfTheWorker 1.png')" }}>
      
      <LandingNavbar />
      
      <div className="flex items-center justify-center min-h-[70vh]">
        <div className="border-2 border-white bg-opacity-50 p-8 rounded-2xl w-full max-w-md mx-4">
          <h2 className="text-4xl font-bold text-center mb-8 text-white">
            Admin Login
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-white text-lg mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-lg bg-transparent border-2 border-white bg-opacity-20 text-white placeholder-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
              />
            </div>

            <div>
              <label className="block text-white text-lg mb-2">Password</label>
              <input
                type="password"
                className="w-full px-4 py-3 rounded-lg bg-transparent border-2 border-white bg-opacity-20 text-white placeholder-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
              />
            </div>

            {error && (
              <div className="text-red-400 text-center mb-4">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-200 disabled:opacity-50"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Signing in...
                </div>
              ) : (
                'Sign In'
              )}
            </button>
          </form>

          <div className="text-center mt-6">
            <Link 
              to="/" 
              className="text-white hover:text-blue-300 text-sm font-medium"
            >
              Return to homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
