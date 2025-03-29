import { useEffect, useState } from "react";
import axios from "axios";

const SimilarProducts = (prop) => {
  const [products, setProducts] = useState([]);
  const { url, brand } = prop;

  useEffect(() => {
    if (!url) return; // If there's no URL, do nothing (early return)

    console.log("Fetching similar products for URL:", url);
    console.log("Fetching similar products for brand:", brand);

    axios
      .get(`/api/products/similiar?exclude=${url}&includeBrand=${brand}`) // Fetch similar products
      .then((response) => {
        console.log("Similar products fetched:", response.data); // Log the response
        setProducts(response.data); // Set the products in state
      })
      .catch((error) => {
        console.error("Error fetching similar products:", error); // Log any errors
      });
  }, [url, brand]); // Run the effect when the 'url' changes

  return (
    <div className="p-4">
      <h2 className="text-2xl text-center font-bold mb-4">Similar Products</h2>
      {products.length === 0 ? (
        <p className="text-center text-gray-500">No similar products...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {products.slice(0, 3).map((product) => (
            <div
              key={product.id}
              className="rounded-lg overflow-hidden shadow-lg"
            >
              <a href={`/products/${product.url}`}>
                <img
                  src={product.picture}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-gray-600">{product.brand} </p>
                  <p className="text-gray-600">{product.price} SEK</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SimilarProducts;
