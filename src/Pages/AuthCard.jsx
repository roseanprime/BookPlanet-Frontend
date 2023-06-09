import React from 'react';

import imageSrc from '../images/1image.jpg';


const AuthCard = ({ title, children }) => {

const cardStyle = {

backgroundImage: `url(${imageSrc})`,

backgroundPosition: 'center',

backgroundSize: 'cover',

};


const cardBodyStyle = {

height: '400px', // Adjust the height as per your requirement

};


return (

<div className="container">

<div className="row">

<div className="col">

<div className="card mb-3 equal-card" style={cardStyle}>

<div className="card-body d-flex flex-column justify-content-center align-items-center" style={cardBodyStyle}>

<h1 className="card-title" style={{ fontSize: '15px' }}>{title}</h1>

{children}

</div>

</div>

</div>

<div className="col">

<div className="card mb-3 equal-card" style={cardStyle}>

<div className="card-body d-flex flex-column justify-content-center align-items-center" style={cardBodyStyle}>

<h1 className="card-title" style={{ fontSize: '15px' }}>{title}</h1>

{children}

</div>

</div>

</div>

<div className="col">

<div className="card mb-3 equal-card" style={cardStyle}>

<div className="card-body d-flex flex-column justify-content-center align-items-center" style={cardBodyStyle}>

<h1 className="card-title" style={{ fontSize: '15px' }}>{title}</h1>

{children}

</div>

</div>

</div>

</div>

</div>

);

};


export default AuthCard;