import React from "react";
import useLocalstorage from "./useLocalstorage";
import "./index.css";
const App = () => {
  const [color, setcolor] = useLocalstorage("theme", "dark");
  let changetheme = () => {
    setcolor(color === "dark" ? "white" : "dark");
  };
  return (
    <div className="light-dark-theme" data-theme={color}>
      <div className="container">
        <h3>Hello world !!</h3>
        <button onClick={changetheme}>Change Theme</button>
      </div>
    </div>
  );
};

export default App;
