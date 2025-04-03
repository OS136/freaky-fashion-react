import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

const Product = (prop) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-full md:w-1/3 lg:w-1/5">
      <div className="flex flex-col items-center relative">
        {/* Product Image */}

        <Link
          to={`/products/${prop.product.url}`}
          className="relative w-full h-full"
        >
          <img
            src={prop.product.picture || "/default-product.jpg"}
            alt={prop.product.name || "Product Image"}
            className="w-full h-full object-cover rounded-md"
          />
          {/* Like Button */}
          <span className="like-button z-10">
            <FontAwesomeIcon icon={faHeart} className="text-black text-3xl" />
          </span>
        </Link>

        {/* Product Info */}
        <div className="mt-4 flex flex-col w-full">
          <div className="flex justify-between w-full">
            <Link
              to={`/products/${prop.product.url}`}
              className="text-lg font-semibold text-left"
            >
              {prop.product.name}
            </Link>
            <p className="text-gray-600 text-right">{prop.product.price} SEK</p>
          </div>
          <p className="text-sm text-gray-500 text-left">
            {prop.product.brand}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
