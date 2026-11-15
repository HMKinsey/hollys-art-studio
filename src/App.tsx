import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import { FlyerPage } from './pages/FlyerPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { en } from './locales/en';
import AdminPage from './pages/AdminPage';
import TestingPage from './pages/testing/TestingPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <PortfolioPage />,
  },
  {
    path: en.routes.flyer,
    element: <FlyerPage />,
  },
  {
    path: 'admin',
    element: <AdminPage />,
  },
  {
    path: 'testing',
    element: localStorage.getItem('studioAdminToken') ? (
      <TestingPage />
    ) : (
      <Navigate to="/admin" replace />
    ),
  },
  {
    path: '*',
    element: <PortfolioPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
