import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import axios from "axios";

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
      <h2 className="text-2xl font-semibold mb-4">
        {products.length} produkter hittades för "{query}"
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.length > 0 ? (
          products.map((product) => (
            <Link
              key={product.id}
              to={`/products/${product.url}`}
              className="border p-4 rounded-lg shadow hover:shadow-md"
            >
              <img
                src={product.picture}
                alt={product.name}
                className="w-full h-40 object-cover mb-2"
              />
              <h3 className="text-lg font-medium">{product.name}</h3>
              <p className="text-gray-600">{product.price} kr</p>
            </Link>
          ))
        ) : (
          <p>Inga produkter hittades.</p>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
