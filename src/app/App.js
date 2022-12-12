import NavBar from "./components/navBar";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./components/dashboard";
import Login from "./components/login";
import Posts from "./components/posts";
import Home from "./components/home";
import Stats from "./components/stats";

function App() {
  return (
    <div>
      <NavBar />
      <h1>App</h1>
      <Switch>
        <Route path="/dashboard/stats" component={Stats} />
        <Route
          path="/dashboard"
          render={(props) => <Dashboard isAdmin={false} {...props} />}
        />
        <Route path="/login" component={Login} />
        <Route path="/posts" component={Posts} />
        <Route path="/" exact component={Home} />
      </Switch>
    </div>
  );
}

export default App;
