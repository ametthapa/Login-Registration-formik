import { Link, NavLink } from "react-router-dom";

const MenuBar = () => {
  return (
    <div className="bg-primary font-bold text-gray-300 rounded-l-lg">
      <ul className="flex flex-col items-center justify-center h-full m-auto">
        <li className="p-4">
          <NavLink exact activeClassName="text-white" to="/">
            Home
          </NavLink>
        </li>
        <li className="p-4">
          <NavLink exact activeClassName="text-white" to="/signup">
            Sign Up
          </NavLink>
        </li>
        <li className="p-4">
          <NavLink exact activeClassName="text-white" to="/signin">
            Sign In
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default MenuBar;
