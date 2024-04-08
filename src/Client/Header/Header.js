import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {

  const [hamburgerMenuActive, setHamburgerMenuActive] = useState(false);

  
  const logOut=()=>{
    //  setLogin(false)
    sessionStorage.removeItem("user");
   
  }

  return (
    <>
      <div className="header-container">
        {/* Desktop Header */}
        <div className="desktop-header">
          <div className="logo">AK-WEB</div>
          <div className="menu">
          <Link to={"/"}>
            <div className="menu-item" >Home</div>
            </Link>
          <Link to={"service"}>
            <div className="menu-item">Services</div>
            </Link>
            <Link to={"gallery"}>
            <div className="menu-item">Gallery</div>
            </Link>
            <Link to={"/about"}>
            <div className="menu-item">About</div>
            </Link>
            {sessionStorage.user  ? 
           <Link>
            <div className="menu-item" onClick={logOut}>logout</div></Link>
            :
            <Link to={"/login"}>
            <div className="menu-item">Login</div>
            </Link>
}
          </div>
        </div>

        {/* Mobile Header */}
        <div className="mobile-header">
          <div
            className={`hamburger-container hamburger-icon ${
              hamburgerMenuActive ? "active" : ""
            }`}
            onClick={() => setHamburgerMenuActive(!hamburgerMenuActive)}
          >
            <p>☰</p>
          </div>

          {hamburgerMenuActive && (
            <div className="mobile-menu">
              <div className="dark-overlay" onClick={() => setHamburgerMenuActive(false)} ><img alt="" src="https://img.icons8.com/?size=30&id=71200&format=png"/> </div>
              <div className="close-button" onClick={() => setHamburgerMenuActive(false)}>
                {/* <p>×</p> */}
              </div>

              <Link to={"/"}>
              <a href="/" className="link-1" >
                <p>Home</p>
              </a>
              </Link>

              <Link to={"service"}>
              <a href="/" className="link-1" >
                <p>Services</p>
              </a>
              </Link>

              <Link to={"gallery"}>
              <a href="/" className="link-2">
                <p>Gallery</p>
              </a>
              </Link>
              <Link to={"/about"}>
              <a href="/" className="link-3">
                <p>About</p>
              </a>
              </Link>

              <Link to={"/login"}>
              <a href="/" className="link-3">
                <p>About</p>
              </a>
              </Link>
             
              <button href="/" className="button-1">Call us</button>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .header-container {
          background-color: #1e1e1e;
          padding: 12px 64px;
          display: flex;
          justify-content: space-between;
        }

        .desktop-header {
          display: flex;
          gap: 20px;
          color: #fff;
          white-space: nowrap;
          line-height: 150%;
          margin: auto 0;
          width: 100%;
          justify-content: space-between;
        }

        .logo {
          font-weight: 600;
          font-size: 20px;
        }

        .menu {
          display: flex;
          gap: 20px;
          font-size: 16px;
          font-weight: 500;
        }

        .menu-item {
          font-family: Inter, sans-serif;
        }

        .mobile-header {
          display: none; /* Hide by default on desktop */
        }

        .hamburger-icon {
          position: relative;
          height: auto;
          text-align: center;
          font-size: 30px;
          font-weight: 400;
          width: auto;
          cursor: pointer;
          margin: 20px 0 0 20px;
        }

        .hamburger-icon.active {
          color: blue; /* Change color when active */
        }

        .mobile-menu {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          z-index: 9999;
        }

       

        .close-button {
          text-align: center;
          font-size: 38px;
          font-weight: 300;
          cursor: pointer;
        }

        .link-1,
        .link-2,
        .link-3 {
          text-align: left;
          cursor: pointer;
          margin-bottom: 10px;
        }

        .button-1 {
          all: unset;
          background-color: #3898ec;
          color: white;
          border-radius: 4px;
          text-align: center;
          cursor: pointer;
          padding: 15px 25px;
        }

        @media (max-width: 991px) {
          .desktop-header {
            display: none; /* Hide on mobile */
          }

          .mobile-header {
            display: block; /* Show on mobile */
          }

          .mobile-menu {
            padding: 20px;
            background-color: #1e1e1e;
          }

          .close-button {
            margin: 5px 0 10px auto;
          }

          .menu-item {
            color: #fff;
          }

          .button-1 {
            background-color: #c0bb3b;
          }
        }
      `}</style>
    </>
  );
}

export default Header;
