import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoutes from "../ProtectedRoutes";
import SignUp from "../signUp/SignUp";
import ShortenUrlPage from "../shortenUrl/ShortenUrlPage";
import ListOfUrl from "../listOfUrls/ListOfUrl";
import { store } from "../store";

function App() {
  const token = store.getState().token;

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
