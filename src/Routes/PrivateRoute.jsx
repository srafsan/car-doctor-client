import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <progress className="progress progress-warning w-full"></progress>;
  }

  if (user?.email) {
    return children;
  }

  return <Navigate to="/login" replace />;
};

export default PrivateRoute;
