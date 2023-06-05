import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../Context/auth.context";

const Profile = () => {
  const { authenticateUser, user } = useContext(AuthContext);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    authenticateUser();
    console.log(user);
  }, []);

  return (
    <div>
      <h1>Hello,  {user.firstName} </h1>
      <p>You have 2 books on your wishlist!</p>
    </div>
  );
};

export default Profile;
