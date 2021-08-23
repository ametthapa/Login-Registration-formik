import "./App.css";
import MenuBar from "./components/MenuBar";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
  useLocation,
} from "react-router-dom";
import { Fragment, useEffect, useState } from "react";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const localStorageValue = localStorage.getItem("loggedIn");
    if (localStorageValue) {
      history.push("/");
      setLoggedIn(true);
    } else {
      if (location.pathname !== "/signup ") {
        history.push("/signin");
      }
      setLoggedIn(false);
    }
  }, []);
  return (
    <div className=" px-10 py-5  lg:w-3/4 m-auto">
      <Router>
        {/* <MenuBar className="col-span-1" /> */}
        <div className=" rounded-r-lg bg-gray-100 p-5 h-screen">
          <Switch>
            {loggedIn ? (
              <Route path="/" exact component={Home} />
            ) : (
              <Fragment>
                <Route path="/signin" exact component={Login} />
                <Route path="/signup" exact component={Register} />
              </Fragment>
            )}
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
