import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Feed from './components/Feed';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Container">
          <Navbar />

          <Feed />

          <Footer />
        
        </div>
      </div>
    );
  }
}

export default App;