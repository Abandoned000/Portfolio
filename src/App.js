import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Welcome from './components/Welcome';
import About from './components/About'
import Achievements from './components/Achievements';
import Prefereances from './components/Prefereances';
import Creative  from './components/Creative';
import News from './components/News';
import Contact from './components/Contact';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {
  return (
    <div>
      <Header/>
      <Welcome/>
      <About/>
      <Achievements/>
      <Prefereances/>
      <Creative/>
      <News/>
      {/* <Contact/> */}
    </div>
  );
}

export default App;
