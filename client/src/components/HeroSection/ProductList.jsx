// export default ProductList;
import { useState, useEffect } from "react";
import axios from "axios";
import Product from "../Product/Product";


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
    <Product products={products} />
    
  );
};

export default ProductList;
