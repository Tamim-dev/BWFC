import React from "react";

const container = ({children}) => {
  return (
    <div className="container mx-auto mt-20 flex">
    {children}
    </div>
  );
};

export default container;
