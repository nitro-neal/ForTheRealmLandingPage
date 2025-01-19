import React from 'react';
import './App.css';
import Header from './components/Header';
import Button from './components/Button';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <div className="intro-text">
          <h1>ENTER THE WORLD OF <span>FOR THE REALM</span></h1>
          <div className="buttons">
            <Button type="primary" link="https://store.yourgame.com">
              Buy Now
            </Button>
            <Button type="secondary" link="https://youtube.com/yourgametrailer">
              Watch Trailer
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
