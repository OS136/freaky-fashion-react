// export default ProductList;
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import axios from "axios";
import { Link } from "react-router-dom";

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
    <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-row lg:flex-wrap gap-6 justify-center p-4">
      {products.length > 0 ? (
        products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-lg p-4 w-full md:w-1/3 lg:w-1/5"
          >
            <div className="flex flex-col items-center relative">
              {/* Product Image */}

              <Link to={`/products/${product.url}`} className="w-full h-full ">
                <img
                  src={product.picture || "/default-product.jpg"}
                  alt={product.name || "Product Image"}
                  className="w-full h-full object-cover rounded-md"
                />
              </Link>

              {/* Like Button */}
              <button className="absolute bottom-18  right-2 p-2">
                <FontAwesomeIcon
                  icon={faHeart}
                  className="text-black text-3xl"
                />
              </button>

              {/* Product Info */}
              <div className="mt-4 flex flex-col w-full">
                <div className="flex justify-between w-full">
                  <Link
                    to={`/products/${product.url}`}
                    className="text-lg font-semibold text-left"
                  >
                    {product.name}
                  </Link>
                  <p className="text-gray-600 text-right">
                    {product.price} SEK
                  </p>
                </div>
                <p className="text-sm text-gray-500 text-left">
                  {product.brand}
                </p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No products available.</p>
      )}
    </div>
  );
};

export default ProductList;
