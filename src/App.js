import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Layout from './Layout/Layout';
import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
// import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import ProductList from './Components/productList/ProductList';

function App() {
  return (
   <React.Fragment>
     <Layout/>
     <Navbar></Navbar>
     <Header></Header>
     <About></About>
     <Skills></Skills>
     <ProductList></ProductList>
     <Contact></Contact>
     <Footer></Footer>
     </React.Fragment>
  );
}

export default App;
