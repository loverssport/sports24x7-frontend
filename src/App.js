import logo from './logo.svg';
import './App.css';
import Imagess from './image';
import Navbar from './component/Nbar/navbar';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Home from './component/Home/home';
import Contact from './component/Contact/contact';
import News from './component/News/news';
import Ranking from './component/Ranking/ranking';
import Legends from './component/Legends/legends';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Home/>
      <News/>
      <Ranking/>
      <Legends/>
      <Contact/>
    </Router>
      <Imagess></Imagess>
    </>
  );
}

export default App;
