import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "../NavBar";
import Home from "../../pages/Home";
import Cart from "../../pages/Cart";
import FourOhFour from "../../pages/FourOhFour";
import LogIn from "../../pages/LogIn";
import { useUserContext } from "../../utils/UserState";

function PageContainer() {

	const [user, setUser] = useUserContext();

	return (
		<div>
			<Router>
				<NavBar isLoggedIn={user.isLoggedIn}/>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/cart" component={Cart} />
					<Route exact path="/login" component={LogIn} />
					<Route component={FourOhFour} />
				</Switch>
			</Router>
		</div>
	);
}

export default PageContainer;
