import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import './App.css';

const App = () => (
  
        <Router>
        <Navbar />
       <Routes>
            <Route path="/" exact element={<Home/>}  />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
        
       </Routes>
            
        <Footer/>
    </Router>

    
);

export default App;
