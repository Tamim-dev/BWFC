import React from "react";

const Heading = ({text,className}) => {
  return <h2 className={`w-[565px] font-manFont font-bold text-50px leading-l_h56 tracking-tighter mt-6 mb-9 ${className}`}>{text}</h2>;
};

export default Heading;
