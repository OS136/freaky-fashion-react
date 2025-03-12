import PropDrillTestProduct from "./PropDrillTestProduct";

const PropDrillTestProductList = (prop) => {
  const { products, onChangePrice } = prop;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {prop.products.map((product) => (
        <PropDrillTestProduct
          key={product.id}
          product={product}
          products={products}
          onChangePrice={onChangePrice}
        />
      ))}
    </div>
  );
};

export default PropDrillTestProductList;
