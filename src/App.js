import './App.css';
import Particles from 'react-particles-js';
import Header from './components/Header';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Particles
        style={{ position: "absolute" }}
        height="95%"
        width="95%"
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
    <Navbar/>
    <Header/>
    </>
  );
}

export default App;
