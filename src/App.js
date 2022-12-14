import "./App.css";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Link,
} from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import PageNotFound from "./Pages/PageNotFound";

function App() {
  return (
    <>
      <Router>
        <div
          style={{
            width: 100 + "vw",
            height: 80,
            backgroundColor: "lightblue",
          }}
        >
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects/project1">Projects</Link>
        </div>
        <Switch>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/projects/:name" exact element={<Projects />} />
          <Route path="*" exact element={<PageNotFound />} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
