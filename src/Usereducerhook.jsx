import React, { useReducer } from "react";

// reducer functoin and action

const reducer = (state, action) => {
  if (action.type == "increment") {
    return { count: state.count++ };
  } else if (action.type == "decrement") {
    if (state.count === 0) {
      return { count: (state.count = 0) };
    }
    return { count: state.count-- };
  } else if (action.type === "inputval") {
    return { ...state, inputval: action.payload };
  } else if (action.type == "changecolor") {
    return { ...state, color: !state.color };
  } else {
    return state.count;
  }
};

function Usereducerhook() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    color: false,
    inpuval: "",
  });

  return (
    <div>
      <h2
        style={{
          color: state.color ? "white" : "black",
          backgroundColor: state.color ? "black" : "white",
        }}
      >
        User reducer
      </h2>
      <h3> count : {state.count}</h3>
      <button
        onClick={() => {
          dispatch({ type: "increment" });
        }}
      >
        ADD
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement" });
        }}
      >
        decre
      </button>
      <button
        onClick={() => {
          dispatch({ type: "changecolor" });
        }}
      >
        CHange color
      </button>
      <input
        type="text"
        value={state.inputval}
        onChange={(e) => {
          dispatch({ type: "inputval", payload: e.target.value });
        }}
      />
      <p>userval: {state.inputval}</p>
    </div>
  );
}

export default Usereducerhook;
