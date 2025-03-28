import { createBrowserRouter } from 'react-router-dom';
import LandingLayout from '../layouts/LandingLayout';
import AdminLayout from '../layouts/AdminLayout';
import ProtectedRoute from '../auth/ProtectedRoute';
import Home from '../pages/public/home';
import About from '../pages/public/about';
import Login from '../pages/public/login';
import NewsAndEvents from '../pages/public/newsandevents';
import AdminRoutes from './adminRoutes';
import Form from '../pages/public/form';
import Support from '../pages/public/support';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'news&events', element: <NewsAndEvents /> },
      { path: 'login', element: <Login /> },
      { path: 'form', element: <Form /> },
      { path: 'support', element: <Support /> },
    ],
  },
  {
    path: '/admin',
    element: <ProtectedRoute />,
    children: [
      {
        path: '',
        element: <AdminLayout />,
        children: AdminRoutes,
      },
    ],
  },
]);

export default router;
