
import "jquery/dist/jquery.min.js";
import 'bootstrap/dist/css/bootstrap.min.css';

import "bootstrap/dist/js/bootstrap.min.js";

import {
  BrowserRouter ,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import Contacts from "./components/Contacts/Contacts";
import Club from "./components/Club/Club";
import Clubs from './components/Clubs/Clubs'
import Details from './components/Clubs/details'
import Events from "./components/Events/Evènements";
import Footer from "./components/Footer/footer";
import Home from "./components/Home/Home";

function App() {
  return (
    <BrowserRouter >
    
    <Navbar/>
    {/* Route components would be visible only at their route */}
    <Routes>
    <Route path="/" element={<Home/>} exact />
    <Route path="/contacts" element={<Contacts/>} exact />
    <Route path="/clubs" element={<Clubs/>} exact />
    <Route path="/club" element={<Club/>} exact />
    <Route path="/details" element={<Details/>} exact />
    <Route path="/events" element={<Events/>} exact />
    
    </Routes>
    <Footer/>
 
    </BrowserRouter>
  );
}

export default App;