import React, { useContext } from "react";
import { Contextvar } from "./Parent";

const Grandchild = () => {
  const { data, theme } = useContext(Contextvar);

  const changetheme = {
    color: theme === "light" ? "white" : "black",
    backgroundColor: theme === "light" ? "black" : "white",
  };

  return (
    <div style={changetheme}>
      Grandchild data which is got from parent component :
      <bold>{data.name}</bold>
      <span>hello</span>
    </div>
  );
};

export default Grandchild;
