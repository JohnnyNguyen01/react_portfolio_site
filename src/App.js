import React from "react";
import NavigationBar from "./components/layout/NavigationBar";
import "./App.css";
import ProjectsPage from "./components/pages/projects/ProjectsPage";
import HomePage from "./components/pages/home/HomePage";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        {/* <NavigationBar /> */}
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/projects" component={ProjectsPage}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
