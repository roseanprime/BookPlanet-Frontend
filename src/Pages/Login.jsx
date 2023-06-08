import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/auth.context';
import AuthCard from './AuthCard';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { authenticateUser, storeToken } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send login data to the backend API
      const response = await axios.post(`${import.meta.env.VITE_APP_SERVER_URL}/api/login`, formData);
      console.log(response.data); // Handle success response from the server
      storeToken(response.data.authToken);
      authenticateUser();
      navigate('/books');
    } catch (error) {
      console.error('Error logging in:', error.response.data); // Handle error response from the server
    }
  };

  return (
    <div className="container">
      <AuthCard title="Login">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password:
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
        </form>
      </AuthCard>
    </div>
  );
};

export default Login;
