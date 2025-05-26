import React from 'react';
import Header from './components/Header';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <Gallery />
      </main>
      <Footer />
    </div>
  );
};

export default App;