import { Link } from "react-router-dom";

const MenuBar = () => {
  return (
    <div>
      <ul className="flex flex-col justify-around items-center p-4 m-auto w-3/4">
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
        <li>
          <Link to="/signin">Sign In</Link>
        </li>
      </ul>
    </div>
  );
};

export default MenuBar;
