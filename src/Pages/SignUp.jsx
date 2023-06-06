import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/auth.context';

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
    <div>
      <h1>Signup Page</h1>
      {user ? (
        <p>You are already signed up or logged in.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            First Name:
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            Last Name:
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </label>
          <br />
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
          <button type="submit">Signup</button>
        </form>
      )}
    </div>
  );
};

export default Signup;
