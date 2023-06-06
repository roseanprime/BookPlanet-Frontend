import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editBookId, setEditBookId] = useState(null);
  const [editFormData, setEditFormData] = useState({
    title: "",
    author: "",
    description: "",
  });

  const fetchBooks = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_APP_SERVER_URL}/api/list`
      );
      setBooks(response.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleEditBook = (book) => {
    setEditBookId(book._id);
    setEditFormData({
      title: book.title,
      author: book.author,
      description: book.description,
    });
  };

  const handleEditFormChange = (event) => {
    setEditFormData({
      ...editFormData,
      [event.target.name]: event.target.value,
    });
  };

  const handleUpdateBook = async () => {
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_APP_SERVER_URL}/api/edit/${editBookId}`,
        editFormData
      );
      console.log("Book updated successfully");
      // Perform any additional actions after updating the book
      setEditBookId(null);
      setEditFormData({
        title: "",
        author: "",
        description: "",
      });
      fetchBooks();
    } catch (error) {
      console.error("Error updating book:", error);
      // Handle the error appropriately
    }
  };

  const handleDeleteBook = async (bookId) => {
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_APP_SERVER_URL}/api/books/${bookId}`
      );
      console.log("Book deleted successfully");
      // Perform any additional actions after deleting the book
    } catch (error) {
      console.error("Error deleting book:", error);
      // Handle the error appropriately
    }
  };

  if (loading) {
    return <div>Loading books...</div>;
  }

  if (error) {
    return <div>Error fetching books: {error}</div>;
  }

  return (
    <div>
      <h1>Books</h1>
      {books.length === 0 ? (
        <div>No books available.</div>
      ) : (
        <div>
          {books.map((book) => (
            <div key={book._id}>
              <img
                src={book.image}
                alt={`${book.title} image`}
                style={{ width: 200 }}
              />
              {editBookId === book._id ? (
                <div>
                  <input
                    type="text"
                    name="title"
                    value={editFormData.title}
                    onChange={handleEditFormChange}
                  />
     
                  <textarea
                    name="description"
                    value={editFormData.description}
                    onChange={handleEditFormChange}></textarea>
                  <button onClick={handleUpdateBook}>Save</button>
                </div>
              ) : (
                <div>
                  <h2>{book.title}</h2>
                  <p>{book.author}</p>
                  <div>
                    <Link to={`/bookdetails/${book._id}`}>View Details</Link>
                  </div>
                  <button onClick={() => handleEditBook(book)}>Edit</button>
                  <button onClick={() => handleDeleteBook(book._id)}>
                    Delete
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Books;
