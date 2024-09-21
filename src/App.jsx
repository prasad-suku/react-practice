import React, { useState } from "react";
import "./index.css";
import { FaStar } from "react-icons/fa";

const App = ({ no_ofstars = 7 }) => {
  const [rating, setrating] = useState(0);
  const [hover, sethover] = useState(0);
  // hadleclick function

  const handleclick = (ind) => {
    setrating(ind);
    console.log(ind);
  };

  // handlemousehover
  const handlemousehover = (ind) => {
    sethover(ind);
    console.log(ind);
  };

  // handlemouseleave
  const handlemouseleave = () => {
    sethover(rating);
  };
  return (
    <div>
      <div className="star-rating">
        {[...Array(no_ofstars)].map((_, ind) => {
          ind += 1;
          return (
            <FaStar
              size={70}
              className={ind <= (rating || hover) ? "active" : "inactive"}
              key={ind}
              onClick={() => {
                handleclick(ind);
              }}
              onMouseEnter={() => handlemousehover(ind)}
              onMouseLeave={() => handlemouseleave()}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
