import { useState, useEffect } from "react";
import axios from "axios";
import Product from "../Product/Product";
import ProductsWrapper from "../ProductsWrapper/ProductsWrapper";
import { mockProducts } from "../../utils/mockProducts";
import "./product-list.css";

const useMockData = import.meta.env.VITE_USE_MOCK_DATA === "true";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      if (useMockData) {
        setProducts(mockProducts);
        return;
      }

      try {
        const response = await axios.get("/api/products");
        setProducts(Array.isArray(response.data) ? response.data : []);
      } catch (err) {
        console.error("Error fetching products:", err);
        setProducts(mockProducts);
      }
    };

    fetchProducts();
  }, []);

  return (
    <ProductsWrapper>
      {products.length > 0 ? (
        products.map((product) => (
          <Product key={product.id} product={product} />
        ))
      ) : (
        <p className="text-gray-500">No products available.</p>
      )}
    </ProductsWrapper>
  );
};

export default ProductList;
