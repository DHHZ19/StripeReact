import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Store from "./pages/Store";
import Sucess from "./pages/Sucess";
import Cancel from "./pages/Cancel";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
    <BrowserRouter>
      <Routes>
        <Route index element={<Store />}></Route>
        <Route path="sucess" element={<Sucess />} />
        <Route path="cancel" element={<Cancel />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
