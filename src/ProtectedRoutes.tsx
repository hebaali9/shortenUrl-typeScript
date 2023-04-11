import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function ProtectedRoutes({ children }: { children: JSX.Element }) {
  type RootState = {
    token: string;
  };

  const token = useSelector((state: RootState) => state.token);
  const isLoggedIn = !!token;
  return isLoggedIn ? children : <Navigate to="/signUp" />;
}

export default ProtectedRoutes;
