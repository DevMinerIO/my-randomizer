import logo from './logo.svg';
import './App.css';
import { Router,Link,Route, Routes } from "react-router-dom"
import Navbar from './Navbar';
import PlayerInput from './PlayerInput';

function App() {
  return (
    <>
    <div className="container">
      <Navbar />
      <PlayerInput />
      {/* TODO future routes */}
      {/* <Routes> */}
      {/* <Route path="/" element={<Home />} />
        <Route path="/switchOne" element={<Switch />} />
        <Route path="/draft" element={<Draft />} /> */}
      {/* </Routes> */}
    </div>
  </>
  );
}

export default App;
