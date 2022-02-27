import { Route } from "react-router-dom";
import "./App.css";
import Menu from "./components/Menu";
import Navi from "./components/Navi";
import Welcome from "./components/Welcome";
import "bootstrap/dist/css/bootstrap.min.css";
  

function App() {
  return (
    <div className="App">
      <Navi />
      <Route exact path="/" component={Welcome} />
    </div>
  );
}

export default App;
