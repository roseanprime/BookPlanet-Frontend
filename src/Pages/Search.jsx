import React, { useState } from "react";
import axios from "axios";

function Search() {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState(null);

  const handleSearch = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.get(
        `${import.meta.env.VITE_APP_SERVER_URL}/api/api-books/${search}`,
        search
      );

      setResult(response.data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Search for a book!</h1>
      <form onSubmit={handleSearch}>
        <input type="text" onChange={(e) => setSearch(e.target.value)} />
      </form>👀

      {result &&
        result.map((book) => (
          <div key={book.id}>
            {book.volumeInfo.imageLinks && (
              <img
                src={book.volumeInfo.imageLinks.thumbnail}
                alt={`${book.volumeInfo.title} image`}
                style={{ width: 200 }}
              />
            )}
            <h2>{book.volumeInfo.title}</h2>
            <p>{book.volumeInfo.authors}</p>
          </div>
        ))}
    </div>
  );
}

export default Search;
