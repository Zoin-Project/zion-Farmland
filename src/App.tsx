import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FishPage from "./pages/Fish";
import PigPage from "./pages/Pig";
import ProductsPage from "./pages/Products";
import CowPage from "./pages/Cows";
import GoatPage from "./pages/Goat";
import Service from "./pages/Service";

const App = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product" element={<ProductsPage />} />
          <Route path="/service" element={<Service />} />
          <Route path="/fish" element={<FishPage />} />
           <Route path="/pig" element={<PigPage />} />
          <Route path="/goat" element={<GoatPage />} /> 
          <Route path="/cow" element={<CowPage />} /> 
        </Routes>
      </MainLayout>
    </Router>
  );
};
export default App;
