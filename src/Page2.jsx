import React, { useEffect, useState } from 'react';
import Navy from './Navy';
import Fotter from './Fotter';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Home.css';
import { Link, useNavigate } from 'react-router-dom';
import Pagination from 'react-bootstrap/Pagination';

export default function Home() {
  const [data, setData] = useState([]);
  // const [activePage, setActivePage] = useState(2); // Initially set to page 2
  const navigate = useNavigate();

  const getData = (page = 2) => {
    fetch(`http://localhost:3000/Page2`)
      .then((result) => result.json())
      .then((resp) => {
        console.log(resp);
        setData(resp);
      })
      .catch((error) => console.error('Error Fetching', error));
  };

  useEffect(() => {
    getData();
  }, []);

  // const handlePageClick = (pageNumber) => {
  //   setActivePage(pageNumber);
  //   getData(pageNumber);
  // };

  // let items = [];
  // for (let number = 1; number <= 5; number++) {
  //   items.push(
  //     <Pagination.Item 
  //       key={2} 
  //       active={number === 2} 
  //       onClick={() => handlePageClick(2)}>
  //       {number}
  //     </Pagination.Item>,
  //   );
  // }

  return (
    <div>
      <Navy />
      <h2 className='h3 fs-3 text-center'> Movies Page 2 </h2>
      <div className='d-flex flex-wrap'>
        {data.map((movie, index) => (
          <Card id='card' className='ms-5' key={index} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={movie.image} />
            <Card.Body className='bg-dark text-light'>
              <Card.Title>{movie.title}</Card.Title>
              <Card.Text>
                ID: {movie.id}<br />
                Director: {movie.director}<br />
                Type: {movie.genre}<br />
                Popularity: {movie.rating}<br />
                Release Date: {movie.year}<br />
              </Card.Text>
              <Button variant="primary">Watch / Download</Button>
            </Card.Body>
          </Card>
        ))}
      </div><br />
      <div id='pagination' className='d-flex justify-content-center gap-5'>
   <a  className='border-none' href="/">1</a>
   <a href="/Page2">2</a>
   <a href="/Page3">3</a>
   <a href="">4</a>
   <a href="">5</a>   
  </div>

      <Fotter />
    </div>
  );
}
