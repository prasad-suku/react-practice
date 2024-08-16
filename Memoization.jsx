import React, {
  useState,
  useMemo,
  useCallback,
  useRef,
  useEffect,
} from "react";
import Todo from "./Todo";

function Memoization() {
  const [count, setcount] = useState(0);
  const myref = useRef(null);
  const mydiv = useRef();

  useEffect(() => {
    mydiv.current.innerHTML += `<span style={color:'white'}> iam span</span>`;
  }, [count]);
  //   for increment count
  const incre = () => {
    setcount((pre) => pre + 1);
  };

  const reffunction = () => {
    myref.current++;
    console.log(myref.current);
  };

  return (
    <>
      <br />
      <br />
      <br />
      <button onClick={incre}>add count</button>
      <button onClick={reffunction}>add ref</button>
      <h2>state count :{count}</h2>
      <h2>ref count :{myref.current}</h2>
      <h2 ref={mydiv}>hello i wil update </h2>
    </>
  );
}

// expensive function

export default Memoization;
