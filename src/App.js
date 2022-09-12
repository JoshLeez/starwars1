import React from 'react'; 
import Header from './Components/Header';
import Home from './Components/views/Home'; 
import About from './Components/views/About';
import Footer from './Components/Footer';
import Product from './Components/views/Product';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"

function App() {
  
  return (
 <div>
  
  <Router>
 <Header />
  <Routes>
    <Route  exact path="/" element={<Home />} />
    <Route  path="/about" element={<About />} />
    <Route path="/character/:id" element={<Product />}></Route>
  </Routes>
  <Footer />
  </Router>
    
 </div>
  );
}

export default App;
