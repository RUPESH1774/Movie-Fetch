import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './RMovie.css'
export default function Rmovie() {
  let [data, setData] = useState([]);
  
  const getData = () => {
    fetch("http://localhost:3000/rmovies")
      .then((result) => result.json())
      .then((resp) => {
        console.log(resp);
        setData(resp);
      })
      .catch((error) => console.error('Error fetching', error));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h2 className='h3 fs-3 text-center'> Romantic Movies </h2>
      <div className='d-flex flex-wrap'>
        {data.map((rmovie, index) => (
          <Card id='card' className='ms-5' key={index} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={rmovie.image} />
            <Card.Body className='bg-dark text-light'>
              <Card.Title>{rmovie.title}</Card.Title>
              <Card.Text>
                ID: {rmovie.id}<br />
                Director: {rmovie.director}<br />
                Genre: {rmovie.genre.join(", ")}<br />
                Rating: {rmovie.rating}<br />
                Release Year: {rmovie.year}<br />
              </Card.Text>
              <Button variant="primary">Watch / Download</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}
