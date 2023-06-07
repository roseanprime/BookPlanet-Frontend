import React, { useState, useContext } from "react";
import { AuthContext } from "../Context/auth.context";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { user, authenticateUser, storeToken } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send login data to the backend API
      const response = await axios.post(
        `${import.meta.env.VITE_APP_SERVER_URL}/api/login`,
        formData
      );
      console.log(response.data); // Handle success response from the server
      storeToken(response.data.authToken);
      authenticateUser();
      navigate("/books");
    } catch (error) {
      console.error("Error logging in:", error.response.data); // Handle error response from the server
    }
  };

  return (
    <div className="container">
      <h1>Login</h1>
      {user ? (
        <p>You are already logged in.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
};

export default Login;
