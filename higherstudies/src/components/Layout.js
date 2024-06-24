import React from 'react';
import './Layout.css'; // Adjust the import path as needed
import Nav from './Nav'; // Adjust the import path as needed
import Home from './Body'; // Adjust the import path as needed
import Footer from './Footer'; 

export default function Layout() {
  return (
    <>
      <Nav />
      <div className='body expand-on-mobile'>
        <Home />
      </div>
      <Footer />
    </>
  );
}
