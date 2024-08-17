import React from "react";

const List = ({ ind, item }) => {
  return <li key={ind}>{item}</li>;
};

export default List;
