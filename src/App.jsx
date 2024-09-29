import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CartPage from "./pages/CartPage"; 
import Home from "./pages/Home";
import Checkout from "./pages/checkout";
import Clothes from "./pages/clothes/clothes";
import Headphones from "./pages/headphones/headphones";
import Watches from "./pages/watches/watches";

function App() {
  return (
    <Router>
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/CartPage" element={<CartPage  />} /> 
          <Route path="/checkout" element={<Checkout />} /> 
          <Route path="/clothes" element={<Clothes />} /> 
          <Route path="/headphones" element={<Headphones />} /> 
          <Route path="/watches" element={<Watches />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
