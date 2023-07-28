import React from "react";

const Paragraph = ({text,className}) => {
  return <p className={`text-second text-lg font-manFont mb-7 ${className}`}>{text}</p>;
};

export default Paragraph;
