import { Navigate } from "react-router-dom";
import { store } from "./Store";

function ProtectedRoutes({ children }: { children: JSX.Element }) {
  const token = store.getState().token;
  const isLogedIn = !!token;
  return isLogedIn ? children : <Navigate to="/signUp" />;
}

export default ProtectedRoutes;
