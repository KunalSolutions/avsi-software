
import { BrowserRouter, Routes, Route, Navigate } from "react-router";

import Home from "./pages/Home";
import CorporateERP from "./pages/corporate";
import College from "./pages/College";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/presentations/corporate"
          element={<CorporateERP />}
        />
        <Route
          path="/presentations/college"
          element={<College />}
        />
        <Route
          path="/presentations/healthcare"
          element={<Navigate to="/" replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
