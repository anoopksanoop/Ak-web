import React from 'react';
import './App.css';
import { useState } from 'react';
import Header from './Client/Header/Header';
import Homepage from './Client/HomePage/Home';
import Service from './Client/ServicePage/Service';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { footContext } from './Context';
import Footer from './Client/Header/Footer';
import Gallery from './Client/GalleryPage/Gallery';
import About from './Client/AboutPage/About';
import Login from './Client/UserLogin/Login';
import SignUpForm from './Client/UserLogin/SignUp';
import PageNotFound from './404/PageNotFound';
import AOS from 'aos';
function App() {
  AOS.init();
  const [record, setRecord] = useState('')
  const [login, setLogin] = useState(false)
const user={
  record,
  setRecord,
  login,
  setLogin
}


  return (
    <div className="App">
     
      <BrowserRouter>
      <Header />
        <footContext.Provider value={user}>
          <Routes>
          <Route path='*' element={<><PageNotFound/></>}/>
            <Route path="/" element={<Homepage />} />
            <Route path='/login' element={<Login/>}/>
            <Route path="/signup" element={<SignUpForm/>}/>
            <Route path="/service" element={<Service />} />
            <Route path="/gallery" element={<Gallery/>}/>
            <Route path='/about' element={<About/>}/>
          </Routes>
        </footContext.Provider>
        {/* {window.location.pathname === "/login" ? "" : <Footer/> } */}
        {window.location.pathname !== "/login" && window.location.pathname !== "/signup" ? <Footer /> : null}

      
      {/* <Footer />  */}
      </BrowserRouter>
    </div>
  );
}

export default App;
