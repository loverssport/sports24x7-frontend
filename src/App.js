import logo from './logo.svg';
import './App.css';
import Navbar from './component/Nbar/navbar';
import {Routes,Route} from "react-router-dom";
import Home from './component/Home/home';
import Contact from './component/Contact/contact';
import News from './component/News/news';
import Ranking from './component/Ranking/ranking';
import Legends from './component/Legends/legends';
import Events from './component/Events/events'

function App() {
  return (
    <>
      <div>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/news" element={<News/>}></Route>
        <Route exact path="/ranking" element={<Ranking/>}></Route>
        <Route exact path="/events" element={<Events/>}></Route>
        <Route exact path="/legends" element={<Legends/>}></Route>
        <Route exact path="/contact" element={<Contact/>}></Route>
      </Routes>
      </div>
    </>
  );
}

export default App;
