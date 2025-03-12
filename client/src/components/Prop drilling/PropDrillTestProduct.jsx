import { useState } from "react";

export const PropDrillTestProduct = (prop) => {
  const { product, onChangePrice } = prop;
  // state
  const [price, setPrice] = useState(product.price);

  // change price state
  function changePriceState(changedPrice) {
    const newPrice = Number(changedPrice);
    console.log("newPrice from input: ", newPrice);
    setPrice(newPrice);
  }

  // set new price on product
  function setNewPriceOnProduct(id, newPrice) {
    console.log(
      "triggered set new price on product FROM PropDrillTestProduct: ",
      id,
      newPrice
    );

    onChangePrice(id, price);
  }

  return (
    <div className="border border-gray-300 p-4 rounded-md">
      <h2 className="text-lg font-bold">{product.name}</h2>
      <p className="text-gray-600">{product.description}</p>
      <p className="text-gray-600">{product.price} SEK</p>
      {/* input for new price */}
      <input
        type="number"
        onChange={(e) => changePriceState(e.target.value)}
        className="border border-gray-300 p-1 rounded-md mt-2"
      />
      {/* trigger function on parent/ top level to change price when licked on button */}
      <button
        onClick={() => setNewPriceOnProduct(product.id, price)}
        className="bg-blue-500 text-white px-2 py-1 rounded-md mt-2"
      >
        Set new price on product
      </button>
    </div>
  );
};

export default PropDrillTestProduct;
