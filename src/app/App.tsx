import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoutes from "../ProtectedRoutes";
import SignUp from "../signUp/SignUp";
import ShortenUrlPage from "../shortenUrl/ShortenUrlPage";
import ListOfUrl from "../listOfUrls/ListOfUrl";
import { useSelector } from "react-redux";

type RootState = {
  token: string;
};
function App() {
  const token = useSelector((state: RootState) => state.token);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/"
          element={
            <ProtectedRoutes>
              <ShortenUrlPage />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/urls-list"
          element={
            <ProtectedRoutes>
              <ListOfUrl />
            </ProtectedRoutes>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
