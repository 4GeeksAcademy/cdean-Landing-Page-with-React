import React from "react";

const Jumbotron = () => {
    return (
    <div className="jumbotron p-3 bg-secondary bg-opacity-25">
    <h1 className="display-4">A warm Welcome!</h1>
    <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
    <a className="btn btn-primary btn-lg" href="#" role="button">Call to action!</a>
  </div>
  )
};

export default Jumbotron;