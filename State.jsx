import React, { useState } from "react";

const State = () => {
  let [count, setcount] = useState(1);
  let [item, setitem] = useState([]);

  function additem() {
    let items = "item" + count;
    setitem((prev) => {
      return [...prev, items];
    });
    setcount(count + 2);
  }
  console.log(item);

  return (
    <>
      <ul>
        {item.map((it, i) => (
          <li key={i}>{it}</li>
        ))}
      </ul>
      <button onClick={additem}>add item</button>
    </>
  );
};

export default State;
