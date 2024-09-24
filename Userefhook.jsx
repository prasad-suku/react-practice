import React, { useState, useMemo, useCallback } from "react";
import Todo from "./Todo";

const Userefhook = () => {
  let [count, setcount] = useState(0);
  let [todo, settodo] = useState([]);

  //   expensive calculation using memo

  // let expensive = useMemo(() => expensivecalculation(count), [count]);
  //   console.log(expensive);

  //   add count
  let incre = () => {
    setcount((prev) => prev + 1);
  };

  // add item todo

  let additem = useCallback(() => {
    settodo((pre) => [...pre, "new item" + count]);
  }, [todo]);

  return (
    <div>
      <h2>multiple actions</h2>

      <Todo todo={todo} additem={additem}></Todo>

      {/*  */}
      <hr />
      <p>count :{count}</p>
      <button onClick={incre}>incre</button>
      {/* <p>caluclation :{expensive}</p> */}
    </div>
  );
};

function expensivecalculation(num) {
  for (let i = 0; i <= 1000000; i++) {
    num += 1;
  }
  console.log("expense called");
  return num;
}

export default Userefhook;
