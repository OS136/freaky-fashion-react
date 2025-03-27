import { Link } from "react-router-dom";
const AdminSidebar = () => {
  return (
    <div className="bg-gray-300 w-full p-4 max-w-[10rem] min-w-[7rem] ">
      <ul className="space-y-2">
        <li>
          <Link to="/" className="text-black text-lg cursor-pointer">
            Produkter
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
