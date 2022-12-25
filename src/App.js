import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
     <Navbar/>
    </div>
  );
}

export default App;
