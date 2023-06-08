import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../Context/auth.context";
import { Link, useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const { authenticateUser, user } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
  });

  const handleProfilePhotoChange = (event) => {
    // Handle profile photo change
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      setProfilePhoto(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  const handleNameChange = (event) => {
    // Handle name change
    setName(event.target.value);
  };

  const handleBioChange = (event) => {
    // Handle bio change
    setBio(event.target.value);
  };

  const handleSubmit = (event) => {
    // Handle form submission
    event.preventDefault();
    // Do something with the updated profile photo, name, and bio
    // For example, you can make an API call to update the user's profile information
    // axios.put('/api/profile', { profilePhoto, name, bio });
  };

  useEffect(() => {
    const fetchData = async () => {
      await authenticateUser();
      setIsLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (!user) {
      navigate('/login'); // Redirect to the login page if user data is not available
    }
  }, [user, navigate]);

  if (isLoading) {
    return <div>Loading...</div>; // Render a loading state while the user data is being fetched
  }

  const handleReturnClick = () => {
    navigate('/books');
  };

  return (
    <div className="container">
      {user && (
        <>
<img src="https://img.freepik.com/free-icon/user_318-804790.jpg" style={{width: 200, paddingTop: 200}}/>
          <h1>Hello, {user.firstName} {user.lastName}</h1>
          <p>You have created 2 books on your wishlist!</p>
          </>
      )}
    </div>
  );
};

export default ProfilePage;
