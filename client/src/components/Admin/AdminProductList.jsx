import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AdminPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch products from the backend
  const loadProducts = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await axios.get("/api/products"); // Adjust API URL if needed
      setProducts(response.data);
    } catch (err) {
      console.error("Error fetching products:", err);
      setError("Kunde inte ladda produkter.");
    } finally {
      setLoading(false);
    }
  };

  // Load products on mount
  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-gray-700 text-white p-4 flex items-center">
        <h1 className="text-2xl font-bold">Administration</h1>
      </header>

      <main className="flex flex-col md:flex-row p-4">
        {/* Sidebar */}
        <aside className="bg-gray-300 w-full md:w-1/4 p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-2">Meny</h2>
          <ul className="space-y-2">
            <li>
              <Link to="#" className="text-black text-lg hover:underline">
                Produkter
              </Link>
            </li>
          </ul>
        </aside>

        {/* Main Section */}
        <div className="flex-1 bg-white p-6 rounded-lg shadow-md ml-4">
          <section className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Produkter</h2>

            {/* Buttons */}
            <div className="flex space-x-2">
              <button
                onClick={loadProducts}
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-transform transform hover:scale-105"
              >
                Ladda produkter
              </button>
              <Link
                to="/admin/products/new"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-transform transform hover:scale-105"
              >
                Ny produkt
              </Link>
            </div>
          </section>

          {/* Product Table */}
          <table className="w-full border border-gray-300 rounded-lg">
            <thead>
              <tr className="bg-gray-400 text-white">
                <th className="border p-2">Namn</th>
                <th className="border p-2">SKU</th>
                <th className="border p-2">Pris</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="3" className="text-center p-4">
                    Laddar...
                  </td>
                </tr>
              ) : error ? (
                <tr>
                  <td colSpan="3" className="text-center text-red-500 p-4">
                    {error}
                  </td>
                </tr>
              ) : products.length > 0 ? (
                products.map((product) => (
                  <tr
                    key={product.id}
                    className="border-t hover:bg-gray-200 transition"
                  >
                    <td className="border p-2">{product.name}</td>
                    <td className="border p-2">{product.SKU}</td>
                    <td className="border p-2">{product.price} SEK</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="text-center p-4">
                    Inga produkter tillgängliga
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default AdminPage;
