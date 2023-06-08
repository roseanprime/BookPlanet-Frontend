import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import AuthCard from "../Pages/AuthCard";

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

  useEffect(() => {
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

  const handleDelete = async (bookId) => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_APP_SERVER_URL}/api/${bookId}`
      );
      setBooks(books.filter((book) => book._id !== bookId));
    } catch (error) {
      setError(error.message);
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
      <h1 className="display-4 mb-4">Books</h1>
      {books.length === 0 ? (
        <div>No books available.</div>
      ) : (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {books.map((book) => (
            <div key={book._id} className="col mb-4">
              <AuthCard title={book.title}>
                <div className="card h-100">
                  <img
                    src={book.image}
                    alt={`${book.title} image`}
                    className="card-img-top"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body d-flex flex-column">
                    {editBookId === book._id ? (
                      <div>
                        <input
                          type="text"
                          name="title"
                          value={editFormData.title}
                          onChange={handleEditFormChange}
                        />
                        <input
                          type="text"
                          name="author"
                          value={editFormData.author}
                          onChange={handleEditFormChange}
                        />
                        <textarea
                          name="description"
                          value={editFormData.description}
                          onChange={handleEditFormChange}
                        ></textarea>
                        <button onClick={handleUpdateBook}>Save</button>
                      </div>
                    ) : (
                      <div>
                        <h5 className="card-title">{book.title}</h5>
                        <p className="card-text">{book.author}</p>
                        <div className="mt-auto">
                          <Link to={`../Pages/BookDetails/${book._id}`}>
                            View Details
                          </Link>
                        </div>
                        <button onClick={() => handleDelete(book._id)}>
                          Delete
                        </button>
                        <button onClick={() => handleEditBook(book)}>
                          Edit
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </AuthCard>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Books;
