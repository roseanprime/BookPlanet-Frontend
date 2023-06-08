// Example request using fetch
fetch('http://localhost:5005/api/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    username: 'example',
    password: 'password123'
  })
})
  .then(response => response.json())
  .then(data => {
    // Handle the response data
    console.log(data);
  })
  .catch(error => {
    // Handle any errors
    console.error(error);
  });
