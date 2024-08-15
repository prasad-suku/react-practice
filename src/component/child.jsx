import React from "react";
import Grandchild from "./Grandchild";

const child = () => {
  return (
    <>
      <h2>child</h2>
      <Grandchild></Grandchild>
    </>
  );
};

export default child;
