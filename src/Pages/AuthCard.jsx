import React from 'react';
import imageSrc from '../images/1image.jpg';

const AuthCard = ({ title, children }) => {
  const cardStyle = {
    backgroundImage: `url(${imageSrc})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <div className="card">
          <div className="card-body">
            <h1 className="card-title" style={{ fontSize: 'vw' }}>{title}</h1>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthCard;
