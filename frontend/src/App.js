import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

// Pages
import Home from "./pages/Home";
import Services from "./pages/Services";
import Process from "./pages/Process";
import Reservation from "./pages/Reservation";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/process" element={<Process />} />
            <Route path="/reservation" element={<Reservation />} />
            <Route path="*" element={
              <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                  <h1 className="text-4xl font-bold text-gray-900 mb-4">Page en construction</h1>
                  <p className="text-gray-600">Cette page sera bientôt disponible.</p>
                </div>
              </div>
            } />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;