import React, { useState } from "react";

const App = () => {
  const [input, setinput] = useState({});
  let handlechange = (e) => {
    setinput((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  let handlesubmit = (e) => {
    e.preventDefault();
    alert("submitted");
    console.log(input);
    setinput({});
  };
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <label htmlFor="feedback">
          message :{" "}
          <textarea
            name="feedback"
            onChange={handlechange}
            cols={22}
            rows={7}
            id=""
          ></textarea>
        </label>
        <label htmlFor="name">
          Name :
          <input
            type="text"
            name="name"
            onChange={handlechange}
            value={input.name}
          />
        </label>
        <br />
        <label htmlFor="password">
          password :
          <input
            type="text"
            name="password"
            onChange={handlechange}
            value={input.password}
          />
        </label>
        <br />
        <label htmlFor="radio">
          choose :{" "}
          <input
            type="radio"
            name="degree"
            onChange={handlechange}
            value="bca"
          />{" "}
          BCA
        </label>
        <label htmlFor="radio">
          <input
            type="radio"
            name="degree"
            value="mca"
            onChange={handlechange}
          />{" "}
          MCA
        </label>
        <label htmlFor="radio">
          <input
            type="radio"
            name="degree"
            value="btech"
            onChange={handlechange}
          />{" "}
          BTEch
        </label>

        {/* options */}

        <select name="Fruid" id="" onChange={handlechange}>
          <option value="apple">apple</option>
          <option value="orange">orange</option>
          <option value="banana">banana</option>
          <option value="papaya">papaya</option>
        </select>

        <button
          type="
      submit"
        >
          Sumbit
        </button>
      </form>
    </div>
  );
};

export default App;
