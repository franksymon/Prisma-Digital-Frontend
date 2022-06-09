import { Navigate, Outlet } from 'react-router-dom';

const token = localStorage.getItem('token');
const ProtectedRoutes = () => {
  if (token) {
    return <Outlet />;
  } else {
    return <Navigate to='/'/>;
  }
};

export default ProtectedRoutes;
