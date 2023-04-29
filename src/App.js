import './App.css';
import Poster from './Components/Poster/Poster';
import ProductsList from './Components/ProductsList/ProductsList';
import Slider from './Components/Slider/Slider';
import home from './Components/Home/home';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Global/Navbar/navbar';
import Home from "./Components/Home/home"
import About from './Components/About/About';
import Contact from './Components/Contact/contact';
import ProductDetailsPage from "./Components/Product_Details_Page/ProductDetailsPage";

function App() {
  return (
    <>

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/productdetailspage" element={<ProductDetailsPage/>} />
          {/* <Route path="/productdetailspage" element={<ProductDetailsPage />} /> */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>

      </Router>
    </>
  );
}

export default App;
