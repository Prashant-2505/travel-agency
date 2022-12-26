import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import About from './routes/About';
import Home from './routes/Home';
import Service from './routes/Service';
import Contact from './routes/Contact';

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Navbar /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
