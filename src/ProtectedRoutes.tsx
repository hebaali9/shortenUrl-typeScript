import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function ProtectedRoutes({ children }: { children: JSX.Element }) {
  interface RootState {
    token: string;
  }

  const selectToken = (state: RootState) => state.token;

  const token = useSelector(selectToken);
  const isLogedIn = !!token;
  return isLogedIn ? children : <Navigate to="/signUp" />;
}

export default ProtectedRoutes;
