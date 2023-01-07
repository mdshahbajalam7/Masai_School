import './App.css';
// import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Intro from './components/Intro/Intro';
import Section from './components/Section/Section';
import Prepleaf from './components/prepleaf/Prepleaf';
import Company1 from './components/Skill/Company1';

import Imageses from './components/Skill/Imageses';
import { Navbar } from './components/Navbar/Navbar';
import Mentor from './components/Mentor/Mentor.jsx';
import Student from './components/Student/Student';
import Youtube from './components/YoutubSection/Youtube';
import Course from './components/course/Course';
import TopSection from './components/Linkdin/TopSection';
// import TopSection from './components/Linkdin/TopSection';
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Intro/>
     <Imageses/>
     {/* <Marquee></Marquee> */}
     <Company1/>
     <Section/>
     <Course/>
     <Prepleaf/>
     <Youtube/>
     <Mentor/>
     <Student/>
     {/* <TopSection/> */}
     <TopSection/>
     <Footer/>
    </div>
  );
}

export default App;
