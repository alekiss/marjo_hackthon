import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/index.tsx";
import Home from "./pages/Home/index.tsx";
import CriarConta from "./pages/CriarConta/index.tsx";
import NovaDoacao from "./pages/NovaDoacao/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/criar-conta" element={<CriarConta />} />
        <Route path="/nova-doacao" element={<NovaDoacao />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
