import React, { Component } from 'react';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Section />
        <Footer />
      </div>
    );
  }
}

export default App;
