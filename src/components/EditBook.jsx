import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const EditBook = () => {
  const { bookId } = useParams();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_APP_SERVER_URL}/api/books/${bookId}`
        );
        const { title, author } = response.data;
        setTitle(title);
        setAuthor(author);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [bookId]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.put(
        `${import.meta.env.VITE_APP_SERVER_URL}/api/books/${bookId}`,
        { title, author }
      );
      console.log("Book updated successfully");
      // Redirect to the Books page or display a success message
    } catch (error) {
      setError(error.message);
    }
  };

  if (loading) {
    return <div>Loading book...</div>;
  }

  if (error) {
    return <div>Error fetching book: {error}</div>;
  }

  return (
    <div>
      <h1>Edit Book</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </label>
        <br />
        <label>
          Author:
          <input
            type="text"
            value={author}
            onChange={(event) => setAuthor(event.target.value)}
          />
        </label>
        <br />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EditBook;
