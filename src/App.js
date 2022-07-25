

import 'bootstrap/dist/css/bootstrap.min.css';
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import Footer from "./components/footer";
import Home from "./components/Home";
import {
  BrowserRouter ,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Contacts from "./components/Contacts";
import Clubs from "./components/Clubs";
import Navbar from './components/navbar';
import Club from './components/Club';
import Details from './components/details';
import Events from './components/Evènements';
import Login from './components/Login';
import Signup from './components/signup';
import Sidenav from './components/Sidenav';
import ClubsPage from './components/ClubsPage';
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
    <Route path="/admin" element={<Sidenav/>} exact />
    </Routes>
    <Footer/>
 
    </BrowserRouter>
  );
}

export default App;