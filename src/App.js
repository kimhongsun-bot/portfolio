import './App.css';
import Particles from 'react-particles-js';
import Header from './components/Header';
import Navbar from './components/Navbar';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <main id="home">
      <Particles
        params={{
          particles: {
            color: {
              value: "#000000"
            },
            line_linked: {
              color: {
                value: "#000000"
              }
            },
            number: {
              value: 50
            },
            size: {
              value: 3
            }
          }
        }}
        />
      <Navbar sticky="top" />
      <section className="home">
        <Header/>
      </section>
      <section className="about" id="about">
        <About/>
      </section>
      <section className="services" id="services">
        <Services/>
      </section>
      <section className="contact" id="contact">
        <Contact/>
      </section>
    </main>
  );
}

export default App;
