import PropTypes from "prop-types";

const ProductsWrapper = ({ children }) => {
  return (
    <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-row lg:flex-wrap gap-6 justify-center p-4">
      {children}
    </div>
  );
};

ProductsWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProductsWrapper;
