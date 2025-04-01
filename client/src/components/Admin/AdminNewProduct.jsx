import { useState } from "react";
import AdminSidebar from "./AdminSidebar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const NewProducts = () => {
  const navigate = useNavigate();
  // State to store form data
  const [formData, setFormData] = useState({
    productName: "",
    productDescription: "",
    productPicture: "https://placehold.co/250x400/png",
    productSKU: "",
    productPrice: "",
    productUrl: "",
    productBrand: "",
    categories: {
      tShirt: false,
      summer: false,
      pants: false,
      shoes: false,
    },
  });

  // Function to update state when user types or clicks checkboxes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        categories: { ...prev.categories, [name]: checked },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Ensure productPrice is not empty or undefined before submission
      if (!formData.productPrice) {
        alert("Please provide a product price.");
        return;
      }
      formData.productUrl = formData.productName
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^\w-]+/g, "");

      const response = await axios.post(
        "http://localhost:8000/api/products",
        formData
      );

      if (response.status !== 201) throw new Error("Failed to add product");
      alert("Product added successfully!");

      console.log("Product added successfully!");

      // Reset form after successful submission
      setFormData({
        productName: "",
        productDescription: "",
        productPicture: "https://placehold.co/250x400/png",
        productSKU: "",
        productPrice: "",
        productUrl: "",
        productBrand: "",
        categories: {
          tShirt: false,
          summer: false,
          pants: false,
          shoes: false,
        },
      });

      // Redirect to the admin product list page after successful submission
      navigate("/admin/products"); // Correct path as per your routing in App.js
    } catch (error) {
      console.error(error);
      alert("Error adding product");
    }
  };

  return (
    <div className="flex flex-row  ">
      <AdminSidebar />
      <div>
        <div className="flex-1 bg-white p-6 rounded-lg shadow-md ml-4">
          <h1 className="text-2xl font-bold mb-4">Ny Produkt</h1>
          <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl">
            {/* Product Name */}
            <div className="w-3/4">
              <label className="block">Namn</label>
              <input
                type="text"
                name="productName"
                value={formData.productName}
                onChange={handleChange}
                className="w-full border p-2 rounded "
                required
              />
            </div>

            {/* Description */}
            <div className="">
              <label className="block">Beskrivning</label>
              <textarea
                name="productDescription"
                rows="6"
                value={formData.productDescription}
                onChange={handleChange}
                className="w-full border p-2 rounded sm:min-w-[400px] md:min-w-[500px] lg:min-w-[600px]"
              ></textarea>
            </div>

            {/* Image URL */}
            <div>
              <label className="block">Bild</label>
              <input
                type="text"
                name="productUrl"
                value={formData.productUrl}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                required
              />
            </div>

            {/* Brand */}
            <div>
              <label className="block">Märke</label>
              <input
                type="text"
                name="productBrand"
                value={formData.productBrand}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                required
              />
            </div>

            {/* SKU */}
            <div className="w-1/2">
              <label className="block">SKU</label>
              <input
                type="text"
                name="productSKU"
                value={formData.productSKU}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                required
              />
            </div>

            {/* Price */}
            <div className="w-1/2">
              <label className="block">Pris</label>
              <input
                type="number"
                name="productPrice"
                value={formData.productPrice}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                required
              />
            </div>

            {/* Categories */}
            <div>
              <h4 className="font-semibold">Kategorier</h4>
              {Object.keys(formData.categories).map((category) => (
                <label key={category} className="block">
                  <input
                    type="checkbox"
                    name={category}
                    checked={formData.categories[category]}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </label>
              ))}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Lägg Till
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
