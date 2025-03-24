import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Product from "../Product/Product";

const SearchResults = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/search?q=${query}`)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, [query]);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl  font-semibold mb-4">
        Hittade {products.length} produkter
      </h2>
      <Product products={products} />
    </div>
  );
};

export default SearchResults;
