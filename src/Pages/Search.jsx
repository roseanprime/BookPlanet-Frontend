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
    <div className="container" style={{ marginTop: "50px" }}>
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <h1 className="text-center mb-4">Search for a book!</h1>
          <form onSubmit={handleSearch}>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter book title"
                onChange={(e) => setSearch(e.target.value)}
              />
              <button className="btn btn-primary" type="submit">
                Search
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="row">
        {result &&
          result.map((book) => (
            <div key={book.id} className="col-lg-6 mb-4">
              <div className="card shadow">
                {book.volumeInfo.imageLinks && (
                  <img
                    src={book.volumeInfo.imageLinks.thumbnail}
                    alt={`${book.volumeInfo.title} image`}
                    className="card-img-top"
                    style={{ height: "300px", objectFit: "cover" }}
                  />
                )}
                <div className="card-body">
                  <h5 className="card-title">{book.volumeInfo.title}</h5>
                  <p className="card-text">{book.volumeInfo.authors}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Search;
