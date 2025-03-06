import React, { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import router from './routes/MainRoutes';
import './index.css';

const App = () => {
  useEffect(() => {
    const userAgent = navigator.userAgent;

    // Detect Opera (including Opera GX)
    const isOpera = userAgent.includes("OPR") || userAgent.includes("Opera");

    // Synchronously detect Brave by checking if the navigator.brave object exists
    const isBrave = typeof navigator.brave !== 'undefined';

    if (isOpera) {
      // For Opera browsers, set font size to 16px
      document.documentElement.style.fontSize = "12px";
    } else if (isBrave) {
      // For Brave browsers, set font size to 12px
      document.documentElement.style.fontSize = "12px";
    } else {
      // Detect other Chromium-based browsers (Chrome, Edge, etc.)
      const isChromium = !!window.chrome || userAgent.includes("Chromium");
      if (isChromium) {
        document.documentElement.style.fontSize = "16px";
      }
    }
  }, []);

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
};

export default App;
