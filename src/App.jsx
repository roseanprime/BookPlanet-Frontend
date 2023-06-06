import React from "react";
import { Routes, Route } from "react-router-dom";

import NavBar from "./components/Navbar";
import Books from "./components/Books";
import HomePage from "./Pages/Home";
import SignupPage from "./Pages/SignUp";
import LoginPage from "./Pages/Login";
import Profile from "./Pages/Profile";
import EditProfile from "./Pages/EditProfile";
import AboutUs from "./Pages/AboutUs";
import Search from "./Pages/Search";
import BookDetails from "./Pages/BookDetails";
import Recommendation from "./Pages/Recommendation";
import AddBook from "./Pages/AddBooks";


function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/editprofile" element={<EditProfile />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/books" element={<Books />} />
        <Route path="/search" element={<Search />} />
        <Route path="/bookdetails/:id" element={<BookDetails />} />
        <Route path="/recommendation" element={<Recommendation />} />
        <Route path="/addbooks" element={<AddBook />} />
      </Routes>
    </div>
  );
}

export default App;
