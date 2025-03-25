import React from 'react'
import './Follter.css'
export default function Fotter() {
  return (
    <div>    <div className='bg-secondary d-flex justify-content-start border border-2 border-dark rounded-3 px-3 mx-xl-5 my-4' style={{boxShadow:'25px 18px 15px black'}}>
     <div className=''>
            <h2 className='fs-3 h3 text-uppercase p-2 ms-5 text-light'>Menu</h2>
        <ul className='d-flex flex-column ms-4'>
           <a href=""> <li>Home</li></a>
           <a href=""><li>About-US</li></a>
            <a href=""><li>Contact</li></a>
    
        </ul>
        </div>
        <div>
        <h2 className='fs-3 h3 text-uppercase p-2 ms-5 text-light'>Movies List</h2>
        <ul className='d-flex flex-column ms-5'>
          <a href="/Latest"> <li>New Movies</li></a>
           <a href=""><li>Old Movies</li></a>
          <a href="/Rmovie"> <li>Romantic Movies</li></a>
           <a href=""><li>South Movies</li></a>
            <a href=""><li>& More</li></a>
        </ul>
        </div>
        
    <div class="mx-5">
            <label for="" class="form-label text-light fs-4">Email</label>
            <input type="email" class="form-control bg-secondary text-light mb-3" name="" id="" aria-describedby="emailHelpId"  placeholder="abc@mail.com"  />
            <button className='btn btn-outline-light'>Sumbit</button>
        </div>
        <img id='img'  className='img-fluid' src="src\assets\fotter.png" alt="" style={{height:'50vh'}} />
    </div>
    </div>
 

  )
}
