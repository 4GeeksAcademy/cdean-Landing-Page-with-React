import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import NavBar from "./navbar.js";
import Jumbotron from "./jumbotron.js";
import Card from "./card.js";
import Footer from "./footer.js";

//create your first component
const Home = () => {
	return (
		<div>
			<NavBar/>
			<div className="container-fluid p-4">
				<Jumbotron/>
				<div className="row mt-5">
					<Card/>
					<Card/>
					<Card/>
					<Card/>
				</div>
			</div>
			<Footer/>
		</div>
	);
};

export default Home;
