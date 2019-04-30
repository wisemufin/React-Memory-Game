import React from 'react';
import "./style.css";

function Image(props) {
  return (
    <div onClick={() => props.removeImage(props.id)} className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  );
};

export default Image;
