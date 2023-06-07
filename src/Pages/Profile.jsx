import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../Context/auth.context";
import { Link, useNavigate } from 'react-router-dom';

const Profile = () => {
  const { authenticateUser, user } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
          <h1>Hello, {user.firstName} {user.lastName}</h1>
          <p>You have 2 books on your wishlist!</p>
        </>
      )}
      <button onClick={handleReturnClick} className="btn">Return</button>
    </div>
  );
};

export default Profile;
