import React from "react";
function Card(props) {
  return (
    <div>
      <div className="card">
        <div className="top">
          <h2>{props.name}</h2>
          <img src={props.image} alt={props.alt} />
        </div>
        <div className="bottom">
          <p>{props.phone}</p>
          <p>{props.email}</p>
        </div>
      </div>
    </div>
  );
}
export default Card;
