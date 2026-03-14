import './App.css';
import Navbar from './Navbar';
import Header from './Header';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';


function App() {
  return (
    <div className="App">
      <Navbar/><hr></hr>
      <Header/><hr></hr>
      <About/><hr></hr>
      <Skills/><hr></hr>
      <Projects/><hr></hr>
      <Contact/>
      
     
    </div>
  );
}

export default App;
