import React from "react";

const Title = ({text,className}) => {
  return <h4 className={`text-primary text-lg font-manFont font-extrabold ${className}`}>{text}</h4>;
};

export default Title;
