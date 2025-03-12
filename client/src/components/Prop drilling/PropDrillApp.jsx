import { useEffect, useState } from "react";
import PropDrillTestProductList from "./PropDrillTestProductList";

// 'our fake database products'
const products = [
  {
    id: 1,
    name: "Product 1",
    price: 100,
    description: "Description for Product 1",
  },
  {
    id: 2,
    name: "Product 2",
    price: 200,
    description: "Description for Product 2",
  },
  {
    id: 3,
    name: "Product 3",
    price: 300,
    description: "Description for Product 3",
  },
];
// parent app

const PropDrillApp = () => {
  // state
  const [products, setAllProducts] = useState([]);

  // reat to stuff on  app init
  useEffect(() => {
    const response = getAllProducts();
    setAllProducts(response);
  }, []);

  // react to changes to 'products'
  useEffect(() => {
    console.log("products changed FROM PropDrillApp");
    console.table(products);
  }, [products]);

  function changePriceOnProductWithId(id, newPrice) {
    if (!id || !newPrice) {
      console.log("id or newPrice is missing");
      return;
    }
    console.log("triggered change price on product FROM PropDrillApp");

    // find the product with the given id
    const product = products.find((product) => product.id === id);

    // if the product is found, update its price
    if (product) {
      product.price = newPrice;
      setAllProducts([...products]);
    }
  }

  return (
    <div>
      {products && products.length > 0 && (
        <PropDrillTestProductList
          products={products}
          onChangePrice={changePriceOnProductWithId}
        />
      )}
    </div>
  );
};

function getAllProducts() {
  try {
    const response = products;
    return response;
  } catch (err) {
    console.error("Error fetching products:", err);
  }
}

export default PropDrillApp;
