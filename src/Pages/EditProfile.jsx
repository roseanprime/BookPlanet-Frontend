import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditProfile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_APP_SERVER_URL}/api/user/profile`);
        const { name, email, bio } = response.data;
        setName(name);
        setEmail(email);
        setBio(bio);
      } catch (error) {
        console.error('Error fetching user profile:', error);
        // Handle the error appropriately
      }
    };

    fetchUserProfile();
  }, []);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleBioChange = (event) => {
    setBio(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`${import.meta.env.VITE_APP_SERVER_URL}/api/user/profile`, {
        name,
        email,
        bio,
      });
      console.log('Profile updated successfully');
    } catch (error) {
      console.error('Error updating profile:', error);
      // Handle the error appropriately
    }
  };

  return (
    <div>
      <h1>Edit Profile</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <br />
        <label>
          Bio:
          <textarea value={bio} onChange={handleBioChange} />
        </label>
        <br />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EditProfile;