import './App.css';
import Footer from './components/Footer';
import Blog from './components/Blog';
import Home from './components/Home';
import About from './components/About';
import Navbar from "./components/navbar"
import Contact from './components/Contact';
import {Switch, Route ,Routes, BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<Home />}/>
      <Route exact path="/About" element={<About />}/>
      <Route exact path="/Blog" element={<Blog />}/>
      <Route exact path="/Contant" element={<Contact />}/>
    </Routes>
    </BrowserRouter> 
 
    </div>
  );
}


export default App;