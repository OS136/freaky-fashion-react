import { useState } from "react";
import AdminSidebar from "./AdminSidebar";
import axios from "axios";
const NewProducts = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    productName: "",
    productDescription: "",
    productPicture: "https://placehold.co/250x400/png", // Default image URL
    productSKU: "",
    productPrice: "",
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

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload
    try {
      const response = await axios.post(
        "http://localhost:8000/api/products",
        formData
      );

      if (!response.ok) throw new Error("Failed to add product");

      alert("Product added successfully!");

      console.log("Product added successfully!");

      // Reset form after successful submission
      setFormData({
        productName: "",
        productDescription: "",
        productPicture: "https://placehold.co/250x400/png",
        productSKU: "",
        productPrice: "",
        categories: {
          tShirt: false,
          summer: false,
          pants: false,
          shoes: false,
        },
      });
    } catch (error) {
      console.error(error);
      alert("Error adding product");
    }
  };

  return (
    <div className="flex">
      <div className="flex-1 p-6">
        <AdminSidebar />

        <h1 className="text-2xl font-bold mb-4">Ny Produkt</h1>
        <form onSubmit={handleSubmit} className="space-y-4 max-w-lg">
          {/* Product Name */}
          <div>
            <label className="block">Namn</label>
            <input
              type="text"
              name="productName"
              value={formData.productName}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block">Beskrivning</label>
            <textarea
              name="productDescription"
              rows="4"
              value={formData.productDescription}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            ></textarea>
          </div>

          {/* Image URL */}
          <div>
            <label className="block">Bild URL</label>
            <input
              type="text"
              name="productPicture"
              value={formData.productPicture}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            />
          </div>

          {/* SKU */}
          <div>
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
          <div>
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
  );
};

export default NewProducts;
