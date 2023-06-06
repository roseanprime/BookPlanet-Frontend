import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { AuthContext } from "../Context/auth.context";

const BookDetails = () => {
  const [book, setBook] = useState(null);
  const [review, setReview] = useState("");
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [rating, setRating] = useState(1);

  const fetchBook = async () => {
    try {
      const storedToken = localStorage.getItem("authToken");

      const response = await axios.get(
        `${import.meta.env.VITE_APP_SERVER_URL}/api/details/${id}`,
        {
          headers: { Authorization: `Bearer ${storedToken}` },
        }
      );
      setBook(response.data);
      console.log("book info", response.data);
    } catch (error) {
      console.error("Error fetching book details:", error);
    }
  };

  useEffect(() => {
    fetchBook();
  }, []);

  const handleReviewChange = (event) => {
    setReview(event.target.value);
  };

  const handleSubmitReview = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_APP_SERVER_URL}/api/create-review/${id}/${
          user._id
        }`,
        {
          review,
          rating,
        }
      );
      // Handle successful review submission (e.g., show a success message)
      console.log("Review submitted successfully:", response.data);

      // Clear the review input field after submission
      setReview("");
      setRating(1);
      fetchBook();
    } catch (error) {
      // Handle error (e.g, show an error message)
      console.error("Error submitting review:", error);
    }
  };

  const handleReviewDelete = async (reviewId) => {
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_APP_SERVER_URL}/api/delete-review/${reviewId}`
      );
      fetchBook();
    } catch (error) {
      console.log(error);
    }
  };

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {book && (
        <div>
          <h1>Book Details</h1>
          <h3>Title: {book.title}</h3>
          <p>Author: {book.author}</p>
          <p>Description: {book.description}</p>
          <p>Publisher: {book.publisher}</p>
        </div>
      )}
      <hr />
      {/* Review Form */}
      <form onSubmit={handleSubmitReview}>
        <label htmlFor="review">Add a Review:</label>
        <textarea
          id="review"
          value={review}
          onChange={handleReviewChange}
          required></textarea>
        <input
          type="number"
          value={rating}
          min={1}
          max={5}
          onChange={(e) => setRating(e.target.value)}
        />
        <button type="submit">Submit Review</button>
      </form>
      <hr />
      {/* Display existing reviews */}
      {book &&
        book.review.map((review) => (
          <>
            <p>
              By {review.author.firstName} {review.author.lastName}:
            </p>
            <p>{review.content}</p>
            <p>Rating: {review.rating}</p>
            {review.author._id === user._id && (
              <button onClick={() => handleReviewDelete(review._id)}>
                Delete Review
              </button>
            )}
            <hr />
          </>
        ))}
    </div>
  );
};

export default BookDetails;
