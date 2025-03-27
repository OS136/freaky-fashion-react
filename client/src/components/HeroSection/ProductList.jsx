import { useState, useEffect } from "react";
import axios from "axios";
import Product from "../Product/Product";
import ProductsWrapper from "../ProductsWrapper/ProductsWrapper";
import "./product-list.css";
const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/api/products");
        setProducts(response.data);
      } catch (err) {
        console.error("Error fetching products:", err);
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
