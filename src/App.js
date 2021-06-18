
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Grids from "./Components/Grids";
import View from "./Components/View";
function App() {
  return (
    <Router>
      {/* <View/> */}
       <Switch>
        <Route exact path="/">
          <Grids />
        </Route>
          <Route exact path="/view/:_id">
          <View />
        </Route>
      </Switch> 
    </Router>
  );
}

export default App;
