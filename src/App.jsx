import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/layout/navbar";
import Footer from "./components/layout/footer";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="*"
            element={
              <div>
                <h1>404: Page not found</h1>
                <Link to="/">Go Home</Link>
              </div>
            }
          />{" "}
          {/* Catch-all route for 404s */}
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
