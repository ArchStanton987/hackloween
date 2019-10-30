import React from "react"
import "./App.css"
import { Switch, Route } from 'react-router-dom';
import LivingRoom from './Components/LivingRoom';
import ComponentTestRouter from "./Components/ComponentTestRouter";

function App() {
	return (
		<div>
			<Switch>
				<Route exact path="/" component={LivingRoom} />
				<Route path="/ComponentTestRouter" component={ComponentTestRouter} />
			</Switch>
		</div>
	)
}

export default App
