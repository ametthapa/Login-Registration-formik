import "./App.css";
import MenuBar from "./components/MenuBar";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <MenuBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signin" exact component={Login} />
        <Route path="/signup" exact component={Register} />
      </Switch>
    </Router>
  );
}

export default App;
