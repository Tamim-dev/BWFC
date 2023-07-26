import React from "react";

const Button = ({children}) => {
  return (
    <a className="w-[172px] py-4 px-9 bg-primary font-manFont font-bold text-white rounded-3xl border border-primary flex items-center hover:bg-transparent hover:text-primary transition ease-in-out delay-150" href="#">{children}</a>
  );
};

export default Button;
