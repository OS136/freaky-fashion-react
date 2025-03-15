import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import MainArticle from "./components/HeroSection/HeroSection";
import ProductList from "./components/HeroSection/ProductList";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import DeliveryBadges from "./components/Footer/DeliveryBadge";
import "./index.css";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <Header mainLogo="../public/images/freaky_fashion_logo.png" />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <MainArticle />
              <ProductList />
              <DeliveryBadges />
            </>
          }
        />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:url" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
