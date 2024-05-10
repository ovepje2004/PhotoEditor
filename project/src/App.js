// import './App.css';
import React, {useEffect, useState} from "react";
import routes from "./routes";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {  
  return (
      <Router>
        <div className="App">
          <Switch>
            {routes.map(route => {
              return(
                <Route key={route.path} path={route.path} exact>
                  <route.component />
                </Route>
              )
            })}
          </Switch>
        </div>
      </Router>
  );
}

export default App;