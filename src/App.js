import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./components/pages/Home"
import Login from "./components/pages/Login"
import Signup from './components/pages/Signup';
import MyCart from './components/pages/MyCart';
import CategoryPart from './components/CategoryPart';
import PartsPartPage from './components/pages/PartsPartPage';
import SearchPage from './components/pages/SearchPage';
import About from './components/pages/About'
import Services from './components/pages/Services';
import Shipping from './components/pages/Shipping';
import Privacy from './components/pages/Privacy';
import Contact from './components/pages/Contact';
import AdminAdd from './components/pages/AdminAdd';

function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/signup" element={<Signup/>} />
          <Route exact path="/admin" element={<AdminAdd/>} />
          <Route exact path="/mycart" element={<MyCart/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/services" element={<Services/>} />
          <Route exact path="/contact" element={<Contact/>} />
          <Route exact path="/shipping-information" element={<Shipping/>} />
          <Route exact path="/privacy" element={<Privacy/>} />
          <Route exact path="category/:title" element={<CategoryPart/>} />
          <Route exact path="search/:title" element={<SearchPage/>} />
          <Route exact path="category/part/:title" element={<PartsPartPage/>} />
        </Routes>
    </Router>
  );
}

export default App;