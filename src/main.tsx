import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App.tsx";
import Newpages from "./pages/Newpages.tsx";
import PageNotFound from "./pages/PageNotFound.tsx";
import Navbar from "./components/navbar.tsx";
// css
import "./assets/css/main.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/newpages" element={<Newpages />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
