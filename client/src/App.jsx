import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import MainArticle from "./components/HeroSection/HeroSection";
import ProductList from "./components/HeroSection/ProductList";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import DeliveryBadges from "./components/Footer/DeliveryBadge";
import "./index.css";
import Footer from "./components/Footer/Footer";
import AdminProductList from "./components/Admin/AdminProductList";
import AdminLayout from "./layouts/AdminLayout";
import AdminHeader from "./components/Admin/AdminHeader";
import NewProduct from "./components/Admin/AdminNewProduct";
import SearchResults from "./components/Search/SearchResults";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header mainLogo="/images/freaky_fashion_logo.png" />
              <MainArticle />
              <ProductList />
              <DeliveryBadges />
              <Footer />
            </>
          }
        />
        <Route path="/products" element={<ProductList />} />
        <Route
          path="/products/:url"
          element={
            <>
              <Header mainLogo="/images/freaky_fashion_logo.png" />
              <ProductDetails />
              <DeliveryBadges />
              <Footer />
            </>
          }
        />
        <Route path="/search" element={<SearchResults />} />
        <Route
          path="/admin/products"
          element={
            <AdminLayout>
              <AdminHeader />
              <AdminProductList />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/products/new"
          element={
            <AdminLayout>
              <AdminHeader />
              <NewProduct />
            </AdminLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
