import React from "react";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Home from './components/Home'
import Resume from './components/Resume'

import Portfolio from "./components/Portfolio";
import Contact from './components/Contact'
import './css/fonts/jost/jost.css';    
import "./css/normalize.css"
import "./css/bootstrap.css"
import "./js/nprogress/nprogress.css"
import "./js/jquery.magnific-popup/magnific-popup.css"
import "./css/fonts/fontello/css/fontello.css"
import "./css/fonts/fontello/css/fontello.css"
import "./css/main.css"
import "./css/768.css"
import "./css/demo2.css"
import Navbar from './components/Navbar';
import SocialFooter from "./components/SocialFooter";

function App() {
  return (
    <>
      <Router>   
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <SocialFooter/>   
     </Router>
    </>
  );
}

export default App;
