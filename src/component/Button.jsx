import React from 'react';

const Button = (props) => {
  return (
    <a href={props.link} target={props.target}>
      {props.text}
    </a>
  );
};

export default Button;
