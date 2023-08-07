import React from "react";

const Card = () => {
    return (
        <div className="card col mx-3 px-0"style={{width:"18rem"}}>
  <img src="https://www.cocinacaserayfacil.net/wp-content/uploads/2020/03/Recetas-faciles-de-cocinar-y-sobrevivir-en-casa-al-coronavirus_2.jpg" className="card-img-top" alt="..." />
  <div className="card-body text-center">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    <a href="#" className="btn btn-primary">Find Out More!</a>
  </div>
</div>
    )
};

export default Card;