import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navy.css'
// import NavDropdown from 'react-bootstrap/NavDropdown';
export default function Navy(){
  return (
    <div>
 <Navbar expand="lg" className="bg-primary">
      <Container fluid>
        <Navbar.Brand className='text-light fs-4 text-uppercase bg-secondary p-2' id='brand' href="/">Yours_Movies🎬</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 fs-md-5 fw-semibold text-uppercase"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className='fs-5 mt-1 ms-2 ' href="/"> <p id='Nav'>Home</p></Nav.Link>
            <Nav.Link className='fs-5 mt-1 ms-2' href="/About"> <p id='Nav'>About_Us</p></Nav.Link>
            <Nav.Link className='fs-5 mt-1 ms-2' href="/Contact"><p id='Nav'>Contact_US</p></Nav.Link>
      

          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant=" btn btn-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}
