import React from "react";

const Todo = ({ todo, additem }) => {
  console.log("todo called");

  return (
    <div>
      <p>Lists</p>
      {todo.map((item, i) => (
        <p key={i}>{item}</p>
      ))}

      <button onClick={additem}>add item</button>
    </div>
  );
};

export default Todo;
