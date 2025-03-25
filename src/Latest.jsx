import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function Latest() {
  const [data, setDatas] = useState([]);

  const geData = () => {
    fetch("http://localhost:3000/latest_movies")
      .then((result) => result.json())
      .then((resp) => {
        console.log(resp);
        setDatas(resp);
      })
      .catch((error) => console.error('Error fetching', error));
  };

  useEffect(() => {
    geData();
  }, []);

  return (
    <div>
      <h2 className='h3 fs-3 text-center'> Latest Movies </h2>
      <div className='d-flex flex-wrap'>
        {data.map((lmovie, index) => (
          <Card id='card' className='ms-5' key={index} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={lmovie.image} />
            <Card.Body className='bg-dark text-light'>
              <Card.Title>{lmovie.title}</Card.Title>
              <Card.Text>
                Director: {lmovie.director}<br />
                Genre: {lmovie.genre.join(", ")}<br />
                Rating: {lmovie.rating}<br />
                Release Year: {lmovie.year}<br />
              </Card.Text>
              <Button variant="primary">Watch / Download</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}
