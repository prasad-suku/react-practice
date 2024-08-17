import React from "react";
import List from "./List";

const Navitem = ({ lists }) => {
  const navlist = lists.map((item, ind) => {
    return <h2 key={ind.toString()}>{item}</h2>;
  });

  console.log(navlist);

  return <div>{navlist}</div>;
};

export default Navitem;
