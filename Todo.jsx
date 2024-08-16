import React from "react";

const Todo = ({ todo, additem }) => {
  return (
    <div>
      {todo.map((item, ind) => (
        <p key={ind}>{item}</p>
      ))}
      <br />
      <button onClick={additem}>Add item</button>
    </div>
  );
};

export default Todo;
