import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Recommendations = () => {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    fetchRecommendations();
  }, []);

  const fetchRecommendations = async () => {
    try {
      const response = await axios.get('/api/recommendations');
      setRecommendations(response.data);
    } catch (error) {
      console.error('Error fetching recommendations:', error);
    }
  };

  return (
    <div>
      <h1>Recommendations</h1>
      {recommendations.length === 0 ? (
        <div>No recommendations found.</div>
      ) : (
        <ul>
          {recommendations.map((recommendation) => (
            <li key={recommendation._id}>
              <h3>Book: {recommendation.book.title}</h3>
              <p>Recommended By: {recommendation.recommendedBy.name}</p>
              <p>Recommended To: {recommendation.recommendedTo.map((user) => user.name).join(', ')}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Recommendations;
