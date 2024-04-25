import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import ErrorPage from "./pages/ErrorPage";
import NewPage from "./pages/NewPage";
import AttendeeCertificate from "./pages/AttendeeCertificate";

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<NewPage />} />
        <Route path="*" element={<ErrorPage />} />

        <Route path="certificate" element={<Layout />}>
          <Route path="attendee/:refID" element={<AttendeeCertificate />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
