import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import SimilarProducts from "../SimilarProducts/SimilarProducts";

const ProductDetails = () => {
  const { url } = useParams(); // Get product ID from URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProductByUrl(url, setProduct);
  }, [url]);

  if (!product) {
    return <p className="text-center text-gray-500">Loading product...</p>;
  }

  return (
    <>
      <div className="p-6 max-w-3xl mx-auto">
        <img
          src={product.picture || "/default-product.jpg"}
          alt={product.name}
          className="w-full rounded-md"
        />
        <h1 className="text-2xl font-bold mt-4">{product.name}</h1>
        <p className="text-gray-600 text-lg">{product.price} SEK</p>
        <p className="text-sm text-gray-500">{product.brand}</p>
        <p className="mt-4">{product.description}</p>
        <button
          type="button"
          className="mt-4 bg-gray-900 hover:bg-blue-900 text-white px-4 py-2 rounded-md"
        >
          Lägg i varukorg
        </button>
      </div>
      <SimilarProducts url={url} brand={product.brand} />
    </>
  );
};

const fetchProductByUrl = async (url, setProduct) => {
  try {
    const response = await axios.get(`/api/products/${url}`);
    setProduct(response.data);
  } catch (error) {
    console.error("Error fetching product details:", error);
    return null;
  }
};
export default ProductDetails;
