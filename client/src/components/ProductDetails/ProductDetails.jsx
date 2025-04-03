import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import SimilarProducts from "../SimilarProducts/SimilarProducts";

const ProductDetails = () => {
  const { url } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`/api/products/${url}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
        setProduct(null);
      });
  }, [url]);

  if (!product) {
    return <p className="text-center text-gray-500">Loading product...</p>;
  }

  return (
    <>
      <div className="flex p-4 flex-col flex-wrapp-6 max-w-3xl sm:flex-row">
        <div>
          <img
            src={product.picture || "https://placehold.co/500x700/png"}
            alt={product.name}
            className="h-[700px] w-full object-cover rounded-md "
          />{" "}
        </div>
        <div className="flex flex-col justify-top items-start sm:p-4">
          <div className="flex flex-col justify-center items-start sm:p-4">
            <h1 className="text-2xl font-bold mt-4">{product.name}</h1>

            <p className="text-sm text-gray-500">{product.brand}</p>
            <p className="text-gray-600 text-lg">{product.description}</p>
            <p className="mt-4">{product.price} SEK</p>
          </div>
          <div className="flex flex-col justify-center items-start sm:p-4">
            <button
              type="button"
              className="bg-gray-900 hover:bg-blue-900 text-white sm:mt-4 px-4 py-2 rounded-md h-[48px] w-[160px]"
            >
              Lägg i varukorg
            </button>
          </div>
        </div>
      </div>
      <SimilarProducts url={url} brand={product.brand} />
    </>
  );
};

export default ProductDetails;
