import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UploadPage from "./pages/UploadPage";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "Hexify";
  }, []);
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/upload" element={<UploadPage />} />
    </Routes>
  );
}

export default App;
