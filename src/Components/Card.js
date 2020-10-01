import React from "react";

const Card = ({ id, name, flipped, clicked }) => {
  return (
    <div
      onClick={() => (flipped ? undefined : clicked(name, id))}
      className={"card" + (flipped ? " flipped" : "")}
    >
      <div className="back">?</div>
      <div className="front">
        <img alt={name} src={"Images/" + name + ".png"} />
      </div>
    </div>
  );
};

export default Card;