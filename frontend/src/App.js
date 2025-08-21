import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import PageTransition from "./components/PageTransition";
import FloatingElements from "./components/FloatingElements";

// Pages
import Home from "./pages/Home";
import Services from "./pages/Services";
import Process from "./pages/Process";
import Reservation from "./pages/Reservation";
import Testimonials from "./pages/Testimonials";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <PageTransition>
          <FloatingElements />
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/process" element={<Process />} />
              <Route path="/reservation" element={<Reservation />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<FAQ />} />
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
        </PageTransition>
      </BrowserRouter>
    </div>
  );
}

export default App;