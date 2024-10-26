import React from "react";
import LoginPage from "./pages/LoginPage";
import { Route, Routes } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import Home from "./pages/Home";
import ProfilePage from "./pages/ProfilePage";
import { useState } from "react";
import NavbarContainerRoute from "./components-1/NavbarContainerRoute";
import ProtectRoute from "./components-1/ProtectRoute";
import ProductPage from "./pages/ProductPage";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggleNavbar() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <NavbarContainerRoute />
          }
        >
          <Route index element={<Home />} />
          <Route path="/offers" element={<h1>Offers</h1>} />
          <Route path="/products" element={<ProductPage/>} />
        </Route>
        <Route
          path="/profile"
          element={
            <ProtectRoute>
              <ProfilePage />
            </ProtectRoute>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </>
  );
}

export default App;
