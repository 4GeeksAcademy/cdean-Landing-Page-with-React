import React from "react";


//create your first component
const NavBar = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand text-white" href="#">Start Bootsrap</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
        <a className="nav-link text-white" href="#">About</a>
        <a className="nav-link text-white" href="#">Services</a>
        <a className="nav-link text-white" href="#">Contact</a>
      </div>
    </div>
  </div>
</nav>
		
	);
};

export default NavBar;
