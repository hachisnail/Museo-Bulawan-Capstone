import { Navigate } from 'react-router-dom';
import Dashboard from '../pages/admin/dashboard';
import Appointments from '../pages/admin/appointments';
import Articles from '../pages/admin/articles';
import Artifacts from '../pages/admin/artifacts';
import Donations from '../pages/admin/donation';

const adminRoutes = [
  { index: true, element: <Navigate to="dashboard" replace /> }, // Redirect to dashboard
  { path: 'dashboard', element: <Dashboard /> },
  { path: 'appointments', element: <Appointments /> },
  { path: 'articles', element: <Articles /> },
  { path: 'artifacts', element: <Artifacts /> },
  { path: 'donations', element: <Donations /> },
];

export default adminRoutes;
