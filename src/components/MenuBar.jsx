import { Link } from "react-router-dom";

const MenuBar = () => {
  return (
    <div className="bg-primary font-bold text-gray-300 rounded-l-lg">
      <ul className="flex flex-col items-center justify-center h-full m-auto">
        <li className="p-4">
          <Link to="/">Home</Link>
        </li>
        <li className="p-4">
          <Link to="/signup">Sign Up</Link>
        </li>
        <li className="p-4">
          <Link to="/signin">Sign In</Link>
        </li>
      </ul>
    </div>
  );
};

export default MenuBar;
