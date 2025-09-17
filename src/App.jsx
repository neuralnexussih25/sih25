import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Upload from "./pages/Upload";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Feedback from "./pages/Feedback";
import Heritage from "./pages/Heritage"; // ⬅️ Imported Heritage page

function App() {
  return (
    <Router>
      {/* Global Pattern Background */}
      <div className="min-h-screen bg-heritage-pattern bg-repeat bg-fixed bg-150 text-parchment font-serif">
        <Navbar />
        <div className="pt-24 px-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/heritage" element={<Heritage />} /> {/* ⬅️ Added */}
            <Route path="/upload" element={<Upload />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/feedback" element={<Feedback />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
