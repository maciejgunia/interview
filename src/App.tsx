import "./App.scss";
import { Nav } from "./components/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Counter } from "./components/Counter";
import { Fetch } from "./components/Fetch";

function App() {
    return (
        <div className="App">
            <Router>
                <Nav />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/counter">
                        <Counter />
                    </Route>
                    <Route path="/fetch">
                        <Fetch />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
