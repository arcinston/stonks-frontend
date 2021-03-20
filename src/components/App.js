import "./App.css";

//Components;
import { Redirect, Route, Switch } from "react-router-dom";
import About from "./Views/About/About";
import Layout from "../partials/Layout";
import DashBoard from "./Views/DashBoard/DashBoard";
function App() {
  return (
    <>
      {/* Layout allows to wrap  the header and footer in one App */}

      <Layout>
        <Switch>
          {/* Home Route */}
          <Route path="/" exact component={DashBoard} />

          {/* About Route */}
          <Route path="/about" component={About} />

          {/* This route protects all the other routes for example user cannot go to /stupid-url */}
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Layout>
    </>
  );
}

export default App;
