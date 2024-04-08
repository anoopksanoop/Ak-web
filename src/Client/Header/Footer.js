import React from 'react'
import { useLocation } from 'react-router';
const Footer = () => {
    
    const location = useLocation();

    // Define the background color based on the current path
    const backgroundColor = location.pathname === '/about' ? '#010101' : 'rgba(30, 30, 30, 1)';
  
    
  return (

    <div style={{ backgroundColor }}  data-aos="fade-up"
    data-aos-anchor-placement="top-bottom">
        <div className="aboutdiv1">
  <div className="aboutdiv1-2">
    <div className="aboutdiv1-column">
      <div className="aboutdiv1-3">
        <p>Revamp your website now!</p>
        <div className="aboutdiv1-4">
        <p>AK-web</p>
      </div>
      </div>
     
    </div>
  </div>
</div>

<style jsx>{`

.aboutdiv1 {
    display: flex;
    flex-direction: column;
    position: relative;
    margin-top: 24px;
    height: 300px;
    margin-bottom:0;
  }
  
  .aboutdiv1-2 {
    gap: 20px;
    display: flex;
  }
  
  @media (max-width: 991px) {
    .aboutdiv1-2 {
      flex-direction: column;
      align-items: stretch;
      gap: 0px;
    }
  }
  
  .aboutdiv1-column {
    display: flex;
    flex-direction: column;
    line-height: normal;
    width: 100%;
    margin-left: 0px;
  }
  
  @media (max-width: 991px) {
    .aboutdiv1-column {
      width: 100%;
    }
  }
  
  .aboutdiv1-3 {
    position: relative;
    margin-top: 50px;
    height: auto;
    color: rgba(255, 255, 255, 1);
    text-align: center;
    font: 54px "Times", serif;
  }
  
  .aboutdiv1-4 {
    position: relative;
    margin-top: 20px;
    height: auto;
    color: rgba(255, 255, 255, 1);
    text-align: center;
    font: 20px "Times", serif;
  }
  

`}</style>
    </div>

    
  )
}

export default Footer