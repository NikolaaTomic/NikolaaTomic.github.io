import './App.css';
import {Route, BrowserRouter as Router} from "react-router-dom";
import Main from "./components/main.js";
import Raspored from "./components/raspored.js";
import Forma from "./components/forma.js";
import Flota from "./components/flota.js";
import Info from "./components/info.js";

function App() {
  return (
    <div className="App">
     

      <Router>
        <Route exact path="/" component={Main}/>
        <Route path="/raspored" component={Raspored}/>
        <Route path="/forma" component={Forma}/>
        <Route path="/flota" component={Flota}/>
        <Route path="/informacije" component={Info}/>
      </Router>
    </div>
  );
}

export default App;
