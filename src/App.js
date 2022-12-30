import { Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Router, Route } from "react-router-dom";
import Main from "./components/main";
import Routes from "./routes";
import "./styles.css";
import { useEffect } from "react";

function App() {
  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products")
  //     .then((res) => res.json())
  //     .then((json) => console.log(json));
  // });
  const browserHistory = createBrowserHistory();
  return (
    <Router history={browserHistory}>
      <Switch>
        <Main>
          <Routes />
        </Main>
      </Switch>
    </Router>
  );
}
export default App;
