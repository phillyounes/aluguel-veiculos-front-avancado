import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import VehicleSelection from "./pages/VehicleSelection";
import ReservationSummary from "./pages/ReservationSummary";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/vehicles" element={<VehicleSelection />} />
      <Route path="/summary" element={<ReservationSummary />} />
    </Routes>
  );
}

export default App;