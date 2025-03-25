import React, { useEffect, useState } from 'react';
import Navy from './Navy';
import Fotter from './Fotter';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Home.css';
import { Link, useNavigate } from 'react-router-dom';

export default function Home() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();  

  const getData = () => {
    fetch("http://localhost:3000/Movies")
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
  // let active = 1;
  // let items = [];
  // for (let number = 1; number <= 5; number++) {
  //   items.push(
  //     <Pagination.Item key={number} active={number === active}>
  //       {number}
  //     </Pagination.Item>,
  //   );
  // }
  return (
    <div>
      <Navy />
      <h1 className='text-center text-dark fs-2 mt-4 mx-5 rounded-4 bg-success' style={{animation: 'flipInX', animationDuration: '2s', animationDelay: '0.1s', boxShadow: '-5px 14px 18px 2px #006494'}}> Home</h1>
      <img className='img-fluid' src="\src\assets\download.png" alt="" style={{height: '70vw'}} />
     
      <div className='d-flex justify-content-evenly pb-3'>
        <button className='btn btn-primary rounded-4' style={{boxShadow: '12px 16px 22px black'}}>Trending Movies</button> 
        <button onClick={() => navigate("/Latest")} className='btn btn-outline-secondary rounded-4' style={{boxShadow: '12px 16px 22px black'}}>Latest Movies</button>
        <button onClick={()=> navigate("/Amovie")} className='btn btn-success rounded-4' style={{boxShadow: '12px 16px 22px black'}}>Action Movies</button>
        <button onClick={() => navigate("/Rmovie")} className='btn btn-outline-danger rounded-4' style={{boxShadow: '12px 16px 22px black'}}>Romantic Movies</button>
        <button className='btn btn-warning rounded-4' style={{boxShadow: '12px 16px 22px black'}}>& More</button>
      </div>
      <br />
      <h2 className='h3 fs-3 text-center'> All Movies </h2>

      <div className='d-flex flex-wrap '>
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
      </div>
     <br />
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
