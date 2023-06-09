import React, { useState } from 'react';

const Home = () => {
  const books = [
    {
      id: 1,
      title: 'It Starts With Us',
      author: 'By: Collen Hoover',
      image: 'https://cdn.kobo.com/book-images/3bd62b0a-0350-4f99-9369-255951d262ba/353/569/90/False/it-starts-with-us-1.jpg',
    },
    {
      id: 2,
      title: 'It Ends with Us',
      author: 'By: Collen Hoover',
      image: 'https://kbimages1-a.akamaihd.net/d4d08a78-871e-4693-8d5c-fbd2fa3dd0c2/1200/1200/False/it-ends-with-us-versione-italiana.jpg',
    },
    {
      id: 3,
      title: 'Where the Crawdads Sing',
      author: 'By: Delia Owens',
      image: 'https://m.media-amazon.com/images/I/81O1oy0y9eL._AC_UF1000,1000_QL80_.jpg',
    },
    {
      id: 4,
      title: 'Atomic Habits',
      author: 'By: James Clear',
      image: 'https://img.wook.pt/images/atomic-habits-james-clear/MXwyMTg2NTQxOHwxNzcyMDUzMXwxNjQ3MzQwMzcwMDAw/500x',
    },
    {
      id: 5,
      title: 'The World Keeps Ending, and the World Goes On',
      author: 'By: Franny Choi',
      image: 'https://pyxis.nymag.com/v1/imgs/838/b02/26f785bbce1dced1803ef5dd0792ae4906-fbp-the-world-keeps-ending.2x.rvertical.w570.jpg',
    },
    {
      id: 6,
      title: 'Kintsugi',
      author: 'By: Tomás Navarro',
      image: 'https://m.media-amazon.com/images/I/51hYNivYGeL._AC_UF894,1000_QL80_.jpg',
    },
  

  ];

  const [hoveredBookId, setHoveredBookId] = useState(null);

  const handleBookMouseEnter = (bookId) => {
    setHoveredBookId(bookId);
  };

  const handleBookMouseLeave = () => {
    setHoveredBookId(null);
  };

  return (
    <div className="container mt-5">
      <h1>Presents you the</h1>
      <h1>Most Searched Books on Google 2022</h1>
      <div className="book-list">
        {books.map((book) => (
          <div
            key={book.id}
            className={`book-item ${book.id === hoveredBookId ? 'hovered' : ''}`}
            onMouseEnter={() => handleBookMouseEnter(book.id)}
            onMouseLeave={handleBookMouseLeave}
          >
            <img src={book.image} alt={`${book.title} image`} className="book-image" />
            <div className="book-info">
              <h2>{book.title}</h2>
              <p>{book.author}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
