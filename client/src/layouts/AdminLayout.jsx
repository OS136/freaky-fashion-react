import PropTypes from "prop-types";
import "./admin.css";
const AdminLayout = ({ children }) => {
  return <div>{children}</div>;
};

AdminLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AdminLayout;
