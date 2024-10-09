import React, { useEffect, useState } from "react";

const useLocalstorage = (key, defaultvalue) => {
  const [color, setcolor] = useState(localStorage.getItem(key) || defaultvalue);

  useEffect(() => {
    localStorage.setItem(key, color);
  }, [key, color]);

  return [color, setcolor];
};

export default useLocalstorage;
