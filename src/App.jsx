import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import ErrorPage from "./pages/ErrorPage";
import NewPage from "./pages/NewPage";


function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<NewPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default App;
