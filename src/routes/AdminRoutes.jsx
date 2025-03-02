
import Dashboard from '../pages/admin/dashboard';
import Appointments from '../pages/admin/appointments';
import Articles from '../pages/admin/articles'
import Artifacts from '../pages/admin/artifacts'
import Donation from '../pages/admin/donation'

const AdminRoutes = [
  { index: true, element: <Dashboard /> },
  { path: 'dashboard', element: <Dashboard /> },
];

export default AdminRoutes;