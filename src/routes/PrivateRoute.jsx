import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);


  if (loading) {
    return <div className="text-center mt-60"><span className="loading loading-dots loading-lg"></span></div>; 
  }

  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
