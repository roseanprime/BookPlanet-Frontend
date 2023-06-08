import React, { useState } from "react";
import axios from "axios";

const AddBook = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    description: "",
    imageUrl: "",
    imageFile: null,
  });

  const handleFormChange = (event) => {
    if (event.target.name === "imageUrl") {
      setFormData({
        ...formData,
        imageUrl: event.target.value,
      });
    } else if (event.target.name === "imageFile") {
      setFormData({
        ...formData,
        imageFile: event.target.files[0],
      });
    } else {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value,
      });
    }
  };

  const handleAddBook = async (event) => {
    event.preventDefault();

    try {
      const formDataWithImage = new FormData();
      formDataWithImage.append("title", formData.title);
      formDataWithImage.append("author", formData.author);
      formDataWithImage.append("description", formData.description);

      if (formData.imageUrl) {
        formDataWithImage.append("imageUrl", formData.imageUrl);
      } else if (formData.imageFile) {
        formDataWithImage.append("imageFile", formData.imageFile);
      }

      const response = await axios.post("/api/books/create", formDataWithImage);
      console.log("Book added successfully");
      // Perform any additional actions after adding the book
      window.location.href = "/books"; // Redirect to the books list page
    } catch (error) {
      console.error("Error adding book:", error);
      // Handle the error appropriately
    }
  };

  return (
    <div>
      <h1>Add Book</h1>
      <form onSubmit={handleAddBook}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleFormChange}
          />
        </div>
        <div>
          <label>Author:</label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleFormChange}
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleFormChange}
          ></textarea>
        </div>
        <div>
          <label>Image URL:</label>
          <input
            type="text"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleFormChange}
          />
        </div>
        <div>
          <label>Upload Image:</label>
          <input
            type="file"
            name="imageFile"
            accept="image/*"
            onChange={handleFormChange}
          />
        </div>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
