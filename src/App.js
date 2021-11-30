import './App.css';
import Particles from 'react-particles-js';
import Header from './components/Header';
import Navbar from './components/Navbar';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  return (
    <>
    <Particles
        style={{ position: "absolute" }}
        params={{
          particles: {
            color: {
              value: "#ff3"
            },
            line_linked: {
              color: {
                value: "#000000"
              }
            },
            number: {
              value: 70
            },
            size: {
              value: 4
            }
          }
        }}
      />
    <Navbar/>
    <Header/>
    <About/>
    <Services/>
    <Contact/>
    </>
  );
}

export default App;
