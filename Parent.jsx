import React, { createContext, useState } from "react";
import Child from "./child";
import Grandchild from "./Grandchild";

export const Contextvar = createContext();

const Parent = () => {
  const [theme, settheme] = useState("light");

  const changetheme = () => {
    settheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  // alert(theme);
  let data = { name: "arun kumar" };

  return (
    <div>
      <Contextvar.Provider value={{ data, theme }}>
        <h2>parent</h2>
        <button onClick={changetheme}>Change theme</button>
        <Child></Child>
      </Contextvar.Provider>
    </div>
  );
};

export default Parent;
