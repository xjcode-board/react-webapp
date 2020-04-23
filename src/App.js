import React from 'react';
import {BrowserRouter as Router,Route, Switch } from "react-router-dom";
import * as Routes from './router'

function App() {
  return (
  	<Router>
  		<Switch>
	        <Route path="/" exact when="always" component={Routes.Home} />
	        <Route path="/home" exact component={Routes.Home} />
      </Switch>
  	</Router>
  );
}

export default App;
