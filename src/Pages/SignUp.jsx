import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/auth.context';
import AuthCard from './AuthCard';

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const { user, authenticateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send signup data to the backend API
      const response = await axios.post(
        `${import.meta.env.VITE_APP_SERVER_URL}/api/signup`,
        formData
      );
      console.log(response.data); // Handle success response from the server
      navigate('/login');
    } catch (error) {
      console.error('Error signing up:', error.response.data); // Handle error response from the server
    }
  };

  return (
    <div className="container">
      <AuthCard title="Signup">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">First Name:</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-primary">
              Signup
            </button>
          </div>
        </form>
      </AuthCard>
    </div>
  );
};

export default Signup;
