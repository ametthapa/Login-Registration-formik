import "./App.css";
import MenuBar from "./components/MenuBar";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="grid grid-cols-3 px-10 py-5 h-screen w-2/4 m-auto">
      <Router>
        <MenuBar className="col-span-1" />
        <div className="col-span-2 rounded-r-lg bg-gray-100 p-5">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/signin" exact component={Login} />
            <Route path="/signup" exact component={Register} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
