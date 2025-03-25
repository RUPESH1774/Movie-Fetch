import React from 'react'
import Navy from './Navy'
import './About.css'

export default function About() {
  return (
    <div>
    <div>   
        <Navy/>

    <div id='div'>
         <h3  className='text-center my-5 bg-success mx-5 text-uppercase rounded-4' >About_Us</h3> 

    <img className='img-fluid float-end me-4' style={{boxShadow:'12px -5px 18px black'}} src="src\assets\3d-render-film-industry-elements-camera-tickets-popcorn-cinema-chair-advertising-cinema_1398080-157.jpg" alt="" />
   <p className=' text-secondary fw-semibold m-4 '>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nostrum tenetur a repudiandae cupiditate voluptatum inventore, dolorum itaque delectus totam in illo libero sequi quibusdam iste blanditiis excepturi fugiat quo rem? Ratione corporis praesentium aut odit, distinctio natus excepturi dignissimos officiis culpa, amet tenetur. Ab doloremque, modi adipisci autem ad eaque possimus, maiores, dignissimos deserunt id animi quo aliquam eveniet obcaecati? Vero deleniti odit eum ad eveniet possimus! Labore ducimus facilis ex unde nisi, illo, aspernatur, adipisci obcaecati aut corrupti maiores veritatis eveniet laborum similique libero est. Voluptatibus tempore modi, quisquam, sapiente quas minus fuga, corporis est repudiandae delectus magnam. Lorem ipsum dolor sit amet consectetur adipisicing elit. At dolorem eos ducimus perspiciatis, quo sunt. Recusandae ab amet mollitia ex accusantium culpa natus, ducimus perferendis. Laboriosam voluptatem animi sit necessitatibus qui? Dolorum temporibus animi placeat amet consectetur nam et impedit, enim voluptatibus. Nisi explicabo ex porro animi, odio omnis illo, voluptas, qui veritatis architecto quidem eius hic non officia eum fuga. Nemo perferendis aut , ullam id.
   </p>
  <div id='scroll' className='mb-5'>
   <img className='img-fluid mt-3 float-start' style={{boxShadow:'12px 10px 10px black'}} src="src\assets\About2.jpg" alt="" />
    <h2 className='text-center text-info display-4 fw-bold' style={{textShadow:'7px 6px 7px black',textDecoration:'5px underline dashed black'}}> Customer Review</h2>
  <p className=' bg-secondary pt-3 p-3 border border-3 border-dark rounded-3 text-center m-4 '> Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio numquam eligendi iure laudantium sequi, libero est suscipit nobis porro, repellat rem nisi reprehenderit perferendis debitis neque nam veniam nostrum velit facere provident explicabo? Neque reiciendis, corporis nihil quo ullam alias minima voluptate ratione beatae, inventore expedita. Repellat, nesciunt rerum ipsam vitae autem iure sunt consectetur iste voluptas debitis id, similique architecto deleniti tenetur alias quas nobis ut laudantium nihil laboriosam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore iste libero dignissimos quam placeat, molestias earum atque mollitia. Aperiam quaerat voluptate quidem laboriosam dolores, nam, sunt voluptas vero reiciendis quod vel! Repellendus labore debitis accusamus, at id distinctio necessitatibus! Sapiente, minus deleniti incidunt vel aliquam facilis quod corporis ex eum assumenda in velit modi dolorum optio quas sequi consequatur qui illo deserunt doloribus, amet dolor laborum aspernatur minima! Eaque, doloremque.</p>
  </div><br />
<div className='mt-5' id='scrolls'>    
<img className='img-fluid mt-3 float-end' style={{boxShadow:'12px 10px 10px black'}} src="src\assets\cinema.jpg" alt="" />
<h2 className='text-center text-info display-4 fw-bold' style={{textShadow:'7px 6px 7px black',textDecoration:'5px underline dashed black'}}> Picture Review</h2>
<p className='bg-dark h5 text-light text-center p-3 border border-3 border-secondary rounded-3 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum temporibus quas dolorem natus suscipit voluptatibus molestias. Nobis deserunt qui cupiditate officiis odio placeat, reprehenderit dignissimos consequuntur vitae accusantium  laborum porro assumenda ab tempora ratione? Atque optio quisquam dolores expedita nesciunt voluptates sed necessitatibus, asperiores ab a, quo modi! Inventore nobis explicabo sint doloremque alias cumque sunt id aliquam pariatur, maiores debitis minima? Deleniti quam nisi magnam esse suscipit nihil cupiditate voluptatibus? Minima sunt dignissimos, eveniet cum facere consequatur veritatis molestias voluptas ipsum vitae laudantium obcaecati et eligendi molestiae nobis porro inventore, accusamus ex nisi nemo nihil aspernatur? Distinctio est rem suscipit quos deleniti adipisci quaerat facilis repellendus, neque cum voluptatibus, voluptatum necessitatibus inventore asperiores deserunt aliquid sunt consequatur quisquam! Fugiat ipsam minus possimus corporis consequatur obcaecati veritatis, deserunt aut nobis aperiam perferendis pariatur repellendus provident natus veniam est autem quaerat labore doloribus cumque quae, eaque esse? A nulla tenetur explicabo magni quidem inventore consectetur! Ea, praesentium beatae porro blanditiis officiis eligendi, quod voluptates eos harum consequatur culpa, repudiandae unde. Est perferendis porro, alias expedita, distinctio dolor veritatis corrupti reprehenderit quo iure explicabo temporibus quam earum veniam, provident qui tempora fugiat!</p>
</div>
 </div>
</div>
<div className='bg-secondary d-flex justify-content-start mt-5'>
     <div className=''>
            <h2 className='fs-3 h3 text-uppercase p-2 ms-5 text-light'>Menu</h2>
        <ul className='d-flex flex-column ms-4'>
           <a href=""> <li>Home</li></a>
           <a href=""><li>About-US</li></a>
            <a href=""><li>Contact</li></a>
         <a href=""><li>Help</li></a>
        </ul>
        </div>
        <div>
        <h2 className='fs-3 h3 text-uppercase p-2 ms-5 text-light'>Movies List</h2>
        <ul className='d-flex flex-column ms-5'>
          <a href=""> <li>New Movies</li></a>
           <a href=""><li>Old Movies</li></a>
          <a href=""> <li>Romantic Movies</li></a>
           <a href=""><li>South Movies</li></a>
            <a href=""><li>& More</li></a>
        </ul>
        </div>
        
    <div class="mx-5">
            <label for="" class="form-label text-light fs-4">Email</label>
            <input type="email" class="form-control bg-secondary text-light mb-3" name="" id="" aria-describedby="emailHelpId"  placeholder="abc@mail.com"  />
            <button className='btn btn-outline-light'>Sumbit</button>
        </div>
        <img id='img'  className='img-fluid' src="src\assets\download.png" alt="" style={{height:'50vh'}} />
    </div>



    </div> 


  

  )
}
