import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import { useContext } from "react";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Layout from "./Layout";
import { AuthContext } from "./AuthContext";
import ProtectedRoute from "./ProtectedRoute";
function App() {
  const {isLoggedIn}=useContext(AuthContext)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={isLoggedIn ?<Dashboard />:<Homepage />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="dashboard" element={<ProtectedRoute isloggedIn={isLoggedIn}>
             <Dashboard />
          </ProtectedRoute>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
