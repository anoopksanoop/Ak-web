import React from 'react'
import "./Gallery.css" 
import { IoLogoInstagram } from "react-icons/io";
import { FiTwitter } from "react-icons/fi";
import { SiIbm } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { SiIndeed } from "react-icons/si";

const Gallery = () => {
   

  return (
    <>
    <h1 className='collabs'>Collabs</h1>
    <div class="grid-container">
      <div>
        <img className='grid-item grid-item-1' src='https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2ViJTIwZGVzaWdufGVufDB8fDB8fHww' alt=''/>
        <p>"Mastering the Art of Web Design"</p>
      </div>
      <div>
        <img className='grid-item grid-item-2' src='https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2ViJTIwZGVzaWdufGVufDB8fDB8fHww' alt=''/>
        <p>"Responsive Web Design"</p>
      </div>
      <div>
        <img className='grid-item grid-item-3' src='https://images.unsplash.com/photo-1547658719-da2b51169166?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdlYiUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D' alt=''/>
        <p>"The Psychology Behind Effective Web Design"</p>
      </div>

      <div>
        <img className='grid-item grid-item-4' src='https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdlYiUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D' alt=''/>
        <p>"Exploring UI/UX Trends"</p>
      </div>
      <div>
        <img className='grid-item grid-item-5' src='https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdlYiUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D' alt=''/>
        <p>"Optimizing Website Performance"</p>
      </div>
      <div>
        <img className='grid-item grid-item-6' src='https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdlYiUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D' alt=''/>
        <p>"Visual Storytelling in Web Design"</p>
      </div>
      <div>
        <img className='grid-item grid-item-7' src='https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdlYiUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D' alt=''/>
        <p>"Accessible Web Design"</p>
      </div>
      <div>
        <img className='grid-item grid-item-8' src='https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGVzaWdufGVufDB8fDB8fHww' alt=''/>
        <p>"Color Theory in Web Design"</p>
      </div>
      <div>
        <img className='grid-item grid-item-9' src='https://images.unsplash.com/photo-1493612276216-ee3925520721?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdlYiUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D' alt=''/>
        <p>"The Future of Web Design"</p>
      </div>
      <div>
        <img className='grid-item grid-item-10' src='https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdlYiUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D' alt=''/>
        <p>"Effective Navigation Design"</p>
      </div>
    </div>


    <br/> <br/> <br/>

    <div class=" demo-bg">
<div class="rowtime">
<div class="col-sm-4"></div>
<div class="col-sm-4"></div>
<div class="col-sm-4">
<div class="business-hours">
<h2 class="title">Opening Hours</h2>
<ul class="list-unstyled opening-hours">
<li>Sunday <span className="pull-right">Closed</span></li>
<li>Monday <span className="pull-right">9:00-22:00</span></li>
<li>Tuesday <span className="pull-right">9:00-22:00</span></li>
<li>Wednesday <span className="pull-right">9:00-22:00</span></li>
<li>Thursday <span className="pull-right">9:00-22:00</span></li>
<li>Friday <span className="pull-right">9:00-23:30</span></li>
<li>Saturday <span className="pull-right">14:00-23:30</span></li>
</ul>
</div>
</div>
</div>



  
<div class="containersrl">
  <div class="iconsrl"><IoLogoInstagram/></div>
  <div class="iconsrl"><FiTwitter/></div>
  <div class="iconsrl"><SiIbm/></div>
  <div class="iconsrl"><FaFacebookF/></div>
  <div class="iconsrl"><FaLinkedinIn/></div>
  <div class="iconsrl"><SiIndeed/></div>

  
</div>
</div>
    </>
  )
}

export default Gallery