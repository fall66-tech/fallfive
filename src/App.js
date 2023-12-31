
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div id='allbg'>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Contact />
      
    </div>
  );
}

export default App;
