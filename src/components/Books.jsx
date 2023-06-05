import React, { useState, useEffect } from "react";
import axios from "axios";

//demo
const Books = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_APP_SERVER_URL}/api/list`
        );
        console.log(response);
        setBooks(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

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
        books.map((book) => (
          <div key={book._id}>
            <img
              src={book.image}
              alt={`${book.title} image`}
              style={{ width: 200 }}
            />
            <h2>{book.title}</h2>
            <p>{book.author}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Books;
