import React from "react";
import LoginPage from "./pages/LoginPage";
import { Route, Routes } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import Home from "./pages/Home";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/"  >
        <Route index element={<Home />}/>
        <Route path="/offers" element={<h1>Offers</h1>}/>
        <Route path="/profile" element={<ProfilePage/>}/>
        <Route path="/products" element={<h1>Products</h1>}/>
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </>
  );
}

export default App;
