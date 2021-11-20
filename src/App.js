import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Layout from './Layout/Layout';
import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import About from './Components/About/About';

function App() {
  return (
   <React.Fragment>
     <Layout/>
     <Navbar></Navbar>
     <Header></Header>
     <About></About>
     </React.Fragment>
  );
}

export default App;
