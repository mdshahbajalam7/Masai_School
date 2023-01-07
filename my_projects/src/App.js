import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Intro from './components/Intro/Intro';
import Section from './components/Section/Section';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Intro/>
     <Section/>
     <Footer/>
    </div>
  );
}

export default App;
