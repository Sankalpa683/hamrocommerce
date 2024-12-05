import { useState } from 'react';

import Navbar from './components/navbar'
import Hero from './components/hero';
import Products from './components/products';
import Footer from './components/footer';
import './App.css'
import "./index.css";

function App() {


  return (
    <>
      <Navbar />
      <main className='w-full max-w-7xl	 mx-auto'>
        <Hero />
        <hr />
        <Products />
        <br />
        <hr />
        <Footer />
        <br />

        <br />
      </main>
    </>
  )
}

export default App
